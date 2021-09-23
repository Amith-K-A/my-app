import React from "react";
import SearchBar from "../search-bar/search-bar";
import CardItem from "../card-item/card-item";
import "./body.css";

const Body = () => {
  return (
    <main className="body">
      <SearchBar />
      <div className="grid">
        {Array.from(Array(10), (_, i) => (
          <CardItem />
        ))}
      </div>
    </main>
  );
};

export default Body;
