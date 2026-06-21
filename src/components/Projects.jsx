import ProjectCard from "./ProjectCard";

function Projects() {

  const projects = [
    {
      title: "JWT Authentication System",
      description: "Built a secure authentication system using Spring Security and JWT. Implemented user registration, login, token generation, token validation, refresh tokens, and role-based authorization for ADMIN and USER roles.",
      tech: "Spring Boot, Spring Security, PostgreSQL"
    },
    
    {
       title: "Upturn Opportunities",
        description:
       "Built a career opportunities platform that enables users to explore job openings and internship opportunities. Developed REST APIs, implemented database integration, and worked with backend business logic using Spring Boot.",
      tech:
       "Next.js, React, TypeScript, Tailwind"
      },
    {
      title: "Tours and Travels Management",
      description: "Developed a backend application for managing tour packages and customer bookings. Features include package creation, booking management, customer records, and booking history tracking.",
      tech: "Java, Spring Boot, MySQL"
    }
  ];

  return (
    <div className="section">
      <h2>Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;