import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import AddButton from "./AddButton";
import Education from "./Education";
import { FcPlus } from "react-icons/fc";

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
      toggleDropDown();
    }
    if (input === 2) {
      setAdd(2);
      toggleDropDown();
    }
  };

  console.log(add);
  return (
    <>
      <div className="bg-neutral-800 print:bg-slate-50">
        <div className="bg-neutral-800 print:bg-slate-50 h-screen flex overflow-auto flex-col text-slate-50 print:text-black font-semibold p-10 min-w-96 max-w-3xl mx-auto">
          <ContactInfo edit={edit} toggleEdit={toggleEdit}></ContactInfo>
          <div className="mb-5 mt-6">
            <Experience
              add={add}
              toggleAdd={toggleAdd}
              toggleDropDown={toggleDropDown}
            ></Experience>
          </div>
          <Education
            add={add}
            edit={edit}
            toggleAdd={toggleAdd}
            toggleEdit={toggleEdit}
          ></Education>

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
