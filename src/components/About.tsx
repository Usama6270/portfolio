import { FiCode, FiBriefcase, FiDownload, FiExternalLink } from "react-icons/fi";
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
              <span className="badge-text">Final Year Software Engineer</span>
            </div>
            <h2 className="hello-text">Hello, I'm</h2>
            <h1 className="name-text">
              <span className="gradient-text">Hateem</span>
            </h1>
            <p className="description para">
              A final-year Software Engineering student at FAST-NUCES, Islamabad, 
              specializing in full-stack web development and AI-driven systems. 
              Proficient in the MERN stack with hands-on experience in cloud-native 
              technologies (Docker, Kubernetes) and RAG-based applications. 
              I excel at building scalable web applications and integrating AI solutions 
              for real-world problems.
            </p>
            
            <div className="about-buttons">
              <a href="/Hateem_CV.pdf" download="Hateem_Khush_Bakht_CV.pdf" className="btn btn-primary">
                <FiDownload /> Download CV
              </a>
              <a href="#work" className="btn btn-secondary">
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


