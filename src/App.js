import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Details from "./components/Details/Details.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { cards } from "./assets/data.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert("Item added to cart!");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/details/:id"
            element={<Details cards={cards} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />{" "}
          {/* Pass cart state to Cart component */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
