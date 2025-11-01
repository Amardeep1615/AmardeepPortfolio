/* src/components/Portfolio.jsx */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  User,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    // Fetch GitHub stats (replace username if needed)
    const fetchGithubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Amardeep1615');
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
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;
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

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Projects (filled with your project details)
  const projects = [
    {
      title: 'Food Ordering Web Application',
      subtitle: 'Django • Python • MySQL',
      description:
        'Full-stack food ordering web app with user auth, cart, order management and custom admin dashboard for restaurants.',
      features: [
        'User registration/login and secure checkout flow',
        'Django ORM models for menu, orders and users',
        'Admin panel to manage menu items & track orders',
        'Responsive UI built with HTML5, CSS3 & Bootstrap'
      ],
      tech: ['Django', 'Python', 'MySQL', 'Bootstrap', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Amardeep1615', // replace with repo if available
      live: '#' // replace with live demo URL if available
    },
    {
      title: 'Django CRM System',
      subtitle: 'Django • Python • SQL',
      description:
        'Comprehensive CRM solution with role-based access, lead/contact management and workflow automation.',
      features: [
        'Role-based access control and user management',
        'CRUD operations for leads, contacts and tasks',
        'Workflow automation to reduce manual processing',
        'Responsive templates using Bootstrap and Tailwind'
      ],
      tech: ['Django', 'Python', 'MySQL', 'Bootstrap', 'Tailwind'],
      image: 'https://img.freepik.com/free-photo/young-economists_1098-15592.jpg?semt=ais_hybrid&w=740&q=80',
      github: 'https://github.com/Amardeep1615',
      live: '#'
    },
    {
      title: 'E-Commerce Web Application (React)',
      subtitle: 'React.js • Tailwind • JavaScript',
      description:
        'React-based e-commerce UI with reusable components, add-to-cart functionality, and responsive product grid.',
      features: [
        'Component-driven product listing and cart',
        'State management using Hooks & Context (where applicable)',
        'Responsive layout optimized for mobile & desktop',
        'Clean UI/UX with Tailwind CSS'
      ],
      tech: ['React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Amardeep1615',
      live: '#'
    },
    {
      title: 'Student Management System',
      subtitle: 'Python • SQLite',
      description:
        'CLI-based Student Management System supporting add/edit/delete/view operations and SQL persistence.',
      features: [
        'CRUD operations with sqlite3 integration',
        'Input validation and clear CLI menus',
        'Designed for extensibility and reporting'
      ],
      tech: ['Python', 'SQLite', 'SQL'],
      image: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Amardeep1615',
      live: '#'
    },
    {
      title: 'Bank Transaction Management',
      subtitle: 'Python • File Handling • SQL (Optional)',
      description:
        'Console-based banking app handling deposits, withdrawals and transaction logs with input validation and error handling.',
      features: [
        'Secure transaction logging and validation',
        'Menu-driven interface for easy navigation',
        'Exception handling to prevent invalid transactions'
      ],
      tech: ['Python', 'File I/O', 'SQL'],
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Amardeep1615',
      live: '#'
    },
    {
      title: 'Meal Finder',
      subtitle: 'HTML • CSS • (Optional JS)',
      description:
        'Responsive meal/recipe UI inspired by TheMealDB; clean layouts and mobile-first design (JS can integrate API).',
      features: [
        'Responsive recipe layout and ingredient sections',
        'Mobile-first CSS and accessible design',
        'Ready to add API integration for dynamic data'
      ],
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Amardeep1615',
      live: '#'
    },
    {
      title: 'Tech Shop (Static)',
      subtitle: 'HTML • CSS',
      description:
        'Static e-commerce style landing page showcasing product grid, search UI and simulated cart experience.',
      features: [
        'Structured product grid and responsive nav',
        'Clear visual hierarchy for product cards',
        'Mobile responsive with focus on UX'
      ],
      tech: ['HTML', 'CSS'],
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/Amardeep1615',
      live: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* NAV */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AMARDEEP
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-blue-400 ${activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-300'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => (
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

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/12 to-purple-600/12"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold">
              AB
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AMARDEEP BOLAGANI
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">Python Full Stack Developer • React & Django</p>

            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <a href="mailto:bolagani.amardeep1627@gmail.com" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Mail size={16} /> Email
              </a>
              <a href="tel:7093829685" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Phone size={16} /> Call
              </a>
              <a href="https://github.com/Amardeep1615" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                <Github size={16} /> GitHub
              </a>
              <a href="/resume.pdf" download className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-white">
                Resume
              </a>
            </div>

            <div>
              <button onClick={() => scrollToSection('projects')} className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
                View Projects
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="p-6 bg-slate-800/40 rounded-2xl">
              <div className="w-full h-64 bg-gradient-to-br from-blue-500/8 to-purple-500/8 rounded-xl flex items-center justify-center overflow-hidden"> {/* Added overflow-hidden for rounded corners on image */}
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQH9r85D96C5kQ/profile-displayphoto-shrink_800_800/0/1715423850383?e=1721260800&v=beta&t=4p79P5fVf52wM_52Xo5p32cTqXpWnO20Bw73L8d4vF8" // Replace with your actual image URL
                  alt="Amardeep Bolagani Profile"
                  className="w-full h-full object-cover object-center" // Ensures the image covers the area nicely
                />
              </div>
              {githubStats && (
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold">{githubStats.repos || '—'}</div>
                    <div className="text-xs text-gray-400">Repositories</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold">{githubStats.followers || '—'}</div>
                    <div className="text-xs text-gray-400">Followers</div>
                  </div>
                  <div className="bg-slate-800/50 p-4 rounded-lg">
                    <div className="text-2xl font-bold">{githubStats.following || '—'}</div>
                    <div className="text-xs text-gray-400">Following</div>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I am a passionate Python Full Stack Developer with hands-on experience in Django and React.
                I build scalable web applications, write clean code, and enjoy solving real-world problems with software.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My projects span full-stack Django systems, React frontends, and Python/SQL tools — all focused on usability,
                performance and maintainability.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-1">Education</h4>
                  <p className="text-sm text-gray-300">B.Sc Computer Science</p>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-1">Experience</h4>
                  <p className="text-sm text-gray-300">Full Stack Development (Internships & Projects)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 px-6 bg-slate-800/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Skills
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-3">Frontend</h4>
              <p className="text-sm text-gray-300">HTML5, CSS3, Tailwind, Bootstrap, React.js, JavaScript (ES6)</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-3">Backend</h4>
              <p className="text-sm text-gray-300">Django, Flask, REST APIs, Python</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-3">Database</h4>
              <p className="text-sm text-gray-300">MySQL, SQLite, SQL</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-3">Tools</h4>
              <p className="text-sm text-gray-300">Git, GitHub, VS Code, Postman</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="bg-slate-800/40 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-44 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform" />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <span className="text-xs text-gray-400">{p.subtitle}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-3">{p.description}</p>

                  <div className="mt-4">
                    <h4 className="text-xs text-blue-300 font-semibold mb-2">Key Features</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="text-xs bg-purple-600/20 text-purple-200 px-2 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a href={p.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-gray-800 hover:bg-gray-700">
                      <Github size={12} className="inline-block mr-1" /> Code
                    </a>
                    <a href={p.live} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 rounded-full bg-blue-600/20 text-blue-300 hover:bg-blue-600/30">
                      <ExternalLink size={12} className="inline-block mr-1" /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="https://github.com/Amardeep1615?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-slate-800/50 px-6 py-3 rounded-full">
              <Github size={18} /> View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-14 px-6 bg-slate-800/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Education & Internship
          </h2>

          <div className="space-y-4">
            <div className="bg-slate-800/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Bachelor of Computer Science</h4>
                  <p className="text-sm text-gray-300">Sri A.B.R Government Degree College, Repalle (ANU) — 2021–2024 | 84%</p>
                </div>
                <div className="text-sm text-gray-400">Guntur</div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">Django CRM Internship</h4>
                  <p className="text-sm text-gray-300">Sri A.B.R Government Degree College — Aug 2023 to Jan 2024</p>
                </div>
                <div className="text-sm text-gray-400">Full Stack Internship</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8">I’m open to job opportunities and collaborations. Reach out and let’s build something great.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-800/40 p-6 rounded-lg">
              <Phone size={28} className="mx-auto text-blue-400" />
              <h4 className="font-semibold mt-4">Phone</h4>
              <p className="text-sm text-gray-300">7093829685</p>
            </div>

            <div className="bg-slate-800/40 p-6 rounded-lg">
              <Mail size={28} className="mx-auto text-purple-400" />
              <h4 className="font-semibold mt-4">Email</h4>
              <p className="text-sm text-gray-300 break-all">bolagani.amardeep1627@gmail.com</p>
            </div>

            <div className="bg-slate-800/40 p-6 rounded-lg">
              <div className="flex justify-center gap-4 mb-3">
                <a href="https://github.com/Amardeep1615" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white"><Github size={22} /></a>
                <a href="https://www.linkedin.com/in/amardeep-bolagani-025582244/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-blue-400"><Linkedin size={22} /></a>
              </div>
              <h4 className="font-semibold">Social</h4>
              <p className="text-sm text-gray-300">Connect with me on GitHub & LinkedIn</p>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <a href="mailto:bolagani.amardeep1627@gmail.com" className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-full font-semibold">
              Send Email
            </a>
            <a href="/resume.pdf" download className="bg-slate-800 border border-slate-600 px-6 py-3 rounded-full font-semibold">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Amardeep Bolagani. Built with React & Tailwind.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Amardeep1615" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/amardeep-bolagani-025582244/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
