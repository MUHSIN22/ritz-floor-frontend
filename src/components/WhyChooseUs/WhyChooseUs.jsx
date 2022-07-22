import React, { useEffect, useState } from "react";
import "./WhyChooseUs.css";
import BannerImage from "../asset/BannerImage041.png";
import { LocalPhone, CheckCircle } from "@mui/icons-material";
import Vector from "../asset/Kerikature.png";
import Laminate from "../asset/laminate-m-380x254.jpg";
import Cat from "../imageCat/Cat";
import MainBanner from "../Banner/MainBanner";
import work1 from '../asset/our works/w1.png'
import work2 from '../asset/our works/w2.png'
import work3 from '../asset/our works/w3.png'
import work4 from '../asset/our works/w4.png'
import work5 from '../asset/our works/w5.png'
import work6 from '../asset/our works/w6.png'
import work7 from '../asset/our works/w7.png'
import work8 from '../asset/our works/w8.png'
import whychooseus from '../asset/whychooseus.jpeg'
import PageDataFetcher from "../../APIServices/PageDataFetcher";
import config from "../../Constants/config";

export default function WhyChooseUs() {
	const [features, setFeatures] = useState(null)

	useEffect(() => {
		window.scrollTo(0, 0)
		PageDataFetcher.getWhyChooseFeatures()
			.then(res => {
				setFeatures(res)
			})
	}, [])
	return (
		<>
			<div className="WhyChooseUs-Container">
				<MainBanner background={BannerImage} />
				<div className="AboutUs-Row">
					<div className="AboutUs-Content-Col">
						<div className="AboutUs-Header">
							<h1 className="my-0">About Us</h1>
						</div>
						<p className="my-0">
							<strong>Flooring with a new Skill</strong>
							<br />
							Select from a wide variety of flooring materials!
							<br />
							Outdoor Deck Flooring, Carpet Tiles, Vinyl Flooring (both homogeneous and heterogeneous), Sports Flooring, and Ecofit Flooring are just a few of the many goods available at Ritz Flooring. Whether you're looking for a flooring option for a home or a business, we've got you covered!
							<br />
							Contact us if you'd like to make use of our extensive selection of items.
						</p>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>Durability</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>Cost-Effective</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>Easy to Install</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>Long Lifespan</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>Low Maintenance</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>Wide Choice</p>
						</div>
					</div>
					<div className="AboutUs-Image">
						<img src={whychooseus} alt="" />
					</div>
				</div>
				{
					features &&
					<div className="AboutUs-Features-Container">
						<div className="Features-Content">
							<h1 className="my-0">{features.title}</h1>
							<p className="my-0 features-p">
								{features.content}
							</p>
						</div>
						<Cat data={features} />
					</div>
				}
				{/* <div className="AboutUs-Features-Container">
					<div className="Features-Content">
						<h1 className="my-0">Features</h1>
						<p className="my-0 features-p">
							Compared to other forms of flooring, wood has a number of advantages. Even if you're building a new house, a fireplace provides warmth, character, and style. Although the initial investment is more than carpeting or linoleum, it can last a lifetime with proper upkeep and repairs. 
							<br /><br />
							Durability | Maintenance & Hygiene | Timeless Style | Great Investment!
						</p>
					</div>
					<Cat />
				</div> */}
			</div>
			<OurWorks />
		</>
	);
}
const OurWorks = () => {
	const [works, setWorks] = useState(null)
	useEffect(() => {
		PageDataFetcher.getSectionItems('whychooseus', 3)
			.then(res => {
				setWorks(res[0])
			})
	}, [])
	return (
		<>
			{
				works &&
				<div className="work-container">
					<div className="work-leftside">
						<h1>{works.title}</h1>
						<p>
							{works.content}
						</p>
					</div>
					<div className="work-rightside">
						<div className="rombus-row">
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_1})` }}></div>
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_2})` }}></div>
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_3})` }}></div>
						</div>
						<div className="rombus-row">
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_4})` }}></div>
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_5})` }}></div>
						</div>
						<div className="rombus-row">
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_6})` }}></div>
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_7})` }}></div>
							<div className="rombus" style={{ backgroundImage: `url(${config.backendURL + works.img_8})` }}></div>
						</div>
					</div>
				</div>
			}
		</>
	);
};
