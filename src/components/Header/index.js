import React from "react";
import "./style.css";
const Header = () => {
  return (
    <header className="header">
      <section className="user-header display-flex">
        <img className="icon" src="../user.png" alt="icon"></img> You{"  "}
        <p>
          <span>
            {" "}
            <i>(online)</i>{" "}
          </span>
        </p>
      </section>
      <section className="bot-header display-flex">
        <img className="icon" src="../siri.png" alt="icon"></img> Siri{"  "}
        <p>
          <span>
            {"  "}
            <i>{"  "} (online)</i>{" "}
          </span>
        </p>
      </section>
    </header>
  );
};

export default Header;
