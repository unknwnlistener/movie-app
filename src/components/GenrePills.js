import React from "react";

export const GenrePills = ({ selectedGenreNames }) => {
  return (
    <div>
      {selectedGenreNames.length !== 0 ? <h3>Current Genres</h3> : ""}
      {selectedGenreNames.map((genreName) => {
        return <span className="genre-pill">{genreName}</span>;
      })}
    </div>
  );
};
