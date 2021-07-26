import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out my shiz!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/moon angel v2.png"
              text="After a long day of being an angel"
              path="/art"
            ></CardItem>
            <CardItem
              src="/images/dreaming in coffee.png"
              text="Too busy dreaming"
              path="/art"
            ></CardItem>
            <CardItem
              src="/images/kittycorn.png"
              text="Me and ammu but as cats"
              path="/art"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/me.png"
              text="Serenity"
              path="/art"
            ></CardItem>
            <CardItem
              src="/images/space pandas edited.png"
              text="Based on one of my best friends who we sometimes call panda "
              path="/art"
            ></CardItem>
            <CardItem
              src="/images/penguins.png"
              text="A true moment with one of my best friends! After our finals in grade 10, we chilled inside an empty majlis inside our school and watched Pingu. Half an episode passed when I realized my friend had fallen asleep but I didn't wake her up till I had to leave for a robotics meeting."
              path="/art"
            ></CardItem>
          </ul>
          <ul className="cards__items">
            <CardItem
              src="/images/space shwimp cropped.png"
              text="I want a pet space shwimp someday!"
              path="/art"
            ></CardItem>
            <CardItem
              src="/images/my creature!.png"
              text="I've come up with a new art style! For now, I'm informally calling it the onigirmon. This one's a representation of me"
              path="/art"
            ></CardItem>
            <CardItem
              src="/images/hassan onigirimon.png"
              text="I made an onigirimon for one of my friends :D"
              path="/art"
            ></CardItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
