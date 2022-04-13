import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { getDiscoverMovieListAsync } from "../utils/mdbApi";
import "../styles/cards-container.css";

export const TitleCardsContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDiscoverMovieListAsync().then((data) => setCards(data.results));
  }, []);

  return (
    <div className="cards-container-wrapper">
      <h1 className="list-title">Discover Movies</h1>
      <div className="cards-container">
        {cards
          ? cards.map((card) => <Card key={card.id} cardDetails={card}></Card>)
          : null}
      </div>
    </div>
  );
};
