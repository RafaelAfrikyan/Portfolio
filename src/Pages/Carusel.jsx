import React, { Component } from "react";
import ImgMediaCard from "./Card";
import timer from "../assets/timer.png";
import calculator from "../assets/calculator.png";
import trello from "../assets/trello.png";
import shop from "../assets/shop.png";
import todo from "../assets/TODO.png";
import sea from "../assets/sea.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <img
      src="https://www.svgrepo.com/show/204992/right-arrow-next.svg"
      className="next"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;

  return (
    <img
      src="https://www.svgrepo.com/show/204974/left-arrow-next.svg"
      className="prev"
      onClick={onClick}
    />
  );
}

export default function Carusel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,

    autoplaySpeed: 3000,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="container">
      <Slider className="innerDiv" {...settings}>
        <div>
          <ImgMediaCard title="Timer" photo={timer} />
        </div>
        <div>
          <ImgMediaCard title="Calculator" photo={calculator} />
        </div>
        <div>
          <ImgMediaCard title="Trello" photo={trello} />
        </div>
        <div>
          <ImgMediaCard title="Shop" photo={shop} />
        </div>
        <div>
          <ImgMediaCard title="ToDO" photo={todo} />
        </div>
        <div>
          <ImgMediaCard title="Sea Battle" photo={sea} />
        </div>
      </Slider>
    </div>
  );
}
