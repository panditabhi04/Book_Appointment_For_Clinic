import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Axios from "axios";

function BookAppoinment({ f_Name, l_Name, p_Id, id }) {
  const [selectedDoctor, setSelectedDoctor] = useState();
  const [selectedChannel, setSelectedChannel] = useState();
  const [selectedTitle, setSelectedTitle] = useState();
  const [time, setSelectedTime] = useState();
  const [date, setSelectedDate] = useState(new Date());
  const [appointment, setAppointment] = useState();
  const [temp, setTemp] = useState();
  const [height, setHeight] = useState();
  const [spo2, setSPo2] = useState();
  const [weight, setWeight] = useState();
  const [prate, setPrate] = useState();
  const [prescriptionNote, setPrescriptionNote] = useState();
  const [reason, setReason] = useState();
  const [submit, setSubmit] = useState();

  const [bp, setBP] = useState();

  const [selectedWalkIn, setSelectedWalkIn] = useState();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    const requestData = {
      UserId: id,
      DoctorId: selectedDoctor,
      ClinicId: "122990548",
      Title: selectedTitle,
      AppointmentDate: date,
      AppointmentTime: time,
      AppointmentChannel: selectedChannel,
      AppointmentType: appointment,
      FirstName: f_Name,
      LastName: l_Name,
      BookedDate: date,
      Patient_BP: bp,
      Patient_Plus: prate,
      Patient_SPO2: spo2,
      Patient_Temp: temp,
      Patient_Weight: weight,
      Patient_Height: height,
      ShortNote: reason,
      PrescriptionNote: prescriptionNote,
    };
    e.preventDefault();
    fetch("/api/appoinments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    }).then((res) => {
      res.json();
      navigate("/appoinment");
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div style={{ display: "flex", gap: "64px", marginTop: "32px" }}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <h5>
              <u>Details</u>
            </h5>
            <select
              name="doctors"
              id="doctors"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
            >
              <option value="Select Doctor" selected hidden>
                Select Doctor
              </option>
              <option value="123">Pediatrician</option>
              <option value="345">Dermatologist</option>
              <option value="567">Orthopedist</option>
            </select>
            <select
              name="channel"
              id="channel"
              value={selectedChannel}
              onChange={(e) => setSelectedChannel(e.target.value)}
              label=""
            >
              <option value="none" selected hidden>
                Select Appoinment Channel
              </option>
              <option value="check-up">Walk In</option>
              <option value="By-App">By App</option>
              <option value="By-Phone-call">By Phone call</option>
              <option value="By-Email">By Email</option>
            </select>
            <input
              type="text"
              placeholder="Appoinment Title"
              value={selectedTitle}
              onChange={(e) => setSelectedTitle(e.target.value)}
            ></input>
          </div>

          <div>
            <h5>
              <u>Appoinment Details</u>
            </h5>
            <div style={{ display: "flex", gap: "16px" }}>
              <p>{f_Name + " " + l_Name}</p>
              <p>{p_Id}</p>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <p>Walk-in appoinment</p>
              <label class="switch">
                <input
                  type="checkbox"
                  value={selectedWalkIn}
                  onChange={(e) => setSelectedWalkIn(e.target.checked)}
                />
                <span class="slider round"></span>
              </label>
            </div>
            <div style={{ display: "flex", gap: "16px" }}>
              <select
                name="time"
                id="time"
                value={time}
                onChange={(e) => setSelectedTime(e.target.value)}
              >
                <option value="none" selected hidden>
                  Time
                </option>
                <option value="9:00">9:00</option>
                <option value="9:30">9:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">11:00</option>
              </select>

              <input
                type="date"
                value={date}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
            <div>
              <select
                name="doctors"
                id="doctors"
                value={appointment}
                onChange={(e) => setAppointment(e.target.value)}
                style={{ width: "100%" }}
              >
                <option value="none" selected hidden>
                  Select Appoinment Type
                </option>
                <option value="CheckUp">Check-Up</option>
                <option value="FollowUp">Follow-Up</option>
              </select>
            </div>
          </div>
        </div>
        <hr></hr>
        <div>
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              type="text"
              placeholder="BP"
              style={{ width: "64px", gap: "12px" }}
              value={bp}
              onChange={(e) => setBP(e.target.value)}
            />
            <input
              type="text"
              placeholder="Temp"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              style={{ width: "64px" }}
            />
            <input
              type="text"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              style={{ width: "64px" }}
            />
            <input
              type="text"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              style={{ width: "64px" }}
            />
            <input
              type="text"
              placeholder="SPO2"
              value={spo2}
              onChange={(e) => setSPo2(e.target.value)}
              style={{ width: "64px" }}
            />
            <input
              type="text"
              placeholder="Pulse Rate"
              value={prate}
              onChange={(e) => setPrate(e.target.value)}
              style={{ width: "64px" }}
            />
          </div>
        </div>
        <div>
          <div style={{ display: "flex", gap: "12px" }}>
            <input
              type="text"
              placeholder="Reason"
              name="reason"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <select
              name="PrescriptionNote"
              id="PrescriptionNote"
              value={prescriptionNote}
              onChange={(e) => setPrescriptionNote(e.target.value)}
            >
              <option value="none" selected hidden>
                Note for Doctor
              </option>
              <option value="PrescriptionNote-1">PrescriptionNote-1</option>
              <option value="PrescriptionNote-2">PrescriptionNote-2</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          value={submit}
          onChange={(e) => setSubmit(e.target.value)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookAppoinment;
