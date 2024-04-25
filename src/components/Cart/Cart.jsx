import React from "react";

export default function Cart({ cart }) {
  return (
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.imageUrl} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
