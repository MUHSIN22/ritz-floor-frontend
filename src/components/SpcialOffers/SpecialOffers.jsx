import React from "react";
import "./SpecialOffers.css";
import BannerImage from "../asset/BannerImage05.png";
import { LocalPhone } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import OffersCarousel from "../OffersCarousel/OffersCarousel";
import UpComingCarousel from "../UpComingCarousel/UpComingCarousel";
export default function SpecialOffers() {
  return (
    <div className="SpecialOffers-Container">
      {" "}
      <div className="SpecialOffers-Banner">
        <img src={BannerImage} alt="" />
        <div className="SpecialOffers-Banner-Contact-details">
          <h1>Ritz Floor and Decor</h1>
          <h3>Give an exotic look to your home</h3>
          <h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
          <div className="SpecialOffers-Btn-row">
            <span>
              <LocalPhone />
            </span>
            <a href="tel:+ 604-702-2233">+ 604-702-2233</a>
          </div>
          <a
            href="mailto:ritzfloor@gmail.com"
            className="SpecialOffers-Banner-Contact-details-Email"
          >
            Email:ritzfloor@gmail.com
          </a>
        </div>
        <div className="SpecialOffers-CariKature">
          <img src={Vector} alt="" />
        </div>
      </div>
      <div className="SpecialOffer-Carousel">
        <OffersCarousel />
      </div>
      <div className="UC-Carousel">
        <UpComingCarousel />
      </div>
    </div>
  );
}
