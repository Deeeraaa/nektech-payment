import React from "react";
import card from "../../assets/card.png";
import "../Content/Content.css";

export default function Content() {
  return (
    <>
      <div className="content-container">
        <div className="image-content">
          <img src={card} alt="credit card" />
        </div>

        <div className="form-control1">
          <form className="form-div1">
            <label>Card credit Number</label>
            <br />
            <input
              type="text"
              className="input-field"
              name="name"
              placeholder="4324 5433 9382 1030"
            />

            <label>
              {" "}
              <br />
              Expiration date
            </label>
            <br />

            <input
              type="text"
              className="input-field"
              name="name"
              placeholder="03/24"
            />
          </form>
        </div>
        <div className="form-control2">
          <form className="form-div2">
            <label>
              {" "}
              <br />
              Postal Code
            </label>
            <br />
            <input
              type="text"
              className="input-field"
              name="name"
              placeholder="10119"
            />
            <label>
              {" "}
              <br />
              Security code
            </label>
            <br />
            <input
              type="text"
              className="input-field"
              name="name"
              placeholder="420"
            />
          </form>
        </div>
      </div>

      <div className="radio-container">
        <label class="container">
          <input type="radio" name="radio" />
          <span class="checkmark"> </span>
          Use this card for next time purchase
        </label>
      </div>
      <div className="btn0">
        <button className="btn1">
          <p>Add card</p>
        </button>
      </div>
    </>
  );
}
