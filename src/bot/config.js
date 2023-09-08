import { createChatBotMessage } from "react-chatbot-kit";
import Gotit from "../components/Gotit";
import Age from "../components/Age.jsx";
import Input from "../components/Input.jsx";
import Counter from "../components/Counter.jsx";
const botName = "ExcitementBot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hello, Welcome to student info system!`, {
      widget: "gotit",
      payload: { gotit: "goitit" },
    }),
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
    userInput: {
      backgroundColor: "red",
    },
  },

  widgets: [
    {
      widgetName: "gotit",
      widgetFunc: (props) => <Gotit {...props} />,
    },
    {
      widgetName: "input",
      widgetFunc: (props) => <Input {...props} />,
    },
    {
      widgetName: "age",
      widgetFunc: (props) => <Age {...props} />,
    },
    {
      widgetName: "counter",
      widgetFunc: (props) => <Counter {...props} />,
    },
  ],
};

export default config;
