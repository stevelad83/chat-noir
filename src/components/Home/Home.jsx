import React from "react";
import Card from "../Card/Card.jsx";
import "./Home.css";

const cards = [
  {
    id: 1,
    title: "Card 1",
    imageUrl: "http://placekitten.com/200/200",
    description: "Sapphire and diamond ring",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  {
    id: 2,
    title: "Card 2",
    imageUrl: "http://placekitten.com/200/200",
    description: "Antique silver bangle",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  {
    id: 3,
    title: "Card 3",
    imageUrl: "http://placekitten.com/200/200",
    description: "Emerald engagement ring",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  {
    id: 4,
    title: "Card 4",
    imageUrl: "http://placekitten.com/200/200",
    description: "18K watch fob",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  {
    id: 5,
    title: "Card 5",
    imageUrl: "http://placekitten.com/200/200",
    description: "M initial signet ring",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  {
    id: 6,
    title: "Card 6",
    imageUrl: "http://placekitten.com/200/200",
    description: "Frog brooch with ruby eyes",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  {
    id: 7,
    title: "Card 7",
    imageUrl: "http://placekitten.com/200/200",
    description: "22K sold gold antique wedding band",
    price: "$100",
    details:
      "This sapphire and diamond 18K and platinum ring features a central round blue sapphire in a star setting with small diamond diamonds surrounding. The ring setting is done in platinum and the band is in 18K yellow gold. There is a stamp to the inside of the band 18K. This ring could be stacked with other rings, but looks great on its own. Resizable. Total weight 2.9g. Size 5 1/4.",
  },
  // Add more card data as needed
];

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
