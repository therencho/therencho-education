'use client';

import { useEffect, useRef } from 'react';

export default function EducationSVG({ className = "w-64 h-64" }) {
  const graduationCapRef = useRef<SVGGElement>(null);
  const bookRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    const graduationCap = graduationCapRef.current;
    const book = bookRef.current;
    
    if (!graduationCap || !book) return;
    
    let capDirection = 1;
    let bookAngle = 0;
    
    const animateElements = () => {
      // Floating animation for graduation cap
      const capY = parseFloat(graduationCap.getAttribute('data-y') || '0');
      if (capY > 10) capDirection = -1;
      if (capY < -10) capDirection = 1;
      
      const newCapY = capY + 0.2 * capDirection;
      graduationCap.setAttribute('data-y', String(newCapY));
      graduationCap.style.transform = `translateY(${newCapY}px)`;
      
      // Gentle rotation for book
      bookAngle = (bookAngle + 0.2) % 360;
      book.style.transform = `rotate(${Math.sin(bookAngle * Math.PI / 180) * 5}deg)`;
      
      requestAnimationFrame(animateElements);
    };
    
    graduationCap.setAttribute('data-y', '0');
    const animationFrame = requestAnimationFrame(animateElements);
    
    return () => cancelAnimationFrame(animationFrame);
  }, []);
  
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Background circle */}
      <circle cx="100" cy="100" r="90" fill="#D4F1F4" />
      
      {/* Books */}
      <g ref={bookRef} transform="translate(70, 110)">
        <rect x="0" y="0" width="60" height="50" rx="2" fill="#05445E" />
        <rect x="3" y="-5" width="54" height="50" rx="2" fill="#189AB4" />
        <rect x="6" y="-10" width="48" height="50" rx="2" fill="#75E6DA" />
        
        {/* Book pages */}
        <rect x="6" y="-10" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="-4" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="2" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="8" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="14" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="20" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="26" width="48" height="3" fill="#D4F1F4" />
        <rect x="6" y="32" width="48" height="3" fill="#D4F1F4" />
      </g>
      
      {/* Graduation Cap */}
      <g ref={graduationCapRef} transform="translate(100, 50)">
        <rect x="-30" y="-5" width="60" height="10" fill="#05445E" />
        <polygon points="0,-15 30,5 0,25 -30,5" fill="#189AB4" />
        <circle cx="0" cy="0" r="5" fill="#75E6DA" />
        <rect x="-1" y="5" width="2" height="30" fill="#05445E" />
        <rect x="-10" y="30" width="20" height="5" rx="2" fill="#05445E" />
      </g>
    </svg>
  );
} 