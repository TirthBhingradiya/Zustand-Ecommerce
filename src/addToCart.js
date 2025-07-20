
import React from "react";
import useProductStore from "./store/productStore";


const Product=({product})=>{
    const addToCart=useProductStore((state)=>state.addToCart);


    return(
        <div>
            <h3>{product.name}</h3>
            <button onClick={()=>addToCart(product)}>Add To cart</button>
        </div>
    )
}

export default Product;