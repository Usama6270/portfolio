import { useState } from "react";
import { FaCode, FaCertificate, FaLayerGroup } from "react-icons/fa";
import Work from "./Work";
import TechStack from "./TechStack";
import "./styles/PortfolioShowcase.css";

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section className="showcase-section" id="work">
      <div className="showcase-header">
        <h2 className="showcase-title">Portfolio Showcase</h2>
        <p className="showcase-subtitle">
          Explore my journey through projects, certifications, and technical expertise. 
          Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      <div className="showcase-tabs">
        <button 
          className={`tab-btn ${activeTab === "projects" ? "active" : ""}`}
          onClick={() => setActiveTab("projects")}
        >
          <FaCode className="tab-icon" />
          <span>Projects</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
          onClick={() => setActiveTab("certificates")}
        >
          <FaCertificate className="tab-icon" />
          <span>Certificates</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === "techstack" ? "active" : ""}`}
          onClick={() => setActiveTab("techstack")}
        >
          <FaLayerGroup className="tab-icon" />
          <span>Tech Stack</span>
        </button>
      </div>

      <div className="showcase-content">
        {activeTab === "projects" && <Work hideHeader={true} />}
        {activeTab === "certificates" && (
          <div className="certificates-grid">
            {/* Dummy Certificates for now */}
            {[1, 2, 3].map((cert) => (
              <div key={cert} className="cert-card">
                <div className="cert-badge">
                  <FaCertificate />
                </div>
                <h3>Professional Certification {cert}</h3>
                <p>Issued by Leading Tech Organization</p>
                <span className="cert-date">Issued Jan 2024</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "techstack" && <TechStack hideHeader={true} />}
      </div>
    </section>
  );
};

export default PortfolioShowcase;
