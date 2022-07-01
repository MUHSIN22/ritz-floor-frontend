import React, { useEffect, useState } from "react";
import "./customClientCrousel.css";
import img1 from "../asset/Ellipse 6.svg";
import img2 from "../asset/Ellipse 7.svg";
import img3 from "../asset/Aks.png";

export const CustomClientCrousel = () => {
	const crouselContainer = document.querySelector(".crousel-slide");
	const card = document.querySelectorAll(".crousel-slide .card");
	const prev = document.querySelector(".prev");
	const next = document.querySelector(".next");

	let counter = 1;

	const list = [
		{
			id: 1,
			name: "Akash",
			img: img1,
		},
		{
			id: 2,
			name: "John Doe",
			img: img2,
		},
		{
			id: 3,
			name: "Mike Tyson",
			img: img3,
		},
	];
	const [current, setCurrent] = useState(1);
	const [currentMinus, setCurrentMinus] = useState(0);
	const [currentPlus, setCurrentPlus] = useState(2);
	useEffect(() => {
		const interval = setInterval(() => {
			let temp = current;

			setCurrent(currentMinus);

			setCurrentMinus(currentPlus);
			setCurrentPlus(temp);
		}, 4000);
		return () => clearInterval(interval);
	}, [current]);
	console.log(currentMinus);
	console.log(current);
	console.log(currentPlus);

	return (
		<div class="crousel-container">
			<div class="crousel-slide">
				<div className="circle">
					<img src={list[currentMinus].img} />
				</div>
				<div class="cardd2 cardd">
					<img className="current" src={list[current].img} />

					<h1>{list[current].name}</h1>
					<p>
						The Ritz floor is the leader of floor installation and repair in the
						country sed diam nonumy eirmod tempor invidunt ut labore and
						efficient strategy.
					</p>
					<div class="button-group">
						<a class="prev">
							<img src="images/Arrow 1.svg" />
						</a>
						<a class="next">
							<img src="images/Arrow 2.svg" />
						</a>
					</div>
				</div>

				<div className="circle">
					<img src={list[currentPlus].img} />
				</div>
			</div>
		</div>
	);
};
export default CustomClientCrousel;
