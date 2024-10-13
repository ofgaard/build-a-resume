import { useState } from "react";

const Experience = ({ edit, toggleEdit }) => {
  const [experience, setExperience] = useState([
    {
      job: "Workplace",
      position: "Position",
      location: "Location",
      startDate: "Start Date",
      endDate: "End Date",
      description: "Description",
    },
  ]);

  return (
    <div className="flex flex-col mt-14 text-sm gap-2 border-b pb-4">
      <div className="flex justify-between min-w-max">
        <h1 className="font-extrabold text-yellow-500">Workplace</h1>
        <h1 className="font-thin">Location</h1>
      </div>
      <div className="flex flex-row justify-between">
        <div className="">
          <h2>Position</h2>
          <p className="max-w-60 mt-2 opacity-70 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            cumque blanditiis voluptatum, facilis provident tenetur aspernatur.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p>2020</p>
            <p>2021</p>
          </div>
          <button className="border text-xs border-yellow-500 p-0.5 rounded-md hover:scale-105">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
