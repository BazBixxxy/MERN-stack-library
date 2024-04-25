import React from "react";
import { Link } from "react-router-dom";
import "../styles/Start.css";

const StartPage = () => {
  return (
    <section className="start">
      <div className="home-container">
        <h2>
          Welcome To My Full Stack Library App <br /> Designed Using The MERN
          STACK
        </h2>
        <p>Explore the different functionalities of my site</p>
        <Link to="/library">
          <button className="library">Go To App</button>
        </Link>
      </div>
    </section>
  );
};

export default StartPage;
