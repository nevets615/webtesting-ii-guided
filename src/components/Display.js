import React from "react";
import "../App.css";

const Display = props => {
  return (
    <div>
      <li>Balls {props.balls}</li>
      <li>Strikes {props.strikes}</li>
    </div>
  );
};

export default Display;
