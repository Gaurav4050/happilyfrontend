import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Counter() {
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();
  useEffect(() => {
    const countdown = setInterval(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        dispatch({ type: "SET_PAGE", payload: 3 });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [count, dispatch]);

  const countdownStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "white",
    backgroundColor: "#4CAF50", // Green background color
    padding: "5px",
    borderRadius: "10px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Box shadow for a raised effect
    animation: "fadeIn 1s ease-in-out", // Fade-in animation
  };

  return (
    <div>
      <p style={countdownStyle}>{count}</p>
    </div>
  );
}

export default Counter;
