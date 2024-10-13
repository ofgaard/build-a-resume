import { useState } from "react";

const Experience = ({ edit, toggleEdit, add, toggleAdd }) => {
  const [experience, setExperience] = useState([]);
  const [newExperience, setNewExperience] = useState({
    name: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the input
    setNewExperience((prevState) => ({
      ...prevState, // Spread the previous state
      [name]: value, // Update the specific key (name) with the new value
    }));
  };

  const submitChanges = () => {
    let experienceToAdd = {
      id: crypto.randomUUID(),
      name: newExperience.name,
      position: newExperience.position,
      location: newExperience.location,
      startDate: newExperience.startDate,
      endDate: newExperience.endDate,
      description: newExperience.description,
    };
    setExperience([...experience, experienceToAdd]);
    setNewExperience({
      name: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    console.log(experience);
    toggleAdd();
  };

  return (
    <>
      {add && (
        <div className="flex flex-col mt-14 text-sm gap-2 border-b pb-4">
          <div className="flex justify-between min-w-max">
            <h1 className="font-extrabold text-yellow-500">
              <input
                type="text
                "
                className="bg-transparent"
                name="name"
                value={newExperience.name}
                placeholder="Workplace"
                onChange={handleInputChange}
              />
            </h1>
            <h1 className="font-thin">
              <input
                type="text
                "
                className="bg-transparent text-right"
                name="location"
                value={newExperience.location}
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
                  value={newExperience.position}
                  placeholder="Position"
                  onChange={handleInputChange}
                />
              </h2>
              <p className="max-w-60 mt-2 opacity-70 font-light">
                <input
                  type="text
                "
                  className="bg-transparent"
                  name="description"
                  value={newExperience.description}
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
                    value={newExperience.startDate}
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
                    value={newExperience.endDate}
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
      {experience.map((job) => (
        <div key={job.id} className="mt-4 border-b pb-2">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-yellow-500">{job.name}</h1>
            <h1 className="font-thin">{job.location}</h1>
          </div>
          <div className="flex justify-between">
            <div>
              <h2 className="font-semibold">{job.position}</h2>
              <p className="text-sm opacity-70">{job.description}</p>
            </div>
            <div className="text-right">
              <p className="text-sm">
                {job.startDate} - {job.endDate}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Experience;
