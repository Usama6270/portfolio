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
  FaNetworkWired
} from "react-icons/fa";
import { 
  SiTailwindcss, 
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiRedux,
  SiMysql,
  SiOpenai,
  SiKubernetes,
  SiFastapi,
  SiHuggingface,
  SiVite,
  SiSupabase,
  SiPrisma,
  SiPytorch,
  SiLangchain,
  SiNextdotjs
} from "react-icons/si";
import { GiBrain, GiProcessor, GiShieldReflect } from "react-icons/gi";
import "./styles/TechStack.css";

const techData = [
  { name: "ReactJS", icon: <FaReact color="#61DAFB" />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs color="#ffffff" />, category: "frontend" },
  { name: "Python", icon: <FaPython color="#3776AB" />, category: "backend" },
  { name: "FastAPI", icon: <SiFastapi color="#05998B" />, category: "backend" },
  { name: "LangChain", icon: <SiLangchain color="#ffffff" />, category: "ai" },
  { name: "PyTorch", icon: <SiPytorch color="#EE4C2C" />, category: "ai" },
  { name: "Supabase", icon: <SiSupabase color="#3ECF8E" />, category: "backend" },
  { name: "Prisma", icon: <SiPrisma color="#ffffff" />, category: "backend" },
  { name: "FAISS", icon: <GiBrain color="#ffffff" />, category: "ai" },
  { name: "HuggingFace", icon: <SiHuggingface color="#FFD21E" />, category: "ai" },
  { name: "Groq LLM", icon: <GiProcessor color="#f3f3f3" />, category: "ai" },
  { name: "Ollama", icon: <GiShieldReflect color="#ffffff" />, category: "ai" },
  { name: "Node JS", icon: <FaNodeJs color="#339933" />, category: "backend" },
  { name: "MongoDB", icon: <SiMongodb color="#47A248" />, category: "backend" },
  { name: "Docker", icon: <FaDocker color="#2496ED" />, category: "devops" },
  { name: "Kubernetes", icon: <SiKubernetes color="#326CE5" />, category: "devops" },
  { name: "AWS", icon: <FaAws color="#FF9900" />, category: "devops" },
  { name: "Scapy", icon: <FaNetworkWired color="#ffffff" />, category: "cyber" },
  { name: "GitHub", icon: <FaGithub color="#ffffff" />, category: "tools" },
  { name: "Postman", icon: <SiPostman color="#FF6C37" />, category: "tools" },
  { name: "Vite", icon: <SiVite color="#646CFF" />, category: "tools" },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" />, category: "frontend" },
  { name: "Redux", icon: <SiRedux color="#764ABC" />, category: "frontend" },
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" />, category: "frontend" },
];

const TechStack = () => {
  return (
    <section className="techstack-container" id="techstack">
      <h2 className="techstack-title">My Techstack</h2>
      
      <div className="marquee-wrapper">
        <Marquee 
          gradient={false} 
          speed={50} 
          pauseOnHover={true}
          direction="left"
        >
          {techData.slice(0, 12).map((tech, index) => (
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
          {techData.slice(12).map((tech, index) => (
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


