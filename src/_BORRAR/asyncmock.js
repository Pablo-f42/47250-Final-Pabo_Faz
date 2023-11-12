const misProductos = [
    { id: "1", nombre: "Aventura", stock:10, precio: 9300, img: "../img/Gravel/Aventura.jpg", idCat: "2" },
    { id: "2", nombre: "Grail", stock:10, precio: 7200, img: "../img/Gravel/Grail.jpg", idCat: "2" },
    { id: "3", nombre: "Spectral", stock:10, precio: 8500, img: "../img/Montana/Spectral.jpg", idCat: "3" },
    { id: "4", nombre: "Grand", precio: 1500, img: "../img/Montana/Grand.jpg", idCat: "3" },
    { id: "5", nombre: "Endurace", stock:10, precio: 1500, img: "../img/Ruta/Endurace.jpg", idCat: "4" },
    { id: "6", nombre: "Ultimate", stock:10, precio: 1500, img: "../img/Ruta/Ultimate.jpg", idCat: "4" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}