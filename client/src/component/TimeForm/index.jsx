import React, { useState } from "react";
import style from "./style.module.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Table from "../Table";

const Form = ({
  setIsUpdated,
  timesheetData,
  setTimesheet,
  isUpdated,
  setIsEdited,
  isEdited,
}) => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const handleChange = (e) => {
    setTimesheet((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    console.log(timesheetData);
    console.log(isEdited);
    if (isEdited) {
      const res = await axios.put(`http://localhost:5000/employee/edit/${id}`, {
        timesheetData,
      });
      console.log(res);
      setIsUpdated((prev) => !prev);
      setIsEdited(false);
      setTimesheet({
        name: "",
        startTime: "",
        endTime: "",
        day: "",
        department: "",
        desc: "",
      });

      alert("Editing  succsesfully...");
    } else {
      const res = await axios.post(
        " http://localhost:5000/employee",
        timesheetData
      );
      console.log(res);
      setIsUpdated((prev) => !prev);
      setTimesheet({
        name: "",
        startTime: "",
        endTime: "",
        day: "",
        department: "",
        desc: "",
        id: "",
      });

      alert("Submit succsesfully...");
    }
  };

  return (
    <>
      <div className={style.container}>
        <from>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={timesheetData.name}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            placeholder="Department"
            name="department"
            value={timesheetData.department}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            placeholder="Description"
            name="desc"
            value={timesheetData.desc}
            onChange={(e) => handleChange(e)}
          />

          <input
            type="text"
            placeholder="Day"
            name="day"
            value={timesheetData.day}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="startTime"
            name="startTime"
            value={timesheetData.startTime}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="endTime"
            value={timesheetData.endTime}
            name="endTime"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={handleSubmit}>Add</button>
        </from>
      </div>
      <Table
        isUpdated={isUpdated}
        setTimesheet={setTimesheet}
        setIsEdited={setIsEdited}
        setId={setId}
      />
    </>
  );
};

export default Form;
