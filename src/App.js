import "./App.css";
import "@stripe/stripe-js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Paiement from "./pages/Paiement";
import { useState } from "react";
import Story from "./pages/Story";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route
            path="/book/:id"
            cart={cart}
            updateCart={updateCart}
            element={<Paiement />}
          />
          <Route path="/our-story" element={<Story />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
