import { Link } from "react-router-dom";
import { R_HOME } from "../constants/routes";

function WelcomePage() {
	return (
		<div>
			<span>Welcome Page</span>
			<div>
				<Link to={R_HOME}>To Main Layout</Link>
			</div>
		</div>
	);
}

export default WelcomePage;