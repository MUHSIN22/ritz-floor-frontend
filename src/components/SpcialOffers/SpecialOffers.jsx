import React, { useState, useEffect } from "react";
import "./SpecialOffers.css";
import BannerImage from "../asset/BannerImage05.png";
import { LocalPhone } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import OffersCarousel from "../OffersCarousel/OffersCarousel";
import UpComingCarousel from "../UpComingCarousel/UpComingCarousel";
import laminateImage from "../asset/image 11.svg";
import Slider from "react-slick";
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
						Email : ritzfloor@gmail.com
					</a>
				</div>
				<div className="SpecialOffers-CariKature">
					<img src={Vector} alt="" />
				</div>
			</div>
			<Laminate />
			<h1 className="offer-h1">Offers</h1>
			<div className="SpecialOffer-Carousel">
				<OffersCarousel />
				<div className="laminate-div-1">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<h1 className="upcomming-offer-h1">Upcoming Offers</h1>
			<div className="UC-Carousel">
				<UpComingCarousel />
			</div>
		</div>
	);
}
const Laminate = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	const list = [
		{
			id: 1,
			title: "LAMINATEWOOD FLOOR",
			description:
				"Laminate flooring allows you to enjoy a wood-like floor without theactual use of any solid wood in its construction , allowing it to bemore environment- friendly.",
		},
		{
			id: 2,
			title: "LAMINATEWOOD FLOOR",
			description:
				"Laminate flooring allows you to enjoy a wood-like floor without theactual use of any solid wood in its construction , allowing it to bemore environment- friendly.",
		},
		{
			id: 3,
			title: "LAMINATEWOOD FLOOR",
			description:
				"Laminate flooring allows you to enjoy a wood-like floor without theactual use of any solid wood in its construction , allowing it to bemore environment- friendly.",
		},
	];
	const [current, setCurrent] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			console.log(list.length - 1);
			if (current < list.length - 1) {
				setCurrent(current + 1);
			} else {
				clearInterval();
				setCurrent(0);
			}
		}, 2000);
		return () => clearInterval(interval);
	}, [current]);
	console.log(current);

	return (
		<div className="laminate-container">
			<div className="laminate-leftside">
				<h1>{list[current].title}</h1>
				<p>{list[current].description}</p>
				<button>Shop</button>

				<div className="laminate-div">
					<>
						<span className={current == 0 ? "orange-dot" : ""}></span>

						<span className={current == 1 ? "orange-dot" : ""}></span>
						<span className={current == 2 ? "orange-dot" : ""}></span>
					</>
				</div>
			</div>

			<div className="laminate-rightside">
				<img src={laminateImage} />
			</div>
		</div>
	);
};
