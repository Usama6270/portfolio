import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Experience <span>&</span>
          <br /> Education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box internship">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Internship</span>
                <h4>Web Development Intern</h4>
                <h5>InternBoot (Remote)</h5>
              </div>
              <div className="career-date">
                <h3>Sep 2025 - Oct 2025</h3>
              </div>
            </div>
            <p>
              Completed a 3-month online internship developing web solutions with modern
              technologies, collaborating remotely, and delivering assigned projects with
              professional work ethics and confidentiality.
            </p>
          </div>

          <div className="career-info-box internship">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Internship</span>
                <h4>Data Analyst Intern</h4>
                <h5>InternBoot</h5>
              </div>
              <div className="career-date">
                <h3>Jun 2025 - Aug 2025</h3>
              </div>
            </div>
            <p>
              Focused on data cleaning, visualization, reporting, and analytical problem
              solving, and earned an A-grade Certificate of Completion.
            </p>
          </div>

          <div className="career-info-box education">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Education</span>
                <h4>BS Software Engineering</h4>
                <h5>FAST-NUCES, Islamabad</h5>
              </div>
              <div className="career-date">
                <h3>Aug 2022 - Present</h3>
              </div>
            </div>
            <p>
              Undergraduate studies focused on software engineering fundamentals, full stack
              development, and applied AI/ML projects.
            </p>
          </div>

          <div className="career-info-box education">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Education</span>
                <h4>FSc Pre-Engineering</h4>
                <h5>Murray College, Sialkot</h5>
              </div>
              <div className="career-date">
                <h3>Score: 89.9%</h3>
              </div>
            </div>
            <p>
              Completed higher secondary education with strong performance in mathematics,
              physics, and core engineering foundations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

