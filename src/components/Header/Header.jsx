import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="/images/cat.png" alt="Black cat" height="100" />
      Chat Noir Gold
      <h2>Jewelry with History and Heart</h2>
      <ul>
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
