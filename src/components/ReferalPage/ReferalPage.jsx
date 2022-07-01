import { Close, LocalPhone } from "@mui/icons-material";
import React, { useState } from "react";
import "./ReferalPage.css";
import BannerImage from "../asset/BannerImage06.png";
import Vector from "../asset/Kerikature.png";
import pref from "../asset/preferances.png";
import ReferAndEarn from "../ReferAndEarnPopUp/ReferAndEarn";
export default function ReferalPage() {
	const [ShowPopUp, setShowPopUp] = useState(false);
	return (
		<div className="ReferalPage-Container">
			<div className="ReferalPage-Banner">
				<img src={BannerImage} alt="" />
				<div className="ReferalPage-Banner-Contact-details">
					<h1>Ritz Floor and Decor</h1>
					<h3>Give an exotic look to your home</h3>
					<h2>45690 YALE RD, Chilliwack, BC, Canada V2P2N3</h2>
					<div className="ReferalPage-Btn-row">
						<span>
							<LocalPhone />
						</span>
						<a href="tel:+ 604-702-2233">+ 604-702-2233</a>
					</div>
					<a
						href="mailto:ritzfloor@gmail.com"
						className="ReferalPage-Banner-Contact-details-Email"
					>
						Email : ritzfloor@gmail.com
					</a>
				</div>
				<div className="ReferalPage-CariKature">
					<img src={Vector} alt="" />
				</div>
			</div>
			<div className="RefralPage-row">
				<div className="Reffral-Row-img">
					<img src={pref} alt="" />
				</div>
				<div className="Refer-Content-col">
					<h1>Refer and Earn</h1>
					<p>
						Leader’s in Floor & Decor, You can make some extra money by
						referring others to the service. To earn money, you don't have to do
						much more than recommend the apps to your friends and relatives.
						It's possible that the other person is a close friend, an
						acquaintance, or even a coworker.
					</p>
					<p>
						One of the most effective ways to sell a product is through
						word-of-mouth referrals, and some companies use the referral system
						to get their products in front of a larger audience.
					</p>

					<button className="Refer-btn" onClick={() => setShowPopUp(true)}>
						Refer
					</button>
				</div>
			</div>
			{ShowPopUp && (
				<div className="Refer-Pop-Up">
					<ReferAndEarn />
				</div>
			)}
		</div>
	);
}
