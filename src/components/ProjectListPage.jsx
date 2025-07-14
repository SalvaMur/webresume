import ProjectItem from "./ProjectItem";
import projectsMap from "../data/projectsMap.json";

function ProjectListPage() {
	if (false) return ( // Remove when Projects section is finished
		<div>
			Project List Page
			<div>
				<ul>
					{Object.keys(projectsMap).map((id) => {
						const props = { projectID: id, projectData: projectsMap[id].text }
						return (
							<li key={id}>
								<ProjectItem data={props}/>
							</li>
					)})}
				</ul>
			</div>
		</div>
	);

	else return ( // Placeholder for unfinished Projects section
		<div className="default-content-wrapper">
			<div className="default-content">
				<span className="default-content-font">
					Currently There Are No Project Summaries Uploaded<br/>
					To View My Projects, Visit My&nbsp;
					<a href="https://github.com/SalvaMur?tab=repositories"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub Repository
					</a>
				</span>
			</div>
		</div>
	);
}

export default ProjectListPage;