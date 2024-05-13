import React from "react";
import { getNecklaces } from "../../utils/dataUtils.js";
import Card from "../Card/Card.jsx";

const necklaces = getNecklaces();

export default function Necklaces() {
  return (
    <div>
      <h2>Necklaces</h2>
      <div className="card-container">
        {necklaces.map((necklace) => (
          <Card
            key={necklace.id}
            imageUrl={necklace.imageUrl}
            description={necklace.description}
            id={necklace.id}
            price={necklace.price}
            details={necklace.details}
          />
        ))}
      </div>
    </div>
  );
}
