import React from "react";
import { Link, useLocation } from "react-router-dom";


const Sidebar = ({ handleScrollTo, activeSection }) => {
  const { pathname } = useLocation();

  return (
    <nav className="grid w-full bg-[#101424] text-white">
      <ul className="p-6 text-[1.1em]">
        <li className="py-5">
          <Link
            to="/"
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "banner" ? "blue" : "",
            }}
          >
            Beranda
          </Link>
        </li>
        <hr />
        <li className="py-5">
          <Link
            to={pathname === "/galeri" ? "#" : "/galeri"}
            replace={pathname === "/galeri"}
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "dokumentasi" ? "blue" : "",
            }}
          >
            Dokumentasi
          </Link>
        </li>
        <hr />
        <li className="py-5">
          <button
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "blog" ? "blue" : "",
            }}
          >
            Blog
          </button>
        </li>
      </ul>
      <div className="grid content-end">
        <h3 className="p-5 text-center text-[0.8em]">Developed by prast13</h3>
      </div>
    </nav>
  );
};

export default Sidebar;
