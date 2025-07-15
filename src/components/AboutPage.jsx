import "../styles/AboutPage.css";

// Placeholder text, remove later
const placeholder = `
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
	lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
`;

function AboutPage() {
	const scrollTo = (id) => () => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({behavior: "smooth", block: "start"});
		}
	};

	return (
		<div className="about-wrapper">
			<div className="about">
				<div className="title-wrapper">
					<div className="title">
						<h1>About Me</h1>
					</div>
				</div>

				<div className="section-wrapper odd">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Summary">Summary</h2>
							</div>

							<div className="summary-column">
								<div className="portrait">
									<img
										src={`${import.meta.env.BASE_URL}content/images/portrait.jpg`}
									/>
								</div>

								<div className="table-contents">
									<div className="contents-title">
										<h2 className="contents-title-heading">Contents</h2>
									</div>
									<ul className="contents-list">
										<li>
											<a onClick={scrollTo("Personal_Statement")} className="contents-link">
												<div>Personal Statement</div>
											</a>
										</li>
										<li>
											<a onClick={scrollTo("Education")} className="contents-link">
												<div>Education</div>
											</a>
										</li>
										<li>
											<a onClick={scrollTo("Work_Experience")} className="contents-link">
												<div>Work Experience</div>
											</a>
										</li>
										<li>
											<a onClick={scrollTo("Skills")} className="contents-link">
												<div>Skills</div>
											</a>
										</li>
										<li>
											<a onClick={scrollTo("Academic_Awards")} className="contents-link">
												<div>Academic Awards</div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							
							<p>
								{placeholder}
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper even">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Personal_Statement">Personal Statement</h2>
							</div>
							<p>
								{placeholder}
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper odd">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Education">Education</h2>
							</div>

							<p>
								{placeholder}
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper even">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Work_Experience">Work Experience</h2>
							</div>

							<div>
								<div><h3>Crown Equipment Corporation (July 2023 &mdash; May 2024)</h3></div>
								<div><i>New Bremen, OH</i></div>
								<div><i>Web Developer Co-op</i></div>
							</div>
							
							<p>
								Worked collaboratively with a cross-functional team (engineers and business associates) to
								develop and maintain web applications for Crown's sales department in a fully remote, agile
								environment. Directly communicatted with team's engineers and business associattes.
							</p>

							<p>
								Participated in daily standups to provide updates on progress and address any challenges
								encountered during work on the story. Also participated in code reviews, by providing suggestions
								for issue resolutions and code improvements.
							</p>

							<p>
								Implemented new features, unit tests, and fixes for Angular Spring Boot and Struts JSP
								applications, utilizing Java, TypeScript, and HTML. Hosted application changes from specific Git
								branches on a dedicated Kubernetes namespace for testing by business associates.
							</p>

							<p>
								Managed database schema in MicroSoft SQL Server, including modifying and updating existing
								tables. Also utilized Flyway scripts to automate the deployment of database changes in sync when
								application updates go live.
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper odd">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Skills">Skills</h2>
							</div>
							<p>
								{placeholder}
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper even">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Academic_Awards">Academic Awards</h2>
							</div>
							<p>
								{placeholder}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;