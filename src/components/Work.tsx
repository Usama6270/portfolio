import { useState, useEffect, useRef } from "react";
import { FaGithub, FaArrowRight, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import "./styles/Work.css";

const projectsData = [
  {
    title: "Aritmatika Solver",
    description: "Program ini dirancang untuk mempermudah pengguna dalam menyelesaikan soal-soal Aritmatika secara otomatis dengan akurasi tinggi. Fitur meliputi penyelesaian langkah demi langkah untuk aljabar dan kalkulus dasar.",
    image: "/images/arithmetic.png",
    github: "https://github.com/moncy-y/arithmetica-solver",
    tech: ["React", "TypeScript", "MathJS", "Tailwind"]
  },
  {
    title: "AutoChat-Discord",
    description: "AutoChat adalah solusi otomatisasi untuk mengirim pesan ke saluran Discord secara terjadwal dengan dashboard analitik. Mendukung beberapa server dan kustomisasi pesan yang luas.",
    image: "/images/discord.png",
    github: "https://github.com/moncy-y/autochat-discord",
    tech: ["Node.js", "Discord.js", "Express", "MongoDB"]
  },
  {
    title: "Buku Catatan",
    description: "Buku Catatan adalah website yang memungkinkan pengguna untuk membuat, menyimpan, dan mengelola catatan harian dengan enkripsi end-to-end. Fokus pada privasi dan kecepatan akses.",
    image: "/images/placeholder.webp",
    github: "https://github.com/moncy-y/notes-app",
    tech: ["Next.js", "Firebase", "Zustand", "SCSS"]
  },
  {
    title: "Portfolio Website",
    description: "A creative portfolio website built with React, Three.js, and GSAP to showcase professional work and immersive 3D skills. Optimized for performance and modern aesthetics.",
    image: "/images/placeholder.webp",
    github: "https://github.com/moncy-y/portfolio",
    tech: ["React", "Three.js", "GSAP", "Vite"]
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure payment gateway integration. Includes an admin dashboard for inventory tracking.",
    image: "/images/placeholder.webp",
    github: "https://github.com/moncy-y/ecommerce",
    tech: ["MERN Stack", "Redux", "Stripe API", "AWS"]
  },
  {
    title: "AI Image Gen",
    description: "An AI-powered tool that generates stunning images from text prompts using DALL-E and Stable Diffusion APIs. Features a community gallery and prompt history.",
    image: "/images/placeholder.webp",
    github: "https://github.com/moncy-y/ai-image-gen",
    tech: ["OpenAI API", "React", "Node.js", "Cloudinary"]
  }
];

const Work = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const openModal = (e: React.MouseEvent, project: any) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Opening modal for:", project.title);
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
    }
  }, [selectedProject]);

  return (
    <section className={hideHeader ? "work-section-embedded" : "work-section"} id="work">
      <div className="work-container section-container">
        {!hideHeader && (
          <h2 className="work-title">
            <span>PROJECTS</span>
          </h2>
        )}
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

      {selectedProject && (
        <div 
          className="modal-overlay" 
          ref={overlayRef} 
          onClick={closeModal}
          style={{ display: 'flex', opacity: 1, visibility: 'visible', zIndex: 10000 }}
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
                <h2>{selectedProject.title}</h2>
                <div className="tech-stack">
                  {selectedProject.tech.map((t: string, i: number) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
                <h3>Project Overview (Dummy Details)</h3>
                <p>This is a verification text for the project: <strong>{selectedProject.title}</strong>. 
                If you can see this, the modal is working perfectly. The tech stack used includes 
                {selectedProject.tech.join(", ")}. This project focuses on high performance and clean UI design.</p>
                
                <div className="modal-actions">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-btn github"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};



export default Work;

