import React from "react";
import "./Cart.css";

export default function Cart({ cart, removeFromCart }) {
  const handleDelete = (id) => {
    removeFromCart(id);
  };
  return (
    <div className="cart-page">
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button>Checkout</button>
      </div>
    </div>
  );
}
