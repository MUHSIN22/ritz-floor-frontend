import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import NavLogo from "../asset/NavLogo.png";
export default function Navbar() {
  const hamRef = useRef(null);
  const navListRef = useRef(null);

  const hamburgerClickHandler = (event) => {
    hamRef.current.classList.toggle("hamburger--active")
    navListRef.current.classList.toggle("nav-list--active")
  }

  return (
    <div className="Navbar-Container">
      <div className="Nav-logo">
        <Link to="/">
          <img src={NavLogo} alt="" />
        </Link>
      </div>
      <div className="Nav-links" ref={navListRef}>
        <Link to="/">Home</Link>
        <Link to="/whychooseus">Why Choose Us</Link>
        <Link to="/specialOffers">Special Offers</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/ReferalPage">Refer and Earn</Link>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
      <ul className="hamburger" ref={hamRef} onClick={hamburgerClickHandler}>
        <li className="layer"></li>
        <li className="layer"></li>
        <li className="layer"></li>
      </ul>
    </div>
  );
}
