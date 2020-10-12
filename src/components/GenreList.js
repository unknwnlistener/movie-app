import React from "react";

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
