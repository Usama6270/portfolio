import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section) {
            e.preventDefault();
            smoother.scrollTo(section, true, "top top");
          }
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="header">
        <a href="#landingDiv" className="navbar-brand" data-cursor="disable">
          <span className="brand-badge">UJ</span>
          <span className="brand-name">Usama Jamshed</span>
        </a>
        <a
          href="mailto:usamaunder19@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          usamaunder19@gmail.com
        </a>

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#career" href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li className="nav-cv-li">
            <a
              href="/Usama_CV.pdf"
              download="Usama_CV.pdf"
              className="nav-cv-btn"
              data-cursor="disable"
            >
              CV <FiDownload />
            </a>
          </li>
        </ul>
      </div>

      <div className={`mobile-menu-panel ${isMobileMenuOpen ? "open" : ""}`}>
        <a data-href="#about" href="#about" onClick={closeMobileMenu}>
          ABOUT
        </a>
        <a data-href="#work" href="#work" onClick={closeMobileMenu}>
          PROJECTS
        </a>
        <a data-href="#career" href="#career" onClick={closeMobileMenu}>
          CAREER
        </a>
        <a data-href="#contact" href="#contact" onClick={closeMobileMenu}>
          CONTACT
        </a>
        <a href="/Usama_CV.pdf" download="Usama_CV.pdf" className="mobile-cv-btn" onClick={closeMobileMenu}>
          CV <FiDownload />
        </a>
      </div>
      {isMobileMenuOpen && <div className="mobile-menu-backdrop" onClick={closeMobileMenu}></div>}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
