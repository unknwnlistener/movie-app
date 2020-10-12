import React from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { TitleCardsContainer } from "./TitleCardsContainer";

export const MainContent = () => {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <div className="content-wrapper">
        <Navbar></Navbar>
        <TitleCardsContainer></TitleCardsContainer>
      </div>
    </div>
  );
};
