import { motion as m, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import "../styles/Scene1.css";

function Scene1() {
	const sceneRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sceneRef,
		offset: ["start end", "end start"]
	});

	const scene = useRef({
		"frame1": {
			"threshold": 100 / 950,
			"thresholdCrossed": false,
		},
		"frame2": {
			"threshold": 250 / 950,
			"thresholdCrossed": false,
		},
		"frame3": {
			"threshold": 400 / 950,
			"thresholdCrossed": false,
		},
		"frame4": {
			"threshold": 550 / 950,
			"thresholdCrossed": false,
		},
		"frame5": {
			"threshold": 700 / 950,
			"thresholdCrossed": false,
		}
	});

	const sceneControls = {
		"slide-1-text-wrapper": useAnimation(),
		"text-1": useAnimation(),
		"text-2": useAnimation(),
		"text-3": useAnimation(),
		"text-5": useAnimation(),
		"text-6": useAnimation(),
		"text-7": useAnimation()
	};

	const slideDisplace = useTransform(scrollYProgress, [450 / 950, 650 / 950], ["0%", "-100%"]);

	useEffect(() => {
		sceneControls["text-1"].start("frame1");
	}, []);

	useEffect(() => {
		const unsubscribe = scrollYProgress.on("change", (y) => {
			console.log(y); // REMOVE LATER
			const { frame2, frame3, frame4, frame5 } = scene.current;
			
			// Frame 2
			if (y >= frame2.threshold && !frame2.thresholdCrossed) {	// Enter threshold
				scene.current["frame2"].thresholdCrossed = true;
				sceneControls["slide-1-text-wrapper"].start("frame2");
				sceneControls["text-1"].start("frame2");
				sceneControls["text-2"].start("frame2");
			}

			else if (y < frame2.threshold && frame2.thresholdCrossed) {	// Exit threshold
				scene.current["frame2"].thresholdCrossed = false;
				sceneControls["slide-1-text-wrapper"].start("frame1");
				sceneControls["text-1"].start("frame1");
				sceneControls["text-2"].start("hidden");
			}

			// Frame 3
			if (y >= frame3.threshold && !frame3.thresholdCrossed) {
				scene.current["frame3"].thresholdCrossed = true;
				sceneControls["slide-1-text-wrapper"].start("frame3");
				sceneControls["text-3"].start("frame3");
			}

			else if (y < frame3.threshold && frame3.thresholdCrossed) {
				scene.current["frame3"].thresholdCrossed = false;
				sceneControls["slide-1-text-wrapper"].start("frame2");
				sceneControls["text-3"].start("hidden");
			}

			// Frame 4
			if (y >= frame4.threshold && !frame4.thresholdCrossed) {
				scene.current["frame4"].thresholdCrossed = true;
			}

			else if (y < frame4.threshold && frame4.thresholdCrossed) {
				scene.current["frame4"].thresholdCrossed = false;
			}

			// Frame 5
			if (y >= frame5.threshold && !frame5.thresholdCrossed) {
				scene.current["frame5"].thresholdCrossed = true;
				sceneControls["text-5"].start("frame5");
				sceneControls["text-6"].start("frame5");
				sceneControls["text-7"].start("frame5");
			}

			else if (y < frame5.threshold && frame5.thresholdCrossed) {
				scene.current["frame5"].thresholdCrossed = false;
				sceneControls["text-5"].start("hidden");
				sceneControls["text-6"].start("hidden");
				sceneControls["text-7"].start("hidden");
			}
		});

		// Unsubscribe scene onChange callback upon unmount
		return () => unsubscribe();
	}, [scrollYProgress]);

	return (
		<div id="Welcome" className="scene" ref={sceneRef}>
			<div className="stage-1-container">
				<div className="trigger-0"/>
				<div className="text-1-trigger"/>
				<div className="text-2-trigger"/>
				<div className="text-3-trigger"/>
				<div className="slide-1-trigger"/>
				
				<div className="stage-1">
					<m.div className="stage-1-slide-1"
						style={{ x: slideDisplace }}
					>
						<m.div className="slide-1-text-wrapper"
							style={{ y: 48 }}
							initial="frame1"
							animate={sceneControls["slide-1-text-wrapper"]}
							variants={{
								frame1: {
									x: 315.075,
									transition: { duration: .5 }
								},
								frame2: {
									x: 0,
									y: 48,
									transition: { duration: .5 }
								},
								frame3: {
									y: 0,
									transition: { duration: .5 }
								}
							}}
						>
							<div>
								<m.span className="text-1"
									initial="hidden"
									animate={sceneControls["text-1"]}
									variants={{
										hidden: { 
											opacity: 0
										},
										frame1: { 
											opacity: 1,
											transition: { duration: 1.5 }
										},
										frame2: {
											transition: { duration: .5 }
										}
									}}
								>
									Hello!
								</m.span>

								<m.span className="text-2"
									initial="hidden"
									animate={sceneControls["text-2"]}
									variants={{
										hidden: {
											opacity: 0,
											transition: { duration: .5 }
										},
										frame2: {
											opacity: 1,
											transition: { duration: .5 }
										}
									}}
								>
									My Name Is Salvador
								</m.span>
							</div>

							<m.div
								initial="hidden"
								animate={sceneControls["text-3"]}
								variants={{
									hidden: {
										opacity: 0,
										y: 192,
										transition: { duration: .5 }
									},
									frame3: {
										opacity: 1,
										y: 0,
										transition: { duration: .5 }
									}
								}}
							>
								<span className="text-3">And Welcome To My Online Resume!</span>
							</m.div>
						</m.div>
					</m.div>

					<m.div className="stage-1-slide-2"
						style={{ x: slideDisplace }}
					>
						<div className="slide-2-text-wrapper">
							<span className="text-4">This Site Will Showcase My</span>

							<div className="subtext-5">
								<m.span className="text-5"
									initial="hidden"
									animate={sceneControls["text-5"]}
									variants={{
										hidden: {
											opacity: 0,
											y: 500
										},
										frame5: {
											opacity: 1,
											y: 0
										}
									}}
									transition={{ duration: .5 }}
								>
									Skills,
								</m.span>
								<m.span className="text-6"
									initial="hidden"
									animate={sceneControls["text-6"]}
									variants={{
										hidden: {
											opacity: 0,
											y: 500
										},
										frame5: {
											opacity: 1,
											y: 0,
											transition: { delay: .5 }
										}
									}}
									transition={{ duration: .5 }}
								>
									Experience
								</m.span>
								<m.span className="text-7"
									initial="hidden"
									animate={sceneControls["text-7"]}
									variants={{
										hidden: {
											opacity: 0,
											y: 500
										},
										frame5: {
											opacity: 1,
											y: 0,
											transition: { delay: 1 }
										}
									}}
									transition={{ duration: .5 }}
								>
									And Projects
								</m.span>
							</div>
						</div>
					</m.div>
				</div>
			</div>

			<div className="interscene-transition-1"/>
		</div>
	);
}

export default Scene1;