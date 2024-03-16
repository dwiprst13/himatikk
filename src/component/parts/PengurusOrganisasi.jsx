import React, { useState, useEffect } from "react";
import PengurusCard from "../card/PengurusCard";
import bio from "../../data/DataPengurus";
import PositionButton from "../button/PositionButton";

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
    { label: "Divisi Diklat", value: "Diklat" },
    { label: "Divisi Kominfo", value: "Kominfo" },
    { label: "Divisi Sosmas", value: "Sosmas" },
    { label: "Divisi Agama", value: "Keagamaan" },
    { label: "Divisi PSDA", value: "PSDA" },
  ];

  return (
    <article className="w-full md:w-[95%] lg:w-[85%] mx-auto grid items-center ">
      <h3 className="text-2xl text-center py-5">Pengurus Organisasi</h3>
      <div className="flex flex-wrap gap-1 py-10 justify-center">
        {positions.map((position, index) => (
          <PositionButton
            key={index}
            label={position.label}
            value={position.value}
            selectedPosition={selectedPosition}
            onClick={() => handlePositionButtonClick(position.value)}
          />
        ))}
      </div>
      <div className="w-4/5 mx-auto">
        <figure className="flex flex-wrap justify-center">
          {filteredBio.length > 0 ? (
            filteredBio.map((person, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/4 py-[1rem] md:py-[2rem]"
              >
                <PengurusCard {...person} socials={person.socials} />
              </div>
            ))
          ) : (
            <div className="h-48 grid items-center">
              <p className="text-center text-gray-500 text-[2rem]">
                Data tidak ditemukan
              </p>
            </div>
          )}
        </figure>
      </div>
    </article>
  );
}

export default PengurusOrganisasi;
