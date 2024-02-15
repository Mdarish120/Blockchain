import React, { useState } from "react";
import axios from "axios";
import style from "./style.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(" http://localhost:5000/login", {
        password,
      });
      console.log(res);
      localStorage.setItem("isValid", JSON.stringify(res.data));
      setPassword("");
      alert("Login Successfully...");
      navigate("/rating");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={style.container}>
      <form>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
