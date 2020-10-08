import React from "react";
import "../components/MenCompo.css";

function MenCompo() {
  return (
    <div className="menCompo">
      <img
        src="https://images.bewakoof.com/t320/bike-high-head-higher-half-sleeve-raglan-t-shirt-navy-blue-black-men-s-printed-half-sleeve-raglan-t-shirt-291792-1602057946.jpg"
        alt="test"
      />
      <h3>Jaane Ka Nahi sleev T-Shirt</h3>
      <div className="price_tag">
        <p>499 Rs.</p>
        {/* <p>799 Rs.</p> */}
      </div>
      <h5>
        <b>Rs. 399 </b> For DEAL-DADDY MEMBERS
      </h5>
    </div>
  );
}

export default MenCompo;
