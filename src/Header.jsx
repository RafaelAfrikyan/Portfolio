import React from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";

export default function Header({portfolioHeader, aboutHeader, booksHeader, contactHeader}) {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <NavLink className={"headerDiv"} to="/">
            Home
          </NavLink>
        </div>
        <div className="wrapper2">
          <NavLink ref={aboutHeader}
            className={({ isActive }) => (isActive ? "active" : "headerDiv")}
            to="/about"
          > 
            About me
          </NavLink>
          <NavLink ref={portfolioHeader} 
            className={({ isActive }) => (isActive ? "active" : "headerDiv")}
             to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink ref={booksHeader} className={({ isActive }) => (isActive ? "active" : "headerDiv")} to="/books">
            Books
          </NavLink>
          <NavLink ref={contactHeader} className={({ isActive }) => (isActive ? "active" : "headerDiv")} to="/contact">
            Contact
          </NavLink>
        </div>
      </header>
    </div>
  );
}
