import { useState } from "react";
import ContactInfo from "./ContactInfo";

function App() {
  const [contacts, setContacts] = useState({
    name: "Oliver Fruergaard",
    phone: "12345678",
    email: "johndoe@gmail.com",
    location: "Copenhagen",
  });
  const [edit, setEdit] = useState(false);

  const toggleEdit = () => {
    setEdit((prevState) => !prevState);
  };

  return (
    <>
      <div className="bg-neutral-800 h-screen flex flex-col text-slate-50 p-10 min-w-96">
        <ContactInfo
          contacts={contacts}
          edit={edit}
          toggleEdit={toggleEdit}
        ></ContactInfo>
      </div>
    </>
  );
}

export default App;
