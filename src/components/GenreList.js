import React from "react";
import "../styles/genres.css";

export const GenreList = ({ genres, setSelectedGenres, selectedGenres }) => {
  const updateGenre = (genre) => {
    if (selectedGenres.some((selectedG) => selectedG.id === genre.id)) {
      setSelectedGenres(selectedGenres.filter((v) => v.id !== genre.id));
    } else {
      setSelectedGenres([
        ...selectedGenres,
        { id: genre.id, name: genre.name },
      ]);
    }
  };
  return (
    <div className="genre-list">
      {genres.map((genre) => (
        <div
          key={genre.id}
          className="genre-item"
          onClick={() => updateGenre(genre)}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};
