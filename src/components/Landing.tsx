import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h1>
              USAMA
              <br />
              <span>JAMSHED</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A Professional</h3>
            <h2 className="landing-info-main" aria-label="Full-Stack Developer and Full-Stack AI Developer">
              <span className="role-text role-text-1">
                Full-Stack
                <br />
                Developer
              </span>
              <span className="role-text role-text-2">
                Full-Stack
                <br />
                AI Developer
              </span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

