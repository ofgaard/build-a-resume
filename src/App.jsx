import { useState } from "react";
import ContactInfo from "./ContactInfo";
import Experience from "./Experience";
import AddButton from "./AddButton";

function App() {
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);

  const toggleEdit = () => {
    setEdit((prevState) => !prevState);
  };

  const toggleAdd = () => {
    setAdd((prevState) => !prevState);
  };

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
        <AddButton add={add} toggleAdd={toggleAdd}></AddButton>
      </div>
    </>
  );
}

export default App;
