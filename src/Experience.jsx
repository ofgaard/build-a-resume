import { useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const Experience = ({
  add,
  toggleAdd,
  toggleAddExperience,
  addExperience,
  toggleDropDown,
  darkMode,
}) => {
  const [editMode, setEditMode] = useState({ id: "" });
  const [experience, setExperience] = useState([]);
  const [newExperience, setNewExperience] = useState({
    name: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [experienceToEdit, setExperienceToEdit] = useState({
    id: "",
    name: "",
    position: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editMode.id == "") {
      setNewExperience((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setExperienceToEdit((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitChanges();
    }
  };

  const handleEdit = (id) => {
    let itemToEdit = experience.find((item) => item.id === id);
    setExperienceToEdit(itemToEdit);
    setEditMode({ id: id });
    console.log(experienceToEdit);
  };

  const handleDelete = (id) => {
    let cleanedUpList = experience.filter((job) => job.id !== id);
    setExperience(cleanedUpList);
  };

  const submitChanges = () => {
    if (editMode.id === "") {
      // Add new experience
      const experienceToAdd = {
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
      toggleAdd(0);
    } else {
      const indexToUpdate = experience.findIndex(
        (job) => job.id === editMode.id
      );

      if (indexToUpdate !== -1) {
        const updatedJobs = experience.map((job, index) => {
          if (index === indexToUpdate) {
            return {
              ...job,
              name: experienceToEdit.name,
              position: experienceToEdit.position,
              location: experienceToEdit.location,
              startDate: experienceToEdit.startDate,
              endDate: experienceToEdit.endDate,
              description: experienceToEdit.description,
            };
          }
          return job;
        });

        setExperience(updatedJobs);
      }

      setEditMode({ id: "" });
    }
  };

  return (
    <>
      <div
        className={` ${
          darkMode
            ? "bg-neutral-700 transition-colors  "
            : "bg-neutral-300 transition-colors  "
        } rounded-md p-3`}
      >
        <div className="flex items-center gap-2 mb-4">
          <FcBriefcase size={30}></FcBriefcase>
          <h1 className="translate-y-0.5 font-extrabold">Work Experience</h1>
        </div>
        {experience.map((job) =>
          job.id !== editMode.id ? (
            <div key={job.id} className="mt-4 p-3">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <h1
                    className={`font-extrabold ${
                      darkMode ? "text-yellow-500" : "text-slate-800"
                    }`}
                  >
                    {job.name}
                  </h1>
                  <div className="flex items-center gap-1">
                    <button
                      className="hover:scale-110"
                      onClick={() => {
                        handleEdit(job.id);
                      }}
                    >
                      <CiEdit size={20}></CiEdit>
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(job.id);
                      }}
                      className="hover:scale-110"
                    >
                      <MdDeleteOutline size={20}></MdDeleteOutline>
                    </button>
                  </div>
                </div>
                <h1 className="font-thin">{job.location}</h1>
              </div>
              <div className="flex justify-between">
                <div>
                  <h2 className="font-semibold">{job.position}</h2>
                  <p className="text-sm opacity-70 max-w-44 md:max-w-96">
                    {job.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={experienceToEdit.id}
              className="flex flex-col text-sm gap-2 p-3"
            >
              <div className="flex justify-between min-w-max">
                <h1
                  className={`font-extrabold ${
                    darkMode ? "text-yellow-500" : "text-slate-800"
                  }`}
                >
                  <input
                    type="text
                "
                    className="bg-transparent"
                    name="name"
                    value={experienceToEdit.name}
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
                    value={experienceToEdit.location}
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
                      value={experienceToEdit.position}
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
                      value={experienceToEdit.description}
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
                        value={experienceToEdit.startDate}
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
                        value={experienceToEdit.endDate}
                        placeholder="End Date"
                        onChange={handleInputChange}
                      />
                    </p>
                  </div>
                  <button
                    className="mt-4 ml-auto border text-xs border-yellow-500 p-1 rounded-md hover:scale-105"
                    onClick={submitChanges}
                    onKeyDown={handleKeyDown}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )
        )}
        {add === 2 && (
          <div className="flex flex-col text-sm gap-2 p-3">
            <div className="flex justify-between min-w-max">
              <h1
                className={`font-extrabold ${
                  darkMode ? "text-yellow-500" : "text-slate-800"
                }`}
              >
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
                  className={`mt-4 ml-auto border text-xs ${
                    darkMode ? "border-yellow-500" : "border-slate-800"
                  } p-1 rounded-md hover:scale-105`}
                  onClick={submitChanges}
                  onKeyDown={handleKeyDown}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}{" "}
        {experience.length === 0 && add !== 2 && (
          <div className="mt-4 p-3 opacity-50">
            <div className="flex justify-between">
              <h1
                className={`font-extrabold ${
                  darkMode ? "text-yellow-500" : "text-slate-800"
                }`}
              >
                Job goes here
              </h1>
              <h1 className="font-thin">Location</h1>
            </div>
            <div className="flex justify-between">
              <div>
                <h2 className="font-semibold">Position</h2>
                <p className="text-sm opacity-70 max-w-44 md:max-w-96">
                  Job Description
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

export default Experience;
