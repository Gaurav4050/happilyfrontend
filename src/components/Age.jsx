import React, { useState } from "react";
import { useDispatch } from "react-redux";
const DogPicture = (props) => {
  const [selectedAge, setSelectedAge] = useState("");
  const dispatch = useDispatch();
  const handleAgeChange = (event) => {
    const age = event.target.value;
    setSelectedAge(age);
    dispatch({
      type: "SET_AGE",
      payload: age,
    });
    dispatch({
      type: "SET_NAME",
      payload: localStorage.getItem("name"),
    });
    localStorage.removeItem("name");
    props.actionProvider.PrintAge(age);
  };

  return (
    <div className="dropdown-container">
      <select
        value={selectedAge}
        onChange={handleAgeChange}
        className="custom-dropdown"
      >
        <option value="">Select</option>
        {Array.from({ length: 23 }, (_, i) => 18 + i).map((age) => (
          <option key={age} value={age}>
            {age}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DogPicture;
