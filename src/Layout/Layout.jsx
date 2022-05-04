import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header";

export default function Layout({
  portfolioHeader,
  aboutHeader,
  booksHeader,
  contactHeader,
  homeHeader
}) {
  return (
    <div>
      <Header
      homeHeader={homeHeader}
        portfolioHeader={portfolioHeader}
        aboutHeader={aboutHeader}
        booksHeader={booksHeader}
        contactHeader={contactHeader}
      />
      <Outlet />
    </div>
  );
}
