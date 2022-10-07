import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainNavigation from "./Navigation/MainNavigation";
import AdminNavigation from "./Navigation/AdminNavigation";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { Login } from "@mui/icons-material";
import { AuthProvider } from "./contexts/adminAuth";
import UploadLoader from "./components/Admin /uploadLoader/UploadLoader";
import { useLoader } from "./contexts/loadingContext";
import call from './components/asset/icons/call.png'
import facebook from './components/asset/icons/facebook.png'
import instagram from './components/asset/icons/instagram.png'
import google from './components/asset/icons/google.png'
import EstimationModal from "./components/EstimationModal/EstimationModal";

function App() {
	const [isAdmin, setIsAdmin] = useState(false)
	const [isLogin, setLogin] = useState(false)
	const [isEstimationModal, setEstimationModal] = useState(false)
	const [loading, setLoading] = useLoader();
	return (
		<div className={"App " + (isAdmin ? "App-admin" : '')}>
			<Router>
				{
					isEstimationModal &&
					<EstimationModal setEstimationModal={setEstimationModal} />
				}
				{
					!isAdmin &&
					<>
						<div className="social-media-floater">
							<a href="https://www.facebook.com/RitzFloorDecor/" target="_blank" className="social-media-icon-wrapper">
								<img src={facebook} className="social-media-icon" alt="" />
							</a>
							<a href="https://www.instagram.com/ritzfloor/" target="_blank" className="social-media-icon-wrapper">
								<img src={instagram} className="social-media-icon" alt="" />
							</a>
							<a href="tel:+16047022233" target="_blank" className="social-media-icon-wrapper">
								<img src={call} className="social-media-icon" alt="" />
							</a>
							<button className="btn-estimation" onClick={() => setEstimationModal(true)}>Get a Free Estimate</button>
						</div>
						<button className="floating-btn" onClick={() => setEstimationModal(true)}>Get a Free Estimate</button>
					</>
				}
				<AuthProvider>
					{
						loading &&
						<UploadLoader />
					}
					{
						isLogin &&
						<LoginPopup setLogin={setLogin} />
					}
					{
						!isAdmin &&
						<Navbar />
					}
					<MainNavigation />
					<AdminNavigation setAdmin={setIsAdmin} />
					<ToastContainer />
					{
						!isAdmin &&
						<Footer setLogin={setLogin} />
					}
				</AuthProvider>
			</Router>
		</div>
	);
}

export default App;
