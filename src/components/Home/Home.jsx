import React, { useState, useEffect, Fragment } from "react";
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
import BannerImage from '../asset/BannerImage.webp'
import BannerImageMobile from '../asset/BannerImageMobile.png'
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";
import lineBreaker from "../Utils/lineBreaker";
import call from '../asset/icons/call.png'
import facebook from '../asset/icons/facebook.png'
import instagram from '../asset/icons/instagram.png'
import google from '../asset/icons/google.png'
import EstimationModal from "../EstimationModal/EstimationModal";
export default function Home() {
	const [whyChooseUs, setWhyChooseUs] = useState(null)
	const [clientReviews, setClientReviews] = useState([])
	const [isEstimationModal, setEstimationModal] = useState(false)

	useEffect(() => {
		window.scrollTo(0, 0)
		PageDataFetcher.getSectionItems('homepage', 2)
			.then(res => {
				console.log(res[0]);
				setWhyChooseUs(res[0])
			})
		PageDataFetcher.getSectionItems('homepage', 3)
			.then(res => {
				console.log(res, "this is rclien");
				setClientReviews(res)
			})
	}, [])


	return (
		<div className="Home-Container">
			{
				isEstimationModal&&
				<EstimationModal setEstimationModal={setEstimationModal} />
			}
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
							{lineBreaker(whyChooseUs.content)}
						</h4>
						<Link to="/whychooseus" className="Read-more">
							Read More
						</Link>
					</div>
					<div className="Why-choose-us-Image">
						<img src={config.backendURL + whyChooseUs.img} alt="" />
					</div>

					{/* <div className="Home-CariKature">
					<img src={Vector} alt="" />
				</div> */}
				</div>
			}
			<div className="what-client-say-wrapper">
				<h1 className="client-text-h1">What Client Says</h1>
				<div className="clients-review-home">
					{
						clientReviews[0] &&
						clientReviews.map((item, index) => (
							<Fragment key={index}>
								<div className="client-review-card">
									{/* <span className="client-profile">
										{
											item.img ?
											<img src={config.backendURL + item.img} className="client-profile-img" alt="" />
											: item.name[0]
										}
									</span> */}
									<strong className="client-name">{item.name}</strong>
									<p className="client-review">
										{item.content}
									</p>
								</div>
							</Fragment>
						))
					}
				</div>
				<div className="more-review-btn-wrapper">
					<button className="btn-more-review" onClick={() => window.open("https://www.google.com/search?q=ritzfloor+canada&oq=ritzfloor+canada&aqs=chrome.0.69i59.3811j0j1&sourceid=chrome&ie=UTF-8#lrd=0x54843f6181ae28cb:0xa1c9d8441b03984c,1,,,")}>
						<strong>Click Here to</strong>
						<span>Review us on</span>
						<img src={google} className="google-img" alt="" />
					</button>
				</div>
			</div>
			{/* <div className="Testimonial-Carousel">
				<HomeTestimonialCarousel />
			</div> */}
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
