import { useState } from "react";

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
      position: newEducation.degree,
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
      {add === 1 && (
        <div className="flex flex-col mt-14 text-sm gap-2 border-b pb-4">
          <div className="flex justify-between min-w-max">
            <h1 className="font-extrabold text-yellow-500">
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
                  type="text
                "
                  className="bg-transparent"
                  name="position"
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
                className="mt-4 ml-auto border text-xs border-yellow-500 p-1 rounded-md hover:scale-105"
                onClick={submitChanges}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}{" "}
      {education.map((school) => (
        <div key={school.id} className="mt-4 border-b pb-2">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-yellow-500">{school.name}</h1>
            <h1 className="font-thin">{school.location}</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold">{school.degree}</h2>
              <p className="text-sm opacity-70">{school.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">
                {school.startDate} - {school.endDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;
