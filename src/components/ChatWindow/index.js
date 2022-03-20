import React, { useEffect, useRef } from "react";
import SingleMessage from "../SingleMessage";
import "./style.css";
const ChatWindow = ({ messagesArray }) => {
  console.log("MessageArray=", messagesArray);
  const windowref = useRef(null);
  useEffect(() => {
    if (messagesArray.length > 0 && windowref !== null) {
      windowref.current.scrollIntoView();
    }
  }, [messagesArray]);
  return (
    <div className="chat-divison">
      {messagesArray?.length > 0
        ? messagesArray.map((element, index) => {
            return (
              <div
                className={`message-container${
                  element.sentByUser ? " user" : " robot"
                }`}
                key={index}
                ref={windowref}
              >
                <SingleMessage
                  message={element.message}
                  time={element.time}
                  sentByUser={element.sentByUser}
                />
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default ChatWindow;
