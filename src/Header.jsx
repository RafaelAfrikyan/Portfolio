import React from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="wrapper">
          <NavLink className={"headerDiv"} to="/">
            Home
          </NavLink>
        </div>
        <div className="wrapper2">
          <NavLink className={"headerDiv"} to="/about">
            About me
          </NavLink>
          <NavLink className={"headerDiv"} to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className={"headerDiv"} to="/books">
            Books
          </NavLink>
          <NavLink className={"headerDiv"} to="/contact">
            Contact
          </NavLink>
        </div>
      </header>
    </div>
  );
}
