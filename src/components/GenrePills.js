import React from "react";

export const GenrePills = ({ selectedGenres }) => {
  return (
    <div>
      {selectedGenres.length !== 0 ? <h3>Current Genres</h3> : ""}
      {selectedGenres.map((v) => {
        return <span className="genre-pill">{v}</span>;
      })}
    </div>
  );
};
