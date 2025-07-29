import { Link } from "react-router-dom";
import { R_ABOUT, R_CONTACT, R_HOME, R_PROJECTS, R_WELCOME } from "../constants/routes";
import "../styles/Footer.css";
import { SiteLogo } from "./svg/icons";

function Footer({ selected }) {
	let logoPathText;

	switch (selected) {
		case "home": logoPathText = "";
			break;
		case "about": logoPathText = "> About";
			break;
		case "projects": logoPathText = "> Projects";
			break;
		case "contact": logoPathText = "> Contact";
			break;
		default: logoPathText = "Oops!";
	}

	return (
		<div className="footer-wrapper">
			<div className="footer">
				<div className="footer-row-wrapper">
					<div className="footer-row">
						<div className="footer-logo">
							<SiteLogo width={100} height={100} fill="aliceblue"/>
							<span className="footer-heading">WebResume</span>
							<span className="footer-path">Home {logoPathText}</span>
						</div>
					
						<div className="footer-links">
							<div className="link-group">
								<span className="footer-heading">Site Links</span>
								<div className="link-list">
									<Link to={R_WELCOME}>Welcome</Link>
									<Link to={R_HOME}>Home</Link>
									<Link to={R_ABOUT}>About</Link>
									<Link to={R_PROJECTS}>Projects</Link>
									<Link to={R_CONTACT}>Contact</Link>
								</div>
							</div>

							<div className="link-group">
								<span className="footer-heading">Other Links</span>
								<div className="link-list">
									<a href="https://www.linkedin.com/in/salvador-murillo-99298625b"
										target="_blank"
										rel="noopener noreferrer"
									>
										LinkedIn
									</a>
									<a href="https://github.com/SalvaMur"
										target="_blank"
										rel="noopener noreferrer"
									>
										GitHub
									</a>
								</div>
							</div>

							<div className="link-group">
								<span className="footer-heading">Email</span>
								<div className="link-list">
									<a href="mailto:salmur2k@gmail.com">
										salmur2k@gmail.com
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="footer-end-wrapper">
					<div className="footer-end">
						<div className="footer-heading">
							<span>&copy; 2025 Salvador Murillo. All rights reserved.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;