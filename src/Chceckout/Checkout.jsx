import { useState, useEffect, useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { db } from "../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState(""); 
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const {carrito, vaciarCarrito, total, totalCantidad} = useContext(CarritoContext);


    const manejadorFormulario = (event) => {
        event.preventDefault();

        //Verificamos que los campos esten completos: 
        if(!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor completa todos los campos o moriras!!");
            return;
        }


        if(email !== emailConfirmacion) {
            setError("Los campos del email no coinciden, malditooo insecto!!");
            return;
        }


        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre, 
            apellido,
            telefono, 
            email
        };

        //2) Guardar la orden en la base de datos:
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch( error => {
                console.log("Error al crear la orden", error);
                setError("Se produjo un error al crear la orden, vamos a morir!!!");
            })

    }

  return (
    <div>
        <h2>Checkout</h2>

        <form onSubmit={manejadorFormulario}>
            {
                carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p> {producto.item.nombre} x {producto.cantidad} </p>
                        <p>{producto.item.precio}</p>
                        <hr />
                    </div>
                ))
            }
            <div>
                <label htmlFor="">Nombre</label>
                <input type="text" onChange={(e)=> setNombre(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Apellido</label>
                <input type="text" onChange={(e)=> setApellido(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Telefono</label>
                <input type="text" onChange={(e)=> setTelefono(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div>
                <label htmlFor="">Email Confirmación</label>
                <input type="email" onChange={(e) => setEmailConfirmacion(e.target.value)}/>
            </div>

            {
                error && <p style={{color:"red"}}> {error} </p>
            }

            <button type="submit"> Confirmar Compra </button>

            {
                ordenId && (
                    <strong>¡Gracias por tu compra! Tu número de orden es: {ordenId} </strong>
                )
            }

        </form>
    </div>
  )
}

export default Checkout