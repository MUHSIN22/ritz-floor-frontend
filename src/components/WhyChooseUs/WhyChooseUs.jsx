import React from "react";
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

export default function WhyChooseUs() {
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
							Our Vision
							<br />
							Winning over the world One room at a time
						</p>

						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>CREDENTIALS</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>CUSTOMIZATION</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>EXPERIENCE</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>ACCESSORIES</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>SPECIALIZATION</p>
						</div>
						<div className="AboutUs-Content-row">
							<CheckCircle /> <p>MAINTENANCE GUIDANCE</p>
						</div>
					</div>
					<div className="AboutUs-Image">
						<img src={Laminate} alt="" />
					</div>
				</div>
				<div className="AboutUs-Features-Container">
					<div className="Features-Content">
						<h1 className="my-0">Features</h1>
						<p className="my-0 features-p">
							Introduce that personal touch, a reflection of your distinct taste
							in every inch of your floor tile renovation. Made with special
							care, keeping convenience and elegance in mind, Welspun Flooring
							offers the best flooring solutions with a wide range of floor
							tiles, that are a perfect fit for every individual space in your
							home
						</p>
					</div>
					<Cat />
				</div>
			</div>
			<OurWorks />
		</>
	);
}
const OurWorks = () => {
	return (
		<div className="work-container">
			<div className="work-leftside">
				<h1>Our Works</h1>
				<p>
					You can entirely change the look of your house's interior with our
					home décor ideas and home improvement tips. Make a stylish statement
					by giving your home's interiors a complete facelift. Look through our
					gallery for some great inspiration and to learn why flooring is so
					important in every home.
				</p>
			</div>
			<div className="work-rightside">
				<div className="rombus-row">
					<div className="rombus" style={{backgroundImage: `url(${work1})`}}></div>
					<div className="rombus" style={{backgroundImage: `url(${work2})`}}></div>
					<div className="rombus" style={{backgroundImage: `url(${work3})`}}></div>
				</div>
				<div className="rombus-row">
					<div className="rombus" style={{backgroundImage: `url(${work4})`}}></div>
					<div className="rombus" style={{backgroundImage: `url(${work5})`}}></div>
				</div>
				<div className="rombus-row">
					<div className="rombus" style={{backgroundImage: `url(${work6})`}}></div>
					<div className="rombus" style={{backgroundImage: `url(${work7})`}}></div>
					<div className="rombus" style={{backgroundImage: `url(${work8})`}}></div>
				</div>
			</div>
		</div>
	);
};
