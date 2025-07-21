import { useEffect } from "react";
import "../styles/WelcomePage.css";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import Scene4 from "./Scene4";

function WelcomePage() {
	useEffect(() => {
		console.log("render"); // TODO: Remove this when finished
	}, []);

	return (
		<div className="welcome-wrapper">
			<div className="welcome">
				<Scene1/>
				<Scene2/>
				<Scene3/>
				<Scene4/>
			</div>
		</div>
	);
}

export default WelcomePage;