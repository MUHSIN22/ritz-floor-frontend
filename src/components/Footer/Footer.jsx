import {
	LocalPhone,
	Mail,
	FmdGood,
	FacebookRounded,
	Instagram,
} from "@mui/icons-material";
import loading from '../asset/loading.gif'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../Axios/axiosInstance";
import "./Footer.css";
export default function Footer() {
	const [newsLetterEmail, setNewsLetterEmail] = useState(null)
	const [isLoading, setLoading] = useState(false)
	const handleNewsLetter = (event) => {
		event.preventDefault();
		if (newsLetterEmail && newsLetterEmail.length > 2) {
			setLoading(true)
			axiosInstance.post('/newsletter/send-news-letter', { email: newsLetterEmail })
				.then((res) => {
					console.log(res);
					setLoading(false)
				}).catch(err => {
					console.log(err);
					setLoading(false)
				})
		}
	}
	return (
		<div className="Footer-Container">
			<div className="Footer-Map">
				<iframe
					title="Footer-Map"
					src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d65324392.06077993!2d72.87105593771504!3d2.1211566083918143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d21.234071999999998!2d81.6802046!4m5!1s0x54843f638f55b411%3A0xbc91eae6b2352e0e!2s45690%20Yale%20Rd%2C%20Chilliwack%2C%20BC%20V2P%202N3%2C%20Canada!3m2!1d49.157502!2d-121.9584125!5e0!3m2!1sen!2sin!4v1655111045722!5m2!1sen!2sin"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
			<div className="Get-in-Touch">
				<h2 className="footer-title">Get In Touch</h2>
				<div className="Get-in-touch-row">
					<LocalPhone className="small-icons" />
					<a href="tel:+1 604 780 5352">+1 604 780 5352</a>
				</div>
				<div className="Get-in-touch-row">
					<Mail />
					<a href="mailto:RITZFLOOR@GMAIL.COM">RITZFLOOR@GMAIL.COM</a>
				</div>
				<div className="Get-in-touch-row">
					<FmdGood />
					<div>
						<p>45690 YALE RD,</p>
						<p>CHILLIWACK, BC V2P 2N3</p>
					</div>
				</div>

				<div className="Footer-Social-media">
					<a href="https://www.facebook.com/RitzFloorDecor/">
						<FacebookRounded />
					</a>

					<a href="https://www.instagram.com/ritzfloor/?igshid=YmMyMTA2M2Y%3D">
						<Instagram />
					</a>
				</div>
			</div>
			<div className="quick-links">
				<h2 className="footer-title">Quick Links</h2>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/whychooseus">Why choose Us</Link>
					</li>
					<li>
						<Link to="/specialOffers">Special Offers</Link>
					</li>
					<li>
						<Link to="/testimonials">Testimonials</Link>
					</li>
					<li>
						<Link to="/ReferalPage">Refer and Earn</Link>
					</li>
					<li>
						<Link to="/ContactUs">Contact Us</Link>
					</li>
				</ul>
			</div>
			<form className="News-Letter" onSubmit={handleNewsLetter}>
				<h2 className="footer-title">Newsletter</h2>
				<h3>Signup to Newsletter</h3>
				<input name="Email" type="email" id="01" onChange={(event) => setNewsLetterEmail(event.target.value)} placeholder="Email" />
				<div className="news-btn-wrapper">
					<button type="submit" className={isLoading ? "btn-disabled" : ''}>
						{
							isLoading &&
							<span className="btn-loading">
								<img src={loading} alt="" />
							</span>
						}
						Submit
					</button>
					<Link to=''>Login</Link>
				</div>
			</form>
			<div className="techjain-container">
				<hr />
				<p>
					Design and Developed By{" "}
					<span>
						<a href="https://techjain.com/">
							<b>TechJain IT Solutions</b>
						</a>
					</span>
				</p>
			</div>
		</div>
	);
}
