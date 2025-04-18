'use client';

import { useEffect, useRef } from 'react';

export default function MathSVG({ className = "w-64 h-64" }) {
  const formulaRef = useRef<SVGGElement>(null);
  const piRef = useRef<SVGGElement>(null);
  const equationRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    const formula = formulaRef.current;
    const pi = piRef.current;
    const equation = equationRef.current;
    
    if (!formula || !pi || !equation) return;
    
    let time = 0;
    
    const animateElements = () => {
      time += 0.02;
      
      // Floating animation for formula
      formula.style.transform = `translateY(${Math.sin(time) * 5}px)`;
      
      // Pi symbol rotation
      pi.style.transform = `rotate(${Math.sin(time) * 5}deg)`;
      
      // Equation scale pulse
      const scale = 1 + Math.sin(time * 0.5) * 0.05;
      equation.style.transform = `scale(${scale})`;
      
      requestAnimationFrame(animateElements);
    };
    
    const animationFrame = requestAnimationFrame(animateElements);
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#D4F1F4" />
      
      {/* Pi Symbol */}
      <g ref={piRef} transform="translate(100, 70)">
        <path d="M-25,15 L25,15 M-15,-15 L-15,15 M15,-15 L15,15" 
          stroke="#05445E" strokeWidth="6" strokeLinecap="round" fill="none" />
        <rect x="-20" y="-20" width="40" height="5" rx="2" fill="#05445E" />
      </g>
      
      {/* Quadratic formula */}
      <g ref={formulaRef} transform="translate(100, 110)">
        <text x="-40" y="0" fontFamily="monospace" fontSize="14" fill="#189AB4" fontWeight="bold">
          x = 
        </text>
        <path d="M-20,-5 L20,-5 M0,-15 L0,5" stroke="#189AB4" strokeWidth="2" />
        <text x="-18" y="-10" fontFamily="monospace" fontSize="10" fill="#189AB4">
          -b ± √(b² - 4ac)
        </text>
        <text x="-12" y="0" fontFamily="monospace" fontSize="10" fill="#189AB4">
          2a
        </text>
      </g>
      
      {/* Math symbols */}
      <g ref={equationRef} transform="translate(100, 160)">
        <text x="-40" y="0" fontFamily="monospace" fontSize="18" fill="#05445E" letterSpacing="8">
          + − × ÷ =
        </text>
      </g>
      
      {/* Math circles in corners */}
      <circle cx="40" cy="40" r="10" fill="#75E6DA" opacity="0.8" />
      <circle cx="160" cy="40" r="10" fill="#75E6DA" opacity="0.8" />
      <circle cx="40" cy="160" r="10" fill="#75E6DA" opacity="0.8" />
      <circle cx="160" cy="160" r="10" fill="#75E6DA" opacity="0.8" />
    </svg>
  );
} 