import React, { useState, useEffect } from "react";
import { Card } from "./Card";
import { getDiscoverMovieListAsync } from "../mdbApi";

export const TitleCardsContainer = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getDiscoverMovieListAsync().then((data) => setCards(data.results));
  }, []);

  return (
    <div className="cards-container-wrapper">
      <div className="cards-container">
        {cards
          ? cards.map((card) => <Card key={card.id} cardDetails={card}></Card>)
          : null}
      </div>
    </div>
  );
};
