import React from "react";
import ImgMediaCard from "./Card";
import timer from "../assets/timer.png";
import calculator from "../assets/calculator.png";
import trello from "../assets/trello.png";
import shop from "../assets/shop.png";
import todo from "../assets/TODO.png";
import sea from "../assets/sea.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <ImgMediaCard title={"Sea Battle"} photo={sea} />
      <ImgMediaCard title={"Calculator"} photo={calculator} />
      <ImgMediaCard title={"Timer"} photo={timer} />
      <ImgMediaCard title={"Trello"} photo={trello} />
      <ImgMediaCard title={"Online shop"} photo={shop} />
      <ImgMediaCard title={"ToDo"} photo={todo} />
    </div>
  );
}
