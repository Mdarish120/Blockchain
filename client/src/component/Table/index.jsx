import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const Table = ({ isUpdated, setTimesheet, setIsEdited, setId }) => {
  const [res, setRes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/employee");
        setRes(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [isUpdated]);

  const handleEdit = (name, department, startTime, endTime, day, id, desc) => {
    console.log(id);
    setTimesheet({
      name,
      department,
      startTime,
      endTime,
      day,
      desc,
    });

    setId(id);
    setIsEdited(true);
  };

  return (
    <>
      <div className={style.container}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Departmemt</th>
              <th>Description</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Edit</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {res?.map(
              ({
                name,
                department,
                desc,
                startTime,
                endTime,
                day,
                rating,
                _id,
              }) => (
                <tr>
                  <td>{name}</td>
                  <td>{department}</td>
                  <td>{desc}</td>

                  <td>{day}</td>
                  <td>{startTime}</td>
                  <td>{endTime}</td>
                  <td>
                    {rating == null && (
                      <button
                        onClick={() =>
                          handleEdit(
                            name,
                            department,
                            startTime,
                            endTime,
                            day,
                            _id,
                            desc
                          )
                        }
                      >
                        Edit
                      </button>
                    )}
                  </td>

                  {rating == null ? <td>Not Added</td> : <td>{rating}</td>}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
