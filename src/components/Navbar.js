import React from "react";

import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="narvbar__left">
        <h2>DD</h2>
      </div>
      <div className="search">
        <input placeholder="Search" />
        <SearchIcon style={{ marginRight: 10 }} />
      </div>
      <div className="navbar__right">
        <Link to="/home">MEN</Link>
        <Link to="/home">WOMEN</Link>
        <Link to="/home">KIDS</Link>
        <Link to="/home">LIVING</Link>
      </div>
    </div>
  );
}

export default Navbar;
