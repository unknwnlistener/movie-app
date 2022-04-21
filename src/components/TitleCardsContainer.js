import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import { getDiscoverMovieListAsync } from "../utils/mdbApi";
import "../styles/cards-container.css";

export const TitleCardsContainer = ({ searchResults, genreSelect }) => {
  const [cards, setCards] = useState([]);
  let discoverList = useRef([]);

  useEffect(() => {
    getDiscoverMovieListAsync().then((data) => {
      discoverList.current = data.results;
      setCards(data.results);
    });
  }, []);

  useEffect(() => {
    getDiscoverMovieListAsync(genreSelect).then((data) => {
      if (data.results.length !== 0) {
        discoverList.current = data.results;
        setCards(data.results);
      }
    });
  }, [genreSelect]);

  useEffect(() => {
    if (searchResults.length === 0) {
      setCards(discoverList.current);
    } else {
      setCards(searchResults);
    }
  }, [searchResults]);

  return (
    <div className="cards-container-wrapper">
      <h1 className="list-title">
        {searchResults.length !== 0 ? "Searched" : "Discover"} Movies
      </h1>
      <div className="cards-container">
        {cards
          ? cards.map((card) => <Card key={card.id} cardDetails={card}></Card>)
          : null}
      </div>
    </div>
  );
};
