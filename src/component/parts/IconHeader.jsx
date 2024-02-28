import React from 'react'

function IconHeader() {
  return (
    <button className="grid grid-cols-6 items-center gap-3 md:flex md:flex-row text-white text-xl md:text-[1.4rem] lg:text-[2rem]">
      <img
        src="/src/logo.png"
        alt=""
        className="h-7 md:h-10 col-span-6 md:flex items-center "
      />
      <h1 className="hidden md:grid md:col-span-2 md: py-1">HIMATIK UAA</h1>
    </button>
  );
}

export default IconHeader