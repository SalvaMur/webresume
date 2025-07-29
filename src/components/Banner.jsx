import { AnimatePresence, motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "../styles/Banner.css";

function Banner() {
	const [summaryIndex, setSummaryIndex] = useState(0);
	const summaryIntervalRef = useRef(null);

	const resetSummaryInterval = () => {
		if (summaryIntervalRef.current) {
			clearInterval(summaryIntervalRef.current);
		}

		summaryIntervalRef.current = setInterval(() => {
			setSummaryIndex((prev) => (prev + 1) % 3);
		}, 15000);
	}

	useEffect(() => {
		resetSummaryInterval();
		
		// Clear interval on clean-up
		return () => {
			clearInterval(summaryIntervalRef.current);
		}
	}, []);

	const barOnClick = (e, idx) => {
		const el = e.currentTarget;
		if (summaryIndex == idx) {
			el.classList.remove("active");
			void el.offsetWidth;
			el.classList.add("active")
		}
		else setSummaryIndex(idx);
		resetSummaryInterval();
	};

	const bannerTextVarient = {
		initial: { opacity: 0, x: "40%" },
		animate: { opacity: 1, x: 0 },
		exit: { opacity: 0, x: "-40%" },
		transition: { duration: 3 }
	};

	return (
		<div className="banner-wrapper">
			<div className="banner banner-font">
				<div className="banner-title">
					<h1>WebResume</h1>
					<h2>Welcome to My Site!</h2>
				</div>
				
				<div className="banner-tips">
					<div className="banner-summary">
						<AnimatePresence mode="popLayout" initial={false}>
						{summaryIndex == 0 ? (
							<m.div key="about-summary" className="banner-text"
								variants={bannerTextVarient}
								initial="initial"
								animate="animate"
								exit="exit"
								transition="transition"
							>
								<p className="banner-text-title">About Page</p>
								<p className="banner-text-summary">
									Learn more about my background in Computer Science,
									including my academic credentials, technical skills,
									professional experience, and career aspirations. This
									page outlines the motivations guiding my pursuit of a
									career in the tech industry.
								</p>
							</m.div>
						) : summaryIndex == 1 ? (
							<m.div key="projects-summary" className="banner-text"
								variants={bannerTextVarient}
								initial="initial"
								animate="animate"
								exit="exit"
								transition="transition"
							>
								<p className="banner-text-title">Projects Page</p>
								<p className="banner-text-summary">
									Explore a curated list of projects I have developed,
									showcasing practical applications of my skills and
									experience. Each project includes detailed descriptions,
									technical highlights, and visual documentation through screenshots.
								</p>
							</m.div>
						) : (
							<m.div key="contact-summary" className="banner-text"
								variants={bannerTextVarient}
								initial="initial"
								animate="animate"
								exit="exit"
								transition="transition"
							>
								<p className="banner-text-title">Contact Page</p>
								<p className="banner-text-summary">
									Get in touch with me through a variety of professional
									platforms. This page includes my email address, LinkedIn
									profile, and GitHub account, providing convenient options
									for networking, collaboration, or inquiries related to my
									work and experience.
								</p>
							</m.div>
						)}
						</AnimatePresence>
					</div>
					
					<div className="banner-loading-bar-wrapper">
						<div className="banner-loading-bar">
							<div className={`loading-bar ${summaryIndex == 0 ? "active" : ""}`}
								onClick={(e) => barOnClick(e, 0)}
							>
								<div className="loading-bar-fill"/>
							</div>
							<div className={`loading-bar ${summaryIndex == 1 ? "active" : ""}`}
								onClick={(e) => barOnClick(e, 1)}
							>
								<div className="loading-bar-fill"/>
							</div>
							<div className={`loading-bar ${summaryIndex == 2 ? "active" : ""}`}
								onClick={(e) => barOnClick(e, 2)}
							>
								<div className="loading-bar-fill"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;