import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "../styles/Scene2.module.css";

const totalVH = 1500 + 100;

function Scene2() {
	const sceneRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sceneRef,
		offset: ["start end", "end start"],
		layoutEffect: true
	});
	const scene = {
		"frame1": 100 / totalVH,
		"frame2": 300 / totalVH,
		"transition1": 400 / totalVH,
		"frame3": 500 / totalVH,
		"frame4": 700 / totalVH,
		"transition2": 800 / totalVH,
		"frame5": 900 / totalVH,
		"frame6": 1100 / totalVH,
		"frame7": 1200 / totalVH,
		"frame8": 1300 / totalVH,
		"frame9": 1500 / totalVH
	};
	const { frame1, frame2, transition1, frame3, frame4, transition2, frame5, frame6, frame7, frame8, frame9 } = scene;

	// Progressive Animations
	const text1X = useTransform(scrollYProgress,
		[frame1, frame2, frame3, frame4],
		["100%", "0%", "0%", "-100%"]
	);
	const text2X = useTransform(scrollYProgress,
		[frame3, frame4, frame5, frame6],
		["100%", "0%", "0%", "-100%"]
	);
	const text3X = useTransform(scrollYProgress,
		[frame5, frame6],
		["100%", "0%"]
	);

	const text1Opacity = useTransform(scrollYProgress,
		[frame1, frame2, frame4, frame5],
		[0, 1, 1, 0]
	);
	const text2Opacity = useTransform(scrollYProgress,
		[transition1, frame4, frame6, frame7],
		[0, 1, 1, 0]
	);
	const text3Opacity = useTransform(scrollYProgress,
		[transition2, frame6],
		[0, 1]
	);

	const text1Scale = useTransform(scrollYProgress,
		[frame1, frame2, frame3, frame4],
		[0.5, 1, 1, 0.5]
	);
	const text2Scale = useTransform(scrollYProgress,
		[frame3, frame4, frame5, frame6],
		[0.5, 1, 1, 0.5]
	);
	const text3Scale = useTransform(scrollYProgress,
		[frame5, frame6],
		[0.5, 1]
	);

	const bar1Width = useTransform(scrollYProgress,
		(y) => y >= frame1 && y < frame3 ? 200 : 25
	);
	const bar2Width = useTransform(scrollYProgress,
		(y) => y >= frame3 && y < frame5 ? 200 : 25
	);
	const bar3Width = useTransform(scrollYProgress,
		(y) => y >= frame5 && y < frame7 ? 200 : 25
	);
	
	const fill1X = useTransform(scrollYProgress,
		[frame1, frame3],
		["-135%", "0%"]
	);
	const fill2X = useTransform(scrollYProgress,
		[frame3, frame5],
		["-135%", "0%"]
	);
	const fill3X = useTransform(scrollYProgress,
		[frame5, frame7],
		["-135%", "0%"]
	);

	const fill1Color = useTransform(scrollYProgress,
		[frame1, frame3],
		["#00eeff", "#00ff6a"]
	);
	const fill2Color = useTransform(scrollYProgress,
		[frame3, frame5],
		["#00eeff", "#00ff6a"]
	);
	const fill3Color = useTransform(scrollYProgress,
		[frame5, frame7],
		["#00eeff", "#00ff6a"]
	);

	const slideY = useTransform(scrollYProgress,
		[frame8, frame9],
		["100%", "0%"]
	);

	return (
		<div id="Introduction" className="scene" ref={sceneRef}>
			<div className={styles.stageContainer}>
				<div className={styles.stage1}>
					<div className={styles.scrollingTextContainer}>
						<div className={styles.scrollingText}>
							<m.span key="text1" className={styles.text} 
								style={{ x: text1X, opacity: text1Opacity, scale: text1Scale }}
							>
								lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites 1
							</m.span>

							<m.span key="text2" className={styles.text}
								style={{ x: text2X, opacity: text2Opacity, scale: text2Scale }}
							>
								lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites 2
							</m.span>

							<m.span key="text3" className={styles.text}
								style={{ x: text3X, opacity: text3Opacity, scale: text3Scale }}
							>
								lorem ipsum lorem ipsum my name is Salvador and I am looking for a job. i am open to oppurtunites 3
							</m.span>
						</div>

						<div className={styles.progressBars}>
							<m.div key="bar1" className={styles.progressBar} style={{ width: bar1Width }}>
								<m.div key="fill1" className={styles.progressBarFill}
									style={{ x: fill1X, backgroundColor: fill1Color, color: fill1Color }}
								/>
							</m.div>
							<m.div key="bar2" className={styles.progressBar} style={{ width: bar2Width }}>
								<m.div key="fill2" className={styles.progressBarFill}
									style={{ x: fill2X, backgroundColor: fill2Color, color: fill2Color }}
								/>
							</m.div>
							<m.div key="bar3" className={styles.progressBar} style={{ width: bar3Width }}>
								<m.div key="fill3" className={styles.progressBarFill}
									style={{ x: fill3X, backgroundColor: fill3Color, color: fill3Color }}
								/>
							</m.div>
						</div>
					</div>

					<m.div key="slide" className={styles.slide} style={{ y: slideY }}/>
				</div>
			</div>
		</div>
	);
}

export default Scene2;