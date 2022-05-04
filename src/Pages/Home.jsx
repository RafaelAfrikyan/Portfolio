import React, { useEffect, useRef, useState } from "react";
import marvin from "../assets/marvin.png";
import About from "./About";
import Carusel from "./Carusel";
import Contact from "./Contact";
import Header from "../Header";
import Layout from "../Layout/Layout";

export default function Home() {
  const aboutRef = useRef(null);
  const caruselRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const homeHeader = useRef(null);
  const portfolioHeader = useRef(null);
  const aboutHeader = useRef(null);
  const booksHeader = useRef(null);
  const contactHeader = useRef(null);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [homeVisible, sethomeVisible] = useState(false);

  const homeCb = (entries) => {
    const [entry] = entries;
    sethomeVisible(entry.isIntersecting);
    console.log(entry);
  };

  const aboutCb = (entries) => {
    const [entry] = entries;
    setAboutVisible(entry.isIntersecting);
  };
  const contactCb = (entries) => {
    const [entry] = entries;
    setContactVisible(entry.isIntersecting);
  };

  const cb = (entries) => {
    const [entry] = entries;
    setPortfolioVisible(entry.isIntersecting);
  };
  const optionsHome = {
    root: null,
    rootMargin: "300px",
    threshold: 1.0,
  };
  const options = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  };
  const optionsAbout = {
    root: null,
    rootMargin: "300px",
    threshold: 1.0,
  };
  const optionsContact = {
    root: null,
    rootMargin: "100px",
    threshold: 1.0,
  };

  useEffect(() => {
    const sectionObserverHome = new IntersectionObserver(homeCb, optionsHome);
    if (homeRef.current) sectionObserverHome.observe(homeRef.current);
    homeVisible
      ? (homeHeader.current.className = "active")
      : (homeHeader.current.className = "headerDiv");

    return () => {
      if (homeRef.current) sectionObserverHome.unobserve(homeRef.current);
    };
  }, [homeRef, optionsHome, homeVisible]);

  useEffect(() => {
    const sectionObserverAbout = new IntersectionObserver(
      aboutCb,
      optionsAbout
    );
    if (aboutRef.current) sectionObserverAbout.observe(aboutRef.current);
    aboutVisible
      ? (aboutHeader.current.className = "active")
      : (aboutHeader.current.className = "headerDiv");

    return () => {
      if (aboutRef.current) sectionObserverAbout.unobserve(aboutRef.current);
    };
  }, [aboutRef, optionsAbout, contactVisible]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(cb, options);
    if (caruselRef.current) sectionObserver.observe(caruselRef.current);
    portfolioVisible
      ? (portfolioHeader.current.className = "active")
      : (portfolioHeader.current.className = "headerDiv");

    return () => {
      if (caruselRef.current) sectionObserver.unobserve(caruselRef.current);
    };
  }, [caruselRef, options, portfolioVisible]);

  useEffect(() => {
    const sectionObserverContact = new IntersectionObserver(
      contactCb,
      optionsContact
    );
    if (contactRef.current) sectionObserverContact.observe(contactRef.current);
    contactVisible
      ? (contactHeader.current.className = "active")
      : (contactHeader.current.className = "headerDiv");

    return () => {
      if (contactRef.current)
        sectionObserverContact.unobserve(contactRef.current);
    };
  }, [contactRef, optionsContact, contactVisible]);

  return (
    <div className="homeWrap">
      <Layout
        homeHeader={homeHeader}
        portfolioHeader={portfolioHeader}
        aboutHeader={aboutHeader}
        booksHeader={booksHeader}
        contactHeader={contactHeader}
      />
      <div ref={homeRef} className="home">
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
      <About aboutRef={aboutRef} />
      <Carusel caruselRef={caruselRef} />
      <Contact contactRef={contactRef} />
    </div>
  );
}
