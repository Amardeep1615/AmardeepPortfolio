/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, User, Briefcase, GraduationCap, Award, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGithubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/your-github-username');
        const data = await response.json();
        setGithubStats({
          repos: data.public_repos,
          followers: data.followers,
          following: data.following
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      }
    };

    fetchGithubStats();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = {
    programming: ['Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['Django', 'Flask', 'Pandas', 'NumPy'],
    database: ['SQL', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'Visual Studio Code', 'PyCharm', 'Windows']
  };

  const projects = [
    {
      title: 'Django CRM System',
      description: 'A comprehensive Customer Relationship Management system built with Django framework.',
      features: [
        'Full-stack CRM application development',
        'User authentication & role-based access control',
        'Responsive UI with HTML, CSS, and Bootstrap',
        'MySQL database integration for customer data'
      ],
      tech: ['Django', 'Python', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      type: 'Group Project',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      links: [
        { type: 'github', url: 'https://github.com/yourusername/django-crm' },
        { type: 'live', url: 'https://your-crm-demo.com' }
      ]
    },
    {
      title: 'Flask Voice Assistant',
      description: 'An intelligent voice-controlled assistant with API integrations.',
      features: [
        'Speech recognition and text-to-speech capabilities',
        'Integration with external APIs (weather, news, music)',
        'Comprehensive testing and debugging',
        'Multi-language support with Google Translate'
      ],
      tech: ['Flask', 'Python', 'SpeechRecognition', 'gTTS', 'Googletrans', 'Pygame'],
      type: 'Individual Project',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      links: [
        { type: 'github', url: 'https://github.com/yourusername/flask-voice-assistant' }
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React and Tailwind CSS.',
      features: [
        'Modern UI with dark/light theme toggle',
        'Responsive design for all devices',
        'Interactive elements and animations',
        'SEO optimized'
      ],
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      type: 'Personal Project',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      links: [
        { type: 'github', url: 'https://github.com/yourusername/portfolio' },
        { type: 'live', url: 'https://your-portfolio.com' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AMARDEEP
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-300'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 px-4 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold">
              AB
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AMARDEEP BOLAGANI
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Python Developer & Software Engineer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Phone size={16} />
                <span>7093829685</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Mail size={16} />
                <span>bolagani.amardeep1627@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <MapPin size={16} />
                <span>Hyderabad,Telangana</span>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
              </button>
              <a
                href="https://github.com/Amardeep1615"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="/public/AmardeepBolaganicvresume12345_compressed (1).pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:scale-105"
              >
                Resume
              </a>

            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                <User size={120} className="text-blue-400" />
              </div>

              {/* GitHub Stats */}
              {githubStats && (
                <div className="mt-8 bg-slate-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-center text-blue-400">GitHub Stats</h3>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold">30</div>
                      <div className="text-sm text-gray-400">Repositories</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{githubStats.followers}</div>
                      <div className="text-sm text-gray-400">Followers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-sm text-gray-400">Following</div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <a
                      href="https://github.com/Amardeep1615"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github size={18} /> View GitHub Profile
                    </a>
                  </div>
                </div>
              )}
            </div>
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Python Developer with expertise in building robust web applications
                and data-driven solutions. My journey in computer science has equipped me with strong problem-solving
                skills and proficiency in modern development frameworks.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With hands-on experience in Django and Flask frameworks, I specialize in creating scalable
                applications with seamless user experiences. I'm also skilled in database management,
                version control, and integrating various APIs to enhance application functionality.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Education</h4>
                  <p className="text-sm text-gray-300">Bachelor of Computer Science</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Experience</h4>
                  <p className="text-sm text-gray-300">Full Stack Development</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-2">GitHub</h4>
                  <p className="text-sm text-gray-300">{githubStats?.repos || '30+'} Projects</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-400 mb-2">Technologies</h4>
                  <p className="text-sm text-gray-300">10+ Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Remains the same as before */}

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${project.type === 'Group Project' ? 'bg-blue-500/20 text-blue-300' :
                        project.type === 'Individual Project' ? 'bg-purple-500/20 text-purple-300' :
                          'bg-green-500/20 text-green-300'
                      }`}>
                      {project.type}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-blue-400 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300 text-xs">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-purple-400 text-sm">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    {project.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs ${link.type === 'github' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' :
                            'bg-blue-500/20 text-blue-300 hover:bg-blue-500/30'
                          }`}
                      >
                        {link.type === 'github' ? (
                          <>
                            <Github size={12} /> Code
                          </>
                        ) : (
                          <>
                            <ExternalLink size={12} /> Live Demo
                          </>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/your-github-username?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800/50 hover:bg-slate-800/70 px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <Github size={18} /> View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Other sections remain the same as before */}

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects.
            Let's connect and build something amazing together!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300">
              <Phone className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">7093829685</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300">
              <Mail className="text-purple-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300 break-all">bolagani.amardeep1627@gmail.com</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex justify-center gap-4 mb-4">
                <a href="https://github.com/Amardeep1615" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/amardeep-bolagani-025582244/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                  <Linkedin size={24} />
                </a>
              </div>
              <h3 className="font-semibold mb-2">Social</h3>
              <p className="text-gray-300">Connect with me</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="mailto:bolagani.amardeep1627@gmail.com" className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Send Email
            </a>
            <a href="tel:7093829685" className="bg-slate-800 border border-slate-600 px-8 py-3 rounded-full font-semibold hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 Amardeep Bolagani. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/amardeep-bolagani-025582244/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/amardeep-bolagani-025582244/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;