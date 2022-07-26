import React, { useEffect, useRef, useState } from "react";
import "./ContactUs.css";
import BannerImage03 from "../asset/BannerImage03.webp";
import { BsTelephoneFill, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { MdMail, MdLocationOn } from 'react-icons/md'
import MainBanner from "../Banner/MainBanner";
import axiosInstance from "../../Axios/axiosInstance";
import facebook from '../../components/asset/icons/facebook.png'
import instagram from '../../components/asset/icons/instagram.png'
import { toast } from "react-toastify";
export default function ContactUs() {
	const contactRef = useRef(null);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: ''
	})


	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const onFormSubmission = (event) => {
		event.preventDefault();
		if (formData.email && formData.name && formData.message) {
			axiosInstance.post('/contact/send-contact-message', formData)
				.then((res) => {
					toast.success(res.data.message)
					contactRef.current.reset()
				}).catch(err => {
					toast.error("Something went wrong!")
				})
		}

	}

	const inputHandler = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	return (
		<div className="ContactUs-Container">
			<MainBanner background={BannerImage03} />
			<div className="ContactUs-Block">
				<div className="contact-content">
					<div className="ContactUs-header">
						<h1>Get In Touch</h1>
					</div>
					<p className="contact-description">Fill the form and our Team will get back to you within 24 hours</p>
					<ul className="contact-list">
						<li className="contact">
							<BsTelephoneFill />
							<span className="contacts-wrapper">
								<a href="tel:+1 604 702 2233" target="_blank">+1 604 702 2233</a>
								<a href="tel:+1 604 780 5352" target="_blank">+1 604 780 5352</a>
							</span>

						</li>
						<li className="contact">
							<MdMail />
							<a href="mailto:ritzfloor@gmail.com" target="_blank">ritzfloor@gmail.com</a>
						</li>
						<li className="contact .social-icons">
							<MdLocationOn />
							<a href="" target="_blank">16-5725 Vedder Road,Chilliwack BC V2R 3N4</a>
						</li>
						<li className="social-icons">
							<a href="https://www.facebook.com/RitzFloorDecor/" target="_blank">
								<img src={facebook} alt="" />
							</a>
							<a href="https://www.instagram.com/ritzfloor/?igshid=YmMyMTA2M2Y%3D" target="_blank">
								<img src={instagram} alt="" />
							</a>
						</li>
					</ul>
				</div>
				<div className="ContactUs-Form">
					<form onSubmit={onFormSubmission} ref={contactRef}>
						<div className="Form-col">
							<label htmlFor="Name">Name</label>
							<input type="text" name="name" onChange={inputHandler} />
						</div>
						<div className="Form-col">
							<label htmlFor="Name">Phone</label>
							<input type="text" name="phone" onChange={inputHandler} />
						</div>
						<div className="Form-col">
							<label htmlFor="Email">Email</label>
							<input type="email" name="email" onChange={inputHandler} />
						</div>
						<div className="Form-col">
							<label htmlFor="Name">Message</label>
							<textarea name="message" onChange={inputHandler} id="" cols="80" rows="5"></textarea>
						</div>
						<button type="submit">Submit</button>
					</form>

				</div>
			</div>
		</div>
	);
}
