import React, { useState } from 'react';
import index from './index.css';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  User, 
  ChevronDown, 
  Award, 
  BookOpen, 
  Globe,
  Menu,
  X,
  FileText,
  File
} from 'lucide-react';


const getImagePath = (path: string) => {
  return path.startsWith('http') ? path : `./img${path}`;
};


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-slate-900/95 backdrop-blur-sm z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-white font-bold text-xl">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white pt-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80"
            alt="Professional Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 text-center px-4 py-20 max-w-4xl">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="../public/img/profile_img.jpg"
                alt="Profile"
                className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Mukesh Prakash Pappala</h1>
          <p className="text-xl md:text-2xl text-slate-200 mb-6"></p>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Specialized in developing cloud-based, scalable applications with a focus on React, Node.js, Java, and cloud technologies.
          </p>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {/* Documents */}
            <div className="flex gap-4">
              <a 
                href="https://drive.google.com/file/d/1mjPkgA108okjNEho5QUWJ7UkHxrRoRUh/view?usp=sharing" 
                className="flex items-center bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
              >
                <FileText size={18} className="mr-2" />
                Resume
              </a>
              <a 
                href="/cover-letter.pdf" 
                className="flex items-center bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
              >
                <File size={18} className="mr-2" />
                Cover Letter
              </a>
            </div>

            {/* Social & Coding Platform Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://github.com/Mukesh-217" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Github size={24} className="mr-1" />
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mukeshprakash/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Linkedin size={24} className="mr-1" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="2100031981cse.h@gmail.com" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Mail size={24} className="mr-1" />
                <span className="text-sm">Email</span>
              </a>
              <a href="https://leetcode.com/u/mukesh_008/" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Code2 size={24} className="mr-1" />
                <span className="text-sm">LeetCode</span>
              </a>
              <a href="https://codeforces.com/profile/mukesh009" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Code2 size={24} className="mr-1" />
                <span className="text-sm">CodeForces</span>
              </a>
              <a href="https://www.codechef.com/users/mukesh_85" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Code2 size={24} className="mr-1" />
                <span className="text-sm">CodeChef</span>
              </a>
              <a href="https://www.hackerrank.com/profile/pappalamukesh009" target="_blank" rel="noopener noreferrer" 
                className="flex items-center text-slate-300 hover:text-white transition-colors">
                <Code2 size={24} className="mr-1" />
                <span className="text-sm">HackerRank</span>
              </a>
            </div>
          </div>

          <a 
            href="#projects"
            className="inline-flex items-center bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View My Work
          </a>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-slate-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-12">
            <User className="text-slate-700 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-800">Professional Summary</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
            As a Cloud and Full Stack Developer with hands-on experience in developing scalable web applications and cloud-based solutions, 
            I specialize in technologies like React, Node.js, Java, and Python, integrated with AWS and other cloud platforms. My expertise 
            spans microservices architecture, performance optimization, and deploying secure, robust applications for diverse domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border-l-4 border-slate-700 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">Technical Leadership</h3>
                <p className="text-slate-600">Trained over 200 students as a OneAPI Lead at Intel Innovation Club, fostering technical growth and leadership.</p>
              </div>
              <div className="border-l-4 border-slate-700 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">Full Stack Development</h3>
                <p className="text-slate-600">Built dynamic applications using MERN, Django, and Spring Boot, enhancing performance and user experience across multiple projects.</p>
              </div>
              <div className="border-l-4 border-slate-700 pl-4">
                <h3 className="font-semibold text-slate-800 mb-2">Cloud & DevOps Expertise</h3>
                <p className="text-slate-600">Proficient in managing containerized applications on AWS ECS, DynamoDB, and deploying serverless architectures with AWS Lambda.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-slate-700">7+</div>
              <div className="text-slate-600">Industry-Recognized Cloud Certifications</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-slate-700">10+</div>
              <div className="text-slate-600">End-to-End Full Stack Projects</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-slate-700">30+</div>
              <div className="text-slate-600">Hours of Technical Workshops Conducted</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-3xl font-bold text-slate-700">200+</div>
              <div className="text-slate-600">Students Mentored and Trained</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 md:px-8 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-12">
            <Briefcase className="text-slate-700 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-800">Professional Experience</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">OneAPI Lead</h3>
                  <p className="text-slate-600">Intel Innovation Club</p>
                </div>
                <p className="text-slate-500">2023 - 2024</p>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Led technical training for 200+ students, focusing on cloud technologies and full-stack development.</li>
                <li>Implemented hands-on workshops that improved participants' coding skills and cloud knowledge.</li>
                <li>Developed and deployed cloud-native applications, optimizing performance with AWS services.</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Data Engineering Virtual Internship</h3>
                  <p className="text-slate-600">AICTE Virtual Internship</p>
                </div>
                <p className="text-slate-500">2023 - 2024</p>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Worked on processing and analyzing large datasets using SQL, Python, and big data tools.</li>
                <li>Developed ETL pipelines to extract, transform, and load data from multiple sources into a data warehouse.</li>
              </ul>
            </div>
            
            
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-12">
            <Globe className="text-slate-700 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-800">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={getImagePath('/onlinehealth.jpeg')}
                alt="Enterprise Dashboa"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Online Health & Nutrition Consultation System</h3>
                <p className="text-slate-600 mb-4">
                A scalable platform for personalized health consultations and recommendations, using microservices and SpringBoot.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Hibernate</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Spring Boot</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mukesh-217/Online-Health-and-Nutrition-Managmnent" className="flex items-center text-slate-700 hover:text-slate-900">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="https://www.linkedin.com/pulse/online-health-nutrition-consultation-system-mukesh-prakash/?trackingId=Lf9bjd4cRxyJImLyi1dDVQ%3D%3D" className="flex items-center text-slate-700 hover:text-slate-900">
                    <ExternalLink size={18} className="mr-1" /> Article
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="../public/img/tictactoe.webp"
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Tic-Tac-Toe Game using ReactJS</h3>
                <p className="text-slate-600 mb-4">
                A simple and interactive Tic-Tac-Toe game built with ReactJS and NodeJS, allowing users to play against each other with a responsive UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mukesh-217/Tic-Tac-Toe-Game-using-ReactJS" className="flex items-center text-slate-700 hover:text-slate-900">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="#" className="flex items-center text-slate-700 hover:text-slate-900">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                alt="Collaboration Tool"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Visualize Data with QuickSight</h3>
                <p className="text-slate-600 mb-4">
                A data visualization tool using AWS QuickSight to analyze and present business intelligence insights from large datasets.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AWS QuickSight</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AWS S3</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mukesh-217/Visualize-data-with-QuickSight" className="flex items-center text-slate-700 hover:text-slate-900">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="#" className="flex items-center text-slate-700 hover:text-slate-900">
                    <ExternalLink size={18} className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={getImagePath('/agricultureandaqua.jpg')}
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Agriculture and Aquaculture Management System</h3>
                <p className="text-slate-600 mb-4">
                A comprehensive platform for managing agricultural and aquaculture operations, providing real-time insights, 
                inventory management, and resource optimization.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">MERN Stack</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Postman</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">MongoDB</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mukesh-217/Agriculture-and-Aquaculture-Management-System" className="flex items-center text-slate-700 hover:text-slate-900">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="https://www.linkedin.com/pulse/agriculture-aquaculture-mukesh-praskash/?trackingId=Lf9bjd4cRxyJImLyi1dDVQ%3D%3D" className="flex items-center text-slate-700 hover:text-slate-900">
                    <ExternalLink size={18} className="mr-1" /> Article
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={getImagePath('/imagereck.jpeg')}
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">AWS Image Recognition for Visual Insights</h3>
                <p className="text-slate-600 mb-4">
                A cloud-based solution using AWS Rekognition to extract visual insights, such as object detection and 
                facial analysis, for real-time applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AWS Rekognition</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">AWS S3</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex space-x-4">
                  <a href="https://github.com/Mukesh-217/Exploring-AWS-Image-Recognition-for-Visual-Insights-in-the-Cloud" className="flex items-center text-slate-700 hover:text-slate-900">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="https://www.linkedin.com/pulse/exploring-aws-image-recognition-for-visual-insights-mukesh-prakash-hzbnc/?trackingId=Lf9bjd4cRxyJImLyi1dDVQ%3D%3D" className="flex items-center text-slate-700 hover:text-slate-900">
                    <ExternalLink size={18} className="mr-1" /> Article
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={getImagePath('/employability.jpeg')}
                alt="E-commerce Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Employability Consultancy System</h3>
                <p className="text-slate-600 mb-4">
                A full-stack platform connecting job seekers with potential employers, offering career guidance, 
                skill assessments, and personalized job recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">Django</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">MySQL</span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">HTML & CSS</span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-slate-700 hover:text-slate-900">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href="https://www.linkedin.com/pulse/employability-consultancy-system-mukesh-prakash/?trackingId=Lf9bjd4cRxyJImLyi1dDVQ%3D%3D" className="flex items-center text-slate-700 hover:text-slate-900">
                    <ExternalLink size={18} className="mr-1" /> Article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 md:px-8 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-12">
            <Code2 className="text-slate-700 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-800">Technical Expertise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Computational Language Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Java</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Python</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">C language</span>
                    <span className="text-slate-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Amazon Web Services(AWS)</span>
                    <span className="text-slate-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Web Development Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">HTML & CSS</span>
                    <span className="text-slate-600">Expert</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">JSP</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">React.js</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Node.js</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Frameworks</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Django & Flask</span>
                    <span className="text-slate-600">Expert</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">SpringBoot & Microservices</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Databases</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">MySQL</span>
                    <span className="text-slate-600">Expert</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">MongoDB</span>
                    <span className="text-slate-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">PostgreSQL</span>
                    <span className="text-slate-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '50%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Soft Skills</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Project Management</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Communication and Collaboration</span>
                    <span className="text-slate-600">Advanced</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-700">Data Structures and Algorithms</span>
                    <span className="text-slate-600">Intermediate</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-slate-700 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Education */}
