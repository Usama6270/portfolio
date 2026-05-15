import Marquee from "react-fast-marquee";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaBootstrap 
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiVite, 
  SiFirebase, 
  SiMui, 
  SiVercel, 
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman
} from "react-icons/si";
import "./styles/TechStack.css";

const techData = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" />, category: "frontend" },
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, category: "frontend" },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" />, category: "frontend" },
  { name: "ReactJS", icon: <FaReact color="#61DAFB" />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, category: "frontend" },
  { name: "Vite", icon: <SiVite color="#646CFF" />, category: "frontend" },
  { name: "Node JS", icon: <FaNodeJs color="#339933" />, category: "backend" },
  { name: "Express", icon: <SiExpress color="#ffffff" />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: "backend" },
  { name: "Firebase", icon: <SiFirebase color="#FFCA28" />, category: "backend" },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" />, category: "frontend" },
  { name: "Material UI", icon: <SiMui color="#007FFF" />, category: "frontend" },
  { name: "Vercel", icon: <SiVercel color="#ffffff" />, category: "tools" },
  { name: "Postman", icon: <SiPostman color="#FF6C37" />, category: "tools" },
];

const TechStack = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section className={hideHeader ? "techstack-container-embedded" : "techstack-container"} id="techstack">
      {!hideHeader && <h2 className="techstack-title">My Techstack</h2>}
      
      <div className="marquee-wrapper">
        <Marquee 
          gradient={false} 
          speed={50} 
          pauseOnHover={true}
          direction="left"
        >
          {techData.slice(0, 8).map((tech, index) => (
            <div className="tech-card" key={index}>
              <div className="tech-icon">{tech.icon}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="marquee-wrapper">
        <Marquee 
          gradient={false} 
          speed={50} 
          pauseOnHover={true}
          direction="right"
        >
          {techData.slice(8).map((tech, index) => (
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


