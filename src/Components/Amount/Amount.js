import React from "react";
import "../Amount/Amount.css";

export default function Amount() {
  return (
    <>
      <div className="amount-container">
        <div className="amount-name">
          <div className="amount-item">
            <span className="Subtotal">Subtotal</span>
          </div>

          <div className="amount-item">
            <span className="et">Estimated Tax</span>
          </div>

          <div className="amount-item">
            <span className="PC">bbbPromotional Code:Z4KXLM9A</span>
          </div>
        </div>

        <div className="amount-numb">
          <div className="each">
            <span>₦2,497.00</span>
          </div>
          <div className="each">
            <span  >₦2,497.00</span>
          </div>
          <div className="each">
            <span >₦2,497.00</span>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
