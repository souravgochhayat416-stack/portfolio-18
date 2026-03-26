import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function AnimatedBox() {
  const container = useRef();

  useGSAP(() => {
    // This animation is now "safe" and won't lag or double-run
    gsap.to(".box", { 
      x: 100, 
      repeat: -1, 
      yoyo: true, 
      duration: 1,
      ease: "power1.inOut" 
    });
  }, { scope: container }); // Scope ensures GSAP only looks inside this component

  return (
    <div ref={container} style={{ padding: "20px" }}>
      <div className="box" style={{ width: 50, height: 50, background: "gold" }}>
        Hello
      </div>
    </div>
  );
}