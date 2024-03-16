import React from "react";

const PositionButton = ({ label, value, selectedPosition, onClick }) => {
    return (
        <button
            className={`rounded-full p-2 my-1 w-5/12 md:w-3/12 lg:w-2/12 ${
                selectedPosition === value
                ? "bg-blue-500 text-white"
                : "bg-[#101424] text-white"
            }`}
            style={{ transition: "background-color 0.8s ease" }}
            onClick={onClick}
        >
        {label}
        </button>
    );
};

export default PositionButton;
