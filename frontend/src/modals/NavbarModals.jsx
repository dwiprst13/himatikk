import React from "react";
import { Link, useLocation } from "react-router-dom"; 

function NavbarModals() {
  const location = useLocation();

  return (
    <div className="flex flex-col border border-gray-900 p-3 bg-white rounded-lg text-center mt-5 border-b-4 border-r-4 space-y-2">
      <Link
        to="/"
        className={`block py-1 px-2 rounded ${
          location.pathname === "/"
            ? "bg-blue-500 text-white border border-gray-900 border-r-2 border-b-2"
            : "text-gray-700 hover:bg-blue-100"
        }`}
      >
        Home
      </Link>
      <Link
        to="/portofolio"
        className={`block py-1 px-2 rounded ${
          location.pathname === "/portofolio"
            ? "bg-blue-500 text-white border border-gray-900 border-r-2 border-b-2"
            : "text-gray-700 hover:bg-blue-100"
        }`}
      >
        Portofolio
      </Link>
      <Link
        to="/blog"
        className={`block py-1 px-2 rounded ${
          location.pathname === "/blog"
            ? "bg-blue-500 text-white border border-gray-900 border-r-2 border-b-2"
            : "text-gray-700 hover:bg-blue-100"
        }`}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className={`block py-1 px-2 rounded ${
          location.pathname === "/contact"
            ? "bg-blue-500 text-white border border-gray-900 border-r-2 border-b-2"
            : "text-gray-700 hover:bg-blue-100"
        }`}
      >
        Contact
      </Link>
    </div>
  );
}

export default NavbarModals;
