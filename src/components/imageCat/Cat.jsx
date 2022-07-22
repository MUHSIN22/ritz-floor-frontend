import React from "react";
import config from "../../Constants/config";
import "./cat.css";

export const Cat = ({data}) => {
	return (
		<div className="catalog-images-container">
			<div className="cat-card card1" style={{backgroundImage: `url(${config.backendURL+ data.img_living})`}}>
				Living Room
			</div>
			<div className="cat-card card2" style={{backgroundImage: `url(${config.backendURL+ data.img_bed})`}}>
				Bed Room
			</div>
			<div className="cat-card card3" style={{backgroundImage: `url(${config.backendURL+ data.img_office})`}}>
				Office Room
			</div>
			<div className="cat-card card4" style={{backgroundImage: `url(${config.backendURL+ data.img_dining})`}}>
				Dining
			</div>
			<div className="cat-card card5" style={{backgroundImage: `url(${config.backendURL+ data.img_balcony})`}}>
				Balcoy
			</div>
			<div className="cat-card card6" style={{backgroundImage: `url(${config.backendURL+ data.img_kitchen})`}}>
				Kitchen
			</div>
		</div>
	);
};
export default Cat;
