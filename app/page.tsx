'use client';

import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import EducationSVG from '../components/icons/EducationSVG';
import MathSVG from '../components/icons/MathSVG';
import ComputerScienceSVG from '../components/icons/ComputerScienceSVG';
import PhysicsSVG from '../components/icons/PhysicsSVG';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h1 className="text-gradient mb-6">Excellence in<br />Education</h1>
            <p className="text-xl mb-8 text-navy-blue/80">
              Expert tutoring in Mathematics, Computer Science, and Physics by Rencho.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-navy-blue text-white rounded-full shadow-lg hover:bg-blue-grotto transition-colors">
                Get Started
              </a>
              <a href="#about" className="px-6 py-3 border border-navy-blue/20 text-navy-blue rounded-full hover:bg-baby-blue/50 transition-colors">
                Learn More
              </a>
            </div>
          </div>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute top-0 left-0 w-full h-full animate-float">
                <EducationSVG className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-green/10 animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-blue-grotto/10 animate-pulse-slow"></div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-gradient-to-b from-baby-blue to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h2 className="text-gradient mb-6">About Therencho Education</h2>
            <p className="max-w-3xl mx-auto text-lg text-navy-blue/80">
              I specialize in providing high-quality tutoring services in Mathematics, Computer Science, and Physics. 
              With personalized approach and a focus on fundamental understanding, I help students achieve their academic 
              goals and develop a genuine interest in these subjects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24">
                  <EducationSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 text-center">Personalized Approach</h3>
              <p className="text-navy-blue/80">
                Every student has unique learning needs and goals. I tailor my teaching methods to match your learning style.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-150 ease-out">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24">
                  <MathSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 text-center">Solid Foundations</h3>
              <p className="text-navy-blue/80">
                I focus on building strong fundamentals, ensuring you have the knowledge base to tackle any problem.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24">
                  <ComputerScienceSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4 text-center">Practical Applications</h3>
              <p className="text-navy-blue/80">
                Theory comes alive when applied to real problems. I connect abstract concepts to practical applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h2 className="text-gradient mb-6">Services Offered</h2>
            <p className="max-w-3xl mx-auto text-lg text-navy-blue/80">
              I provide a range of educational services designed to help students excel in technical subjects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-baby-blue/30 p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
              <h3 className="text-xl font-bold text-navy-blue mb-4">One-on-One Tutoring</h3>
              <p className="text-navy-blue/80 mb-4">
                Personalized sessions focused on your specific needs, questions, and learning pace.
              </p>
              <ul className="space-y-2 text-navy-blue/80">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Customized learning plans
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Regular progress assessments
                </li>
              </ul>
            </div>
            
            <div className="bg-baby-blue/30 p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-150 ease-out">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Exam Preparation</h3>
              <p className="text-navy-blue/80 mb-4">
                Targeted preparation for tests, competitions, college entrance exams, and more.
              </p>
              <ul className="space-y-2 text-navy-blue/80">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Practice with past papers
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Test-taking strategies
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Time management techniques
                </li>
              </ul>
            </div>
            
            <div className="bg-baby-blue/30 p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Project Assistance</h3>
              <p className="text-navy-blue/80 mb-4">
                Guidance on academic projects, programming assignments, and research work.
              </p>
              <ul className="space-y-2 text-navy-blue/80">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Planning and structuring
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Implementation support
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Review and optimization
                </li>
              </ul>
            </div>
            
            <div className="bg-baby-blue/30 p-8 rounded-2xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-450 ease-out">
              <h3 className="text-xl font-bold text-navy-blue mb-4">Concept Clarification</h3>
              <p className="text-navy-blue/80 mb-4">
                Clear explanations of challenging concepts that you're struggling with.
              </p>
              <ul className="space-y-2 text-navy-blue/80">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Visual aids and examples
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Multiple explanation approaches
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-grotto">•</span>
                  Practice problems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Subjects Section */}
      <section id="subjects" className="py-24 px-4 bg-gradient-to-b from-white to-baby-blue">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h2 className="text-gradient mb-6">Subject Expertise</h2>
            <p className="max-w-3xl mx-auto text-lg text-navy-blue/80">
              I offer expert tutoring in these technical disciplines, with a focus on building both theoretical understanding and practical skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-40 h-40">
                  <MathSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Mathematics</h3>
              <ul className="space-y-2 text-navy-blue/80 text-center">
                <li>Algebra & Calculus</li>
                <li>Statistics & Probability</li>
                <li>Discrete Mathematics</li>
                <li>Linear Algebra</li>
                <li>Number Theory</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-150 ease-out text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-40 h-40">
                  <ComputerScienceSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Computer Science</h3>
              <ul className="space-y-2 text-navy-blue/80 text-center">
                <li>Programming (Python, Java, C++)</li>
                <li>Data Structures & Algorithms</li>
                <li>Web Development</li>
                <li>Database Systems</li>
                <li>Computer Architecture</li>
              </ul>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 ease-out text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-40 h-40">
                  <PhysicsSVG />
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy-blue mb-4">Physics</h3>
              <ul className="space-y-2 text-navy-blue/80 text-center">
                <li>Mechanics & Dynamics</li>
                <li>Electromagnetism</li>
                <li>Thermodynamics</li>
                <li>Quantum Physics</li>
                <li>Relativity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-baby-blue">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
            <h2 className="text-gradient mb-6">Get in Touch</h2>
            <p className="text-lg text-navy-blue/80">
              Ready to excel in your studies? Contact me to discuss how I can help you achieve your academic goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-150 ease-out">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-blue mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-blue-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-grotto transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-blue mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-blue-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-grotto transition-all"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-navy-blue mb-1">Subject</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-blue-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-grotto transition-all"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="mathematics">Mathematics</option>
                  <option value="computer-science">Computer Science</option>
                  <option value="physics">Physics</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-blue mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-blue-green/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-grotto transition-all"
                  placeholder="Tell me what you need help with"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-navy-blue text-white rounded-full shadow-lg hover:bg-blue-grotto transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-navy-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">Therencho Education</div>
              <p className="text-blue-green/80">Excellence in Mathematics, Computer Science, and Physics</p>
            </div>
            <div className="flex space-x-6">
              <a href="#about" className="text-white hover:text-blue-green transition-colors">About</a>
              <a href="#services" className="text-white hover:text-blue-green transition-colors">Services</a>
              <a href="#subjects" className="text-white hover:text-blue-green transition-colors">Subjects</a>
              <a href="#contact" className="text-white hover:text-blue-green transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-blue-green/80">© {new Date().getFullYear()} Therencho Education. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
