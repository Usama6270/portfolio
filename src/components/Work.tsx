import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaArrowRight, FaTimes } from "react-icons/fa";
import gsap from "gsap";
import "./styles/Work.css";

const projectsData = [
  {
    title: "HomeEase Mobile App",
    description: "Cross-platform mobile platform connecting customers, service providers, and admins with booking, scheduling, reviews, and earnings tracking.",
    image: "/images/project-homeease.svg",
    github: "https://github.com/Usama6270",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "AI Recommendations"],
    vision: "Build an intelligent and reliable service ecosystem where users can book trusted services quickly and providers can manage work efficiently.",
    features: [
      "Service booking, scheduling, and rating workflow",
      "Secure authentication and role-based access for customer, provider, and admin",
      "RESTful backend APIs for app-wide communication",
      "AI-powered personalized service recommendations",
      "Customer-assistance chatbot integration"
    ]
  },
  {
    title: "Dry Fruit Admin Panel (MERN)",
    description: "Responsive admin dashboard for product, user, and sales management with reusable components and secure API integration.",
    image: "/images/project-dryfruit.svg",
    github: "https://github.com/Usama6270",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "MERN"],
    vision: "Deliver a clean, scalable admin interface to manage e-commerce operations with strong usability and performance.",
    features: [
      "Product CRUD and inventory monitoring tools",
      "User and sales analytics management views",
      "Reusable UI components and modular architecture",
      "Secure APIs with robust request handling",
      "Fully responsive design for mobile and desktop"
    ]
  },
  {
    title: "Movie Genre Detection (Deep Learning)",
    description: "Trailer-based movie genre classifier built with YouTube trailer data, extracted frames, and semi-supervised learning.",
    image: "/images/project-movie-genre.svg",
    github: "https://github.com/Usama6270",
    tech: ["ResNet50", "K-means", "Python", "Deep Learning", "Computer Vision"],
    vision: "Improve automated genre understanding by combining transfer learning and semi-supervised labeling at scale.",
    features: [
      "Collected and processed trailer data from YouTube",
      "Fine-tuned ResNet50 on extracted video frames",
      "Used ResNet50 embeddings with K-means for semi-supervised labeling",
      "Implemented full pipeline: collection, preprocessing, training, and evaluation"
    ]
  },
  {
    title: "Sign Language Digit Recognition (CNN)",
    description: "Image classification system for hand-sign digit recognition trained on labeled gesture data with preprocessing and augmentation.",
    image: "/images/project-sign-digit.svg",
    github: "https://github.com/Usama6270",
    tech: ["CNN", "Python", "Image Processing", "Data Augmentation", "Classification"],
    vision: "Enable practical and fast sign-based digit understanding using compact deep learning models.",
    features: [
      "Preprocessed gesture images for robust model training",
      "Applied augmentation to improve generalization and accuracy",
      "Trained and evaluated CNN model on labeled digit gestures",
      "Validated prediction performance across unseen samples"
    ]
  },
  {
    title: "PakSentinel",
    description: "End-to-end NLP misinformation detection pipeline with reproducible experiments, MLflow tracking, FastAPI inference, and assignment-aligned reporting tasks.",
    image: "/images/project-paksentinel.svg",
    github: "https://github.com/Usama6270/PakSentinel",
    tech: ["Python", "NLP", "MLflow", "FastAPI", "Pytest", "Reproducible ML"],
    vision: "Build a reliable misinformation detection workflow where data processing, experiments, model audits, and API serving stay reproducible and traceable.",
    features: [
      "Modular project design across data, NLP, features, models, tracking, and API layers",
      "End-to-end run order from dataset build to full experiment, ablations, and submission artifacts",
      "MLflow-based experiment tracking and model registry checks for controlled comparison",
      "FastAPI inference service for deployable model serving",
      "Automated verification through API and model tests with pytest"
    ]
  },
  {
    title: "TrendScope Analytics Pipeline",
    description: "A fully reproducible 6-stage NLP data engineering pipeline for collecting, cleaning, representing, versioning, and analyzing emerging product trends.",
    image: "/images/project-trendscope.svg",
    github: "https://github.com/Usama6270/Trend_Intelligence_Pipeline",
    tech: ["Python", "Data Engineering", "DVC", "Airflow", "NLP", "From Scratch"],
    vision: "Create a transparent trend intelligence stack that runs from raw web data to linguistic analytics with strict version control and orchestration.",
    features: [
      "Stage-based pipeline: scraping, preprocessing, representation, statistics, and Airflow orchestration",
      "Custom NLP implementation without NLTK/spaCy/scikit-learn/NumPy dependencies",
      "DVC data versioning workflow with reproducible dataset states and tags",
      "Linguistic intelligence reports including n-grams, edit distance, and perplexity",
      "Production-style orchestration via Airflow DAG with retries and task-level controls"
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
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "/images/placeholder.webp";
                    }}
                  />
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
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "/images/placeholder.webp";
                  }}
                />
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

