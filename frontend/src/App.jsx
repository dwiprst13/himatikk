import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import BlogPage from "./views/BlogPage";
import "./App.css";
import PortofolioPage from "./views/PortofolioPage";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/portofolio" element={<PortofolioPage />} />
        </Routes>
    </div>
  );
};

export default App;
