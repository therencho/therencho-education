'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 bg-baby-blue/80 backdrop-blur-md border-b border-navy-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Therencho</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link href="/#about" className="inline-flex items-center px-1 pt-1 text-navy-blue hover:text-blue-grotto transition-colors">
              About
            </Link>
            <Link href="/#services" className="inline-flex items-center px-1 pt-1 text-navy-blue hover:text-blue-grotto transition-colors">
              Services
            </Link>
            <Link href="/#subjects" className="inline-flex items-center px-1 pt-1 text-navy-blue hover:text-blue-grotto transition-colors">
              Subjects
            </Link>
            <Link href="/#contact" className="inline-flex items-center px-1 pt-1 text-navy-blue hover:text-blue-grotto transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-navy-blue hover:text-blue-grotto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1 bg-baby-blue/95 backdrop-blur-md">
            <Link href="/#about" className="block pl-3 pr-4 py-2 text-navy-blue hover:text-blue-grotto transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/#services" className="block pl-3 pr-4 py-2 text-navy-blue hover:text-blue-grotto transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/#subjects" className="block pl-3 pr-4 py-2 text-navy-blue hover:text-blue-grotto transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Subjects
            </Link>
            <Link href="/#contact" className="block pl-3 pr-4 py-2 text-navy-blue hover:text-blue-grotto transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 