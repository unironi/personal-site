import React from "react";
import "./AboutMe.css";
import CardItem from "./CardItem";
import Image from "react-bootstrap/Image";

function AboutMe() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <div className="card">
              <div className="card-body">
                <h1 className="card-title">About Me</h1>
                <p className="card-text">
                  Hello fellow mortal, nice to see you around here! My name is
                  Oroni and I'm in my second year of Computer Science at the
                  University of Waterloo. Having little programming experience
                  in the past, I thought that one of the cool things about being
                  in a tech-y university is that I get exposed to a lot of
                  exciting programming concepts and languages outside of courses
                  which I can use to build my own projects, such as using
                  React.js, CSS, and Firebase for this personal website. I've
                  always been an art kid and have always loved creating things,
                  so creating technical projects has been both fun and yet very
                  challenging. It's easy to be open to everything when I'm new
                  to a particular realm, so at times it can be overwhelming to
                  have all these languages thrown at me, but I realized that
                  when I stick to one language for a bit and understand its
                  concepts and applications, I appreciate it a lot more. Besides
                  broadening my technical expertise, I create digital art in my
                  free time which you can check out in the Art section! I'm also
                  an avid daydreamer and bake epic brownies.
                </p>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
