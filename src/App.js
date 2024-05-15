import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Details from "./components/Details/Details.jsx";
import Cart from "./components/Cart/Cart.jsx";
import { cards } from "./assets/data.jsx";
import Rings from "./components/Rings/Rings.jsx";
import Bracelets from "./components/Bracelets/Bracelets.jsx";
import Necklaces from "./components/Necklaces/Necklaces.jsx";
import Pendants from "./components/Pendants/Pendants.jsx";
import Earrings from "./components/Earrings/Earrings.jsx";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existsInCart = cart.some((cartItem) => cartItem.id === item.id);

    if (!existsInCart) {
      setCart([...cart, item]);
      alert("Item added to cart!");
    } else {
      alert("Item already added!");
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route
            path="/details/:id"
            element={<Details cards={cards} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />{" "}
          {/* Pass cart state to Cart component */}
          <Route path="/all" element={<Home />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/pendants" element={<Pendants />} />
          <Route path="/earrings" element={<Earrings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
