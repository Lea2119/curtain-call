import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Paiement from "./pages/Paiement";
import Story from "./pages/Story";
import Landing from "./pages/Landing";

function App() {
  const [cart, updateCart] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route
            path="/book/:id"
            cart={cart}
            updateCart={updateCart}
            element={<Paiement />}
          />
          <Route path="/our-story" element={<Story />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
