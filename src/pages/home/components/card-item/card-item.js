import React from "react";
import "./card-item.css";

const CardItem = () => {
  return (
    <div className="card-item">
      <div className="rectangle"></div>
      <section>
        <div className="text">
          <span className="title">Executive Producer</span>
          <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliq</p>
        </div>
        <button className="view">View Details</button>
      </section>
    </div>
  );
};

export default CardItem;
