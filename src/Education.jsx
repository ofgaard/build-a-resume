import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { MdDeleteOutline } from "react-icons/md";

const Education = ({ add, toggleAdd, darkMode }) => {
  const [education, setEducation] = useState([]);
  const [newEducation, setNewEducation] = useState({
    name: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });
  const [educationToEdit, setEducationToEdit] = useState({
    id: "",
    name: "",
    degree: "",
    location: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const [editMode, setEditMode] = useState({ id: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editMode.id == "") {
      setNewEducation((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setEducationToEdit((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      submitChanges();
    }
  };

  const handleEdit = (id) => {
    let itemToEdit = education.find((item) => item.id === id);
    setEducationToEdit(itemToEdit);
    setEditMode({ id: id });
  };

  const handleDelete = (id) => {
    let cleanedUpList = education.filter((school) => school.id !== id);
    setEducation(cleanedUpList);
  };

  const submitChanges = () => {
    if (editMode.id === "") {
      const educationToAdd = {
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
        position: "",
        location: "",
        startDate: "",
        endDate: "",
        description: "",
      });
      toggleAdd(0);
    } else {
      const indexToUpdate = education.findIndex(
        (school) => school.id === editMode.id
      );

      if (indexToUpdate !== -1) {
        const updatedSchools = education.map((school, index) => {
          if (index === indexToUpdate) {
            return {
              ...school,
              name: educationToEdit.name,
              position: educationToEdit.position,
              location: educationToEdit.location,
              startDate: educationToEdit.startDate,
              endDate: educationToEdit.endDate,
              description: educationToEdit.description,
            };
          }
          return school;
        });

        setEducation(updatedSchools);
      }

      setEditMode({ id: "" });
    }
  };

  return (
    <>
      <div
        className={` ${
          darkMode
            ? "bg-neutral-700 transition-colors "
            : "bg-neutral-300 transition-colors"
        } rounded-md p-3`}
      >
        <div className="flex items-center gap-2 mb-4">
          <FcBusinessman size={30}></FcBusinessman>
          <h1 className="translate-y-0.5 font-extrabold">Education</h1>
        </div>
        {education.map((school) =>
          school.id !== editMode.id ? (
            <div key={school.id} className="mt-4 p-3">
              <div className="flex justify-between">
                <div className="flex gap-1">
                  <h1
                    className={`font-extrabold ${
                      darkMode ? "text-neutral-200" : "text-slate-800"
                    }`}
                  >
                    {school.name}
                  </h1>
                  <div className="flex items-center gap-1">
                    <button
                      className="hover:scale-110"
                      onClick={() => {
                        handleEdit(school.id);
                      }}
                    >
                      <CiEdit size={20}></CiEdit>
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(school.id);
                      }}
                      className="hover:scale-110"
                    >
                      <MdDeleteOutline size={20}></MdDeleteOutline>
                    </button>
                  </div>
                </div>
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
          ) : (
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
                    value={educationToEdit.name}
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
                    value={educationToEdit.location}
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
                      value={educationToEdit.degree}
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
                      value={educationToEdit.description}
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
                        value={educationToEdit.startDate}
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
                        value={educationToEdit.endDate}
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
          )
        )}
        {add === 1 && (
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
        {education.length === 0 && add !== 1 && (
          <div className="mt-4 p-3 opacity-50">
            <div className="flex justify-between">
              <h1
                className={`font-extrabold ${
                  darkMode ? "text-yellow-500" : "text-slate-800"
                }`}
              >
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
