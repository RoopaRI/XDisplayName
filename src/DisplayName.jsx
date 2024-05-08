import React, { useState } from "react";

export default function DisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [flag, setFlag] = useState(false);

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
    setFlag(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <h3>
          First Name:
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstName}
            required
          />
        </h3>
        <h3>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastName}
            required
          />
        </h3>
        <button type="submit">Submit</button>
      </form>
      <h3>
        {(flag) ? "Full Name: "+fullName : ""}
      </h3>
    </div>
  );
}
