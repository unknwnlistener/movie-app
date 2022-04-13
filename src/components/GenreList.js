import React from "react";
import "../styles/genres.css";

export const GenreList = ({ genres }) => {
  // console.log(genres);
  return (
    <div className="genre-list">
      {genres.map((genre) => (
        <span key={genre.id} className="genre-item">
          {genre.name}
        </span>
      ))}
    </div>
  );
};
