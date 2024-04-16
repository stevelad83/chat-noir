import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="title-container">
        <img className="googz" src="/images/cat.png" alt="Black cat" />
        <h1>Chat Noir Gold</h1>
      </div>
      <h2 className="h2">Jewelry with History and Heart</h2>
      <ul className="utility-menu">
        <Link to="/rings" className="rings">
          Rings
        </Link>
        <Link>Bracelets</Link>
        <Link>Necklaces</Link>
        <Link>Pendants</Link>
        <Link>Earrings</Link>
      </ul>
    </header>
  );
}
