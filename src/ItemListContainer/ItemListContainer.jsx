import { useState, useEffect } from "react";
import { getProductos } from "../asyncmock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

    useEffect( () => {
      getProductos()
        .then()
        .catch()
    }, [])

  return (
    <div>ItemListContainer</div>
  )
}

export default ItemListContainer