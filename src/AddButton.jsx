import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddButton = ({ add, toggleAdd, dropDown, toggleDropDown, darkMode }) => {
  return (
    <div className="flex flex-col items-center text-sm print:hidden">
      <button
        onClick={toggleDropDown}
        className={`flex items-center p-2 border text-xs rounded-md ${
          darkMode ? "border-yellow-500" : "border-slate-800"
        } hover:scale-125 transition ease-in-out duration-500`}
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
        <button
          onClick={() => toggleAdd(1)}
          className="mt-2 p-2 duration-200 hover:scale-105"
        >
          Education
        </button>
        <button
          onClick={() => toggleAdd(2)}
          className="mt-2 p-2 duration-200 hover:scale-105"
        >
          Experience
        </button>
      </div>
    </div>
  );
};

export default AddButton;
