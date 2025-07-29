import { motion as m } from "framer-motion";
import "../styles/ContactPage.css";
import { HomeIcon } from "./svg/icons";

function ContactPage() {
	return (
		<div className="contact-wrapper">
			<div className="contact">
				<div className="title-wrapper">
					<div className="title">
						<h1>Contact Information</h1>
					</div>
				</div>

				<div className="contact-card">
					<div className="contact-flexbox">
						<div className="links">
							<span>
								<h1>Ways to Contact Me</h1>
								<p className="note">(Contact via Email Preferred)</p>
							</span>

							<div className="contact-grid">
								<span className="contact-title">Email:</span>
								<a className="social-link-font"
									href="mailto:salmur2k@gmail.com"
								>
									<span>salmur2k@gmail.com</span>
								</a>

								<span className="contact-title">LinkedIn:</span>
								<a className="social-link social-link-font"
									href="https://www.linkedin.com/in/salvador-murillo-99298625b"
									target="_blank"
									rel="noopener noreferrer"
								>
									<m.img width="50px" height="42.5167px" className="link-icon"
										src={`${import.meta.env.BASE_URL}content/images/social_links/LI-In-Bug.png`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									/>
									<span>Salvador Murillo</span>
								</a>

								<span className="contact-title">GitHub:</span>
								<a className="social-link social-link-font"
									href="https://github.com/SalvaMur"
									target="_blank"
									rel="noopener noreferrer"
								>
									<m.img width="50px" height="48.9167px" className="link-icon"
										src={`${import.meta.env.BASE_URL}content/images/social_links/github-mark-white.png`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									/>
									<span>SalvaMur</span>
								</a>
							</div>
						</div>

						<div className="availability">
							<span>
								<h1>My Availability</h1>
								<p className="note">(Eastern Time)</p>
							</span>

							<div className="contact-grid">
								<span className="contact-title">Weekdays:</span>
								<span className="contact-font">3:00 PM &mdash; 8:00 PM (ET)</span>
								
								<span className="contact-title">Weekend:</span>
								<span className="contact-font">9:00 AM &mdash; 8:00 PM (ET)</span>
							</div>
						</div>
					</div>

					<div className="location">
						<span className="location-icon">
							<HomeIcon height={43} width={43} fill="aliceblue"/>
						</span>
						<span className="contact-font">Cleveland, OH</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactPage;