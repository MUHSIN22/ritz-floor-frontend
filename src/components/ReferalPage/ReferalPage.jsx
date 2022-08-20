import { Close, LocalPhone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import "./ReferalPage.css";
import BannerImage from "../asset/BannerImage06.png";
import Vector from "../asset/Kerikature.png";
import pref from "../asset/preferances.png";
import ReferAndEarn from "../ReferAndEarnPopUp/ReferAndEarn";
import MainBanner from "../Banner/MainBanner";
import ReferSuccessPopup from "../ReferSuccessPopup/ReferSuccessPopup";
export default function ReferalPage() {
	const [ShowPopUp, setShowPopUp] = useState(true);
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
					<h1>Refer and Earn</h1>
					<p>
						Leader’s in Floor & Decor, You can make some extra money by referring others to the service. To earn money, you don't have to do much more than recommend the apps to your friends and relatives. It's possible that the other person is a close friend, an acquaintance, or even a coworker.
						<br /><br />
						One of the most effective ways to sell a product is through word-of-mouth referrals, and some companies use the referral system to get their products in front of a larger audience.
					</p>
					<div className="btns-wrapper">
						<button className="Refer-btn" onClick={() => setShowPopUp("refer")}>
							Refer and Earn
						</button>
						<span className="break-line">OR</span>
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
