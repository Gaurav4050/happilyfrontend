import React, { useState } from "react";
import "./input.css";
import { useDispatch } from "react-redux";
const Gotit = (props) => {
  const [buttonBackground, setButtonBackground] = useState("#5ccc9d");
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

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

  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    dispatch({
      type: "SET_NAME",
      payload: value,
    });
    props.actionProvider.handleAgeAction(value);
    setOpen(false);
  };

  return (
    <div>
      {open && (
        <>
          <div
            // type="text"
            className="react-chatbot-kit-chat-input-containerr"
            // style={{ display: "block" }}
          >
            <form
              className="react-chatbot-kit-chat-input-form"
              onSubmit={handleSubmit}
            >
              <input
                class="react-chatbot-kit-chat-input"
                placeholder="Write your message here"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                }}
              />

              <button
                className="react-chatbot-kit-chat-btn-send"
                style={{ backgroundColor: "rgb(92, 204, 157)" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="react-chatbot-kit-chat-btn-send-icon"
                >
                  <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
                </svg>
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Gotit;
