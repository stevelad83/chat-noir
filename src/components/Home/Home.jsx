import React from "react";
import Card from "../Card/Card.jsx";
import "./Home.css";
import { cards } from "../../assets/data.jsx";

export default function Home() {
  return (
    <div className="home">
      {cards.map(({ id, title, imageUrl, description, price, details }) => (
        <Card
          details={details}
          key={id}
          id={id}
          title={title}
          imageUrl={imageUrl}
          description={description}
          price={price}
        />
      ))}
    </div>
  );
}
