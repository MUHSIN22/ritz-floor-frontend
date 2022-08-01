import React, { useState, useEffect, useRef } from "react";
import "./SpecialOffers.css";
import BannerImage from "../asset/BannerImage05.png";
import { LocalPhone } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import OffersCarousel from "../OffersCarousel/OffersCarousel";
import UpComingCarousel from "../UpComingCarousel/UpComingCarousel";
import laminateImage from "../asset/image 11.svg";
import Slider from "react-slick";
import MainBanner from "../Banner/MainBanner";
import sp1 from '../asset/special offers/sp1.jpeg'
import sp2 from '../asset/special offers/sp2.jpeg'
import sp3 from '../asset/special offers/sp3.jpeg'
import sp4 from '../asset/special offers/sp4.jpeg'
import ContactPopup from "../ContactPopup/ContactPopup";
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";

export default function SpecialOffers() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])
	return (
		<div className="SpecialOffers-Container">
			{" "}
			<MainBanner background={BannerImage} />
			<Laminate />
			<h1 className="offer-h1">Offers</h1>
			<div className="SpecialOffer-Carousel">
				<OffersCarousel />
			</div>
			<h1 className="upcomming-offer-h1">Upcoming Offers</h1>
			<div className="UC-Carousel">
				<UpComingCarousel />
			</div>
		</div>
	);
}
const Laminate = () => {
	const titleRef = useRef(null);
	const descriptionRef = useRef(null);
	const imageRef = useRef(null)
	const [showPopup, setShowPopUp] = useState(false)
	const [list, setList] = useState([])
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	// const list = [
	// 	{
	// 		id: 1,
	// 		title: "Laminated Floor",
	// 		description:
	// 			"Laminate flooring allows you to enjoy a wood-like floor without theactual use of any solid wood in its construction , allowing it to bemore environment- friendly.",
	// 		image: sp1
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Vinyl Flooring",
	// 		description:"Vinyl is waterproof, Durable, Versatile, Affordable and able to hold heavy fool traffic.While luxury vinyl has similarities to laminate,there are significant differences in the construction of these products that set them apart from one another. Vinyl Plank Flooring is Easy to Install (and DIY-Friendly)",
	// 		image: sp2
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Hardwood Floor",
	// 		description:"Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		image: sp3
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Tiles Floor",
	// 		description:"Regardless of which floor covering product you eventually decide on,it will be constructed or manufactured in some manner.But how ceramic is created is in a world all its own.All ceramic tiles are created from natural products extracted from the earth that are shaped into tiles and then fired in kilns at extremely high temperatures.",
	// 		image: sp4	
	// 	},
	// ];
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		PageDataFetcher.getSectionItems('specialoffers', 1)
			.then(res => {
				setList(res)
			})
	}, [])

	useEffect(() => {
		const interval = setInterval(() => {
			titleRef.current.style.opacity = 0;
			descriptionRef.current.style.opacity = 0;
			imageRef.current.style.opacity = 0;
			console.log(list.length - 1);
			if (current < list.length - 1) {
				setCurrent(current + 1);
			} else {
				clearInterval();
				setCurrent(0);
			}
			setTimeout(() => {
				titleRef.current.style.opacity = 1;
				descriptionRef.current.style.opacity = 1;
				imageRef.current.style.opacity = 1;
			}, 300)
		}, 4000);
		return () => clearInterval(interval);
	}, [current,list]);

	return (
		<div className="laminate-container">
			{
				list && list[0] &&
				<>
					<div className="laminate-leftside">
						<h1 ref={titleRef}>{list[current].title}</h1>
						<p ref={descriptionRef}>{list[current].content}</p>
						<button onClick={() => setShowPopUp(true)}>Shop</button>

						<div className="laminate-div">
							<>
								{
									list.map((item,index) => (
										<span key={index} className={current == index ? "orange-dot" : ""}></span>
									))
								}
							</>
						</div>
					</div>

					<div className="laminate-rightside" ref={imageRef}>
						<img src={config.backendURL + list[current].img} />
					</div>
				</>
			}
			{
				showPopup &&
				<div className="popup-wrapper">
					<ContactPopup setShowPopUp={setShowPopUp} />
				</div>
			}
		</div>
	);
};
