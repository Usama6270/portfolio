import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box internship">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Internship</span>
                <h4>AI Full Stack Developer Intern</h4>
                <h5>DevMind, Islamabad</h5>
              </div>
              <div className="career-date">
                <h3>Sep 2025 - Nov 2025</h3>
              </div>
            </div>
            <p>
              Developed and maintained full-stack web applications using the MERN Stack,
              integrating AI solutions to enhance system functionality. Designed and
              implemented REST APIs to streamline communication between services.
            </p>
          </div>

          <div className="career-info-box internship">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Internship</span>
                <h4>Full Stack Developer Intern</h4>
                <h5>Nayatel, Islamabad</h5>
              </div>
              <div className="career-date">
                <h3>Jul 2025 - Aug 2025</h3>
              </div>
            </div>
            <p>
              Developed and maintained full-stack web applications using the MERN stack
              and collaborated with cross-functional teams on real-world projects to
              enhance technical skills and professional software development practices.
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
                <h3>Aug 2022 - June 2026</h3>
              </div>
            </div>
            <p>
              Final-year student specializing in web development and AI-driven systems.
              Recognized on the Dean's List of Honors (Fall 2025) for
              academic excellence.
            </p>
          </div>

          <div className="career-info-box education">
            <div className="career-info-in">
              <div className="career-role">
                <span className="type-tag">Education</span>
                <h4>Fsc Pre Engineering</h4>
                <h5>Sadiq Public School, Bahawalpur</h5>
              </div>
              <div className="career-date">
                <h3>Mar 2019 - June 2021</h3>
              </div>
            </div>
            <p>
              Completed higher secondary education with a focus on core engineering
              fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

