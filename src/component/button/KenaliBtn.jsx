// KenaliBtn.jsx
import React from "react";

function KenaliBtn({ handleClick }) {
  return (
    <button
      className="bg-blue-500 w-fit mx-auto flex p-1 md:p-2 rounded-full gap-3"
      onClick={handleClick}
    >
      <p className="text-center">Kenali kami lebih jauh</p>
      <span className="material-symbols-outlined">arrow_right_alt</span>
    </button>
  );
}

export default KenaliBtn;
