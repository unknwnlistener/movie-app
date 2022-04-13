import React from "react";
import "../styles/navbar.css";

export const Navbar = ({ search, setSearch, submitSearch }) => {
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="search-bar">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <input
            value={search}
            type="text"
            placeholder="Search movies"
            autoComplete="off"
            onChange={(e) => updateSearch(e)}
          />
          <button onClick={() => submitSearch()} className="search-submit">
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};
