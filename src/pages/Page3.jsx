import React from "react";
import { useSelector } from "react-redux";

const Page3 = () => {
  const age = useSelector((state) => state.age);
  const name = useSelector((state) => state.name);

  const pageStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to bottom, #3498db, #e74c3c)",
    color: "black",
    textDecoration: "underline",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={pageStyle}>
      <div>
        <h2>
          Your name <strong>{name}</strong>, aged <strong>{age}</strong>, has
          been added to the student system. You may now exit.
        </h2>
      </div>
    </div>
  );
};

export default Page3;
