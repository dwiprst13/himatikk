import React from 'react'
import KetuaOrganisasi from '../parts/KetuaOrganisasi';
import PengurusOrganisasi from '../parts/PengurusOrganisasi';

function StrukturOrganisasi() {
  return (
    <article className=" w-full py-16 text-gray-900 grid items-center">
      <article>
        <h2 data-aos="fade-up" className="text-[2rem] text-center py-5">
          Kepengurusan Organisasi
        </h2>
        <div data-aos="fade-up" className="">
          <KetuaOrganisasi />
        </div>
        <div data-aos="fade-up" className="">
          <PengurusOrganisasi />
        </div>
      </article>
    </article>
  );
}

export default StrukturOrganisasi