import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import AddButton from "./AddButton";
import Education from "./Education";
import { FcBriefcase } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

function App() {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(0);
  const [dropDown, setDropDown] = useState(false);

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
    }
    if (input === 2) {
      setAdd(2);
    }
  };

  console.log(add);
  return (
    <>
      <div className="bg-neutral-800">
        <div className="bg-neutral-800 h-screen flex overflow-auto flex-col text-slate-50 font-semibold p-10 min-w-96 max-w-7xl mx-auto">
          <ContactInfo edit={edit} toggleEdit={toggleEdit}></ContactInfo>
          <div className="mb-5 mt-6">
            <div className="flex flex-row gap-2 mb-10 items-center justify-center md:justify-normal">
              <FcBriefcase size={30}></FcBriefcase>
              <h1 className=" font-extrabold">Work Experience</h1>
            </div>
            <Experience
              add={add}
              edit={edit}
              toggleAdd={toggleAdd}
              toggleEdit={toggleEdit}
            ></Experience>
          </div>
          <div className=" mt-5">
            <div className="flex flex-row gap-2 mb-10 items-center justify-center md:justify-normal">
              <FcBusinessman size={30}></FcBusinessman>
              <h1 className="font-extrabold">Education</h1>
            </div>
            <Education
              add={add}
              edit={edit}
              toggleAdd={toggleAdd}
              toggleEdit={toggleEdit}
            ></Education>
          </div>
          <AddButton
            add={add}
            toggleAdd={toggleAdd}
            dropDown={dropDown}
            toggleDropDown={toggleDropDown}
          ></AddButton>
        </div>
      </div>
    </>
  );
}

export default App;
