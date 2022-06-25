import React from "react";
import "./ProductPage.css";
import BannerImage02 from "../asset/BannerImage02.png";
import { LocalPhone } from "@mui/icons-material";
import vinyl01 from "../asset/vinyl01.jpg";
import vinyl02 from "../asset/vinyl02.jpg";
import vinyl03 from "../asset/vinyl03.jpg";
export default function ProductPage() {
  return (
    <div className="ProductPage-Container">
      <div className="ProductPage-Banner">
        <img src={BannerImage02} alt="" />
        <div className="ProductPage-Banner-Contact-details">
          <h1>Ritz Floor and Decor</h1>
          <h3>Give an exotic look to your home</h3>
          <h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
          <div className="ProductPage-Btn-row">
            <span>
              <LocalPhone />
            </span>
            <a href="tel:+ 604-702-2233">+ 604-702-2233</a>
          </div>
          <a
            href="mailto:ritzfloor@gmail.com"
            className="ProductPage-Banner-Contact-details-Email"
          >
            Email:ritzfloor@gmail.com
          </a>
        </div>
      </div>
      <div className="Product-DisplayCards">
        {" "}
        <div className="DisplayCards-Header">
            <h1>Vinyl Products</h1>
        </div>
        <div className="Product-Card-Grid">
          <div className="Product-Card-element">
            <div className="Product-Card-element-image">
              <img src={vinyl01} alt="" />
            </div>

            <div className="Product-Description">
              <h3>Sea Oak Beige</h3>
              <h4>Vinyl-Alpha Vinyl-Medium</h4>
            </div>
          </div>
          <div className="Product-Card-element">
            <div className="Product-Card-element-image">
              <img src={vinyl02} alt="" />
            </div>

            <div className="Product-Description">
              <h3>Sea Oak Beige</h3>
              <h4>Vinyl-Alpha Vinyl-Medium</h4>
            </div>
          </div>
          <div className="Product-Card-element">
            <div className="Product-Card-element-image">
              <img src={vinyl03} alt="" />
            </div>

            <div className="Product-Description">
              <h3>Sea Oak Beige</h3>
              <h4>Vinyl-Alpha Vinyl-Medium</h4>
            </div>
          </div>
          <div className="Product-Card-element">
            <div className="Product-Card-element-image">
              <img src={vinyl01} alt="" />
            </div>

            <div className="Product-Description">
              <h3>Sea Oak Beige</h3>
              <h4>Vinyl-Alpha Vinyl-Medium</h4>
            </div>
          </div>
          <div className="Product-Card-element">
            <div className="Product-Card-element-image">
              <img src={vinyl02} alt="" />
            </div>

            <div className="Product-Description">
              <h3>Sea Oak Beige</h3>
              <h4>Vinyl-Alpha Vinyl-Medium</h4>
            </div>
          </div>
          <div className="Product-Card-element">
            <div className="Product-Card-element-image">
              <img src={vinyl03} alt="" />
            </div>

            <div className="Product-Description">
              <h3>Sea Oak Beige</h3>
              <h4>Vinyl-Alpha Vinyl-Medium</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
