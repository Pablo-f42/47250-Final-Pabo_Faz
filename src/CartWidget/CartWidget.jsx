import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const imgBag = "https://cdn1.iconfinder.com/data/icons/zeir-miscellaneous-elements-4/32/shopping_bag_cart-512.png";
  return (
    <div>
        <img className='imgBag' src={imgBag} alt="Imagen de una bolsa de compras" />
        <strong> 1 </strong>
    </div>
  )
}

export default CartWidget