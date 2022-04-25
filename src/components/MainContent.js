import React, { useState } from "react";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import { TitleCardsContainer } from "./TitleCardsContainer";

import { searchMovieAsync } from "../utils/mdbApi";
import "../styles/index.css";

export const MainContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setResults] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const submitSearch = () => {
    if (searchQuery !== "") {
      searchMovieAsync(searchQuery).then((data) => setResults(data.results));
    } else {
      setResults([]);
    }
    setSearchQuery("");
  };
  return (
    <div className="container">
      <Sidebar
        setSelectedGenres={setSelectedGenres}
        selectedGenres={selectedGenres}
      ></Sidebar>
      <div className="content-wrapper">
        <Navbar
          setSearch={setSearchQuery}
          search={searchQuery}
          submitSearch={submitSearch}
        ></Navbar>
        <TitleCardsContainer
          selectedGenres={selectedGenres}
          searchResults={searchResults}
        ></TitleCardsContainer>
      </div>
    </div>
  );
};
