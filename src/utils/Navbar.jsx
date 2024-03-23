import React, { useState } from 'react';
import NavbarModals from '../modals/NavbarModals';

function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="flex justify-end w-full sticky top-0">
      <div className="m-5">
        <div className="flex p-2 px-4 rounded-full border border-gray-900 border-b-4 border-r-4 gap-5 bg-white">
          <button
            className="p-1 px-3 rounded-full border border-gray-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white duration-300"
            onClick={toggleNavbar}
          >
            <i className="fa fa-sun-o" aria-hidden="true"></i>
          </button>
          <button
            id="hamburger"
            className={`p-1 px-3 rounded-full border border-gray-500 bg-white text-gray-500 hover:bg-blue-300 hover:text-gray-700 duration-300 ${
              isNavbarOpen ? "hidden" : ""
            }`}
            onClick={toggleNavbar}
          >
            <i className="fa fa-bars" aria-hidden="true"></i>
          </button>
          <button
            id="close"
            className={`p-1 px-3 rounded-full border border-gray-500 bg-white text-gray-500 hover:bg-blue-300 hover:text-gray-700 duration-300 ${
              isNavbarOpen ? "" : "hidden"
            }`}
            onClick={toggleNavbar}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div id="navbarModals" className={isNavbarOpen ? "" : "hidden"}>
          <div>
            <NavbarModals />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
