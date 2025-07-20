import { useEffect } from "react";
import "../styles/WelcomePage.css";
import Scene1 from "./Scene1";

/*
 * TODO: Try to switch from using onChange callback for scrollYProgress discrete
 * animations to useTransform (used by progressive animations). Also, create
 * components for each scene and call them in here rather than programming it
 * all in here since it is becoming a bit much.
*/

function WelcomePage() {
	useEffect(() => {
		console.log("render"); // TODO: Remove this when finished
	}, []);

	return (
		<div className="welcome-wrapper">
			<div className="welcome">
				<Scene1/>

				<div id="Introduction" className="scene-1 scene">
					Scene 2
				</div>

				<div id="About" className="scene-2 scene">
					Scene 3
				</div>

				<div id="Homepage" className="scene-3 scene">
					Scene 4
				</div>
			</div>
		</div>
	);
}

export default WelcomePage;