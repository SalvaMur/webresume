import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { R_HOME } from "../constants/routes";
import styles from "../styles/Scene3.module.css";
import { HomeIcon } from "./svg/icons";

const totalVH = 1200 + 100;

function Scene3() {
	const sceneRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sceneRef,
		offset: ["start end", "end start"],
		layoutEffect: true
	});
	const scene = {
		"frame1": 100 / totalVH,
		"frame2": 300 / totalVH,
		"frame3": 500 / totalVH,
		"frame4": 700 / totalVH,
		"frame5": 900 / totalVH,
		"frame6": 1000 / totalVH,
		"frame7": 1100 / totalVH,
		"frame8": 1200 / totalVH
	};

	const { frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8 } = scene;

	// Progressive Animations
	const slide2Rotate = useTransform(scrollYProgress,
		[frame2, frame3],
		[-90, 0]
	);
	const slide3Rotate = useTransform(scrollYProgress,
		[frame4, frame5],
		[90, 0]
	);

	const slide3Y = useTransform(scrollYProgress,
		[frame7, frame8],
		["0%", "-100%"]
	);

	const slide1Visibility = useTransform(scrollYProgress,
		(y) => y >= frame3 ? "hidden" : "visible"
	);
	const slide2Visibility = useTransform(scrollYProgress,
		(y) => y >= frame5 ? "hidden" : "visible"
	);
	const slide3Visibility = useTransform(scrollYProgress,
		(y) => y >= frame8 ? "hidden" : "visible"
	);
	const slide4Visibility = useTransform(scrollYProgress,
		(y) => y <= frame5 ? "hidden" : "visible"
	);

	const text2Opacity = useTransform(scrollYProgress,
		(y) => y >= frame3 ? 1 : 0
	);
	const text3Opacity = useTransform(scrollYProgress,
		(y) => y >= frame5 ? 1 : 0
	);

	return (
		<div id="About" className="scene" ref={sceneRef}>
			<div className={styles.stageContainer}>
				<div className={styles.stage1}>
					<m.div className={styles.slide1}
						style={{ visibility: slide1Visibility }}
					>
						<span className={styles.text}>
							lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites
						</span>
					</m.div>

					<m.div className={styles.slide2}
						style={{ rotate: slide2Rotate, visibility: slide2Visibility }}
					>
						<m.span className={styles.text} style={{ opacity: text2Opacity }}>
							lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites
						</m.span>
					</m.div>

					<m.div className={styles.slide3}
						style={{ rotate: slide3Rotate, y: slide3Y, visibility: slide3Visibility }}
					>
						<m.span className={styles.text} style={{ opacity: text3Opacity }}>
							lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites
						</m.span>
					</m.div>

					<div className={styles.slide4}
						style={{ visibility: slide4Visibility }}
					>
						<span className={styles.text}>
							lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites
						</span>
						<Link to={R_HOME} className={styles.homeButton}
							draggable={false}
						>
							<span className={styles.homepageLink}>Enter Website</span>
							<div className={styles.homepageIcon}>
								<HomeIcon width="4rem" height="4rem" fill="aliceblue"/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Scene3;