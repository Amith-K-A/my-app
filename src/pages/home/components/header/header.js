import React from "react";
import Job from "../../asset/job.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <section className="top-bar">
        <div className="logo">
          <img className="bottom-img" src={Job} alt="img" />
          <h1>JobHunt</h1>
        </div>
        <div className="menu">
          <section className="left-item">
            <menu>Find Jobs</menu>
            <menu>Upskill Yourself</menu>
          </section>
          <section className="right-item">
            <menu>Post a Job</menu>
            <menu>Sign In</menu>
          </section>
        </div>
      </section>

      <section className="title">
        <div className="heading">Find Your Dream Job</div>
        <div>Browse through thousands of full-time or part-time jobs near you</div>
      </section>
    </header>
  );
};

export default Header;
