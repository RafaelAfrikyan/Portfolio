import React from "react";
import marvin from "../assets/marvin.png";
import About from "./About";
import Carusel from "./Carusel";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className='homeWrap'>
      <div className="home">
        <div className="homeText">
          <h1>Dear friend</h1>
          <p>Welcome to my web-site</p>
          <p>
            I am junior web-developer and this is my first step toward
            developing.
          </p>
          <img src={marvin} alt="" />
        </div>
      </div>
      <About />
      <Carusel />
      <Contact />
    </div>
  );
}
