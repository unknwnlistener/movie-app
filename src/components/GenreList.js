import React from "react";
import "../styles/genres.css";

export const GenreList = ({ genres, setGenre }) => {
  const updateGenre = (id) => {
    setGenre(id);
  };
  // console.log(genres);
  return (
    <div className="genre-list">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="genre-item"
          onClick={() => updateGenre(genre.id)}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};
