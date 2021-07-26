import React from "react";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";
import AboutMe from "../AboutMe";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
}

export default Home;
