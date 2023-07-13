import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.cImage} width="100%" height="250px" />
        <div className="container">
          <h4>
            <b>{props.cTitle}</b>
          </h4>
          <p>{props.cDesc}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
