import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import AddButton from "./AddButton";
import Education from "./Education";

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
      toggleDropDown();
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
      <div className="bg-neutral-800 h-screen flex flex-col text-slate-50 p-10 min-w-96">
        <ContactInfo edit={edit} toggleEdit={toggleEdit}></ContactInfo>

        <Experience
          add={add}
          edit={edit}
          toggleAdd={toggleAdd}
          toggleEdit={toggleEdit}
        ></Experience>
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
    </>
  );
}

export default App;
