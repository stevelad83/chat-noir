import React from "react";
import { getEarrings } from "../../utils/dataUtils.js";
import Card from "../Card/Card.jsx";

const earrings = getEarrings();

export default function Earrings() {
  return (
    <div>
      <h2>Earrings</h2>
      <div className="card-container">
        {earrings.map((earring) => (
          <Card
            key={earring.id}
            imageUrl={earring.imageUrl}
            description={earring.description}
            id={earring.id}
            price={earring.price}
            details={earring.details}
          />
        ))}
      </div>
    </div>
  );
}
