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

function App() {
	const [isAdmin,setIsAdmin] = useState(false)
	return (
		<div className={"App "+(isAdmin?"App-admin":'')}>
			<Router>
				<LoginPopup />
				{
					!isAdmin&&
					<Navbar/>
				}
				<MainNavigation/>
				<AdminNavigation setAdmin={setIsAdmin}/>
				<ToastContainer />
				{
					!isAdmin&&
					<Footer/>
				}
			</Router>
		</div>
	);
}

export default App;
