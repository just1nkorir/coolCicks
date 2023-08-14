import React from "react";
import logo from "../assets/images/kicks/467927cba825a262c63e325902d1b4d7.jpg";

function ShoeCard() {
  return (
    <div className="shoecard-cont">
      <div className="shoe-image">
        
        <img src={logo} alt="" />
      </div>
      <div className="shoe-desc">
        <h3>Nike Cosmic shoe</h3>
        <div className="about-shoe">
          <span>Sustainable material</span>
          <span>Basketball</span>
          <span>3 colors</span>
        </div>
        <div className="shoe-bottom">
          <span>
            <b>USD 400.00</b>
          </span>
          <span>
            <a href="#">Add to cart</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShoeCard;
