import React, { useState, useEffect } from "react";
import Axios from "axios";

function User() {
  const [users, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/patients")
      .then((res) => {
        console.log("res", res.json(), "res");
        res.json();
      })
      .then((users) => {
        console.log("users", users, "users");
        setPosts(users);
      });
  }, []);

  return (
    <div>
      <h1>testing</h1>
      {/* <ul>
        {users.map((user) => (
          <li key={user.name}>{user.contactNumber}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default User;
