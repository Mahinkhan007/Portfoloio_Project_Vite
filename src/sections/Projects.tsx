import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
  ExternalLink,
  Github,
  Sprout,
  BarChart3,
  CloudSun,
  ShoppingCart,
  Wifi,
  Utensils,
  Brain,
  Gamepad2,
  CreditCard,
  Dog,
  Code2,
  Layers,
  Database,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  icon: React.ElementType;
  color: string;
  status: 'completed' | 'in-progress';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'NutriScanner',
    description:
      'Final year project - Smart nutrition scanning system using image recognition to analyze food nutritional content.',
    fullDescription:
      'My Final Year Project at Multimedia University supervised by DR. Prof Hezerul Abdul Karim. NutriScanner is an intelligent system that uses computer vision and machine learning to analyze food images and provide detailed nutritional information. The system helps users make healthier dietary choices by instantly scanning food items and displaying calorie count, macronutrients, and allergen information.',
    tech: ['C', 'Computer Vision', 'Machine Learning', 'Image Processing'],
    githubUrl: 'https://github.com/Mahinkhan007/NutriScanner',
    featured: true,
    icon: Utensils,
    color: 'from-green-500 to-emerald-600',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Smart Irrigation IoT System',
    description:
      'Automated irrigation system with soil moisture monitoring and remote control via ESP8266 and ThingSpeak.',
    fullDescription:
      'A fully automated pet feeder system using Arduino Uno microcontroller, ultrasonic sensors, and IR sensors to monitor food and water levels. Programmed in C and assembly-level machine code to control servo motors and automate feeding schedules. Built and deployed a personalized web interface integrated with ThingSpeak for real-time data monitoring and remote control via Wi-Fi (ESP8266).',
    tech: ['C++', 'Arduino', 'ESP8266', 'IoT', 'ThingSpeak', 'Sensors'],
    githubUrl: 'https://github.com/Mahinkhan007/Smart-Irrigation-IoT-system',
    featured: true,
    icon: Sprout,
    color: 'from-blue-500 to-cyan-600',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Data Science Portfolio',
    description:
      'Comprehensive collection of data science projects demonstrating skills in analysis, visualization, and ML.',
    fullDescription:
      'A portfolio showcasing various data science projects including exploratory data analysis, predictive modeling, data visualization, and machine learning implementations. Projects cover real-world datasets with practical applications in business analytics, healthcare, and finance.',
    tech: ['Python', 'Jupyter Notebook', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    githubUrl: 'https://github.com/Mahinkhan007/Data_Science_Portfolio',
    featured: false,
    icon: BarChart3,
    color: 'from-purple-500 to-indigo-600',
    status: 'completed',
  },
  {
    id: 4,
    title: 'WeatherApp',
    description:
      'Flutter weather application with location-based forecasts using OpenWeatherMap API.',
    fullDescription:
      'A beautiful weather application built with Flutter that provides real-time weather information for any location worldwide. Features include current weather conditions, 5-day forecasts, hourly predictions, and automatic location detection. Uses OpenWeatherMap API for accurate weather data.',
    tech: ['Flutter', 'Dart', 'API Integration', 'Mobile Development'],
    githubUrl: 'https://github.com/Mahinkhan007/WeatherApp',
    featured: false,
    icon: CloudSun,
    color: 'from-orange-400 to-yellow-500',
    status: 'completed',
  },
  {
    id: 5,
    title: 'Rooftop Energy Solar Calculator',
    description:
      'Web-based solar energy calculator for estimating rooftop solar panel potential.',
    fullDescription:
      'Developed as a technical assessment project for Rooftop Energy. This web application helps users calculate the solar energy potential of their rooftops based on location, roof size, and orientation. Provides estimates for energy generation, cost savings, and environmental impact.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Solar Calculations'],
    githubUrl: 'https://github.com/Mahinkhan007/Rooftop-Energy-Solar-Calculator',
    featured: false,
    icon: Wifi,
    color: 'from-yellow-500 to-amber-600',
    status: 'completed',
  },
  {
    id: 6,
    title: 'Mahin eCom',
    description:
      'Full-featured e-commerce platform with product catalog, cart, and checkout functionality.',
    fullDescription:
      'A complete e-commerce solution built with modern web technologies. Features include product browsing, search and filtering, shopping cart management, user authentication, order tracking, and payment integration. Designed with responsive UI for seamless shopping experience across devices.',
    tech: ['React', 'CSS', 'Node.js', 'Database', 'REST API'],
    githubUrl: 'https://github.com/Mahinkhan007/Mahin_eCom',
    featured: false,
    icon: ShoppingCart,
    color: 'from-pink-500 to-rose-600',
    status: 'completed',
  },
  {
    id: 7,
    title: 'Quizzup',
    description:
      'Interactive quiz application to test general knowledge with Flutter.',
    fullDescription:
      'A fun and engaging quiz application built with Flutter that tests users\' general knowledge across various categories. Features include multiple question types, score tracking, timed challenges, and leaderboard functionality. Great for learning and entertainment.',
    tech: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX'],
    githubUrl: 'https://github.com/Mahinkhan007/Quizzup',
    featured: false,
    icon: Brain,
    color: 'from-indigo-500 to-purple-600',
    status: 'completed',
  },
  {
    id: 8,
    title: 'DeBank',
    description:
      'Banking application interface with modern design and transaction features.',
    fullDescription:
      'A modern banking application interface built with PHP. Features include account dashboard, transaction history, fund transfers, bill payments, and account management. Designed with security and user experience in mind.',
    tech: ['PHP', 'Web Development', 'Database', 'Security'],
    githubUrl: 'https://github.com/Mahinkhan007/DeBank',
    featured: false,
    icon: CreditCard,
    color: 'from-teal-500 to-emerald-600',
    status: 'completed',
  },
  {
    id: 9,
    title: 'Flutter Games Collection',
    description:
      'Collection of mini-games built with Flutter including Xylophone, Magic 8-Ball, and Dice App.',
    fullDescription:
      'A collection of fun mini-games developed to practice Flutter development. Includes Xylophone (musical instrument app), Magic 8-Ball (fortune teller), Dice App (random dice roller), Choose Your Destiny (decision-based game), and BMI Calculator. Each game demonstrates different Flutter concepts and UI patterns.',
    tech: ['Flutter', 'Dart', 'Game Development', 'Mobile'],
    githubUrl: 'https://github.com/Mahinkhan007',
    featured: false,
    icon: Gamepad2,
    color: 'from-red-500 to-pink-600',
    status: 'completed',
  },
  {
    id: 10,
    title: 'Tindog',
    description:
      'Tinder-style matching app for dogs built with Bootstrap 5.',
    fullDescription:
      'A playful web application inspired by Tinder but for dogs! Built entirely with Bootstrap 5 and custom media queries. Features swipe-like interactions, profile cards, and responsive design. A fun project to practice frontend development skills.',
    tech: ['HTML', 'Bootstrap 5', 'CSS', 'Responsive Design'],
    githubUrl: 'https://github.com/Mahinkhan007/Tindog',
    featured: false,
    icon: Dog,
    color: 'from-rose-500 to-red-600',
    status: 'completed',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Grid items stagger animation
      const gridTrigger = ScrollTrigger.create({
        trigger: gridRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            gridRef.current?.querySelectorAll('.project-card') || [],
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power3.out',
            }
          );
        },
        once: true,
      });
      triggers.push(gridTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full py-20 lg:py-32 bg-light overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Code2 className="w-4 h-4 inline mr-2" />
              Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
              Featured Work
            </h2>
            <p className="text-gray-custom max-w-xl">
              A collection of my projects from GitHub showcasing skills in IoT, 
              Data Science, Mobile Development, and Web Development.
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-6 lg:mt-0 border-dashed border-2"
            onClick={() => window.open('https://github.com/Mahinkhan007', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            View All on GitHub
          </Button>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Visual */}
              <div
                className={`relative h-40 bg-gradient-to-br ${project.color} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <project.icon className="w-12 h-12 text-white/80" />
                </div>
                {project.status === 'in-progress' && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                      In Progress
                    </span>
                  </div>
                )}
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern
                        id={`grid-${project.id}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 20 0 L 0 0 0 20"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.5"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${project.id})`} />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-custom text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium"
                    >
                      <Layers className="w-3 h-3" />
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 rounded bg-gray-100 text-gray-600 text-xs font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-custom hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Dialog */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div
                  className={`h-32 -mx-6 -mt-6 mb-6 bg-gradient-to-r ${selectedProject.color} relative overflow-hidden rounded-t-lg`}
                >
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <selectedProject.icon className="w-16 h-16 text-white/80" />
                  </div>
                  {selectedProject.status === 'in-progress' && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
                <DialogTitle className="font-display text-2xl font-bold text-dark">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-dark mb-2">About</h4>
                  <p className="text-gray-custom leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        <Database className="w-4 h-4" />
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() =>
                        window.open(selectedProject.githubUrl, '_blank')
                      }
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {selectedProject.liveUrl && (
                    <Button
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() =>
                        window.open(selectedProject.liveUrl, '_blank')
                      }
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
