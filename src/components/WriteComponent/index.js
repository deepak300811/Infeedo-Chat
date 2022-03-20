import React, { useState } from "react";
import "./style.css";
const WriteComponent = ({ setMessagesArray, messagesArray }) => {
  const [message, setMessage] = useState("");
  const submitMessage = (e) => {
    e.preventDefault();
    if (message.trim().length > 0) {
      const temp = {
        message: message,
        time: new Date(),
        sentByUser: true,
      };
      setMessagesArray([...messagesArray, temp]);
      setMessage("");
      console.log("message=", message);
    }
  };
  return (
    <div className="write-message">
      <form onSubmit={submitMessage} className="form-input">
        <input
          type="text"
          className="write-text-box"
          value={message}
          placeholder="Type Message Here..."
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button type="submit">
          <img
            src="../send.png"
            alt="send button"
            className="send-message-button"
          ></img>
        </button>
      </form>
    </div>
  );
};

export default WriteComponent;
