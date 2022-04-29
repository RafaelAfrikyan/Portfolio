import React from "react";
import marvin from "../assets/marvin.png";

export default function Home() {
  return (
    <div className="home">
      <div className="homeText">
        <h1>Dear friend</h1>
        <p>Welcome to my web-site</p>
        <p>
          I am junior web-developer and this is my first step toward developing.
        </p>
      </div>
      <img src={marvin} alt="" />
    </div>
  );
}
