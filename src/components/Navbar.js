import React from "react";

import { Link } from "react-router-dom";
import "../components/Navbar.css";
import usericon from "../user.svg";
import wishlisticon from "../wishlist.svg";
import bagicon from "../bag.svg";
import { useHistory } from "react-router-dom";
import NavbarOne from "../components/NavbarOne";

function Navbar() {
  const history = useHistory();

  const handleUserIconOnClick = () => {
    history.push("/Login");
  };
  return (
    <div className="combineNavbar">
      <NavbarOne />
      <div className="navbar">
        <div className="narvbar__left">{/* <h2>DD</h2> */}</div>
        <div className="navbar__center">
          <div className="search">
            <img
              src={usericon}
              alt="user icon"
              onClick={handleUserIconOnClick}
            />
          </div>
          <div className="search">
            <img src={wishlisticon} alt="wishlist icon" />
          </div>
          <div className="search">
            <img src={bagicon} alt="bag icon" />
          </div>
        </div>
        <div className="navbar__right">
          <Link to="/men">MEN</Link>
          <Link to="/login">WOMEN</Link>
          <Link to="/home">KIDS</Link>
          <Link to="/home">LIVING</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
