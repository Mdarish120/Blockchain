import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Rating = () => {
  const navigate = useNavigate();
  const [res, setRes] = useState([]);
  const [rating, setRating] = useState(0);

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
  }, []);

  console.log(rating);

  const handleSumit = async (id, rating) => {
    console.log({ id, rating });

    try {
      const res = await axios.put(`http://localhost:5000/employee/${id}`, {
        rating,
      });

      alert("Rating add Successfuuly");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div>
        <button className={style.logout} onClick={handleChange}>
          Logout
        </button>
      </div>
      <div className={style.container}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Departmemt</th>
              <th>Day</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {res?.map(({ name, department, startTime, endTime, day, _id }) => (
              <tr>
                <td>{name}</td>
                <td>{department}</td>
                <td>{day}</td>
                <td>{startTime}</td>
                <td>{endTime}</td>
                <td>
                  <select onChange={(e) => setRating(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                  <button onClick={() => handleSumit(_id, rating)}>
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Rating;
