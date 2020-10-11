import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">Logo</div>
        <form className="search-bar">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <input type="text" placeholder="Search movies" autoComplete="off" />
          <button className="search-submit" type="submit">
            <i className="fa fa-arrow-right"></i>
          </button>
        </form>
        <div className="menu-items">
          <p>Home</p>
          <p>Genres</p>
        </div>
      </div>
    </nav>
  );
};
