import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import AddButton from "./AddButton";
import Education from "./Education";
import { FcPlus } from "react-icons/fc";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";

function App() {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDropDown = () => {
    setDropDown((prevState) => !prevState);
  };
  const toggleEdit = () => {
    setEdit((prevState) => !prevState);
  };

  const toggleAdd = (input) => {
    if (input === 0) {
      setAdd(0);
    }
    if (input === 1) {
      setAdd(1);
      toggleDropDown();
    }
    if (input === 2) {
      setAdd(2);
      toggleDropDown();
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  console.log(add);
  return (
    <>
      <div
        className={`print:bg-slate-50 ${
          darkMode
            ? "bg-neutral-800 transition-colors"
            : "bg-neutral-200 transition-colors"
        } `}
      >
        <button>
          <MdOutlineDarkMode
            size={25}
            className={`${
              darkMode ? "text-white" : "text-slate-800"
            } mt-3 ml-3 hover:scale-125 transition ease-in duration-300
              `}
            onClick={toggleDarkMode}
          ></MdOutlineDarkMode>
        </button>
        <div
          className={`print:bg-slate-50 h-screen flex overflow-auto flex-col print:text-black font-semibold p-10 min-w-96 max-w-3xl mx-auto ${
            darkMode
              ? "text-slate-50 bg-neutral-800 transition-colors duration-300 before:bg-neutral-200"
              : "bg-neutral-200 transition-colors duration-300 before:bg-neutral-800 text-slate-800"
          }`}
        >
          <ContactInfo edit={edit} toggleEdit={toggleEdit}></ContactInfo>
          <div className="mb-5 mt-6">
            <Experience
              add={add}
              edit={edit}
              toggleAdd={toggleAdd}
              toggleEdit={toggleEdit}
              toggleDropDown={toggleDropDown}
              darkMode={darkMode}
            ></Experience>
          </div>
          <Education
            add={add}
            edit={edit}
            toggleAdd={toggleAdd}
            toggleEdit={toggleEdit}
            darkMode={darkMode}
          ></Education>
          <div className="flex items-center justify-center mt-10">
            <AddButton
              add={add}
              toggleAdd={toggleAdd}
              dropDown={dropDown}
              toggleDropDown={toggleDropDown}
              darkMode={darkMode}
            ></AddButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
