import { useState } from "react";
import { FcPhone } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";

const ContactInfo = ({ contacts, edit, toggleEdit }) => {
  const [nameField, setNameField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [locationField, setLocationField] = useState("");

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
            <h1 className="text-3xl font-extrabold">{contacts.name}</h1>
            <button onClick={toggleEdit}>
              <CiEdit></CiEdit>
            </button>
          </div>
          <div className="mt-10 flex flex-row justify-between gap-10 text-xs">
            <div className="flex gap-2 items-center">
              <FcPhone size={20}></FcPhone>
              <p>{contacts.phone}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FcContacts size={20}></FcContacts>
              {contacts.email}
            </div>
            <div className="flex gap-2 items-center">
              <FcGlobe size={20}></FcGlobe>
              {contacts.location}
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
              <p>{contacts.phone}</p>
            </div>
            <div className="flex gap-2 items-center">
              <FcContacts size={20}></FcContacts>
              {contacts.email}
            </div>
            <div className="flex gap-2 items-center">
              <FcGlobe size={20}></FcGlobe>
              {contacts.location}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactInfo;
