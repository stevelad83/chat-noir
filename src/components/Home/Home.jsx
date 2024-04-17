import React from "react";
import Card from "../Card/Card.jsx";
import "./Home.css";

const cards = [
  {
    id: 1,
    title: "Card 1",
    imageUrl: "http://placekitten.com/100/100",
    description: "Sapphire and diamond ring",
    price: "$100",
  },
  {
    id: 2,
    title: "Card 2",
    imageUrl: "http://placekitten.com/100/100",
    description: "Antique silver bangle",
    price: "$100",
  },
  {
    id: 3,
    title: "Card 3",
    imageUrl: "http://placekitten.com/100/100",
    description: "Emerald engagement ring",
    price: "$100",
  },
  {
    id: 4,
    title: "Card 4",
    imageUrl: "http://placekitten.com/100/100",
    description: "18K watch fob",
    price: "$100",
  },
  {
    id: 5,
    title: "Card 5",
    imageUrl: "http://placekitten.com/100/100",
    description: "M initial signet ring",
    price: "$100",
  },
  {
    id: 6,
    title: "Card 6",
    imageUrl: "http://placekitten.com/100/100",
    description: "Frog brooch with ruby eyes",
    price: "$100",
  },
  {
    id: 7,
    title: "Card 7",
    imageUrl: "http://placekitten.com/100/100",
    description: "22K sold gold antique wedding band",
    price: "$100",
  },
  // Add more card data as needed
];

export default function Home() {
  return (
    <div className="home">
      {cards.map(({ id, title, imageUrl, description, price }) => (
        <Card
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
