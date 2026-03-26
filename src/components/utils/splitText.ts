import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: SplitType;
}

gsap.registerPlugin(ScrollTrigger);

export default function setSplitText() {
  if (window.innerWidth < 900) return;

  const paras = document.querySelectorAll<ParaElement>(".para");
  const titles = document.querySelectorAll<ParaElement>(".title");
  
  const triggerStart = window.innerWidth <= 1024 ? "top 60%" : "20% 60%";
  const toggleActions = "play pause resume reverse";

  // Handle Paragraphs
  paras.forEach((para) => {
    para.classList.add("visible");
    
    // Cleanup previous instances
    para.anim?.kill();
    para.split?.revert();

    para.split = new SplitType(para, { 
      types: "lines,words", 
      lineClass: "split-line" 
    });

    para.anim = gsap.fromTo(para.split.words, 
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement || para,
          toggleActions: toggleActions,
          start: triggerStart,
        },
      }
    );
  });

  // Handle Titles
  titles.forEach((title) => {
    title.anim?.kill();
    title.split?.revert();

    title.split = new SplitType(title, { 
      types: "chars,lines", 
      lineClass: "split-line" 
    });

    title.anim = gsap.fromTo(title.split.chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement || title,
          toggleActions: toggleActions,
          start: triggerStart,
        },
      }
    );
  });
}
