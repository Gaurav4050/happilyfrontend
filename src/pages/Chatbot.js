import React from "react";
import config from "../bot/config.js";
import MessageParser from "../bot/Messageparser.js";
import ActionProvider from "../bot/ActionProvider.js";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "./chatbot.css";
const containerStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "linear-gradient(to bottom, #3498db, #e74c3c)",
};

const MyComponent = () => {
  return (
    <div style={containerStyles}>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
      <div className="react-chatbot-kit-chat-input-container">
        <input
          type="text"
          placeholder="Enter your name"
          // onChange={handleNameInput}
        />
      </div>
    </div>
  );
};

export default MyComponent;
