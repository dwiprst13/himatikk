import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import HamburgerMenu from "./HamburgerMenu";
import IconHeader from "./IconHeader";
import Sidebar from "./Sidebar";
import Himatik from "./Himatik";

function Header({ handleScrollTo, enableColorChange, isTransparent }) {
  const [scrolling, setScrolling] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const halfScreen = window.innerHeight / 8;
      if (enableColorChange && offset > halfScreen) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableColorChange]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  return (
    <header
      className={`h-20 text-[1.1rem] ${
        isTransparent
          ? scrolling
            ? "bg-[#101424]"
            : "bg-transparent"
          : "bg-[#101424]"
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="grid items-center h-full">
        <div className="grid grid-cols-8 h-20 md:h-16 md:grid-cols-12 w-[85%] mx-auto items-center">

          <figure className="grid col-span-2 md:col-span-4 items-center">
            <IconHeader />
          </figure>

          <nav className="hidden md:block md:col-span-8">
            <Navbar handleScrollTo={handleScrollTo} />
          </nav>

          <nav className="grid col-span-4 md:hidden ">
            <Himatik/>
          </nav>

          <figure className="grid col-span-2 md:hidden justify-end">
            <HamburgerMenu isOpen={isSidebarOpen} handleClick={toggleSidebar} />
          </figure>
        </div>
        {isSidebarOpen && (
          <Sidebar
            ref={sidebarRef}
            handleScrollTo={handleScrollTo}
            handleItemClick={closeSidebar}
          />
        )}
      </div>
    </header>
  );
}

export default Header;
