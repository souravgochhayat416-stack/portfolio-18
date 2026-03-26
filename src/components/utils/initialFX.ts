import SplitType from 'split-type';
import gsap from 'gsap';

export function initialFX() {
  // 1. Initial State Setup
  document.body.style.overflowY = 'auto';
  const mainElement = document.getElementsByTagName('main')[0];
  if (mainElement) mainElement.classList.add('main-active');

  gsap.to('body', { backgroundColor: '#0b080c', duration: 0.5, delay: 1 });

  // 2. Initial Entrance Animations
  const landingText = new SplitType('.landing-info h3, .landing-intro h2, .landing-intro h1', {
    types: 'chars,lines',
    lineClass: 'split-line',
  });

  gsap.fromTo(landingText.chars, 
    { opacity: 0, y: 80, filter: 'blur(5px)' }, 
    { opacity: 1, duration: 1.2, filter: 'blur(0px)', ease: 'power3.inOut', y: 0, stagger: 0.025, delay: 0.3 }
  );

  // 3. Setup Looping Elements
  const textProps = { types: 'chars,lines' as const, lineClass: 'split-h2' };
  
  const landingText2 = new SplitType('.landing-h2-info', textProps);
  const landingText3 = new SplitType('.landing-h2-info-1', textProps);
  const landingText4 = new SplitType('.landing-h2-1', textProps);
  const landingText5 = new SplitType('.landing-h2-2', textProps);

  // 4. UI Fades
  gsap.fromTo(['.header', '.icons-section', '.nav-fade'], 
    { opacity: 0 }, 
    { opacity: 1, duration: 1.2, ease: 'power1.inOut', delay: 0.1 }
  );

  // 5. Initialize Loops
  LoopText(landingText2, landingText3);
  LoopText(landingText4, landingText5);
}

function LoopText(text1: SplitType, text2: SplitType) {
  const tl = gsap.timeline({ repeat: -1 });
  const duration = 1.2;
  const holdTime = 3; // How long text stays visible

  // Set initial state: Text 2 is hidden below
  gsap.set(text2.chars, { opacity: 0, y: 80 });

  tl.to(text1.chars, {
      y: -80,
      opacity: 0,
      duration: duration,
      ease: 'power3.inOut',
      stagger: 0.05,
      delay: holdTime
    })
    .fromTo(text2.chars, 
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: duration, ease: 'power3.inOut', stagger: 0.05 },
      "<" // Start at the same time text1 exits
    )
    .to(text2.chars, {
      y: -80,
      opacity: 0,
      duration: duration,
      ease: 'power3.inOut',
      stagger: 0.05,
      delay: holdTime
    })
    .to(text1.chars, {
      y: 0,
      opacity: 1,
      duration: duration,
      ease: 'power3.inOut',
      stagger: 0.05
    }, "<");
}
