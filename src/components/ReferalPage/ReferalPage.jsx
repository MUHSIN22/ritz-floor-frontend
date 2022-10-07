import { Close, LocalPhone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./ReferalPage.css";
import BannerImage from "../asset/BannerImage06.png";
import Vector from "../asset/Kerikature.png";
import pref from "../asset/preferances.png";
import discount from '../asset/discount.svg'
import ReferAndEarn from "../ReferAndEarnPopUp/ReferAndEarn";
import MainBanner from "../Banner/MainBanner";
import ReferSuccessPopup from "../ReferSuccessPopup/ReferSuccessPopup";
export default function ReferalPage() {
	const [ShowPopUp, setShowPopUp] = useState("refer");
	const [showSuccess,setShowSuccess] = useState(false)
	useEffect(() => {
		window.scrollTo(0,0)
	})
	return (
		<div className="ReferalPage-Container">
			<MainBanner background={BannerImage} />
			
			<div className="RefralPage-row">
				<div className="Reffral-Row-img">
					<img src={pref} alt="" />
				</div>
				<div className="Refer-Content-col">
					<h1>REFER & EARN BENEFIT FOR OUR EXISTING CUSTOMERS</h1>
					<p>
						Thank you for continuing to trust us. It’s a pleasure to serve you! You’re one of our best customers, and we’re grateful for your loyalty.
						<br /><br />
						WHAT GOES AROUND COMES AROUND <br />
						So here's The Deal : Refer us to your friends and earn 2.5% referral incentive. Moreover your friend can also avail a 2.5% discount on his next purchase.
						It is as easy as 1,2,3! Just click the button below to create a unique code for your friend and yourself.
						<br /><br />
						You're Amazing! Thanks for spreading the word 👍
					</p>
					<div className="btns-wrapper">
						<button className="Refer-btn" onClick={() => setShowPopUp("refer")}>
							Refer and Earn
						</button>
						{/* <span className="break-line">OR</span>
						<button className="Refer-btn" onClick={() => setShowPopUp("discount")}>
							Get Discount
						</button> */}
					</div>
				</div>
			</div>
			<div className="RefralPage-row">
				<div className="Reffral-Row-img">
					<img src={discount} alt="" />
				</div>
				<div className="Refer-Content-col">
					<h1>DISCOUNT COUPON FOR NEW CUSTOMERS</h1>
					<p>
						It’s a great time for shopping!
						<br /><br />
						To get started, we’ve got a little gift for you – a special discount coupon for our products & service.
						It is as easy as 1,2,3! Just click the button below to create a unique discount coupon for yourself and get 2.5% off on your first purchase
					</p>
					<div className="btns-wrapper">
						{/* <button className="Refer-btn" onClick={() => setShowPopUp("refer")}>
							Refer and Earn
						</button>
						<span className="break-line">OR</span> */}
						<button className="Refer-btn" onClick={() => setShowPopUp("discount")}>
							Get Discount
						</button>
					</div>
				</div>
			</div>
			{ShowPopUp && (
				<div className="Refer-Pop-Up">
					<ReferAndEarn setShowPopUp={setShowPopUp} showPopup={ShowPopUp} setShowSuccess={setShowSuccess}/>
				</div>
			)}
			{
				showSuccess&&
				<ReferSuccessPopup />
			}
		</div>
	);
}
