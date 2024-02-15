import React from 'react'
import KetuaOrganisasi from '../parts/KetuaOrganisasi';
import PengurusOrganisasi from '../parts/PengurusOrganisasi';

function StrukturOrganisasi() {
  return (
    <section className="w-full py-16 bg-gray-600 text-gray-900 grid items-center">
      <article>
        <h2 className="text-3xl text-center py-5">Kepengurusan Organisasi</h2>
        <div>
          <KetuaOrganisasi/>
        </div>
        <div>
          <PengurusOrganisasi/>
        </div>
      </article>
    </section>
  );
}

export default StrukturOrganisasi