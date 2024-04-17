import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ title, imageUrl, description, id, price }) {
  return (
    <div className="card">
      <Link
        to={`/details/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img src={imageUrl} alt="placeholder kitten" />
        <h3 className="description">{description}</h3>
        <p>{price}</p>
      </Link>
    </div>
  );
}
