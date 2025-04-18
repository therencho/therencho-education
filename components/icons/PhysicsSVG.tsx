'use client';

import { useEffect, useRef } from 'react';

export default function PhysicsSVG({ className = "w-64 h-64" }) {
  const atomRef = useRef<SVGGElement>(null);
  const pendulumRef = useRef<SVGGElement>(null);
  const formulaRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    const atom = atomRef.current;
    const pendulum = pendulumRef.current;
    const formula = formulaRef.current;
    
    if (!atom || !pendulum || !formula) return;
    
    let time = 0;
    
    const animateElements = () => {
      time += 0.01;
      
      // Atom electrons rotation
      const electronPaths = atom.querySelectorAll('ellipse');
      electronPaths.forEach((path, i) => {
        const rotation = (time * (i+1) * 20) % 360;
        path.setAttribute('transform', `rotate(${rotation}, 0, 0)`);
      });
      
      const electrons = atom.querySelectorAll('circle.electron');
      electrons.forEach((electron, i) => {
        const rotation = (time * (i+1) * 20) % 360;
        const radians = rotation * Math.PI / 180;
        
        const xOffset = Math.cos(radians) * (15 + i * 10);
        const yOffset = Math.sin(radians) * (10 + i * 5);
        
        electron.setAttribute('cx', String(xOffset));
        electron.setAttribute('cy', String(yOffset));
      });
      
      // Pendulum swing
      const angle = Math.sin(time) * 30;
      pendulum.style.transform = `rotate(${angle}deg)`;
      
      // Formula pulsing
      const scale = 1 + Math.sin(time * 2) * 0.05;
      formula.style.transform = `scale(${scale})`;
      
      requestAnimationFrame(animateElements);
    };
    
    const animationFrame = requestAnimationFrame(animateElements);
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#D4F1F4" />
      
      {/* Atom */}
      <g ref={atomRef} transform="translate(100, 80)">
        {/* Electron orbits */}
        <ellipse cx="0" cy="0" rx="25" ry="10" 
          fill="none" stroke="#189AB4" strokeWidth="1" 
          transform="rotate(0, 0, 0)" />
        <ellipse cx="0" cy="0" rx="35" ry="15" 
          fill="none" stroke="#189AB4" strokeWidth="1" 
          transform="rotate(60, 0, 0)" />
        <ellipse cx="0" cy="0" rx="45" ry="20" 
          fill="none" stroke="#189AB4" strokeWidth="1" 
          transform="rotate(120, 0, 0)" />
        
        {/* Electrons */}
        <circle className="electron" cx="25" cy="0" r="4" fill="#75E6DA" />
        <circle className="electron" cx="35" cy="0" r="4" fill="#75E6DA" />
        <circle className="electron" cx="45" cy="0" r="4" fill="#75E6DA" />
        
        {/* Nucleus */}
        <circle cx="0" cy="0" r="8" fill="#05445E" />
      </g>
      
      {/* Pendulum */}
      <g ref={pendulumRef} transform="translate(160, 55)" style={{ transformOrigin: '0px 0px' }}>
        {/* String */}
        <line x1="0" y1="0" x2="0" y2="30" stroke="#05445E" strokeWidth="1.5" />
        
        {/* Bob */}
        <circle cx="0" cy="30" r="7" fill="#189AB4" />
      </g>
      
      {/* E=mc² formula */}
      <g ref={formulaRef} transform="translate(100, 160)">
        <text x="-30" y="0" fontFamily="monospace" fontSize="16" fill="#05445E" fontWeight="bold">
          E = mc²
        </text>
      </g>
      
      {/* Light ray */}
      <path d="M20,100 L60,100" stroke="#189AB4" strokeWidth="2" strokeDasharray="5,3" />
      <path d="M50,95 L60,100 L50,105" fill="none" stroke="#189AB4" strokeWidth="2" />
      
      {/* Force vectors */}
      <g transform="translate(40, 140)">
        <line x1="0" y1="0" x2="15" y2="-15" stroke="#05445E" strokeWidth="1.5" strokeDasharray="3,2" />
        <polygon points="15,-15 6,-14 14,-6" fill="#05445E" />
      </g>
    </svg>
  );
} 