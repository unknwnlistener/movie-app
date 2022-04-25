import React from "react";
import "../styles/genres.css";

export const GenreList = ({ genres, setSelectedGenres, selectedGenres }) => {
  const updateGenre = (id) => {
    if (selectedGenres.includes(id)) {
      setSelectedGenres(selectedGenres.filter((v) => v !== id));
    } else {
      setSelectedGenres([...selectedGenres, id]);
    }
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
