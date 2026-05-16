import { FiDownload, FiExternalLink } from "react-icons/fi";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h3 className="title">About Me</h3>
        </div>

        <div className="about-content">
          <div className="about-text-wrapper">
            <div className="intro-badge">
              <span className="dot"></span>
              <span className="badge-text">Full Stack Developer</span>
            </div>
            <h2 className="hello-text">Hello, I'm</h2>
            <h1 className="name-text">
              <span className="gradient-text">Usama Jamshed</span>
            </h1>
            <p className="description para">
              Full Stack Developer skilled in the MERN stack, UI/UX design, applied AI/ML,
              and DevOps practices. Experienced in building web applications, training ML
              models, testing software, and delivering efficient, user-friendly solutions.
            </p>

            <div className="about-buttons">
              <a
                href="/Usama_CV.pdf"
                download="Usama_Jamshed_CV.pdf"
                className="btn btn-primary"
                onClick={() => {
                  window.location.href = "/Usama_CV.pdf";
                }}
              >
                <FiDownload /> Download CV
              </a>

              <a
                href="#work"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  // Using the global smoother instance for correct navigation
                  import("./Navbar").then((module) => {
                    module.smoother?.scrollTo("#work", true, "top top");
                  });
                }}
              >
                <FiExternalLink /> View Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;


