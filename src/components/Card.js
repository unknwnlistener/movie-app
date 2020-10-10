import React, { useState, useEffect } from "react";
import { getPosterPath } from "../mdbApi";

export const Card = ({ cardDetails }) => {
  //   return <p className="card-details">{JSON.stringify(cardDetails)}</p>;
  const [posterUrl, setPosterUrl] = useState("");

  useEffect(() => {
    setPosterUrl(getPosterPath(cardDetails.poster_path));
    //eslint-disable-next-line
  }, []);

  return (
    <div className="card-details">
      <img src={posterUrl} alt={cardDetails.title} />
      <p className="title">{cardDetails.title}</p>
      <p className="date">{cardDetails.release_date}</p>
    </div>
  );
};
