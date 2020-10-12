import React from "react";
import { getGenreListAsync } from "../mdbApi";
import { GenreList } from "./GenreList";

export const Sidebar = () => {
  const [genreList, setGenreList] = React.useState([]);
  const [showGenre, setShowGenre] = React.useState(false);
  React.useEffect(() => {
    getGenreListAsync().then((data) => {
      setGenreList(data.genres);
    });
  }, []);

  // let listItems = [
  //   { code: "g", title: "genres" },
  //   { code: "c", title: "categories" },
  //   { code: "r", title: "recommended" },
  //   { code: "t", title: "top charts" },
  //   { code: "n", title: "new releases" },
  // ];

  return (
    <div className="sidebar">
      <div className="logo">Logo</div>
      <div className="list-items">
        <div className="item genres">
          <button>genres</button>
          <GenreList genres={genreList}></GenreList>
        </div>
      </div>
    </div>
  );
};
