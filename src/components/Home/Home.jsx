import React, { useState, useEffect } from "react";
import "./Home.css";
import BannerImage from "../asset/BannerImage.png";
import { LocalPhone } from "@mui/icons-material";
import ProductCat from "../Product-Carousel/ProductCat";
import { Link } from "react-router-dom";
import laminate from "../asset/laminate-m-380x254.jpg";
import akash from "../asset/Aks.png";
import TestimonialCarousel from "../Home-Testimonial-Carousel/TestimonialCarousel";
import Vector from "../asset/Kerikature.png";
import { Component } from "react";
import Slider from "react-slick";
import CustomClientCrousel from "../VanillaVideo/customClientCrousel";
export default function Home() {
	return (
		<div className="Home-Container">
			<div className="Banner">
				<img src={BannerImage} alt="" />
				<div className="Banner-Contact-details">
					<h1>Ritz Floor and Decor</h1>
					<h3>Give an exotic look to your home</h3>
					<h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
					<div className="Btn-row">
						<span>
							<LocalPhone />
						</span>
						<a href="tel:+ 604-702-2233">+ 604-702-2233</a>
					</div>
					<a
						href="mailto:ritzfloor@gmail.com"
						className="Banner-Contact-details-Email"
					>
						Email : ritzfloor@gmail.com
					</a>
				</div>
			</div>
			<div className="Products">
				<ProductCat />
			</div>
			<div className="Why-choose-us">
				<div className="Why-choose-us-content">
					<h1>Why Choose Us</h1>
					<h4>
						When it comes to creating a beautiful space, flooring plays a
						decisive role. We invite you to have a look at the stunning Span
						floor installations across the country.
					</h4>
					<Link to="/Aboutus" className="Read-more">
						Read More
					</Link>
				</div>
				<div className="Why-choose-us-Image">
					<img src={laminate} alt="" />
				</div>

				<div className="Home-CariKature">
					<img src={Vector} alt="" />
				</div>
			</div>
			<h1 className="client-text-h1">What Client Says</h1>
			<div className="Testimonial-Carousel">
				<CustomClientCrousel />
			</div>
		</div>
	);
}

const CenterModee = () => {
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 3,
		speed: 500,
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 1000,
	};

	return (
		<>
			<div className="slick-crousel-container">
				<h2>Center Mode</h2>
				<Slider {...settings}>
					<h1>fff</h1>
					<h1>hsflfksfl</h1>
					<h1>ksfkf</h1>
				</Slider>
			</div>
		</>
	);
};
const CustomSlider = () => {
	
	return <div className="new-card">

	</div>;
};

const CenterMode = () => {
	useEffect(() => {}, []);
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "20px",
		slidesToShow: 3,
		speed: 500,
		showdots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		arrows: true,
		className: "slider-card",
		focusOnSelect: true,
	};

	const settingss = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		speed: 500,
	};

	return (
		<div>
			<h2 className="center-heading">What Client Says</h2>
			<Slider {...settings}>
				<div className="slider-card scale">
					<h3>1</h3>
				</div>
				<div className="slider-card">
					<h3>2</h3>
				</div>
				<div className="slider-card">
					<h3>3</h3>
				</div>
				<div className="slider-card">
					<h3>3</h3>
				</div>
			</Slider>
		</div>
	);
};
