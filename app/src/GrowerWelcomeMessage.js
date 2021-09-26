import React from "react";
import "./GrowerWelcomeMessage.css";

function GrowerWelcomeMessage() {
  const avatar =
    "https://upload.wikimedia.org/wikipedia/commons/a/a0/Arh-avatar.jpg";
  const pageDescription =
    "Add plants, keep track of the plants you posted and check your weekly payout";
  return (
    <div className="GrowerWelcomeMessage">
      <img src={avatar} className="GrowerWelcomeMessage__avatar" />
      <div className="GrowerWelcomeMessage__text">
        <h1 className="GrowerWelcomeMessage__title">Welcome Back, Alexandre</h1>
        <div className="GrowerWelcomeMessage__pageDescription">
          {pageDescription}
        </div>
      </div>
    </div>
  );
}

export default GrowerWelcomeMessage;
