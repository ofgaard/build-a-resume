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
        <div className="flex flex-col items-center mb-10">
          <div className="flex gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-center">
              {contacts.name}
            </h1>
            <div className="print:hidden">
              <button onClick={toggleEdit}>
                <CiEdit size={40}></CiEdit>
              </button>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 text-xs">
            <div className="flex gap-2 items-center">
              <div className="print:hidden">
                <FcPhone size={20}></FcPhone>
              </div>
              <p>{contacts.phone}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="print:hidden">
                <FcContacts size={20}></FcContacts>
              </div>
              <p>{contacts.email}</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="print:hidden">
                <FcGlobe size={20}></FcGlobe>
              </div>
              <p>{contacts.location}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center mb-10">
          <div className="flex gap-4">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              <input
                type="text"
                name="name"
                className="bg-transparent text-center max-w-xs outline"
                value={contacts.name}
                placeholder={contacts.name}
                onChange={handleInputChange}
              />
            </h1>
            <button onClick={toggleEdit}>
              <CiEdit size={40}></CiEdit>
            </button>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-between gap-5 sm:gap-10 text-xs">
            <div className="flex gap-2 items-center">
              <FcPhone size={20}></FcPhone>
              <p>
                {" "}
                <input
                  type="text"
                  name="phone"
                  className="bg-transparent max-w-20"
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
                className="bg-transparent"
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
                className="bg-transparent"
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
