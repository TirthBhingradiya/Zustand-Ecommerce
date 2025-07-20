import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useProductStore from "./store/productStore";
import Product from "./addToCart";
import Cart from "./cartPage";

const ProductList = () => {
  const { products, loading, error, fetchProducts } = useProductStore();
  const navigate = useNavigate(); // ✅ Initialize navigate function

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h2>Products</h2>

      {/* ✅ Correct button syntax */}
      <button onClick={() => navigate("/cart")}>
        Go to Cart
      </button>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>${product.price}</p>

            {/* Product add-to-cart button */}
            <Product product={product} />
          </div>
        ))}
      </div>

      {/* Optional cart preview */}
      <Cart />
    </div>
  );
};

export default ProductList;
