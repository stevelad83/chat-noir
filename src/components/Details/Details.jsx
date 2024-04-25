import React from "react";
import { useParams } from "react-router-dom";
import "./Details.css";

export default function Details({ cards, addToCart }) {
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));
  const mainImageUrl =
    card.images && card.images.length > 0
      ? card.images[0].imageUrl
      : card.imageUrl;

  return (
    <div className="details_info">
      <div className="details_images">
        <ul className="image_list">
          {[...Array(6)].map((_, index) => (
            <li key={index}>
              <img src={mainImageUrl} alt={`placeholder kitten ${index}`} />
            </li>
          ))}
        </ul>
      </div>
      <div className="image_and_details">
        <div className="main_img">
          <img src={mainImageUrl} alt="main kitten" />
        </div>
        <p className="text">{card.details}</p>
        <button className="add_to_cart" onClick={() => addToCart(card)}>
          Add to cart
        </button>
      </div>
    </div>
  );
}
