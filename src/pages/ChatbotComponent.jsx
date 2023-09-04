import React from "react";
import Chatbot from "./Chatbot";
import Page1 from "./Page1";
import Page3 from "./Page3";
import { useDispatch, useSelector } from "react-redux";
function ChatbotComponent() {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.page);

  const setPage = (newPage) => {
    dispatch({ type: "SET_PAGE", payload: newPage });
  };

  return (
    <div>
      {page === 1 && <Page1 onClickEnroll={() => setPage(2)} />}
      {page === 2 && <Chatbot />}
      {page === 3 && <Page3 />}
    </div>
  );
}

export default ChatbotComponent;
