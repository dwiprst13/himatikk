import React from 'react'

function IconHeader() {
  return (
    <button className="grid grid-cols-6 items-center gap-3 md:flex md:flex-row text-white text-xl lg:text-[2rem]">
      <img
        src="../src/assets/himatik.png"
        alt=""
        className="h-10 col-span-2 md:flex items-center "
      />
      <h1 className="col-span-4 md:flex py-1">HIMATIK UAA</h1>
    </button>
  );
}

export default IconHeader