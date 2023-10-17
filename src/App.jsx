


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleCocktail from "./components/SingleCocktail";
import Home from "./pages/Home";
function App() {
  return (
    <Router>
      
            <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<h6>404 - Not page found</h6>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
