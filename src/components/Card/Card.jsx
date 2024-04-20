import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ imageUrl, description, id, price, details }) {
  return (
    <div className="card">
      <Link to={`/details/${id}`} className="card-link">
        <div className="content">
          <img src={imageUrl} alt="placeholder kitten" />
          <div className="text-content">
            <h3 className="description">{description}</h3>
            <h2 className="price">{price}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}
