import { useEffect, useState } from "react";
import ChatWindow from "./components/ChatWindow";
import Header from "./components/Header";
import WriteComponent from "./components/WriteComponent";
import "./App.css";
function App() {
  const [messagesArray, setMessagesArray] = useState([]);

  useEffect(() => {
    if (messagesArray?.length > 0) {
      window.localStorage.setItem("userChat", JSON.stringify(messagesArray));
      if (messagesArray[messagesArray.length - 1].sentByUser) {
        const temp = messagesArray[messagesArray.length - 1];
        setMessagesArray([
          ...messagesArray,
          {
            message: temp.message,
            sentByUser: false,
          },
        ]);
      }
    }
  }, [messagesArray]);

  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem("userChat"));
    if (temp?.length > 0) {
      setMessagesArray(temp);
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem("userChat");
    setMessagesArray([]);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div className="reset-button" onClick={clearLocalStorage}>
            <img src="./reset.png" alt="reset"></img>
          </div>
          <Header />
          <ChatWindow messagesArray={messagesArray} />
          <div className="write-component-container">
            <WriteComponent
              setMessagesArray={setMessagesArray}
              messagesArray={messagesArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
