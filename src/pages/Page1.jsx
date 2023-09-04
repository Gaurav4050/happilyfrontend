import React from "react";
import "./css/page1.css";
const page1Styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  fontFamily: "Poppins",
  background: "linear-gradient(to bottom, #3498db, #e74c3c)",
  color: "black",
  fontSize: "25px",
};

const buttonStyles = {
  margin: "10px",
  padding: "10px 20px",
  background: "transparent",
  border: "2px solid white",
  borderRadius: "5px",
  cursor: "pointer",
};

function Page1({ onClickEnroll }) {
  return (
    <div style={page1Styles}>
      <h2>Enter into Student Info System</h2>
      <button
        class="glow-on-hover"
        style={buttonStyles}
        onClick={onClickEnroll}
      >
        Enroll Now!
      </button>
    </div>
  );
}

export default Page1;
