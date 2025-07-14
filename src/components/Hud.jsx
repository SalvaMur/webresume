import { AnimatePresence, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { R_HOME, R_WELCOME } from "../constants/routes";
import "../styles/Hud.css";
import { BackArrowIcon, DarkModeIcon, HomeIcon, LightModeIcon, RootIcon, TopArrowIcon } from "./svg/icons";

function Hud({ showTopBtn, routeHistory, goBack, isDarkMode, setDarkMode, pathname }) {
	const prevRoute = routeHistory.length > 1 ?
		routeHistory[routeHistory.length - 2] :
		""
	;

	const scrollTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const hudButtonVarient = {
		initial: { opacity: 0, x: 40 },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0 },
		transition: {
			duration: 1,
			layout: {
				type: "tween"
			}
		}
	};

	return (
		<div className="hud-wrapper">
			<div className="hud">
				<AnimatePresence mode="popLayout">
				{pathname !== R_WELCOME && (
					<m.div key="root-button" className="hud-button-wrapper"
						layout
						variants={hudButtonVarient}
						initial="initial"
						animate="animate"
						exit="exit"
						transition="transition"
					>
						<Link to={R_WELCOME} className="hud-button"
							draggable="false"
						>
							<div className="hud-button-icon">
								<RootIcon/>
							</div>
							<span className="tooltip">Go to index page</span>
						</Link>
					</m.div>
				)}

				{pathname !== R_HOME && (
					<m.div key="home-button" className="hud-button-wrapper"
						layout
						variants={hudButtonVarient}
						initial="initial"
						animate="animate"
						exit="exit"
						transition="transition"
					>
						<Link to={R_HOME} className="hud-button"
							draggable="false"
						>
							<div className="hud-button-icon">
								<HomeIcon/>
							</div>
							<span className="tooltip">Go to homepage</span>
						</Link>
					</m.div>
				)}

					<m.div key="lighting-button" className="hud-button-wrapper"
						layout
						variants={hudButtonVarient}
						initial="initial"
						animate="animate"
						exit="exit"
						transition="transition"
					>
						<button className="hud-button" onClick={() => setDarkMode(!isDarkMode)}>
							<div className="hud-button-icon">
								<AnimatePresence mode="wait" initial={false}>
								{!isDarkMode ? (
									<m.div key="dark-mode-icon"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: .5 }}
									>
										<DarkModeIcon/>
									</m.div>
									
								) : (
									<m.div key="light-mode-icon"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										transition={{ duration: .5 }}
									>
										<LightModeIcon/>
									</m.div>
								)}
								</AnimatePresence>
							</div>
							<span className="tooltip">Change background lighting</span>
						</button>
					</m.div>

				{showTopBtn && (
					<m.div key="scroll-button" className="hud-button-wrapper"
						layout
						variants={hudButtonVarient}
						initial="initial"
						animate="animate"
						exit="exit"
						transition="transition"
					>
						<button className="hud-button" onClick={scrollTop}>
							<div className="hud-button-icon">
								<TopArrowIcon/>
							</div>
							<span className="tooltip">Scroll to top</span>
						</button>
					</m.div>
				)}

				{routeHistory.length > 1 && (
					<m.div key="back-button" className="hud-button-wrapper"
						layout
						variants={hudButtonVarient}
						initial="initial"
						animate="animate"
						exit="exit"
						transition="transition"
					>
						<Link className="hud-button" to={prevRoute}
							onClick={goBack}
							draggable="false"	
						>
							<div className="hud-button-icon">
								<BackArrowIcon/>
							</div>
							<span className="tooltip">Return to a previous page</span>
						</Link>
					</m.div>
				)}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Hud;