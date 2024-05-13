import React from "react";
import { getPendants } from "../../utils/dataUtils.js";
import Card from "../Card/Card.jsx";

const pendants = getPendants();

export default function Pendants() {
  return (
    <div>
      <h2>Pendants</h2>
      <div className="card-container">
        {pendants.map((pendant) => (
          <Card
            key={pendant.id}
            imageUrl={pendant.imageUrl}
            description={pendant.description}
            id={pendant.id}
            price={pendant.price}
            details={pendant.details}
          />
        ))}
      </div>
    </div>
  );
}
