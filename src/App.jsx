import { useState } from "react";
import ContactInfo from "./ContactInfo";

function App() {
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <>
      <div className="bg-neutral-800 h-screen flex flex-col text-slate-50 p-10 min-w-96">
        <ContactInfo edit={edit} toggleEdit={toggleEdit}></ContactInfo>
      </div>
    </>
  );
}

export default App;
