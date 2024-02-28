import React from 'react'
import Content from "../pages/Content";
import Footer from "../component/parts/Footer";
import Header from "../component/parts/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "../utils/content/ScrollToTop";

function HomePage() {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

    const handleScrollTo = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <div>
      <ScrollToTop />
      <header className="fixed top-0 w-[100%] z-50 ">
        <Header
          handleScrollTo={handleScrollTo}
          transparent
          // enableColorChange={true}
          // isTransparent={false}
        />
      </header>
      <main className="z-40">
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage