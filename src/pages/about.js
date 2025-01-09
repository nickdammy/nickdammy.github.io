import ProfilePic from "../images/profilepic.png";



function About() {
	return (
		<div>
			<h5 style={{ padding: "50px" }}>
				<div style={{ display: 'flex', flexDirection: 'column-reverse', alignItems: 'center' }}>
					<div style={{ flex: '1', textAlign: 'center' }}>
						<p style={{ fontSize: '20px', margin: "20px" }}>
							My name is Oluwadamilola Ajayi. I have a Master's degree in Software Engineering from the University of Texas at Arlington and a Bachelor's degree in Computer Science from Minnesota State University Moorhead.
							I have over 5 years of experience in web and software development.
							I am a full stack developer with experience in Java, Python, C#, and JavaScript. I have worked on various projects that include web development, mobile development, and software development.
							I am passionate about learning new technologies, and I am always looking for opportunities to work on new projects. Currently, I am seeking a full-time position in software development.
						</p>
					</div>
					<div style={{ flex: '0 0 auto', marginRight: '10px', textAlign: 'center' }}>
						<img src={ProfilePic} alt="Profile" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
					</div>
				</div>
			</h5>
			<h5 style={{ color: "blue", textAlign: 'center' }}> I am skilled in the following technologies: </h5>
			<div className="d-flex flex-wrap justify-content-center" style={{ padding: "10px" }}>
				{["Java", "Python", "C#", "JavaScript", "React", "Angular", "Node.js", "Express", "SQL", "MongoDB", "HTML", "CSS", "Bootstrap", "jQuery", "Git", "Docker", "Azure", "Android Studio", "Visual Studio", "IntelliJ", "Eclipse", "VS Code", "Jira", "Postman", "RESTful APIs", "SOAP", "Agile", "Scrum"].map((tech, index) => (
					<div key={index} className="p-2" style={{ border: `1px solid ${getColor()}`, borderRadius: "5px", margin: "5px", fontWeight: "bold" }}>
						{tech}
					</div>
				))}
			</div>
		</div>
	);

	function getColor() {
		const randomColor = () => {
			const letters = '0123456789ABCDEF';
			let color = '#';
			for (let i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		};

		return randomColor();
	}
}

export default About;