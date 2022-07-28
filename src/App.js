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

function App() {
	const [isAdmin, setIsAdmin] = useState(false)
	const [isLogin, setLogin] = useState(false)
	const [loading,setLoading] = useLoader();
	return (
		<div className={"App " + (isAdmin ? "App-admin" : '')}>
			<Router>
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
