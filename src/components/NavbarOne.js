import React from "react";
import "../components/NavbarOne.css";
import { Link } from "react-router-dom";
function NavbarOne() {
  return (
    <div className="navbarone">
      <div className="narvbarone__left">
        {" "}
        <Link to="/home">OFFERS 💰</Link>
        <Link to="/login">FAN BOOK 📘</Link>
        <Link to="/login">DOWNLOAD APP 📱</Link>
        <Link to="/login">DADDY MEMBERSHIP 😎</Link>
      </div>
      {/* <div className="navbarone__center">
        <h1>center</h1>
      </div> */}
      <div className="navbarone__right">
        <Link to="/home">CONTACT US 📞 </Link>
        <Link to="/login">TRACK ORDERS 🚚 </Link>
      </div>
    </div>
  );
}

export default NavbarOne;
