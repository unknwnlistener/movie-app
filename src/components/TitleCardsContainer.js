import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import { GenrePills } from "./GenrePills";
import { getDiscoverMovieListAsync } from "../utils/mdbApi";
import "../styles/cards-container.css";

export const TitleCardsContainer = ({ searchResults, selectedGenres }) => {
  const [cards, setCards] = useState([]);
  let discoverList = useRef([]);

  useEffect(() => {
    getDiscoverMovieListAsync().then((data) => {
      discoverList.current = data.results;
      setCards(data.results);
    });
  }, []);

  useEffect(() => {
    getDiscoverMovieListAsync(selectedGenres).then((data) => {
      if (data.results.length !== 0) {
        discoverList.current = data.results;
        setCards(data.results);
      }
    });
  }, [selectedGenres]);

  useEffect(() => {
    if (searchResults.length === 0) {
      setCards(discoverList.current);
    } else {
      setCards(searchResults);
    }
  }, [searchResults]);

  return (
    <>
      <span className="genre-pills-active">
        <GenrePills selectedGenres={selectedGenres}></GenrePills>
      </span>
      <div className="cards-container-wrapper">
        <h1 className="list-title">
          {searchResults.length !== 0 ? "Searched" : "Discover"} Movies
        </h1>
        <div className="cards-container">
          {cards
            ? cards.map((card) => (
                <Card key={card.id} cardDetails={card}></Card>
              ))
            : null}
        </div>
      </div>
    </>
  );
};
