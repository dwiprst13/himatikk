import React from "react";
import Banner from "../components/Home/Banner";
import Portofolio from "../components/Home/Portofolio";
import Navbar from "../utils/navbar";

function HomePage() {
  return (
    <div className="relative ">
      <div className="fixed top-0 w-[100%] z-50">
        <Navbar />
      </div>
      <div>
        <Banner />
        <Portofolio />
      </div>
    </div>
  );
}

export default HomePage;
