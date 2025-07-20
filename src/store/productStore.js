
import {create} from 'zustand';

const useProductStore=create((set,get)=>({
    products:[],
    loading:false,
    error:null,
    cart:[],

    fetchProducts:async()=>{
        set({loading:true,error:null});
        try{
            const response=await fetch('https://fakestoreapi.com/products')
            const data=await response.json();
                        console.log("response",data);

            set({products:data,loading:false})
        }
        catch(err){
            set({error:'Failed to load products',loading:false});
        }
    },

    addToCart:(product)=>{
  const cart = get().cart; 
  console.log("get cart is able",cart);     

        console.log("calling",product)
        const existing=cart.find((item)=>item.id===product.id);
        if(existing){
                    console.log("calling 2",product)

 const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    set({ cart: updatedCart });

}else{
    console.log("this is calling bro");
    set({cart:[...cart,{...product,quantity:1}]});
}
    },

    removeFromCart:(productId)=>{
          const cart = get().cart; 

        set({cart:cart.map((item)=>item.id!==productId),});
    },
    updateQuantity:(productId,quantity)=>{
        set({cart:get().cart.map((item)=>item.id===productId?{...item,quantity}:item),});
    },
    clearCart:()=>set({cart:[]}),
}))

export default useProductStore;