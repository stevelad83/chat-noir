import React from "react";
import Card from "../Card/Card.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Card 1",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is a sample card",
  },
  {
    id: 2,
    title: "Card 2",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is another sample card",
  },
  {
    id: 3,
    title: "Card 3",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is another sample card",
  },
  {
    id: 4,
    title: "Card 4",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is another sample card",
  },
  {
    id: 5,
    title: "Card 5",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is another sample card",
  },
  {
    id: 6,
    title: "Card 6",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is another sample card",
  },
  {
    id: 7,
    title: "Card 7",
    imageUrl: "http://placekitten.com/100/100",
    description: "This is another sample card",
  },
  // Add more card data as needed
];

export default function Home() {
  return (
    <div className="home">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          imageUrl={card.imageUrl}
          description={card.description}
        />
      ))}
    </div>
  );
}
