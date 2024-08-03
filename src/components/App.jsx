import React, { useState } from "react";

function App() {
  const [fullName, setFUllName] = useState({
    fName: "",
    lName: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFUllName((p) => {
      if (name === "fName") {
        return { ...p, fName: value };
      } else if (name === "lName") {
        return { ...p, lName: value };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleChange}
          //value={fullName.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleChange}
          //value={fullName.lName}
        />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
