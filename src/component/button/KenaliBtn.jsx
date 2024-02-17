// KenaliBtn.jsx
import React from "react";

function KenaliBtn({ handleClick }) {
  return (
    <button
      className="bg-blue-500 w-fit mx-auto flex p-1 px-4 md:p-2 md:px-6 rounded-full gap-3 text-xl md:text-lg"
      onClick={handleClick}
    >
      <p className="text-center">Kenali kami lebih jauh</p>
      <span className="material-symbols-outlined" style={{ fontSize: "1.5em" }}>
        arrow_right_alt
      </span>
    </button>
  );
}

export default KenaliBtn;
