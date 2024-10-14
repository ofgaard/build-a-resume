import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";

const Education = ({ edit, toggleEdit, add, toggleAdd }) => {
  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    name: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setNewEducation((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the specific key (name) with the new value
    }));
  };

  const submitChanges = () => {
    let educationToAdd = {
      id: crypto.randomUUID(),
      name: newEducation.name,
      degree: newEducation.degree,
      location: newEducation.location,
      startDate: newEducation.startDate,
      endDate: newEducation.endDate,
      description: newEducation.description,
    };
    setEducation([...education, educationToAdd]);
    setNewEducation({
      name: "",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    console.log(education);
    toggleAdd(0);
  };

  return (
    <>
      <div className="bg-neutral-700 rounded-md p-3">
        <div className="flex items-center gap-2 mb-4">
          <FcBusinessman size={30}></FcBusinessman>
          <h1 className="translate-y-0.5 font-extrabold">Education</h1>
        </div>
        {education.map((school) => (
          <div key={school.id} className="mt-4 p-3">
            <div className="flex justify-between">
              <h1 className="font-extrabold text-orange-500">{school.name}</h1>
              <h1 className="font-thin">{school.location}</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">{school.degree}</h2>
                <p className="text-sm opacity-70 max-w-44 md:max-w-96 lg:max-w-none">
                  {school.description}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm">
                  {school.startDate} - {school.endDate}
                </p>
              </div>
            </div>
          </div>
        ))}
        {add === 1 && (
          <div className="flex flex-col text-sm gap-2 p-3">
            <div className="flex justify-between min-w-max">
              <h1 className="font-extrabold text-orange-500">
                <input
                  type="text
                "
                  className="bg-transparent"
                  name="name"
                  value={newEducation.name}
                  placeholder="School"
                  onChange={handleInputChange}
                />
              </h1>
              <h1 className="font-thin">
                <input
                  type="text
                "
                  className="bg-transparent text-right"
                  name="location"
                  value={newEducation.location}
                  placeholder="Location"
                  onChange={handleInputChange}
                />
              </h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="">
                <h2>
                  <input
                    type="text"
                    className="bg-transparent"
                    name="degree"
                    value={newEducation.degree}
                    placeholder="Degree"
                    onChange={handleInputChange}
                  />
                </h2>
                <p className="max-w-60 mt-2 opacity-70 font-light">
                  <input
                    type="text
                "
                    className="bg-transparent"
                    name="description"
                    value={newEducation.description}
                    placeholder="Description"
                    onChange={handleInputChange}
                  />
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div>
                  <p>
                    <input
                      type="text
                "
                      className="bg-transparent text-right"
                      name="startDate"
                      value={newEducation.startDate}
                      placeholder="Start Date"
                      onChange={handleInputChange}
                    />
                  </p>
                  <p>
                    {" "}
                    <input
                      type="text
                "
                      className="bg-transparent text-right"
                      name="endDate"
                      value={newEducation.endDate}
                      placeholder="End Date"
                      onChange={handleInputChange}
                    />
                  </p>
                </div>
                <button
                  className="mt-4 ml-auto border text-xs border-orange-500 p-1 rounded-md hover:scale-105 disabled:opacity-60"
                  onClick={submitChanges}
                  disabled={
                    !newEducation.name ||
                    !newEducation.degree ||
                    !newEducation.location ||
                    !newEducation.startDate ||
                    !newEducation.endDate
                  }
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}{" "}
        {education.length === 0 && add !== 1 && (
          <div className="mt-4 p-3 opacity-50">
            <div className="flex justify-between">
              <h1 className="font-extrabold text-orange-500">
                Your University Here
              </h1>
              <h1 className="font-thin">Degree</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">Location</h2>
                <p className="text-sm opacity-70 max-w-44 md:max-w-96 lg:max-w-none">
                  Description
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm">Start - End</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Education;
