// Header.jsx
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import IconHeader from "./IconHeader";

function Header({ handleScrollTo }) {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const halfScreen = window.innerHeight / 8;
      if (offset > halfScreen) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` h-16 ${scrolling ? "bg-[#101424]" : "bg-transparent"}`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="grid grid-cols-4 md:grid-cols-12 w-[85%] mx-auto items-center">
        <figure className="hidden md:grid md:col-span-4 items-center">
          <IconHeader />
        </figure>
        <nav className="hidden md:block md:col-span-8">
          <Navbar handleScrollTo={handleScrollTo} />
        </nav>
        <figure className="block col-span-2 md:hidden ">
          <HamburgerMenu />
        </figure>
      </div>
    </header>
  );
}

export default Header;
