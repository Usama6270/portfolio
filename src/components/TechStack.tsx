import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaGitAlt
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFigma
} from "react-icons/si";
import { MdApi, MdDesignServices, MdStorage } from "react-icons/md";
import { BiLogoVisualStudio } from "react-icons/bi";
import "./styles/TechStack.css";

const techData = [
  { name: "React.js", icon: <FaReact color="#61DAFB" /> },
  { name: "JavaScript (ES6+)", icon: <FaJs color="#F7DF1E" /> },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
  { name: "RESTful APIs", icon: <MdApi color="#00ff88" /> },
  { name: "Figma", icon: <SiFigma color="#F24E1E" /> },
  { name: "Responsive Design", icon: <MdDesignServices color="#ffffff" /> },
  { name: "Python", icon: <FaPython color="#3776AB" /> },
  { name: "C++", icon: <MdStorage color="#c2a4ff" /> },
  { name: "C#", icon: <MdStorage color="#8c52ff" /> },
  { name: "NLP", icon: <MdDesignServices color="#00ff88" /> },
  { name: "Supervised Learning", icon: <MdDesignServices color="#c2a4ff" /> },
  { name: "Model Training", icon: <MdDesignServices color="#ffffff" /> },
  { name: "SQL", icon: <MdStorage color="#4DB6AC" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { name: "Git", icon: <FaGitAlt color="#F05032" /> },
  { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
  { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
  { name: "VS Code", icon: <BiLogoVisualStudio color="#007ACC" /> }
];

const TechStack = () => {
  const row1 = techData.slice(0, Math.ceil(techData.length / 2));
  const row2 = techData.slice(Math.ceil(techData.length / 2));

  return (
    <section className="techstack-container" id="techstack">
      <h2 className="techstack-title">Technical Skills</h2>

      <div className="marquee-wrapper">
        <Marquee gradient={false} speed={45} pauseOnHover direction="left">
          {row1.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="marquee-wrapper">
        <Marquee gradient={false} speed={45} pauseOnHover direction="right">
          {row2.map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default TechStack;
