// Banner.jsx
import React from "react";
import KenaliBtn from "../button/KenaliBtn";

function Banner({ scrollToSejarah }) {
  return (
    <section className="h-[100vh] text-white w-full bg-black bg-opacity-60 grid items-center">
      <div className="w-[80%] mx-auto">
        <h1 className="text-7xl font-bold text-center py-3">
          Himpunan Mahasiswa
          <br />
          <span className="text-blue-700">Informatika</span>
        </h1>
        <h2 className="text-xl text-center py-1">Universitas Alma Ata</h2>
        <div className="my-5">
          <KenaliBtn handleClick={scrollToSejarah} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
