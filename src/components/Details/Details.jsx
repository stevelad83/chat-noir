import React from "react";
import { cards } from "../../assets/data.jsx";
import { useParams } from "react-router-dom";

export default function Details(props) {
  const { id } = useParams();
  const card = cards.find((card) => card.id === parseInt(id));
  console.log(cards);
  console.log(id);
  return (
    <div>
      <p>{card.details}</p>
    </div>
  );
}
