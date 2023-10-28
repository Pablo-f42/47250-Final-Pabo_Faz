import './ItemDetail.css';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <h2>{nombre}</h2>
        <h3>{precio} $US</h3>
        <h3>ID:{id}</h3>
        <img src={img} alt={nombre} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ut maxime hic deleniti, atque, veritatis ullam laboriosam
            sint natus delectus dolorum fugit molestias ab exercitationem
            ratione, nesciunt officia officiis tempora. Adipisci.</p>
    </div>
  )
}

export default ItemDetail