import { motion as m } from "framer-motion";
import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Hud from "../components/Hud";
import { R_WELCOME } from "../constants/routes";
import "../styles/Layout.css";

export const RefContext = createContext(null);

function RootLayout({ routeHistory, goBack, pathname }) {
	const [sentinelRef, setSentinelRef] = useState(null);
	const [showTopBtn, setShowTopBtn] = useState(false);
	const [isDarkMode, setDarkMode] = useState(() => {
		return JSON.parse(sessionStorage.getItem("isDarkMode") || "true");
	});

	useEffect(() => {
		if (!sentinelRef) {
			setShowTopBtn(false);
			return;
		}

		const sentinel = sentinelRef.current;
		const observer = new IntersectionObserver(
			([entry]) => {setShowTopBtn(!entry.isIntersecting);},
			{
				root: null,
				threshold: 0
			}
		);

		observer.observe(sentinel);

		// Remove sentinel observer on unmount just in case; Not needed?
		return () => {
			observer.unobserve(sentinel);
			setShowTopBtn(false);
		}
	}, [sentinelRef]);

	useEffect(() => {
		sessionStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
	}, [isDarkMode]);

	return (
		<div>
			<div id="background">
				<div className={`gradient-shift background
					${isDarkMode ? "dark-mode" : "light-mode"}
				`}/>
				
			{ pathname !== R_WELCOME && (
				<div>
					<m.div key="svg-dark-mode" className="svg-scroll background dark-mode"
						initial={{ opacity: isDarkMode ? 1 : 0 }}
						animate={{ opacity: isDarkMode ? 1 : 0 }}
						transition={{ duration: 1 }}
					/>
					<m.div key="svg-light-mode" className="svg-scroll background light-mode"
						initial={{ opacity: isDarkMode ? 0 : 1 }}
						animate={{ opacity: isDarkMode ? 0 : 1 }}
						transition={{ duration: 1 }}
					/>
				</div>
			)}
			</div>

			<div id="hud">
				<Hud
					showTopBtn={showTopBtn}
					routeHistory={routeHistory}
					goBack={goBack}
					isDarkMode={isDarkMode}
					setDarkMode={setDarkMode}
					pathname={pathname}
				/>
			</div>

			<div>
				<RefContext.Provider value={{ setSentinelRef }}>
					<Outlet/>
				</RefContext.Provider>
			</div>
		</div>
	);
}

export default RootLayout;