<section id="education" className="flex justify-center items-center min-h-screen bg-slate-100 px-4 md:px-8"> 
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center justify-center mb-12">
      <Code2 className="text-slate-700 mr-3" size={28} /> 
      <h2 className="text-3xl font-bold text-slate-800">Education</h2>
    </div>

    <div className="relative border-l-4 border-gradient-to-b from-slate-800 to-slate-400 ml-4"> {/* Gradient Timeline */}
      
      {/* Timeline Item */}
      {[
        { title: "B.Tech in CSE (Cloud & Edge Computing)", institute: "KL University", year: "2021 - 2025", score: "CGPA: 9.26/10" },
        { title: "Intermediate (MPC)", institute: "Tirumala Junior College", year: "2019 - 2021", score: "Marks: 918/1000" },
        { title: "Secondary Education", institute: "Bhashyam English Medium School", year: "2018 - 2019", score: "CGPA: 9.7/10" },
      ].map((edu, index) => (
        <div key={index} className="mb-10 ml-6 relative group">
          {/* Animated Dot */}
          <div className="absolute -left-6 top-1 w-4 h-4 bg-slate-800 rounded-full group-hover:scale-125 group-hover:bg-indigo-600 transition-transform duration-300 animate-pulse"></div>
          
          {/* Floating Date Badge */}
          <div className="absolute -left-24 top-0 bg-slate-800 text-white text-sm px-3 py-1 rounded-lg shadow-md hidden md:block">
            {edu.year}
          </div>

          {/* Education Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition duration-500 ease-in-out">
            <h4 className="text-xl font-semibold text-slate-800 mb-1">{edu.title}</h4>
            <p className="text-slate-600">{edu.institute}</p>
            <p className="text-slate-500">{edu.score}</p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>

{/* Certifications */}
<section id="certifications" className="py-24 px-4 md:px-8 bg-slate-100">
  <div className="max-w-5xl mx-auto">
    <div className="flex items-center justify-center mb-12">
      <Code2 className="text-slate-700 mr-3" size={28} />
      <h2 className="text-3xl font-bold text-slate-800">Certifications</h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "AWS Certified Cloud Practitioner",
          issuer: "Amazon Web Services Training and Certification",
          duration: "2023 - 2027",
          certificateLink: "https://drive.google.com/file/d/1Sp43tMoX7gG4JnLUoXbMvE70fW5uUhYT/view?usp=sharing",
          badgeLink: "https://www.credly.com/badges/0ca2143a-11ca-4f92-a040-4406b82b48bc/public_url",
        },
        {
          title: "AWS Certified Developer Associate",
          issuer: "Amazon Web Services Training and Certification",
          duration: "2024 - 2027",
          certificateLink: "https://drive.google.com/file/d/1hAFxZruk8TksZ-KPNMXwYi2Ndwooa1kD/view?usp=sharing",
          badgeLink: "https://www.credly.com/badges/e0b0b6e3-e2a6-4a97-ad73-d82ca19180e6/public_url",
        },
        {
          title: "Google Associate Cloud Engineer",
          issuer: "Google Cloud",
          duration: "2024 - 2027",
          certificateLink: "https://drive.google.com/file/d/1tvNhuvEFatok5_EKW5zNzXsN68vLTPxs/view?usp=sharing",
          badgeLink: "https://www.credly.com/badges/bc06180b-045e-4091-98a1-61ca1634b043/public_url",
        },
        {
          title: "Red Hat Certified Enterprise App Developer",
          issuer: "Red Hat",
          duration: "2023 - 2026",
          certificateLink: "https://drive.google.com/file/d/1wfaGLQFwLIwZsUzWOIeeys0alymTd-fT/view?usp=sharing",
          badgeLink: "https://www.credly.com/badges/94d06718-91c9-46f0-b0ea-70950567b5c9/public_url",
        },
        {
          title: "Microsoft Certified: Azure AI Fundamentals",
          issuer: "Microsoft",
          duration: "2023",
          certificateLink: "https://drive.google.com/file/d/1HElly0zxAb-FXyFsZV0ULUhVjdBjPGwn/view?usp=sharing",
          badgeLink: "https://www.credly.com/badges/1ce8acc9-e4ac-41fd-abdc-b60aff1699f1/public_url",
        },
        {
          title: "Automation Anywhere Certified Essentials RPA Professional",
          issuer: "Automation Anywhere",
          duration: "2023",
          certificateLink: "https://drive.google.com/file/d/1fZufeWDEUlCLHC1yVSH4HMXd0kICeHMv/view?usp=sharing",
          badgeLink: "https://certificates.automationanywhere.com/fa9c4563-23ff-4684-92bd-fe36b47d4597",
        },
        {
          title: "Oracle Cloud Infrastructure Certified Foundations Associate",
          issuer: "Oracle",
          duration: "2023",
          certificateLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5D5AEEEF3033AABE7C4EED6B0EE95DE9EEF6ACFFC68A2A0625EC975062B9C5E3",
          badgeLink: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=5D5AEEEF3033AABE7C4EED6B0EE95DE9EEF6ACFFC68A2A0625EC975062B9C5E3",
        },
      ].map((cert, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-300 p-6 border-l-4 border-slate-800"
        >
          <h4 className="text-xl font-semibold text-slate-800 mb-2">{cert.title}</h4>
          <p className="text-slate-600">{cert.issuer}</p>
          <p className="text-slate-500 mb-4">{cert.duration}</p>

          {/* Buttons with Links */}
          <div className="flex space-x-4">
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition duration-300"
            >
              Certificate
            </a>
            <a
              href={cert.badgeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-800 text-slate-800 rounded-lg hover:bg-slate-800 hover:text-white transition duration-300"
            >
              Badge
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



{/* Tools and Services */}
<div className="bg-white rounded-xl shadow-lg p-8 relative">
  <div className="mb-6">
    <h3 className="text-3xl font-bold text-slate-800 text-center">Tools and Services</h3>
  </div>

  {/* Gradient Overlays */}
  <div className="gradient-overlay gradient-overlay-left"></div>
  <div className="gradient-overlay gradient-overlay-right"></div>

  {/* Scrollable Cards Container */}
  <div className="overflow-hidden relative">
    <div className="scroll-container">
      {/* AWS Card */}
      <div className="floating-card p-6">
        <div className="flex flex-col items-center">
          <img
            src="../public/img/aws.jpg"
            alt="AWS"
            className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
          />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">AWS</h4>
          <p className="text-center text-slate-500 text-lg">
            AWS provides a comprehensive suite of cloud services, including computing power, storage, and databases.
          </p>
        </div>
      </div>

      {/* GitHub Card */}
      <div className="floating-card p-6">
        <div className="flex flex-col items-center">
          <img
            src="../public/img/github.webp"
            alt="GitHub"
            className="w-24 h-24 rounded-full mb-4 border-4 border-gray-800"
          />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">GitHub</h4>
          <p className="text-center text-slate-500 text-lg">
            GitHub is a platform for version control and collaborative software development using Git.
          </p>
        </div>
      </div>

      {/* Google Cloud Platform Card */}
      <div className="floating-card p-6">
        <div className="flex flex-col items-center">
          <img
            src="../public/img/google.webp"
            alt="Google Cloud Platform"
            className="w-24 h-24 rounded-full mb-4 border-4 border-green-500"
          />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">Google Cloud Platform</h4>
          <p className="text-center text-slate-500 text-lg">
            Google Cloud offers a variety of cloud computing services for building, deploying, and scaling applications.
          </p>
        </div>
      </div>

      {/* Repeat the cards to create a seamless loop */}
      {/* AWS Card */}
      <div className="floating-card p-6">
        <div className="flex flex-col items-center">
          <img
            src="../public/img/aws.jpg"
            alt="AWS"
            className="w-24 h-24 rounded-full mb-4 border-4 border-blue-500"
          />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">AWS</h4>
          <p className="text-center text-slate-500 text-lg">
            AWS provides a comprehensive suite of cloud services, including computing power, storage, and databases.
          </p>
        </div>
      </div>

      {/* GitHub Card */}
      <div className="floating-card p-6">
        <div className="flex flex-col items-center">
          <img
            src="../public/img/github.webp"
            alt="GitHub"
            className="w-24 h-24 rounded-full mb-4 border-4 border-gray-800"
          />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">GitHub</h4>
          <p className="text-center text-slate-500 text-lg">
            GitHub is a platform for version control and collaborative software development using Git.
          </p>
        </div>
      </div>

      {/* Google Cloud Platform Card */}
      <div className="floating-card p-6">
        <div className="flex flex-col items-center">
          <img
            src="../public/img/google.webp"
            alt="Google Cloud Platform"
            className="w-24 h-24 rounded-full mb-4 border-4 border-green-500"
          />
          <h4 className="text-2xl font-semibold text-slate-800 mb-2">Google Cloud Platform</h4>
          <p className="text-center text-slate-500 text-lg">
            Google Cloud offers a variety of cloud computing services for building, deploying, and scaling applications.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* Publications & Speaking */}
      <section className="py-24 px-4 md:px-8 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-12">
            <BookOpen className="text-slate-700 mr-3" size={28} />
            <h2 className="text-3xl font-bold text-slate-800">RESEARCH AND PUBLICATIONS</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-8">
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Fortifying Healthcare Data Security in Cloud Environments</h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold text-slate-800">Published in International Conference on Inventive Communication and Computational Technologies[ICICCT 2024]</p>
                    <p className="text-slate-600">Data Encryption & Access Controls</p>
                    <p className="text-slate-600">Compliance with Healthcare Regulations</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 md:px-8 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-slate-300 mb-8 text-lg">
            I'm currently open to new opportunities and interesting projects.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="2100031981cse.h@gmail.com" 
              className="flex items-center bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} className="mr-2" />
              Contact Me
            </a>
            <a 
              href="https://drive.google.com/file/d/1mjPkgA108okjNEho5QUWJ7UkHxrRoRUh/view?usp=sharing" 
              className="flex items-center border border-slate-600 hover:border-slate-500 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Mukesh Prakash Pappala. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
