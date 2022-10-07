import React from "react";
import config from "../../Constants/config";
import "./cat.css";

export const Cat = ({data}) => {
	return (
		<div className="catalog-images-container">
			<div className="cat-card card1" style={{backgroundImage: `url(${config.backendURL+ data.img_living})`}}>
				<div className="cat-card-title">
					Living Room
				</div>
			</div>
			<div className="cat-card card2" style={{backgroundImage: `url(${config.backendURL+ data.img_bed})`}}>
				<div className="cat-card-title">
					Bed Room
				</div>
			</div>
			<div className="cat-card card3" style={{backgroundImage: `url(${config.backendURL+ data.img_office})`}}>
				<div className="cat-card-title">
					Office Room
				</div>
			</div>
			<div className="cat-card card4" style={{backgroundImage: `url(${config.backendURL+ data.img_dining})`}}>
				<div className="cat-card-title">
					Family Room
				</div>
			</div>
			<div className="cat-card card5" style={{backgroundImage: `url(${config.backendURL+ data.img_balcony})`}}>
				<div className="cat-card-title">
					Washroom
				</div>
			</div>
			<div className="cat-card card6" style={{backgroundImage: `url(${config.backendURL+ data.img_kitchen})`}}>
				<div className="cat-card-title">
					Kitchen
				</div>
			</div>
		</div>
	);
};
export default Cat;
