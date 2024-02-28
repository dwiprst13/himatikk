import "./App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./views/HomePage";
import GaleriPage from "./views/GaleriPage";

const App = () => {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="galeri" element={<GaleriPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
