import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectListPage from "./components/ProjectListPage";
import ProjectPage from "./components/ProjectPage";
import WelcomePage from "./components/WelcomePage";
import { R_ABOUT, R_CONTACT, R_HOME, R_PROJECTS, R_WELCOME } from "./constants/routes";
import HomeLayout from "./layouts/HomeLayout";
import RootLayout from "./layouts/RootLayout";

function App() {
	const { pathname } = useLocation();
	const [routeHistory, setRouteHistory] = useState(() => {
		return JSON.parse(sessionStorage.getItem("routeHistory") || "[]");
	});

	// Initialize session storage items
	useEffect(() => {
		if (!sessionStorage.getItem("routeHistory")) {
			sessionStorage.setItem("routeHistory", JSON.stringify([]));
		}

		if (!sessionStorage.getItem("isDarkMode")) {
			sessionStorage.setItem("isDarkMode", JSON.stringify(true));
		}
	}, []);

	// Update route history upon route change. Scroll to top between Welcome and Home routes
	useEffect(() => {
		const newHistory = [...routeHistory];
		if (newHistory[newHistory.length - 1] !== pathname) {
			newHistory.push(pathname);
			sessionStorage.setItem("routeHistory", JSON.stringify(newHistory));
			setRouteHistory(newHistory);
		}

		const prevRoute = routeHistory[routeHistory.length - 1];
		if (prevRoute !== pathname) {
			if (prevRoute === R_WELCOME && pathname === R_HOME) window.scrollTo(0, 0);
			else if (prevRoute === R_HOME && pathname === R_WELCOME) window.scrollTo(0, 0);
		}
	}, [pathname]);

	// Callback to go back to a previous route
	const goBack = () => {
		const newHistory = routeHistory;
		newHistory.pop();
		sessionStorage.setItem("routeHistory", JSON.stringify(newHistory));
		setRouteHistory(newHistory);
	}

	function MWrapper({ children, mkey }) {
		return (
			<m.div key={mkey} className="motion-wrapper"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				{children}
			</m.div>
		);
	}

	function DefaultOutlet() {
		return (
			<div className="default-content-wrapper">
				<div className="default-content">
					<span className="default-content-font">
						Select a Page to View Here
					</span>
				</div>
			</div>
		);
	}
	
	return (
		<Routes>
			<Route element={<RootLayout routeHistory={routeHistory} goBack={goBack} pathname={pathname}/>}>
				<Route index element={<WelcomePage/>}/>
				<Route path={R_HOME} element={<HomeLayout pathname={pathname}/>}>
					<Route index element={
						<MWrapper mkey="home">
							<DefaultOutlet/>
						</MWrapper>
					}/>

					<Route path={R_ABOUT} element={
						<MWrapper mkey="about">
							<AboutPage/>
						</MWrapper>
					}/>

					<Route path={R_PROJECTS} element={
						<MWrapper mkey="projects">
							<ProjectListPage/>
						</MWrapper>
					}/>
					
					{/* <Route path={`${R_PROJECTS}/:projectID`} element={ // UNFINISHED
						<MWrapper mkey="project">
							<ProjectPage/>
						</MWrapper>
					}/> */}

					<Route path={R_CONTACT} element={
						<MWrapper mkey="contact">
							<ContactPage/>
						</MWrapper>
					}/>
				</Route>
			</Route>
		</Routes>
	);
}

export default App;