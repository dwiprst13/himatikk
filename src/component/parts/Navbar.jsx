import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handleActiveLink = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="grid h-20 md:h-16 w-full text-white items-center">
      <ul className="flex justify-end gap-5">
        <li className="text-orange-400">
          <Link to="/" className={handleActiveLink("/")}>
            Beranda
          </Link>
        </li>
        <li className="hover:text-gray-400">
          <Link to="/galeri" className={handleActiveLink("/galeri")}>
            Dokumentasi
          </Link>
        </li>
        <li className="hover:text-gray-400">
          <button className={handleActiveLink("/blog")}>Artikel</button>
        </li>
        <li className="hover:text-gray-400">
          <button className={handleActiveLink("/ruanghimatik")}>
            Ruang Himatik
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
