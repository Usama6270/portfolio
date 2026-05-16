import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitText;
}

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });
  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");
  const cleanupSplit = (el: ParaElement) => {
    if (el.anim) {
      el.anim.progress(1).kill();
      el.anim = undefined;
    }
    if (el.split) {
      el.split.revert();
      el.split = undefined;
    }
  };

  // On mobile, just ensure original text is restored and visible.
  if (window.innerWidth < 900) {
    paras.forEach((para) => {
      cleanupSplit(para);
      para.classList.add("visible");
      para.style.opacity = "1";
      para.style.visibility = "visible";
    });
    titles.forEach((title) => {
      cleanupSplit(title);
      title.style.opacity = "1";
      title.style.visibility = "visible";
    });
    return;
  }

  const TriggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const ToggleAction = "play pause resume reverse";

  // Keep paragraph content always visible to avoid hidden text states.
  paras.forEach((para: ParaElement) => {
    cleanupSplit(para);
    para.classList.add("visible");
    para.style.opacity = "1";
    para.style.visibility = "visible";
    para.style.transform = "none";
  });
  titles.forEach((title: ParaElement) => {
    cleanupSplit(title);
    title.split = new SplitText(title, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    if (title.split) {
      title.anim = gsap.fromTo(
        title.split.chars,
        { autoAlpha: 0, y: 80, rotate: 10 },
        {
          autoAlpha: 1,
          scrollTrigger: {
            trigger: title.parentElement?.parentElement,
            toggleActions: ToggleAction,
            start: TriggerStart,
          },
          duration: 0.8,
          ease: "power2.inOut",
          y: 0,
          rotate: 0,
          stagger: 0.03,
        }
      );
    }
  });
}
