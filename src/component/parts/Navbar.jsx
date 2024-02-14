// Navbar.jsx
import React from "react";

const Navbar = ({ handleScrollTo }) => {
  return (
    <nav className="grid h-16 w-full text-white items-center">
      <ul className="flex justify-end gap-5">
        <li>
          <button onClick={() => handleScrollTo("banner")}>Home</button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("sejarah")}>Sejarah</button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("galeri")}>Galeri</button>
        </li>
        <li>
          <button onClick={() => handleScrollTo("dokumentasi")}>
            Dokumentasi
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
