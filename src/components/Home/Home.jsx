import React, { useState, useEffect } from "react";
import "./Home.css";
import { LocalPhone } from "@mui/icons-material";
import ProductCat from "../Product-Carousel/ProductCat";
import { Link } from "react-router-dom";
import laminate from "../asset/laminate-m-380x254.jpg";
import akash from "../asset/Aks.png";
import Vector from "../asset/Kerikature.png";
import { Component } from "react";
import Slider from "react-slick";
import MainBanner from "../Banner/MainBanner";
import HomeTestimonialCarousel from "../HomeTestimonialCarousel/HomeTestimonialCarousel";
import BannerImage from '../asset/BannerImage.png'
import BannerImageMobile from '../asset/BannerImageMobile.png'
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";
export default function Home() {
	const [whyChooseUs, setWhyChooseUs] = useState(null)

	useEffect(() => {
		window.scrollTo(0, 0)
		PageDataFetcher.getSectionItems('homepage', 2)
			.then(res => {
				console.log(res[0]);
				setWhyChooseUs(res[0])
			})
	}, [])
	return (
		<div className="Home-Container">
			<MainBanner background={BannerImage} />
			<div className="Products">
				<ProductCat />
			</div>
			{
				whyChooseUs &&
				<div className="Why-choose-us">
					<div className="Why-choose-us-content">
						<h1>{whyChooseUs.title}</h1>
						<h4>
							{whyChooseUs.content}
						</h4>
						<Link to="/whychooseus" className="Read-more">
							Read More
						</Link>
					</div>
					<div className="Why-choose-us-Image">
						<img src={config.backendURL+whyChooseUs.img} alt="" />
					</div>

					{/* <div className="Home-CariKature">
					<img src={Vector} alt="" />
				</div> */}
				</div>
			}
			<h1 className="client-text-h1">What Client Says</h1>
			<div className="Testimonial-Carousel">
				<HomeTestimonialCarousel />
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
	useEffect(() => { }, []);
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
