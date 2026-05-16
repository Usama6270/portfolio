import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaArrowRight, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import "./styles/Work.css";

const projectsData = [
  {
    title: "AI Crop Advisory System",
    description: "A multi-layered AI system utilizing modern AI orchestration to handle diverse data types (image, text, and voice). Uses RAG to ground responses in verified datasets and a Vision pipeline for crop disease diagnosis.",
    image: "/images/crop.png",
    github: "https://github.com/hateemxpam/AI-Crop-Advisory-System---Multi-Modal-RAG",
    tech: ["GPT-4o", "RAG", "Multimodal AI", "Prompt Engineering", "LangChain", "PyTorch"],
    vision: "Providing farmers with instant, localized, and context-aware advice through state-of-the-art multimodal AI orchestration while eliminating hallucinations.",
    features: [
      "AI/LLM: OpenAI GPT-4o & Google Gemini 2.0 with LangChain Orchestration",
      "Vector Search: Sentence Transformers (Embeddings) & FAISS/ChromaDB",
      "Computer Vision: PyTorch/TensorFlow with Pretrained Models (EfficientNet-B2)",
      "Data Processing: Pandas, NumPy, and OpenCV for image processing",
      "Backend & UI: Python, FastAPI/Streamlit, and Whisper API for voice-to-text"
    ]
  },
  {
    title: "AutoFiverr",
    description: "An automation and workflow optimization tool focused on automating routine tasks for freelancers, such as buyer requests, profile monitoring, and keyword analysis.",
    image: "/images/fiverr.png",
    github: "https://github.com/Raffayy/AutoFiverr-FYP",
    tech: ["Ollama", "Llama3", "Express.js", "Supabase", "Scraping", "Automation"],
    vision: "Empowering freelancers by bridging the gap between marketplace analytics and AI-driven automation using local, privacy-focused LLMs.",
    features: [
      "Chrome Extension built with HTML, CSS, and JavaScript",
      "Python FastAPI backend orchestration",
      "Supabase PostgreSQL database for data persistence",
      "Ollama integration for local LLM execution",
      "Llama3 as the primary local text model",
      "Gemini 2.5 Flash for specialized visual/image-related tasks",
      "BeautifulSoup for advanced scraping-related parsing",
      "LangChain for connecting prompts to the local model ecosystem",
      "Celery support for background task processing and automation"
    ]
  },
  {
    title: "Airbnb Clone",
    description: "A full-stack implementation of a high-traffic marketplace platform, focusing on CRUD operations, server-side rendering, and responsive design.",
    image: "/images/airbnb.png",
    github: "https://github.com/hateemxpam/Airbnb-Clone",
    tech: ["Next.js", "React", "Redux", "Prisma", "MySQL", "Tailwind"],
    vision: "Replicating a high-scale marketplace architecture with a focus on Server-Side Rendering and intuitive user mapping.",
    features: [
      "Frontend: React.js with Framer Motion animations",
      "Database & Auth: MySQL (Prisma ORM) & NextAuth.js/Clerk",
      "Storage & Map: Cloudinary (Images) & Mapbox/Google Maps API integration",
      "Backend: Optimized Next.js API Routes for high-concurrency handling"
    ]
  },
  {
    title: "Secure E2EE Messaging",
    description: "A cybersecurity-focused desktop application for secure, multi-user messaging and file sharing, implementing a Zero-Knowledge architecture.",
    image: "/images/secure-msg.png",
    github: "https://github.com/hateemxpam/Information-Security-Project",
    tech: ["Cybersecurity", "E2EE", "RSA/AES", "Sockets", "Python", "Encryption"],
    vision: "Providing absolute privacy through end-to-end encryption and robust cryptographic key exchange protocols.",
    features: [
      "Security: RSA for Key Exchange & AES-256 (PyCryptodome) for Payload",
      "Networking: Python Socket Programming with Threading for concurrency",
      "Integrity: SHA-256 hashing for file integrity and secure password hashing",
      "GUI: Modern desktop interface built using PyQt5/Tkinter"
    ]
  },
  {
    title: "DPI Engine",
    description: "A network-level security tool that reassembles network flows to inspect Layer 7 data payloads, identifying application protocols and signatures.",
    image: "/images/dpi.png",
    github: "https://github.com/hateemxpam/Deep-Packet-Inspection",
    tech: ["Networking", "Packet Analysis", "Scapy", "Python", "Data Viz"],
    vision: "Enhancing network security through deep, byte-level inspection of modern application-layer protocols.",
    features: [
      "Core: Scapy (Packet manipulation) & PyShark (TShark wrapper)",
      "Analysis: Libpcap library for high-speed packet capture",
      "Detection: Signature matching using advanced Regex engine",
      "Visualization: Traffic analytics and graphing via Matplotlib/Seaborn"
    ]
  }
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openModal = (e: React.MouseEvent, project: any) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject && modalRef.current && overlayRef.current) {
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" }
      );
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <>
      <section className="work-section" id="work">
        <div className="work-container section-container">
          <h2 className="work-title">
            <span>PROJECTS</span>
          </h2>
          <div className="work-grid">
            {projectsData.map((project, index) => (
              <div
                className="project-card"
                key={index}
                onClick={(e) => openModal(e, project)}
                style={{ cursor: 'pointer', pointerEvents: 'auto' }}
              >
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} />
                  <div className="project-image-overlay"></div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub /> GitHub Link
                    </a>
                    <span className="view-details">
                      Click for Details <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && createPortal(
        <div
          className="modal-overlay"
          ref={overlayRef}
          onClick={closeModal}
          style={{ display: 'flex', zIndex: 99999 }}
        >
          <div className="modal-content" ref={modalRef} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              <div className="modal-info">
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  <div className="tech-stack">
                    {selectedProject.tech.map((t: string, i: number) => (
                      <span key={i} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-body">
                  <h3 className="section-subtitle">The Vision</h3>
                  <p className="project-detail-text">
                    {selectedProject.vision}
                  </p>

                  <h3 className="section-subtitle">Key Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-btn github"
                  >
                    <FaGithub /> View Source
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Work;

