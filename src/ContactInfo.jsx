import { useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

const ContactInfo = ({ edit, toggleEdit }) => {
  const [contacts, setContacts] = useState({
    name: "Oliver Fruergaard",
    phone: "12345678",
    email: "johndoe@gmail.com",
    location: "Copenhagen",
  });

  //overvej at fjerne edit-knappen fra komponentets flow og hav den siddende absolut positioneret

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setContacts((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the specific key (name) with the new value
    }));
  };

  return (
    <>
      {!edit ? (
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <h1 className="text-3xl font-extrabold text-center">
              {contacts.name}
            </h1>
            <button onClick={toggleEdit}>
              <CiEdit></CiEdit>
            </button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 text-xs">
            <div className="flex gap-2 items-center">
              <FcPhone size={20}></FcPhone>
              <p>{contacts.phone}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FcContacts size={20}></FcContacts>
              <p>{contacts.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FcGlobe size={20}></FcGlobe>
              <p>{contacts.location}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <h1 className="text-3xl font-extrabold">
              <input
                type="text"
                name="name"
                className="bg-transparent text-center"
                value={contacts.name}
                placeholder={contacts.name}
                onChange={handleInputChange}
              />
            </h1>
            <button onClick={toggleEdit}>
              <CiEdit></CiEdit>
            </button>
          </div>
          <div className="mt-10 flex flex-row justify-between gap-10 text-xs">
            <div className="flex gap-2 items-center">
              <FcPhone size={20}></FcPhone>
              <p>
                {" "}
                <input
                  type="text"
                  name="phone"
                  className="bg-transparent text-center"
                  value={contacts.phone}
                  placeholder={contacts.phone}
                  onChange={handleInputChange}
                />
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FcContacts size={20}></FcContacts>
              <input
                type="text"
                name="email"
                className="bg-transparent text-center"
                value={contacts.email}
                placeholder={contacts.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-2 items-center">
              <FcGlobe size={20}></FcGlobe>
              <input
                type="text"
                name="location"
                className="bg-transparent text-center"
                value={contacts.location}
                placeholder={contacts.location}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
