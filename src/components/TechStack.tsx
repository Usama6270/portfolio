import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaAws,
  FaPython,
  FaGitAlt,
  FaJira
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPytorch,
  SiFastapi,
  SiSupabase,
  SiPrisma,
  SiLangchain,
  SiHuggingface,
  SiPostman,
  SiVite,
  SiRedux,
  SiMysql,
  SiJquery,
  SiKubernetes,
} from "react-icons/si";
import { GiBrain, GiProcessor, GiShieldReflect, GiConversation } from "react-icons/gi";
import { MdApi, MdSchema } from "react-icons/md";
import { DiScrum } from "react-icons/di";
import "./styles/TechStack.css";

const techData = [
  // Frontend
  { name: "React", icon: <FaReact color="#61DAFB" />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" />, category: "frontend" },
  { name: "HTML5", icon: <FaHtml5 color="#E34F26" />, category: "frontend" },
  { name: "CSS3", icon: <FaCss3Alt color="#1572B6" />, category: "frontend" },
  { name: "Redux", icon: <SiRedux color="#764ABC" />, category: "frontend" },
  { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" />, category: "frontend" },
  { name: "jQuery", icon: <SiJquery color="#0769AD" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, category: "frontend" },
  { name: "Context API", icon: <FaReact color="#61DAFB" />, category: "frontend" },
  { name: "Ajax", icon: <SiJquery color="#0769AD" />, category: "frontend" },
  
  // Backend & APIs
  { name: "Node.js", icon: <FaNodeJs color="#339933" />, category: "backend" },
  { name: "Express.js", icon: <SiExpress color="#ffffff" />, category: "backend" },
  { name: "Python", icon: <FaPython color="#3776AB" />, category: "backend" },
  { name: "FastAPI", icon: <SiFastapi color="#05998B" />, category: "backend" },
  { name: "RESTful APIs", icon: <MdApi color="#00ff88" />, category: "backend" },
  { name: "JSON", icon: <MdSchema color="#ffffff" />, category: "backend" },
  
  // AI & ML
  { name: "RAG", icon: <GiBrain color="#c2a4ff" />, category: "ai" },
  { name: "LangChain", icon: <SiLangchain color="#ffffff" />, category: "ai" },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" />, category: "ai" },
  { name: "Multimodal AI", icon: <GiProcessor color="#ffffff" />, category: "ai" },
  { name: "Transformers", icon: <SiHuggingface color="#FFD21E" />, category: "ai" },
  { name: "Prompt Eng.", icon: <GiConversation color="#3ECF8E" />, category: "ai" },
  { name: "FAISS", icon: <GiBrain color="#ffffff" />, category: "ai" },
  { name: "Ollama", icon: <GiShieldReflect color="#ffffff" />, category: "ai" },
  
  // Databases
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: "database" },
  { name: "MySQL", icon: <SiMysql color="#4479A1" />, category: "database" },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" />, category: "database" },
  { name: "Prisma", icon: <SiPrisma color="#ffffff" />, category: "database" },
  
  // DevOps & Tools
  { name: "Docker", icon: <FaDocker color="#2496ED" />, category: "devops" },
  { name: "AWS", icon: <FaAws color="#FF9900" />, category: "devops" },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" />, category: "devops" },
  { name: "Git", icon: <FaGitAlt color="#F05032" />, category: "tools" },
  { name: "GitHub", icon: <FaGithub color="#ffffff" />, category: "tools" },
  { name: "Jira", icon: <FaJira color="#0052CC" />, category: "tools" },
  { name: "Scrum", icon: <DiScrum color="#ffffff" />, category: "tools" },
  { name: "Postman", icon: <SiPostman color="#FF6C37" />, category: "tools" },
  { name: "Vite", icon: <SiVite color="#646CFF" />, category: "tools" },
];

const TechStack = () => {
  const row1 = techData.slice(0, Math.ceil(techData.length / 2));
  const row2 = techData.slice(Math.ceil(techData.length / 2));

  return (
    <section className="techstack-container" id="techstack">
      <h2 className="techstack-title">My Techstack</h2>

      <div className="marquee-wrapper">
        <Marquee
          gradient={false}
          speed={45}
          pauseOnHover={true}
          direction="left"
        >
          {row1.map((tech, index) => (
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
          speed={45}
          pauseOnHover={true}
          direction="right"
        >
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


