// Navbar.jsx
import React from "react";

const Navbar = ({ handleScrollTo, activeSection }) => {
  return (
    <nav className="grid h-16 w-full text-white items-center">
      <ul className="flex justify-end gap-5">
        <li>
          <button
            style={{
              backgroundColor: activeSection === "banner" ? "blue" : "",
            }}
            onClick={() => handleScrollTo("banner")}
          >
            Beranda
          </button>
        </li>
        <li>
          <button
            style={{
              backgroundColor: activeSection === "sejarah" ? "blue" : "",
            }}
            onClick={() => handleScrollTo("sejarah")}
          >
            Tentang Kami
          </button>
        </li>
        <li>
          <button
            style={{
              backgroundColor: activeSection === "dokumentasi" ? "blue" : "",
            }}
            onClick={() => handleScrollTo("dokumentasi")}
          >
            Dokumentasi
          </button>
        </li>
        <li>
          <button
            style={{ backgroundColor: activeSection === "blog" ? "blue" : "" }}
            onClick={() => handleScrollTo("blog")}
          >
            Blog
          </button>
        </li>
        <li>
          <button
            style={{
              backgroundColor: activeSection === "kontak" ? "blue" : "",
            }}
            onClick={() => handleScrollTo("kontak")}
          >
            Kontak
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
