import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../styles/WelcomePage.css";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";

function WelcomePage() {
	const pageRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: pageRef,
		offset: ["start start", "end end"],
		layoutEffect: true
	});

	const fillSlide = useTransform(scrollYProgress,
		[0, 1],
		["-100%", "0%"]
	);
	const bgSlide = useTransform(scrollYProgress,
		[0, 1],
		["-500% 0%", "0% 0%"]
	);

	return (
		<div className="welcome-wrapper" ref={pageRef}>
			<div className="welcome">
				<div className="scenes">
					<Scene1/>
					<Scene2/>
					<Scene3/>
				</div>
			</div>

			<div className="welcome-progress-bar">
				<m.div className="welcome-progress-bar-fill"
					style={{ x: fillSlide, backgroundPosition: bgSlide }}
				/>
			</div>
		</div>
	);
}

export default WelcomePage;