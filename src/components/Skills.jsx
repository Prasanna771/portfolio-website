import SkillCard from "./SkillCard";

function Skills() {

  const skills = [
    { name: "Java", level: "Advanced" },
    { name: "Spring Boot", level: "Intermediate" },
    { name: "Spring Security", level: "Intermediate" },
    { name: "JWT", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: "Azure", level: "Beginner" },
    { name: "Postman", level: "Intermediate"}
  ];

  return (
    <div className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;