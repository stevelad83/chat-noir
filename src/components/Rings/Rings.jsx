import React from "react";
import { getRings } from "../../utils/dataUtils.js";
import Card from "../Card/Card.jsx";

const rings = getRings();
console.log(rings);

export default function Rings() {
  return (
    <div>
      <h2>Rings</h2>
      <div className="card-container">
        {rings.map((ring) => (
          <Card
            key={ring.id}
            imageUrl={ring.imageUrl}
            description={ring.description}
            id={ring.id}
            price={ring.price}
            details={ring.details}
          />
        ))}
      </div>
    </div>
  );
}
