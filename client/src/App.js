import React, { useState, useEffect } from "react";
import "./App.css";
import BookAppoinment from "./Components/BookAppoinment";

function App() {
  const [patients, setPatients] = useState(null);
  const [visible, setVisible] = useState(false);
  const [fName, setFName] = useState(null);
  const [lName, setLName] = useState(null);
  const [pId, setPid] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetch("/api/patients").then(async (res) => {
      const patients = await res.json();
      setPatients(patients);
    });
  }, []);

  return (
    <div style={{ display: "flex", gap: "64px" }}>
      <table>
        <tr>
          <th style={{ padding: "8px" }}>Full Name</th>
          <th style={{ padding: "8px" }}>Contact Number</th>
        </tr>
        {patients &&
          patients.map((d) => (
            <tr
              key={d.id}
              onClick={() => {
                setFName(d.firstName);
                setLName(d.lastName);
                setPid(d.pId);
                setId(d.id);
                setVisible(true);
              }}
            >
              <td style={{ padding: "8px" }}>
                {d.firstName + " " + d.lastName}{" "}
              </td>
              <td style={{ padding: "8px" }}>{d.contactNumber}</td>
            </tr>
          ))}
      </table>
      {visible && (
        <BookAppoinment f_Name={fName} l_Name={lName} p_Id={pId} id={id} />
      )}
    </div>
  );
}

export default App;
