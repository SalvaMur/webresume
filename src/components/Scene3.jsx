import { motion as m, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useLayoutEffect, useRef } from "react";
import useTargetScrollProgress from "../hooks/useTargetScrollProgress";
import styles from "../styles/Scene3.module.css";

function Scene3() {
	const sceneRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sceneRef,
		offset: ["start end", "end start"],
		layoutEffect: true
	});
	const scene = useRef({
		"frame1": { "threshold": 100 / 1000, "exitLimit": 0.0 / 1000, "isActive": false }
	});
	const sceneControls = {
		"el1": useAnimation()
	};
	const sceneVariants = {
		"el1": {
			"hidden": { opacity: 0, transition: { duration: .5 } },
			"frame1": { opacity: 1, transition: { duration: .5 } }
		}
	};

	// Progressive Animations

	// Scroll-Triggered Animations
	const checkThreshold = (y, isMount = false) => {
		const { frame1 } = scene.current;
		const { el1 } = sceneControls;

		const animateControl = (control, variant) => {
			if (isMount) control.set(variant);
			else control.start(variant);
		};

		// Frame 1
		if (y >= frame1.threshold && (!frame1.isActive || isMount)) {
			scene.current.frame1.isActive = true;

			animateControl(el1, "frame1");
		}

		else if (y >= frame1.exitLimit && y < frame1.threshold && (frame1.isActive || isMount)) {
			scene.current.frame1.isActive = false;

			animateControl(el1, "hidden");
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
		<div id="About" className="scene-3 scene" ref={sceneRef}>
			<m.span className={styles.el1}
				initial="hidden"
				animate={sceneControls.el1}
				variants={sceneVariants.el1}
			>
				Scene 3
			</m.span>
		</div>
	);
}

export default Scene3;