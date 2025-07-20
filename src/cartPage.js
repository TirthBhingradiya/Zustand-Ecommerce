
import React from "react";

import useProductStore from "./store/productStore";

const Cart=()=>{
    const cart=useProductStore((state)=>state.cart);
    console.log("Cart item",cart);
    const removeFromCart=useProductStore((state)=>state.removeFromCart);

    return(
       <div className="cart">
  <h2>Your Cart</h2>
  {cart.length === 0 ? (
    <p>Cart is empty</p>
  ) : (
    cart.map((item) => (
      <div key={item.id} className="cart-item">
        <span>{item.title} (x{item.quantity})</span>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    ))
  )}
</div>

    )
}

export default Cart;