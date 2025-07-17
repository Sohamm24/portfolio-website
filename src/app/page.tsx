'use client';
import { SetStateAction, useState } from 'react'
import { Code, Database, Globe, Smartphone, GitBranch, Zap, Cloud } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const featuredProject = {
    title: 'Tripzy Airline Booking Application',
    description: 'A modern airline booking platform built with a microservices architecture—Search, Booking, and Notification—to ensure scalability and performance. Designed with a dual-layered UI/UX approach (Itinerary and Booking) to provide users with a smooth, end-to-end flight search and booking experience. Features include real-time flight data, seat selection, and a secure payment flow',
    longDescription: 'Tripzy redefines modern travel booking with a user-friendly interface and robust backend. Built for performance and scalability, it includes real-time flight availability. With Redux for state management and modular React components, Tripzy ensures a smooth and intuitive user journey from search to checkout.',
    tech: ['React.js','Redux','Node.js','Express.js','MongoDB', 'MySQL','Sequelize','Stripe API','CRON-JOBS',],
    highlights: ['Itinerary Layer-Locks the price', 'Booking Layer-Locks the seat', 'Redux Payment Confirmation UI/UX','Search Microservice build on top of Global Distribution System'],
  }

  const projects = [
  {
    title: 'Veloxa - Video Calling Application',
    description: 'A peer-to-peer video calling app built using WebRTC and Socket.io, allowing real-time communication with custom room creation and seamless media stream handling.',
    tech: ['TypeScript', 'WebRTC', 'React', 'Socket.io'],
    link: 'https://github.com/Sohamm24/Veloxa'
  },
  {
    title: 'Surge - My Own Version Control System',
    description: 'A minimal version control system built from scratch using SHA-256 hashing for file tracking, commit history, and diff computation, mimicking Git-like functionality.',
    tech: ['Node.js', 'SHA-256'],
    link: 'https://github.com/Sohamm24/Surge-Version-Control-System'
  },
  {
    title: 'LangSQL - Text to SQL Query Converter',
    description: 'An AI-powered tool that converts natural language prompts into SQL queries using LLMs via LangFlow, HuggingFace, and Gemini APIs. Includes backend in Django and frontend in React.',
    tech: ['Django', 'Node.js', 'HuggingFace', 'LangFlow', 'Gemini-API', 'React'],
    link: 'https://github.com/Sohamm24/LangSQL'
  },
  {
    title: 'Admin Dashboard for Sales',
    description: 'An analytics dashboard for visualizing sales data using React and Chart.js. Features include bar, pie, and line charts with interactive filters and clean UI design.',
    tech: ['React', 'Chart.js'],
    link: 'https://github.com/Sohamm24/Merchant_Dashboard'
  },
  {
    title: 'Nanavati Hospital Management System',
    description: 'A hospital management system developed using Flask and SQLAlchemy. Includes patient registration, ward assignment, and appointment tracking through a secure interface.',
    tech: ['Flask', 'SQLAlchemy', 'MySQL'],
    link: 'https://github.com/Sohamm24/Hospital-Management-System.git'
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive, animated portfolio built with Next.js and Tailwind CSS, showcasing your work and skills. Integrates smooth transitions using Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://github.com/Sohamm24/portfolio-website.git'
  }
]



  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentImageIndex(index);
  }

  return (
   <div
     className="min-h-screen"
     style={{
       background: `linear-gradient(to right, white, #8cc4ffff, #f08eebff, #fabb79ff, white)`
     }}
   >
      
      
      <section id="hero" className="min-h-screen relative overflow-hidden">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-sm border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold text-black">&lt;/&gt;</span>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 text-sm md:text-base"
                >
                  About Me
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 text-sm md:text-base"
                >
                  Projects
                </button>
                <button
                  onClick={() => window.open("https://drive.google.com/file/d/11ZiOCBr1PixocP6x3QPapDbGBzMuxpPZ/view?usp=drive_link", "_blank")}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white rounded-lg transition-all duration-300 text-sm md:text-base"
                   >
                  Resume
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="absolute top-4 left-0 transform -translate-x-1/2 translate-y-1/4 sm:top-6 md:top-8">
         <div className="w-16 h-16 sm:w-8 sm:h-8 md:w-64 md:h-64 animate-spin-slow">
             <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              className="text-blue-300 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              >
             <path d="M487.4 315.7c3.6-23.3 3.6-47.1 0-70.4l-52.2-7.3c-4.6-15.8-11.3-30.7-19.9-44.5l30.4-43.4c-14.4-20.7-31.5-39-50.9-54.4l-42.4 31.2c-14.3-8.2-29.5-14.6-45.5-18.9L279.2 24c-23.3-3.6-47.1-3.6-70.4 0l-7.3 52.2c-15.8 4.6-30.7 11.3-44.5 19.9L113.6 65.7c-20.7 14.4-39 31.5-54.4 50.9l31.2 42.4c-8.2 14.3-14.6 29.5-18.9 45.5L24 232.8c-3.6 23.3-3.6 47.1 0 70.4l52.2 7.3c4.6 15.8 11.3 30.7 19.9 44.5l-30.4 43.4c14.4 20.7 31.5 39 50.9 54.4l42.4-31.2c14.3 8.2 29.5 14.6 45.5 18.9l7.3 52.2c23.3 3.6 47.1 3.6 70.4 0l7.3-52.2c15.8-4.6 30.7-11.3 44.5-19.9l43.4 30.4c20.7-14.4 39-31.5 54.4-50.9l-31.2-42.4c8.2-14.3 14.6-29.5 18.9-45.5l52.2-7.3zM256 336c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
             </svg>
        </div>
        </div>


        <div className="pt-16 sm:py-2 md:pt-32 min-h-screen flex items-center justify-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
              
              {/* Left side - Name and tagline */}
              <div className="flex-1 text-center lg:text-left z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-fade-in" style={{ fontFamily: "Lobster, cursive" }} >
                  Hey,I'm Soham Narvankar
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
                  Every great idea starts with npm init, and the logic flows from here
                </p>
                
                {/* Social links - show on mobile below text */}
                <div className="flex justify-center lg:justify-start space-x-6 mb-8 lg:mb-0">
                  <a href="https://www.linkedin.com/in/soham-narvankar-607998302/" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/Sohamm24" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <button
  type="button"
  aria-label="Send email"
  className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110"
  onClick={() => window.location.href = "mailto:sohamnarvankar24@gmail.com"}
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
</button>

                </div>
              </div>
              
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-30 animate-pulse"></div>
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-300">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-3 text-left">
                      Background
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed text-left">
                      I am an undergraduate B.Tech Computer Engineering student at Vidyalankar Institute of Technology,
                      Mumbai specializing in Artificial Intelligence and Machine Learning .Currently building my career
                      in Mumbai and actively seeking opportunities in tech to contribute meaningfully and grow
                    </p>  
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
            <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 relative">
              <div 
                className="w-full h-full animate-spin-slow"
                style={{
                  background: 'rgba(207, 149, 251, 0.3)',
                  clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6" style={{ fontFamily: "Lobster, cursive" }}>
            Journey so far..
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Key highlights */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">User Experience (UX) – React</h3>
                  <p className="text-gray-700">Skilled in building smooth, user-friendly React interfaces focused on usability and design.</p>
                </div>
              </div>
            
              <div className="flex items-start space-x-4 p-4 bg-purple-50 rounded-xl border-l-4 border-purple-500 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Backend Microservices, Authentication, WebRTC</h3>
                  <p className="text-gray-700">Experienced in creating reliable backend systems, secure authentication, and real-time communication tools.</p>
                </div>
              </div>
            
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border-l-4 border-green-500 hover:shadow-md transition-all duration-300">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Cloud className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Cloud Services</h3>
                  <p className="text-gray-700">Strong cloud expertise with active community involvement and scalable solutions.</p>
                </div>
              </div>
            </div>



            {/* Right side - Journey timeline */}
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                My Career
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm text-blue-600 font-medium">2023 - 2027</div>
                    <div className="text-gray-900 font-medium">B.Tech in Computer Engineering</div>
                    <div className="text-sm text-gray-600">Specialization in AIML, Gained expertise in Java, Networks, OS, Algorithms, Distributed Systems</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-300 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm text-purple-600 font-medium">June 2024-July 2024</div>
                    <div className="text-gray-900 font-medium">Digital Marketing Intern at IIDE-The Digital School</div>
                    <div className="text-sm text-gray-600">SEO,Business expansion research analyst,Social Media Strategist</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="text-sm text-green-600 font-medium">October 2024-July 2025</div>
                    <div className="text-gray-900 font-medium">Documentation Core</div>
                    <div className="text-sm text-gray-600">Information Technology Students Association (ITSA)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-7 gap-4">
             <div className="text-center p-2 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
              <div className="text-2xl mb-2">⚡</div>
              <div className="text-sm font-medium text-gray-700">Node.js</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🐍</div>
              <div className="text-sm font-medium text-gray-700">Django</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
              <div className="text-2xl mb-2">🍃</div>
              <div className="text-sm font-medium text-gray-700">MongoDB</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-sm font-medium text-gray-700">React</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-red-50 to-pink-50 rounded-lg border border-red-200">
              <div className="text-2xl mb-2">☁️</div>
              <div className="text-sm font-medium text-gray-700">GCP</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
              <div className="text-2xl mb-2">🔗</div>
              <div className="text-sm font-medium text-gray-700">Sequelize</div>
            </div>
            <div className="text-center p-2 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-sm font-medium text-gray-700">Firebase</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Rotating Gear - Top Left */}
      <div className="absolute top-0 left-0 transform -translate-x-1/2 translate-y-1/2">
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
          <div 
            className="w-full h-full animate-spin-slow"
            style={{
              background: 'rgba(207, 149, 251, 0.3)',
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}
          ></div>
        </div>
      </div>

      {/* Hexagon Shape - Bottom Right */}
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
        <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 relative">
          <div 
            className="w-full h-full animate-spin-slow"
            style={{
              background: 'rgba(207, 149, 251, 0.3)',
              clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Featured Project Section */}
        <div className="mb-20">
  <div className="flex items-center justify-center mb-8">
    <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
      <h3 className="text-2xl md:text-3xl font-bold text-black">Projects</h3>
      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
    </div>
  </div>
  
  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
    <div className="p-8 md:p-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="lg:w-1/2 flex-shrink-0">
          <div className="space-y-6">
            <div className="w-full">
              <Image
                src="/PROJECT_DEMO_1.jpg"
                alt="Featured Project Demo"
                width={500}
                height={400}
                priority
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/PROJECT_DEMO_2.png"
                alt="Featured Project Demo"
                width={500}
                height={400}
                priority
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div className="w-full">
              <Image
                src="/PROJECT_DEMO_3.jpg"
                alt="Featured Project Demo"
                width={500}
                height={400}
                priority
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      
        <div className="lg:w-1/2">
          <div className="text-center lg:text-left mb-6">
            <span className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              ⭐ Featured
            </span>
            <h4 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {featuredProject.title}
            </h4>
            <p className="text-gray-600 mb-4 text-lg leading-relaxed">
              {featuredProject.description}
            </p>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              {featuredProject.longDescription}
            </p>
          </div>
          
          <div className="mb-6">
            <h5 className="text-xl font-semibold text-black mb-4">Key Features</h5>
            <div className="grid grid-cols-1 gap-3">
              {featuredProject.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 text-sm">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        
          <div className="mb-6">
            <h5 className="text-xl font-semibold text-black mb-4">Tech Stack</h5>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 font-medium">
              View Live Demo
            </button>
            <a
              href="https://github.com/Sohamm24/Flights-Booking-Service.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors duration-200 font-medium"
            >
              View Code
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
      
    
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-black mb-12">
            Other Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm md:text-base">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs md:text-sm font-medium"
                    >
                      {tech}
                    </span>                    
                  ))}
                </div>
                <a 
    href={project.link} 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block bg-white text-gray-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors duration-300 text-sm md:text-base font-medium"
  >
    Link
  </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      {/* Passions Section */}
      <section id="passions" className="py-16 md:py-24 relative overflow-hidden">
        {/* Rotating Gear - Top Left */}
        <div className="absolute top-0 left-0 transform -translate-x-1/2 translate-y-1/2">
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative">
            <div 
              className="w-full h-full animate-spin-slow"
              style={{
                background: 'rgba(207, 149, 251, 0.3)',
                clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
              }}
            ></div>
          </div>
        </div>

        {/* Hexagon Shape - Bottom Right */}
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2">
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 relative">
            <div 
              className="w-full h-full animate-spin-slow"
              style={{
                background: 'rgba(207, 149, 251, 0.3)',
                clipPath: 'polygon(50% 0%, 93.3% 25%, 93.3% 75%, 50% 100%, 6.7% 75%, 6.7% 25%)'
              }}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12" style={{ fontFamily: "Lobster, cursive" }}>
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Fitness & Health',
                description: 'Maintaining physical and mental well-being through regular exercise and mindful practices.',
                icon: '💪'
              },
              {
                title: 'Trekking',
                description: 'Exploring mountain trails and nature paths, discovering breathtaking landscapes and pushing personal limits.',
                icon: '🥾'
              },
              {
                title: 'Video Editing',
                description: 'Crafting compelling visual narratives through post-production, color grading, and creative storytelling.',
                icon: '🎬'
              },
              {
                title: 'Hackathons',
                description: 'Participating in competitive coding events and innovation challenges to build solutions under pressure.',
                icon: '💡'
              }
            ].map((passion, index) => (
              <div 
                key={passion.title}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl mb-4">{passion.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4">{passion.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{passion.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm md:text-base">&copy; 2024 Soham Narvankar. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}