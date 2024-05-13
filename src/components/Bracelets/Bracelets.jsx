import React from "react";
import { getBracelets } from "../../utils/dataUtils.js";
import Card from "../Card/Card.jsx";

const bracelets = getBracelets();

export default function Bracelets() {
  return (
    <div>
      <h2>Bracelets</h2>
      <div className="card-container">
        {bracelets.map((bracelet) => (
          <Card
            key={bracelet.id}
            imageUrl={bracelet.imageUrl}
            description={bracelet.description}
            id={bracelet.id}
            price={bracelet.price}
            details={bracelet.details}
          />
        ))}
      </div>
    </div>
  );
}
