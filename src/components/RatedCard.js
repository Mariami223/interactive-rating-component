import React from "react";
import illustration from "../assets/illustration.svg";

const RatedCard = ({ rate }) => {
  return (
    <div className="card-container selected-card">
      <div>
        <img src={illustration} />
      </div>
      <div className="selected-number">
        <h5>You selected {rate} out of 5</h5>
      </div>
      <div>
        <h1>Thank you!</h1>
      </div>
      <div>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default RatedCard;
