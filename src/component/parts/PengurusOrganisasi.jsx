import React, { useState, useEffect } from "react";
import PengurusCard from "../card/PengurusCard";
import bio from "../../data/DataPengurus";

function PengurusOrganisasi() {
  const [selectedPosition, setSelectedPosition] = useState("BPH");
  const [filteredBio, setFilteredBio] = useState([]);

  const handlePositionButtonClick = (position) => {
    setSelectedPosition(position);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredData = bio.filter(
        (person) =>
          person.position.toLowerCase() === selectedPosition.toLowerCase()
      );
      setFilteredBio(filteredData);
    }, 500); 
    return () => clearTimeout(timeout);
  }, [selectedPosition]);

  const positions = [
    { label: "BPH", value: "BPH" },
    { label: "Badan Pengawas", value: "Pengawas" },
    { label: "Divisi Diklat", value: "Diklat" },
    { label: "Divisi Kominfo", value: "Kominfo" },
    { label: "Divisi Sosmas", value: "Sosmas" },
    { label: "Divisi Agama", value: "Keagamaan" },
    { label: "Divisi PSDA", value: "PSDA" },
  ];

  return (
    <article className="w-full md:w-[95%] lg:w-[85%] mx-auto grid items-center ">
      <h3 className="text-2xl text-center py-5">Pengurus Organisasi</h3>
      <div className="flex flex-wrap gap-1 py-10 justify-center ">
        {positions.map((position, index) => (
          <button
            className={`rounded-full p-2 my-1 w-5/12 md:w-3/12 lg:w-1/6 ${
              selectedPosition === position.value
                ? "bg-blue-500 text-white"
                : "bg-[#101424] text-white"
            }`}
            style={{ transition: "background-color 0.8s ease" }}
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
            <div key={index} className="w-1/2 md:w-1/4 py-[1rem] md:py-[2rem]">
              <PengurusCard {...person} socials={person.socials} />
            </div>
          ))}
        </figure>
      </div>
    </article>
  );
}

export default PengurusOrganisasi;
