import { Link } from "react-router-dom";
import { R_PROJECTS } from "../constants/routes";

function ProjectItem({ data }) {
	const { 
		projectID,
		projectData: { title, description }
	} = data;

	return (
		<div>
			<Link to={`${R_PROJECTS}/${projectID}`}>
				<span>
					{title}
				</span>
			</Link>
			<span>
				{description}
			</span>
		</div>
	);
}

export default ProjectItem;