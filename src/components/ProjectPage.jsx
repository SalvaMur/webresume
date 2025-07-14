import { useState } from "react";
import { useParams } from "react-router-dom";
import projectMap from "../data/projectsMap.json";

function ProjectPage() {
	const { projectID } = useParams();
	const {
		folder, numOfImgs, text
	} = projectMap[projectID];
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<div>
			<p>{text.title}</p>
			<div>
				<ul>
					{Array.from({ length: numOfImgs }, (_, i) => (
						<li key={i}>
							<img className="projectImage"
								src={`/content/project_images/${folder}/${i}.jpg`}
								onClick={() => setSelectedImage(`/content/project_images/${folder}/${i}.jpg`)}
							/>
							<p>{text.imageNotes[i]}</p>
						</li>
					))}
				</ul>
			</div>
			<br/><br/>
			<p>{text.summary}</p>
			<br/><br/>
			<p>{text.body}</p>

			{selectedImage && (
				<div className="imageModal">
					<span
						onClick={() => setSelectedImage(null)}
						style={{
							padding: "10px",
							backgroundColor: "red"
						}}
					>
						&chi;
					</span>
					<img
						style={{ 
							width: "30%",
							margin: "auto",
							display: "block"
						}}
						src={selectedImage}
					/>
					<p style={{textAlign: "center"}}>{selectedImage}</p>
				</div>
			)}
		</div>
	);
}

export default ProjectPage;