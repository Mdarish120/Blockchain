import Form from "./component/TimeForm";
import Table from "./component/Table";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Rating from "./component/Rating";
import NotAuthorized from "./component/NotAuthorized";

function App() {
  const [isvalid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(localStorage.getItem("isValid"));
  }, []);
  console.log(isvalid);

  const [isUpdated, setIsUpdated] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const [timesheetData, setTimesheet] = useState({
    name: "",
    startTime: "",
    endTime: "",
    department: "",
    day: "",
    desc: "",
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Form
                setIsUpdated={setIsUpdated}
                timesheetData={timesheetData}
                setTimesheet={setTimesheet}
                isUpdated={isUpdated}
                setIsEdited={setIsEdited}
                isEdited={isEdited}
              />
            }
          />
          {/* <Route path="/table" element={<Table isUpdated={isUpdated} />} />   */}

          {isvalid && <Route path="/rating" element={<Rating />} />}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
