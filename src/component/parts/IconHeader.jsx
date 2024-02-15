import React from 'react'

function IconHeader() {
  return (
    <button className="grid grid-cols-3 items-center gap-3 md:flex md:flex-row text-white text-xl lg:text-2xl">
      <img
        src="src/assets/himatik.png"
        alt=""
        className="h-10 col-span-3 md:flex items-center "
      />
      <h1 className="hidden md:flex py-1">
        HIMATIK UAA
      </h1>
    </button>
  );
}

export default IconHeader