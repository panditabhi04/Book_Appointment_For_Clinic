const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const patients = [
  {
    id: 1,
    firstName: "Abhishek",
    lastName: "Pandit",
    contactNumber: 9106412988,
    pId: "PID-231456",
  },
  {
    id: 2,
    firstName: "Abhi",
    lastName: "Pandya",
    contactNumber: 9807645321,
    pId: "PID-763542",
  },
  {
    id: 3,
    firstName: "Ravi",
    lastName: "Patil",
    contactNumber: 0987365271,
    pId: "PID-987654",
  },
  {
    id: 4,
    firstName: "Sejal",
    lastName: "Patel",
    contactNumber: 6527165492,
    pId: "PID-435267",
  },
  {
    id: 5,
    firstName: "Mayank",
    lastName: "Kale",
    contactNumber: 8976543210,
    pId: "PID-3245678",
  },
];
const appoinments = [];

app.get("/api/patients", (req, res) => {
  res.json(patients);
});

app.get("/api/appoinments", (req, res) => {
  res.json(appoinments);
});

app.post("/api/appoinments", (req, res) => {
  console.log("appoinments", req.body, "appoinments");
  appoinments.push(req.body);
  // res.write(req.body);
  res.send("Appointment added successfully");
});

app.listen(5000, () => {
  console.log("server started on 5000");
});
