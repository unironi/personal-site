import React from "react";
import { Button } from "./Button";
import "./Hero.css";
import "../App.css";

function Hero() {
  return (
    <div className="hero-container">
      <video
        src="/videos/mixkit-network-of-luminous-particles-in-space-19003-medium.mp4"
        autoPlay
        loop
        muted
      ></video>
      <h1>HI, I'M ORONI</h1>
      <p>Welcome to my cyber kingdom!</p>
    </div>
  );
}

export default Hero;
