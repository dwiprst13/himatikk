import React, { useState } from "react";
import PengurusCard from "../card/PengurusCard";
import bio from "../../data/DataPengurus";

function PengurusOrganisasi() {
  const [selectedPosition, setSelectedPosition] = useState("BPH"); // Set default position to "BPH"

  const handlePositionButtonClick = (position) => {
    setSelectedPosition(position);
  };

  const filteredBio = bio.filter(
    (person) => person.position.toLowerCase() === selectedPosition.toLowerCase()
  );

  const positions = [
    { label: "BPH", value: "BPH" },
    { label: "Badan Pengawas", value: "Pengawas" },
    { label: "Divisi Diklat", value: "Diklat" },
    { label: "Divisi Kominfo", value: "Kominfo" },
    { label: "Sosmas", value: "Sosmas" },
    { label: "Keagamaan", value: "Keagamaan" },
    { label: "PSDA", value: "PSDA" },
  ];

  return (
    <article className="w-[85%] mx-auto grid items-center">
      <h3 className="text-2xl text-center py-5">Pengurus Organisasi</h3>
      <div className="flex gap-3 py-5 justify-center">
        {positions.map((position, index) => (
          <button
            className={`p-2 rounded-md ${
              selectedPosition === position.value
                ? "bg-blue-500 text-white"
                : "bg-[#101424] text-white"
            }`}
            key={index}
            onClick={() => handlePositionButtonClick(position.value)}
          >
            {position.label}
          </button>
        ))}
      </div>
      <div className="w-4/5 mx-auto">
        <figure className="flex flex-wrap justify-center">
          {filteredBio.map((person, index) => (
            <div key={index} className="w-1/4 mb-4">
              <PengurusCard {...person} socials={person.socials} />
            </div>
          ))}
        </figure>
      </div>
    </article>
  );
}

export default PengurusOrganisasi;
