import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div className="card">
      <h2>Card</h2>
      <img src="http://placekitten.com/100/100" alt="placeholder kitten" />
      <p>This is a sample card</p>
    </div>
  );
}
