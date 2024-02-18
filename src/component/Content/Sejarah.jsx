import React, { useEffect } from "react";

function Sejarah() {

  return (
    <article className="h-[75vh] md:h-[100vh] text-white py-16 w-full bg-black bg-opacity-80 grid items-center">
      <div data-aos="fade-up" className="w-[80%] mx-auto fade-up">
        <h2 className="text-[2rem] text-center py-5">Sejarah HIMATIK</h2>
        <p className="text-[1.2rem] text-center py-3">
          HIMATIK merupakan organisasi intra kampus sebagai wadah kreatifitas
          seluruh mahasiswa{" "}
          <span>
            <a href="" className="hover:text-blue-500">
              Informatika Fakultas Komputer & Teknik
            </a>
          </span>{" "}
          <span>
            <a href="https://almaata.ac.id/" className="hover:text-blue-500">
              Universitas Alma Ata Yogyakarta
            </a>
          </span>
          , yang berdiri pada tanggal 21 November 2017.
        </p>
        <p className="text-[1.2rem]  text-center py-3">
          HIMATIK UAA bersifat soft skill serta hard skill di bidang Informatika
          yang berlandaskan pada nilai nilai keislaman dan kebangsaan Indonesia.
        </p>
      </div>
    </article>
  );
}

export default Sejarah;
