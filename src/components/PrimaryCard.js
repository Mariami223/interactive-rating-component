import React, { useState } from "react";
import Path from "../assets/Path.png";

const PrimaryCard = ({ submited, setSubmited,rate, setRate }) => {
  return (
    <div className="card-container">
      <div className="rate-star-container">
        <img src={Path} />
      </div>
      <div className="card-content">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="number-container">
          <button value="1" onClick={(e) => setRate(e.target.value)}>
            1
          </button>
          <button value="2" onClick={(e) => setRate(e.target.value)}>
            2
          </button>
          <button value="3" onClick={(e) => setRate(e.target.value)}>
            3
          </button>
          <button value="4" onClick={(e) => setRate(e.target.value)}>
            4
          </button>
          <button value="5" onClick={(e) => setRate(e.target.value)}>
            5
          </button>
        </div>
        <div className="btn-container">
          <button
            onClick={() => setSubmited(!submited)}
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrimaryCard;
