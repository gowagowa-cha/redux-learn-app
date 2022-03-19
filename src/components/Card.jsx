import React from "react";
import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <div>
      <button className="back-btn">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default Card;
