import React, { useState } from "react";

const Gotit = (props) => {
  const [buttonBackground, setButtonBackground] = useState("#5ccc9d");
  const [open, setOpen] = useState(true);
  const handleGotitClick = () => {
    setOpen(false);
    props.actionProvider.handleGotit();
  };

  const buttonStyle = {
    backgroundColor: buttonBackground,
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleHover = () => {
    setButtonBackground("#4faa88");
  };

  const handleLeave = () => {
    setButtonBackground("#5ccc9d");
  };

  return (
    <div>
      {open && (
        <>
          <button
            className="got-it-button"
            style={buttonStyle}
            onClick={handleGotitClick}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            Got it!
          </button>
        </>
      )}
    </div>
  );
};

export default Gotit;
