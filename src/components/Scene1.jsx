import { motion as m, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import useTargetScrollProgress from "../hooks/useTargetScrollProgress";
import styles from "../styles/Scene1.module.css";

function Scene1() {
	const sceneRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sceneRef,
		offset: ["start end", "end start"],
		layoutEffect: true
	});
	const scene = useRef({
		"frame1": { "threshold": 100 / 950, "exitLimit": 0.0 / 950, "isActive": false },
		"frame2": { "threshold": 250 / 950, "exitLimit": 150 / 950, "isActive": false },
		"frame3": { "threshold": 400 / 950, "exitLimit": 300 / 950, "isActive": false },
		"frame4": { "threshold": 550 / 950, "exitLimit": 450 / 950, "isActive": false },
		"frame5": { "threshold": 700 / 950, "exitLimit": 600 / 950, "isActive": false }
	});
	const sceneControls = {
		"slide1": useAnimation(), "text1": useAnimation(), "text2": useAnimation(),
		"text3": useAnimation(), "text5": useAnimation(), "text6": useAnimation(),
		"text7": useAnimation()
	};
	const sceneVariants = {
		"slide1": {
			"frame1": { x: 315.075, transition: { duration: .5 } },
			"frame2": { x: 0, y: 48, transition: { duration: .5 } },
			"frame3": { y: 0, transition: { duration: .5 } }
		},
		"text1": {
			"hidden": { opacity: 0 },
			"frame1": { opacity: 1, transition: { duration: 1.5 } },
			"frame2": { transition: { duration: .5 } }
		},
		"text2": {
			"hidden": { opacity: 0, transition: { duration: .5 } },
			"frame2": { opacity: 1, transition: { duration: .5 } }
		},
		"text3": {
			"hidden": { opacity: 0, y: 192, transition: { duration: .5 } },
			"frame3": { opacity: 1, y: 0, transition: { duration: .5 } }
		},
		"text5": {
			"hidden": { opacity: 0, y: 500 },
			"frame5": { opacity: 1, y: 0 }
		},
		"text6": {
			"hidden": { opacity: 0, y: 500 },
			"frame5": { opacity: 1, y: 0, transition: { delay: .5 } }
		},
		"text7": {
			"hidden": { opacity: 0, y: 500 },
			"frame5": { opacity: 1, y: 0, transition: { delay: 1 } }
		}
	};

	// Progressive Animations
	const slideDisplace = useTransform(
		scrollYProgress, [450 / 950, 650 / 950], ["0%", "-100%"]
	);

	// Scroll-Triggered Animations
	const checkThreshold = (y, isMount = false) => {
		const { frame1, frame2, frame3, frame4, frame5 } = scene.current;
		const { slide1, text1, text2, text3, text5, text6, text7 } = sceneControls;

		const animateControl = (control, variant) => {
			if (isMount) control.set(variant);
			else control.start(variant);
		};
		
		// Frame 1
		if (y >= frame1.threshold && (!frame1.isActive || isMount)) {
			scene.current.frame1.isActive = true;
			
			animateControl(slide1, "frame1");
			animateControl(text1, "frame1");
		}

		else if (y >= frame1.exitLimit && y < frame1.threshold && (frame1.isActive || isMount)) {
			scene.current.frame1.isActive = false;
			// Redundant, threshold should always be passed for scene 1
		}

		// Frame 2
		if (y >= frame2.threshold && (!frame2.isActive || isMount)) {
			scene.current.frame2.isActive = true;
			
			animateControl(slide1, "frame2");
			animateControl(text1, "frame2");
			animateControl(text2, "frame2");
		}

		else if (y >= frame2.exitLimit && y < frame2.threshold && (frame2.isActive || isMount)) {
			scene.current.frame2.isActive = false;
			
			animateControl(slide1, "frame1");
			animateControl(text1, "frame1");
			animateControl(text2, "hidden");
		}

		// Frame 3
		if (y >= frame3.threshold && (!frame3.isActive || isMount)) {
			scene.current.frame3.isActive = true;
			
			animateControl(slide1, "frame3");
			animateControl(text3, "frame3");
		}

		else if (y >= frame3.exitLimit && y < frame3.threshold && (frame3.isActive || isMount)) {
			scene.current.frame3.isActive = false;

			animateControl(slide1, "frame2");
			animateControl(text3, "hidden");
		}

		// Frame 4
		if (y >= frame4.threshold && (!frame4.isActive || isMount)) {
			scene.current.frame4.isActive = true;
		}

		else if (y >= frame4.exitLimit && y < frame4.threshold && (frame4.isActive || isMount)) {
			scene.current.frame4.isActive = false;
		}

		// Frame 5
		if (y >= frame5.threshold && (!frame5.isActive || isMount)) {
			scene.current.frame5.isActive = true;

			animateControl(text5, "frame5");
			animateControl(text6, "frame5");
			animateControl(text7, "frame5");
		}

		else if (y >= frame5.exitLimit && y < frame5.threshold && (frame5.isActive || isMount)) {
			scene.current.frame5.isActive = false;

			animateControl(text5, "hidden");
			animateControl(text6, "hidden");
			animateControl(text7, "hidden");
		}
	};

	// Check initial scroll (needed for refresh in middle of page)
	let isMount = true;
	useLayoutEffect(() => {
		const targetProgress = useTargetScrollProgress(sceneRef.current);
		checkThreshold(targetProgress, true);
		isMount = false;
	});

	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (y) => {
			if (!isMount) checkThreshold(y);
		});

		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<div id="Welcome" className="scene" ref={sceneRef}>
			<div className={styles.stage1Container}>
				<div className={styles.stage1}>
					<m.div className={styles.stage1Slide1}
						style={{ x: slideDisplace }}
					>
						<m.div className={styles.slide1TextWrapper} style={{ y: 48 }}
							initial="frame1"
							animate={sceneControls.slide1}
							variants={sceneVariants.slide1}
						>
							<div>
								<m.span className={styles.text1}
									initial="hidden"
									animate={sceneControls.text1}
									variants={sceneVariants.text1}
								>
									Hello!
								</m.span>

								<m.span className={styles.text2}
									initial="hidden"
									animate={sceneControls.text2}
									variants={sceneVariants.text2}
								>
									My Name Is Salvador
								</m.span>
							</div>

							<m.div
								initial="hidden"
								animate={sceneControls.text3}
								variants={sceneVariants.text3}
							>
								<span className={styles.text3}>And Welcome To My Online Resume!</span>
							</m.div>
						</m.div>
					</m.div>

					<m.div className={styles.stage1Slide2}
						style={{ x: slideDisplace }}
					>
						<div className={styles.slide2TextWrapper}>
							<span className={styles.text4}>This Site Will Showcase My</span>

							<div className={styles.subtext5}>
								<m.span className={styles.text5}
									initial="hidden"
									animate={sceneControls.text5}
									variants={sceneVariants.text5}
									transition={{ duration: .5 }}
								>
									Skills,
								</m.span>
								<m.span className={styles.text6}
									initial="hidden"
									animate={sceneControls.text6}
									variants={sceneVariants.text6}
									transition={{ duration: .5 }}
								>
									Experience
								</m.span>
								<m.span className={styles.text7}
									initial="hidden"
									animate={sceneControls.text7}
									variants={sceneVariants.text7}
									transition={{ duration: .5 }}
								>
									And Projects
								</m.span>
							</div>
						</div>
					</m.div>
				</div>
			</div>

			<div className={styles.intersceneTransition1}/>
		</div>
	);
}

export default Scene1;