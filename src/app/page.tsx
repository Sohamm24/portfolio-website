'use client';

import { useState, useEffect } from 'react'

export default function Portfolio() {
  const [currentSection, setCurrentSection] = useState(0)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative overflow-hidden">
        {/* Navbar */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
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
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="pt-16 min-h-screen flex items-center justify-center relative">
          <div className="text-center z-10">
            {/* Animated floating shapes */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-100 rounded-full animate-pulse opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-100 rounded-full animate-bounce opacity-20"></div>
            <div className="absolute top-10 right-20 w-24 h-24 bg-blue-200 rounded-full animate-ping opacity-10"></div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-4 animate-fade-in">
              Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Soham Narvankar</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up">
              Computer Engineering Student
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-12">
              <a href="https://linkedin.com" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:soham@example.com" className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-all duration-300 hover:scale-110">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hexagon Shape */}
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

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js',
              'Node.js', 'Python', 'Java', 'C++',
              'MongoDB', 'PostgreSQL', 'Git', 'Docker'
            ].map((skill, index) => (
              <div 
                key={skill}
                className="bg-blue-500 text-white p-4 md:p-6 rounded-lg text-center hover:bg-blue-600 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-sm md:text-lg font-semibold">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
            About Me
          </h2>
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Soham Narvankar is a passionate Computer Engineering student with a deep fascination for technology and innovation. 
              His journey in the world of programming began with curiosity and has evolved into a comprehensive understanding of 
              modern web development, software engineering principles, and cutting-edge technologies.
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              With expertise spanning across full-stack development, he specializes in creating elegant, efficient, and 
              user-centric solutions. His technical arsenal includes proficiency in JavaScript ecosystems, modern frameworks, 
              and database management systems, allowing him to build robust applications from concept to deployment.
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Beyond coding, Soham believes in the power of continuous learning and collaboration. He actively seeks 
              opportunities to contribute to open-source projects, engage with the developer community, and stay at the 
              forefront of technological advancement. His goal is to leverage technology to solve real-world problems 
              and make a meaningful impact in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'A full-stack e-commerce solution built with Next.js, featuring user authentication, payment integration, and admin dashboard.',
                tech: ['Next.js', 'MongoDB', 'Stripe', 'Tailwind CSS']
              },
              {
                title: 'Task Management App',
                description: 'A collaborative task management application with real-time updates, team collaboration features, and intuitive UI.',
                tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL']
              },
              {
                title: 'Weather Analytics Dashboard',
                description: 'An interactive dashboard displaying weather patterns and analytics with data visualization and forecasting capabilities.',
                tech: ['Vue.js', 'Python', 'Chart.js', 'API Integration']
              },
              {
                title: 'Social Media Platform',
                description: 'A modern social networking platform with real-time messaging, content sharing, and user engagement features.',
                tech: ['MERN Stack', 'Redux', 'WebSocket', 'AWS']
              },
              {
                title: 'AI Chatbot Assistant',
                description: 'An intelligent chatbot powered by machine learning algorithms for customer support and automated responses.',
                tech: ['Python', 'TensorFlow', 'NLP', 'Flask']
              },
              {
                title: 'Portfolio Website',
                description: 'A responsive and interactive portfolio website showcasing projects, skills, and professional journey.',
                tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
              }
            ].map((project, index) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Passions Section */}
      <section id="passions" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-black mb-12">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Photography',
                description: 'Capturing moments and stories through the lens, exploring composition and visual storytelling.',
                icon: '📸'
              },
              {
                title: 'Music Production',
                description: 'Creating electronic music and experimenting with sound design using digital audio workstations.',
                icon: '🎵'
              },
              {
                title: 'Fitness & Health',
                description: 'Maintaining physical and mental well-being through regular exercise and mindful practices.',
                icon: '💪'
              },
              {
                title: 'Travel & Culture',
                description: 'Exploring diverse cultures, cuisines, and experiences around the world to broaden perspectives.',
                icon: '✈️'
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