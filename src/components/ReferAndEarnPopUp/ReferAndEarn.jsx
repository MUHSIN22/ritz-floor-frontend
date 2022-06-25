import React from "react";
import "./ReferAndEarn.css";
import referal from "../asset/undraw_referral_re_0aji.svg";
export default function ReferAndEarn() {
  return (
    <div className="ReferAndEarn-Container">
      <div className="ReferAndEarn-Header">
        <h1>Refer and Earn </h1>
      </div>
      <div className="ReferAndEarn-Banner">
        <img src={referal} alt="" />
      </div>
      <div className="Refer-Form">
        <div className="Refer-Form-COl">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" id="01" />
        </div>
        <div className="Refer-Form-COl">
          <label htmlFor="Name">Email Id</label>
          <input type="email" name="Name" id="01" />
        </div>
        <div className="Refer-Form-COl">
          <label htmlFor="Name">Contact No</label>
          <input type="text" name="Name" id="01" />
        </div>
      </div>
      <div className="Refer-Submit">
        <button className="Submit-btn">Submit</button>
      </div>
    </div>
  );
}
