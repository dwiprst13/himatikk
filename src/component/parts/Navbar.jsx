import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ handleScrollTo, activeSection }) => {
  const { pathname } = useLocation();

  return (
    <nav className="grid h-20 md:h-16 w-full text-white items-center">
      <ul className="flex justify-end gap-5">
        <li>
          <Link
            to="/"
            style={{
              backgroundColor: activeSection === "banner" ? "blue" : "",
            }}
          >
            Beranda
          </Link>
        </li>
        <li>
          <Link
            to={pathname === "/galeri" ? "#" : "/galeri"}
            replace={pathname === "/galeri"}
            style={{
              backgroundColor: activeSection === "dokumentasi" ? "blue" : "",
            }}
          >
            Dokumentasi
          </Link>
        </li>
        <li>
          <button
            style={{
              backgroundColor: activeSection === "blog" ? "blue" : "",
            }}
          >
            Blog
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
