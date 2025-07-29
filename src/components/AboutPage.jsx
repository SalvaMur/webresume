import { motion as m } from "framer-motion";
import "../styles/AboutPage.css";

// TODO: Refactor plain text into JSON files for better maintainability and
// potential supported languages. Do this for all plain text across the site,
// not just this page (button text, alt text?, plain text, nav link text).

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

				<div className="section-wrapper">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Summary">Summary</h2>
							</div>

							<div className="summary-column">
								<div className="portrait">
									<m.img
										src={`${import.meta.env.BASE_URL}content/images/portrait.jpg`}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
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
								I am Computer Science graduate in the Cleveland area who is interested in an entry-level position. I graduated from Cleveland State University in 2024 with a bachelor’s degree in Computer Science and a minor in Mathematics. During my time in the university, I have studied subjects such as full-stack development, software methodologies, machine learning, and database systems. I was named several times in the Dean’s List, and twice in the President’s List near my final year. In my final year, I was awarded the Computer Science department’s Chairperson’s Award and graduated with a GPA of 3.76.
							</p>

							<p>
								My academic studies were also further developed via my Co-op experience at Crown Equipment. At Crown Equipment, I worked with a cross-functional team utilizing agile methodologies and maintained the company’s sales department applications. I gained experience in Angular and Spring Boot technologies as well as collaborating with a team in a professional environment.
							</p>

							<p>
								Through coursework from Cleveland State University, I have academic experience with technologies such as Python, JavaScript, C, MySQL, Android Studio, and React. Through my Co-op position at Crown Equipment, I have developed skills for technologies such as Java, TypeScript, Git, SQL Server Management Studio, and Angular. I hope to further develop my existing skill set and gain new expertise of new technologies by entering the industry as an entry-level developer, analyst, or engineer.
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Personal_Statement">Personal Statement</h2>
							</div>

							<p>
								As a holder of a Bachelor of Science in Computer Science with a minor in Mathematics, I am eager to transition from academic studies to being a contributor in the industry. My passion isn’t narrowed only to understanding software systems but also includes applying that knowledge to real-world projects that deliver practical outcomes. I am motivated by collaboration and seek to learn the best practices and scalable system designs from professional environments. Taking my academic and Co-op experiences and expanding them by contributing to professional development processes is something I hope to achieve.
							</p>

							<p>
								In my academic studies, I engaged with software subjects that increased my understanding, exposing me to the nuances of software and hardware systems. From coursework and team-oriented projects, I explored topics such as database concepts, machine learning, software engineering, and full-stack web development. The experiences from university have formed my basis of software concepts and encouraged me to engage with both application and theory of software technologies. My capstone project highlights this refinement, which allowed me to contribute to the development of a system that integrates hardware input, algorithms, and software design in collaboration with other students.
							</p>

							<p>
								My experiences at the university were then applied and further enhanced by my Co-op position as a Web Developer at Crown Equipment. I applied my academic skills in a professional production environment while working in a remote team structure that used agile methodologies. I gained professional experience in version control, pipeline deployment, and collaborative software development experience, further expanding my understanding of practical implementation in professional environments.
							</p>

							<p>
								Currently I am seeking an entry-level position where I can begin my journey in the industry. My experiences from academic studies at Cleveland State University and Co-op position at Crown Equipment have provided me with the confidence and competency to fill the role of an entry-level position. As an entry-level engineer, developer, or analyst, I aim to gain experience in professional environments, expand my expertise of concurrent and emerging technologies, and collaborate with others. In the long term, I hope to become an industry professional whose work is defined by technical know-how and adaptability to the ever-changing industry.
							</p>
						</div>
					</div>
				</div>

				<div className="section-wrapper">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Education">Education</h2>
							</div>

							<div className="education-item">
								<div className="education-header1">B.S. in Computer Science, Minor in Mathematics</div>
								<div>Cleveland State University &mdash; Cleveland, OH</div>
								<div>Spring 2020 &mdash; Spring 2024</div>
								<div>GPA: 3.76</div>
							</div>

							<div className="education-item-section">
								<div className="education-header1">Relevant Coursework</div>
								<div>
									<div className="education-course">
										<div className="education-header2">Machine Learning</div>
										<p>
											Learned theory and application of supervised, unsupervised and reinforcement learning, including algorithms such as neural networks, clustering methods and support vector machines. Programming skills for machine learning were developed as well as understanding the use cases of a learning technology in accordance to a problem.
										</p>
									</div>

									<div className="education-course">
										<div className="education-header2">Internet Programming</div>
										<p>
											Gained experience developing web applications using a range of technologies such as HTML, CSS, JavaScript, server-side scripting and database integration. Also learned web architecture concepts, REST API and web security in modern web applications.
										</p>
									</div>

									<div className="education-course">
										<div className="education-header2">Database Concepts</div>
										<p>
											Developed fundamental skills in relational database design, normalization in the Third Normal form, entity relation, and SQL for data manipulation and retrieval. Obtained experience with database programming concepts which include stored procedures, triggers, client-server architectures, and transaction management in multi-user database systems.
										</p>
									</div>

									<div className="education-course">
										<div className="education-header2">Software Engineering</div>
										<p>
											Acquired knowledge of software development methodologies such as agile development and principles across the software lifecycle: analysis, design, testing, and maintenance. Collaborated in team-based projects to develop software applications while addressing system design concepts.
										</p>
									</div>
								</div>
							</div>

							<div className="education-item-section">
								<div className="education-header1">Capstone Project</div>
								<p>
									Collaborated on a student-led capstone project to develop a multi-device system for recognizing hand-sign letters and outputting the corresponding letter audibly via a mobile application. Designed and trained a multi-class neural network using PyTorch to classify flex sensor input. Developed an Android application for data acquisition and inference, along with auxiliary tools to support the collection of training data.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="section-wrapper">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Work_Experience">Work Experience</h2>
							</div>

							<div>
								<div className="work-position">Web Developer Co-op</div>
								<div>Crown Equipment Corporation &mdash; New Bremen, OH</div>
								<div>July 2023 &mdash; May 2024</div>
							
								<p>
									Worked collaboratively with a cross-functional team (engineers and business associates) to develop and maintain web applications for Crown's sales department in a fully remote, agile environment. Directly communicated with team's engineers and business associates.
								</p>

								<p>
									Participated in daily standups to provide updates on progress and address any challenges encountered during work on the story. Also participated in code reviews, by providing suggestions for issue resolutions and code improvements.
								</p>

								<p>
									Implemented new features, unit tests, and fixes for Angular Spring Boot and Struts JSP applications, utilizing Java, TypeScript, and HTML. Hosted application changes from specific Git branches on a dedicated Kubernetes namespace for testing by business associates.
								</p>

								<p>
									Managed database schema in MicroSoft SQL Server, including modifying and updating existing tables. Also utilized Flyway scripts to automate the deployment of database changes in sync when application updates go live.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="section-wrapper">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Skills">Skills</h2>
							</div>

							<div>
								<div className="skill-group-header">Programming Languages</div>
								<div className="skill-group">
									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/python.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>
										<div className="skill-name">Python</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/java.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">Java</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/javascript.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">JavaScript</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/typescript.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">TypeScript</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/c.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">C Language</div>
									</div>
								</div>
							</div>

							<div>
								<div className="skill-group-header">Tools</div>
								<div className="skill-group">
									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/git.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">Git</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/genericDB.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">SQL Server Management Studio</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/mysql.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">MySQL Workbench</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/androidstudio.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">Android Studio</div>
									</div>
								</div>
							</div>

							<div>
								<div className="skill-group-header">Frameworks</div>
								<div className="skill-group">
									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/react.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">React</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/react.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">React Native</div>
									</div>

									<div className="skill">
										<div className="skill-icon">
											<m.img src={`${import.meta.env.BASE_URL}content/images/tech_icons/angular.svg`}
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
											/>
										</div>	
										<div className="skill-name">Angular</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="section-wrapper">
					<div className="section">
						<div className="section-content">
							<div className="section-heading">
								<h2 id="Academic_Awards">Academic Awards</h2>
							</div>

							<div className="award">
								<div className="award-name">Computer Science Chairperson's Award</div>
								<div>Cleveland State University</div>
								<div>Spring 2024</div>
							</div>

							<div className="award">
								<div className="award-name">President's List</div>
								<div>Cleveland State University</div>
								<div>F 2022, SP 2023</div>
								<p>
									Awarded to students who achieved high academic performance with a semester grade point average of 3.9 or higher while enrolled in at least 15 credit hours of coursework.
								</p>
							</div>

							<div className="award">
								<div className="award-name">Dean's List</div>
								<div>Cleveland State University</div>
								<div>SP 2020, F 2020, SP 2021, F 2021, SP 2022, F 2022, SP 2023</div>
								<p>
									Awarded to students who achieved a semester grade point average of 3.25 or higher while enrolled in at least 12 credit hours of coursework.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutPage;