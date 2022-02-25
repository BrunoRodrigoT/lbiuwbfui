import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Header from "../components/header";
import Footer from "../components/footer";
function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
