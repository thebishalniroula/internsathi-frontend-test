import React from "react";
import image from "/internet-pasal-hero.png";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left">
        <h1>The Nepali Commerce Platform</h1>
        <p>
          Build your business with InternetPasal to sell online, offline, and
          everywhere in between.
        </p>
        <div className="buttons">
          <button className="main-btn">
            Try for free{` `}
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
          <button className="sec-btn">
            <FontAwesomeIcon icon={faPlayCircle} />
            {` `} Watch the video
          </button>
        </div>
      </div>
      <div className="right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
