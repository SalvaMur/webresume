import { Link } from "react-router-dom";
import { R_ABOUT, R_CONTACT, R_PROJECTS } from "../constants/routes";
import "../styles/Tab.css";

function Tab({ selected }) {
	return (
		<div className="tab-wrapper">
			<div className="tab">
				<div className={`tab-option ${selected === "about" ? "selected" : ""}`}>
					<Link to={R_ABOUT} className="tab-font">
						About
					</Link>
				</div>
				
				<div className={`tab-option ${selected === "projects" ? "selected" : ""}`}>
					<Link to={R_PROJECTS} className="tab-font">
						Projects
					</Link>
				</div>

				<div className={`tab-option ${selected === "contact" ? "selected" : ""}`}>
					<Link to={R_CONTACT} className="tab-font">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Tab;