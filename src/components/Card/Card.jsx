import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ title, imageUrl, description, id }) {
  return (
    <div className="card">
      <Link to={`/details/${id}`}>
        <h2>{title}</h2>
        <img src={imageUrl} alt="placeholder kitten" />
        <p>This is a sample card</p>
      </Link>
    </div>
  );
}
