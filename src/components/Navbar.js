import React from "react";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <form className="search-bar">
          <div className="search-icon">
            <i className="fa fa-search"></i>
          </div>
          <input type="text" placeholder="Search movies" autoComplete="off" />
          <button className="search-submit" type="submit">
            <i className="fa fa-arrow-right"></i>
          </button>
        </form>
      </div>
    </nav>
  );
};
