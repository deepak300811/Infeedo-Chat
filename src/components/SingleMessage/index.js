import React from "react";
import "./style.css";
const SingleMessage = ({ message, time, sentByUser }) => {
  console.log("message2=", message);
  return (
    <>
      <div className={`message ${sentByUser ? "user" : "robot"}`}>
        <p>{message}</p>
      </div>
    </>
  );
};

export default SingleMessage;
