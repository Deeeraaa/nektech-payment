import React from "react";
import visa from "../../assets/visa-img.PNG";
import paypal from "../../assets/paypal.png";
import discover from "../../assets/discover.png";
import box from "../../assets/box.png";
import "../Header/Header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-content">
          <h2 className="h2">Payment Information </h2>
          <p className="p">Choose your method of payment</p>
        </div>
        <div className="header-image">
          <div className="header-img">
            
              <span>
                <img src={visa} alt="visa image" className="visa" />
              </span>

              <span>
                <img src={discover} alt="visa image" className="discover" />
              </span>

              <span>
                <img src={box} alt="visa image" className="box" />
              </span>

              <span>
                <img src={paypal} alt="visa image" className="paypal" />
              </span>
         
          </div>
        </div>
      </div>
    </>
  );
}
