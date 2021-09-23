import React from "react";
import Search from "../../asset/search.svg";
import Location from "../../asset/location.svg";
import "./search-bar.css";

const SearchBar = () => {
  return (
    <section className="search-bar">
      <div className="text-input">
        <img className="bottom-img" src={Search} alt="img" />
        <input
          className="input"
          type="text"
          id="search"
          name="search"
          placeholder="Job title or keyword"
        />
      </div>
      <div className="text-input">
        <img className="bottom-img" src={Location} alt="img" />
        <select className="select" name="location" id="location">
          <option selected disabled>
            Select Location
          </option>
          <option value="volvo">Bangalore</option>
          <option value="saab">New Delhi</option>
          <option value="opel">Kolkatta</option>
          <option value="audi">Chanai</option>
        </select>
      </div>
      <div>
        <button className="button">Search</button>
      </div>
    </section>
  );
};

export default SearchBar;
