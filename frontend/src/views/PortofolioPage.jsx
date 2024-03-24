import React from "react";
import Navbar from "../utils/navbar";
import Footer from "../utils/footer";

function PortofolioPage() {
  return (
    <div>
      <div className="fixed top-0 w-[100%] z-50">
        <Navbar />
      </div>
      <div className="h-screen">PortofolioPage</div>
      <Footer />
    </div>
  );
}

export default PortofolioPage;
