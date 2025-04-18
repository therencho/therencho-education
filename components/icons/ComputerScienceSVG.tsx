'use client';

import { useEffect, useRef } from 'react';

export default function ComputerScienceSVG({ className = "w-64 h-64" }) {
  const computerRef = useRef<SVGGElement>(null);
  const codeRef = useRef<SVGGElement>(null);
  const gearRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    const computer = computerRef.current;
    const code = codeRef.current;
    const gear = gearRef.current;
    
    if (!computer || !code || !gear) return;
    
    let time = 0;
    
    const animateElements = () => {
      time += 0.02;
      
      // Computer gentle floating
      computer.style.transform = `translateY(${Math.sin(time) * 3}px)`;
      
      // Code typing effect - changing opacity of elements
      const codeElements = code.querySelectorAll('rect');
      codeElements.forEach((element, index) => {
        // Staggered blinking effect
        const opacityValue = 0.3 + Math.sin(time * 3 + index * 0.2) * 0.7;
        element.setAttribute('opacity', String(opacityValue));
      });
      
      // Gear rotation
      gear.style.transform = `rotate(${time * 10}deg)`;
      
      requestAnimationFrame(animateElements);
    };
    
    const animationFrame = requestAnimationFrame(animateElements);
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#D4F1F4" />
      
      {/* Computer */}
      <g ref={computerRef} transform="translate(100, 105)">
        {/* Monitor */}
        <rect x="-40" y="-35" width="80" height="60" rx="3" fill="#05445E" />
        <rect x="-35" y="-30" width="70" height="50" rx="2" fill="#189AB4" />
        
        {/* Base */}
        <rect x="-25" y="25" width="50" height="5" rx="2" fill="#05445E" />
        <rect x="-10" y="10" width="20" height="15" rx="2" fill="#05445E" />
      </g>
      
      {/* Code on screen */}
      <g ref={codeRef} transform="translate(100, 105)">
        <rect x="-30" y="-25" width="20" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-25" y="-20" width="30" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-30" y="-15" width="25" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-20" y="-10" width="35" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-30" y="-5" width="15" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-25" y="0" width="25" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-30" y="5" width="30" height="3" rx="1" fill="#D4F1F4" />
        <rect x="-20" y="10" width="20" height="3" rx="1" fill="#D4F1F4" />
      </g>
      
      {/* Gear */}
      <g ref={gearRef} transform="translate(155, 40)">
        <circle cx="0" cy="0" r="12" fill="#05445E" />
        <circle cx="0" cy="0" r="5" fill="#D4F1F4" />
        {/* Gear teeth */}
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          return (
            <rect 
              key={i}
              x="-2.5" 
              y="-15" 
              width="5" 
              height="8" 
              rx="1"
              fill="#05445E"
              transform={`rotate(${i * 45}) translate(0, -12)`}
            />
          );
        })}
      </g>
      
      {/* Binary code in background */}
      <g transform="translate(40, 45)">
        <text fontFamily="monospace" fontSize="10" fill="#189AB4" opacity="0.7">10110</text>
      </g>
      <g transform="translate(60, 165)">
        <text fontFamily="monospace" fontSize="10" fill="#189AB4" opacity="0.7">01001</text>
      </g>
      <g transform="translate(160, 155)">
        <text fontFamily="monospace" fontSize="10" fill="#189AB4" opacity="0.7">11010</text>
      </g>
    </svg>
  );
} 