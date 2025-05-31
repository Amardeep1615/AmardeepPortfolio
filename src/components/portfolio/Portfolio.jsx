import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Database, Globe, User, Briefcase, GraduationCap, Award, ChevronDown, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
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
      type: 'Group Project'
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
      type: 'Individual Project'
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
                  className={`transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold' : 'text-gray-300'
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
                <span>Repalle, Bapatala (Dist)</span>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View My Work
            </button>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <Code className="text-blue-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">Programming</h3>
              <div className="space-y-2">
                {skills.programming.map((skill, index) => (
                  <span key={index} className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <Globe className="text-green-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="space-y-2">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <Database className="text-purple-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">Database</h3>
              <div className="space-y-2">
                {skills.database.map((skill, index) => (
                  <span key={index} className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <Award className="text-orange-400 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-4">Tools</h3>
              <div className="space-y-2">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="inline-block bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <Briefcase className="text-blue-400 mt-1" size={24} />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Python Developer</h3>
                  <p className="text-blue-400 mb-4">Full Stack Development Experience</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Python programming with data science libraries (Pandas, NumPy)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Web frameworks development (Django/Flask)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Database interactions (SQL, NoSQL)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Front-end technologies (HTML, CSS, JavaScript)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      Version control systems (Git)
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3 text-green-400">Django CRM Internship</h4>
                <p className="text-gray-300 mb-3">Group Project Experience</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Python Skills Development</li>
                  <li>• Code Debugging</li>
                  <li>• Django Framework Mastery</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-3 text-purple-400">Flask Voice Assistant</h4>
                <p className="text-gray-300 mb-3">Individual Project</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Python Library Integration</li>
                  <li>• Voice Recognition Implementation</li>
                  <li>• API Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </span>if
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-blue-400">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-purple-400">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-blue-400 mt-1" size={32} />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Bachelor of Computer Science</h3>
                  <p className="text-blue-400 mb-2">Sri A.B.R Government Degree College Repalle</p>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">84% Percentage</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">2021-2024</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-purple-400 mt-1" size={32} />
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Intermediate</h3>
                  <p className="text-purple-400 mb-2">S.M.K.R.M Junior College Repalle</p>
                  <div className="flex flex-wrap gap-4 text-gray-300">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full">84% Percentage</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full">2019-2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-center">Leadership & Management Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Award className="text-yellow-400" size={24} />
                <span className="text-gray-300">Project Planning and Task Delegation</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="text-yellow-400" size={24} />
                <span className="text-gray-300">Effective Team Communication & Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <MapPin className="text-green-400 mx-auto mb-4" size={32} />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-300">Repalle, Bapatala (Dist)</p>
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Amardeep Bolagani. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;