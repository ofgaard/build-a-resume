import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddButton = ({ add, toggleAdd, dropDown, toggleDropDown }) => {
  return (
    <div className="mt-10 flex flex-col items-center text-sm">
      <button
        onClick={toggleDropDown}
        className="flex items-center p-2 duration-200 border text-xs rounded-md border-yellow-500 hover:scale-105"
      >
        Add ...
      </button>
      <div
        className={`flex flex-col items-center transition-all duration-300 ease-in-out ${
          dropDown
            ? "max-h-40 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <button onClick={() => toggleAdd(1)} className="mt-2 p-2 duration-200">
          Education
        </button>
        <button onClick={() => toggleAdd(2)} className="mt-2 p-2 duration-200">
          Experience
        </button>
      </div>
    </div>
  );
};

export default AddButton;
