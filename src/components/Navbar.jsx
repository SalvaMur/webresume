import { AnimatePresence, motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import { R_ABOUT, R_CONTACT, R_PROJECTS } from "../constants/routes";
import "../styles/Navbar.css";

function MarqueeItem({ text }) {
	return (
		<div className="marquee-item">
			<span style={{ width: "160.2px" }}>Welcome to My Site!</span>
			<span style={{ paddingInline: "40px" }}>&#9733;</span>
			<AnimatePresence mode="wait" initial={false}>
				<m.span
					key={text}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					style={{ width: "160.2px" }}
				>
					{text}
				</m.span>
			</AnimatePresence>
			<span style={{ paddingInline: "40px" }}>&#9733;</span>
		</div>
	);
}

function Navbar({ selected }) {
	let marqueeText;

	switch (selected) {
		case "home": marqueeText = "WebResume";
			break;
		case "about": marqueeText = "Learn About Me";
			break;
		case "projects": marqueeText = "My Projects";
			break;
		case "contact": marqueeText = "Want to Contact Me?";
			break;
		default: marqueeText = "Oops!";
	}

	return (
		<div className="navbar-wrapper">
			<div className="navbar">
				<div className="marquee">
					<MarqueeItem text={marqueeText}/>
					<MarqueeItem text={marqueeText}/>
					<MarqueeItem text={marqueeText}/>
					<MarqueeItem text={marqueeText}/>
					<MarqueeItem text={marqueeText}/>
				</div>

				<div className="navbar-options">
					<div className={`navbar-option ${selected === "about" ? "selected" : ""}`}>
						<Link to={R_ABOUT} className="navbar-font">
							About
						</Link>
					</div>
					
					<div className={`navbar-option ${selected === "projects" ? "selected" : ""}`}>
						<Link to={R_PROJECTS} className="navbar-font">
							Projects
						</Link>
					</div>

					<div className={`navbar-option ${selected === "contact" ? "selected" : ""}`}>
						<Link to={R_CONTACT} className="navbar-font">
							Contact
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;