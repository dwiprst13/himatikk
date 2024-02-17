import React from "react";

const Sidebar = ({ handleScrollTo, activeSection, handleItemClick }) => {
  const handleClick = (section) => {
    handleItemClick(); 
    handleScrollTo(section); 
  };

  return (
    <nav className="grid w-full bg-[#101424] text-white">
      <ul className="p-6 text-[1.1em]">
        <li className="py-5">
          <button
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "banner" ? "blue" : "",
            }}
            onClick={() => handleClick("banner")}
          >
            <p>Beranda</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </li>
        <hr />
        <li className="py-5">
          <button
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "sejarah" ? "blue" : "",
            }}
            onClick={() => handleClick("sejarah")}
          >
            <p>Tentang Kami</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </li>
        <hr />
        <li className="py-5">
          <button
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "dokumentasi" ? "blue" : "",
            }}
            onClick={() => handleClick("dokumentasi")}
          >
            <p>Dokumentasi</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </li>
        <hr />
        <li className="py-5">
          <button
            className="flex px-3 justify-between w-full"
            style={{ backgroundColor: activeSection === "blog" ? "blue" : "" }}
            onClick={() => handleClick("blog")}
          >
            <p>Blog</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </button>
        </li>
        <hr />
        <li className="py-5">
          <button
            className="flex px-3 justify-between w-full"
            style={{
              backgroundColor: activeSection === "kontak" ? "blue" : "",
            }}
            onClick={() => handleClick("kontak")}
          >
            <p>Kontak</p>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
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
