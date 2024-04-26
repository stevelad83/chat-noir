import React from "react";
import "./Cart.css";

export default function Cart({ cart }) {
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
              <button className="delete-button">Delete</button>
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
