import React from "react";
import { getGenreListAsync } from "../utils/mdbApi";
import { GenreList } from "./GenreList";
import Logo from "../logo.svg";
import "../styles/sidebar.css";

export const Sidebar = ({ setGenre }) => {
  const [genreList, setGenreList] = React.useState([]);
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
      <div className="logo">
        <img src={Logo} alt="Moovie logo"></img>
      </div>
      <div className="list-items">
        <div className="item genres">
          <button>genres</button>
          <GenreList setGenre={setGenre} genres={genreList}></GenreList>
        </div>
      </div>
    </div>
  );
};
