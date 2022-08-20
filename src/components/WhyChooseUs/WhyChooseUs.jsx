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
import AdminPageManager from "../../APIServices/AdminPageManager";
import setLineBreak from "../Utils/lineBreaker";

export default function WhyChooseUs() {
	const [features, setFeatures] = useState(null)
	const [aboutData, setAboutData] = useState(null)

	useEffect(() => {
		window.scrollTo(0, 0)
		PageDataFetcher.getWhyChooseFeatures()
			.then(res => {
				setFeatures(res)
			})
		AdminPageManager.getSectionItems('whychooseus', 1)
			.then(res => {
				let data = res[0]
				console.log(res[0]);
				data.points = data.points.split('|');
				setAboutData(data)
			})
	}, [])
	return (
		<>
			<div className="WhyChooseUs-Container">
				<MainBanner background={BannerImage} />
				{
					aboutData &&
					<div className="AboutUs-Row">
						<div className="AboutUs-Content-Col">
							<div className="AboutUs-Header">
								<h1 className="my-0">{aboutData.title}</h1>
							</div>
							<p className="my-0">
								<strong>{aboutData.subtitle}</strong>
								<br />
								{
									setLineBreak(aboutData.content)
								}
							</p>
							{
								aboutData.points.map((item,index) => (
									<div className="AboutUs-Content-row" key={index}>
										<CheckCircle /> <p>{item}</p>
									</div>
								))
							}
							{/* <div className="AboutUs-Content-row">
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
							</div> */}
						</div>
						<div className="AboutUs-Image">
							<img src={whychooseus} alt="" />
						</div>
					</div>
				}
				{
					features &&
					<div className="AboutUs-Features-Container">
						<div className="Features-Content">
							<h1 className="my-0">{features.title}</h1>
							<p className="my-0 features-p">
								{setLineBreak(features.content)}
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
							{setLineBreak(works.content)}
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
