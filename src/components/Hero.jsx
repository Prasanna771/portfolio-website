function Hero() {
  return (
    <div className="hero">
      <h1>Bommidi Laxmi Prasanna</h1>

      <p>Java Backend Developer</p>
      <p>Building secure REST APIs with Spring Boot and PostgreSQL</p>
      <p className="tech-stack">
  Spring Boot | Spring Security | JWT | PostgreSQL | Azure
</p>

      <div className="hero-buttons">

        <a
          href="/resume.pdf" download
          >
            Resume
        </a>
        <a
          href="https://github.com/Prasanna771"
          target="_blank"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/prasanna771"
          target="_blank"
        >
          LinkedIn
        </a>

      </div>
    </div>
  );
}

export default Hero;