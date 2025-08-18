import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "React", level: "Advanced", icon: "⚛️" },
    { name: "JavaScript", level: "Advanced", icon: "🟨" },
    { name: "HTML5", level: "Expert", icon: "🌐" },
    { name: "CSS3", level: "Expert", icon: "🎨" },
    { name: "Git & GitHub", level: "Intermediate", icon: "🔧" },
    { name: "Node.js", level: "Intermediate", icon: "🟩" },
  ];

  return (
    <section className="skills" id="skills">
      <div className="overlay">
        <h2 data-aos="fade-up">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
