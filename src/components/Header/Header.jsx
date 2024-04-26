import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { LiaAwardSolid, LiaShippingFastSolid } from "react-icons/lia";

export default function Header() {
  return (
    <header className="header">
      <div className="title-container">
        <img className="googz" src="/images/cat.png" alt="Black cat" />
        <h1>ChatNoirGold</h1>
      </div>
      <h2 className="h2">Jewelry with History and Heart</h2>{" "}
      <ul className="utility-menu">
        <Link to="/all">All</Link>
        <Link to="/rings" className="rings">
          Rings
        </Link>
        <Link to="/bracelets">Bracelets</Link>
        <Link to="/necklaces">Necklaces</Link>
        <Link to="/pendants">Pendants</Link>
        <Link to="/earrings">Earrings</Link>
      </ul>
      <div className="icons-bar">
        <LiaShippingFastSolid /> Free shipping
        <LiaAwardSolid /> Star seller
        <div className="cart-link">
          <Link to="/cart">
            <RiShoppingCartLine />
          </Link>
        </div>
      </div>
    </header>
  );
}
