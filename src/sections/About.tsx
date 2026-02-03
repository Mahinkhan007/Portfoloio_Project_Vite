import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Award,
  BookOpen,
  Dumbbell,
  MapPin,
  Plane,
  Briefcase,
  Code,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "3.73", label: "CGPA", suffix: "/4.00", icon: Award },
  { value: "First", label: "Class Honors", suffix: "", icon: BookOpen },
  { value: "24+", label: "GitHub Projects", suffix: "", icon: Code },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Image reveal animation
      const imgTrigger = ScrollTrigger.create({
        trigger: imageRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            imageRef.current,
            { opacity: 0, rotateY: 15, scale: 0.9 },
            {
              opacity: 1,
              rotateY: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
            },
          );
        },
        once: true,
      });
      triggers.push(imgTrigger);

      // Content stagger animation
      const contentTrigger = ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            contentRef.current?.querySelectorAll(".animate-item") || [],
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.1,
              ease: "power3.out",
            },
          );
        },
        once: true,
      });
      triggers.push(contentTrigger);

      // Stats fan out animation
      const statsTrigger = ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.fromTo(
            statsRef.current?.querySelectorAll(".stat-card") || [],
            { opacity: 0, y: 50, rotation: -5 },
            {
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: "back.out(1.7)",
            },
          );
        },
        once: true,
      });
      triggers.push(statsTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full py-20 lg:py-32 bg-light overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
            The Story So Far
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div
            ref={imageRef}
            className="relative"
            style={{ perspective: "1000px" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/graduation.jpg"
                alt="Abdulla Al Mahin Khan - Graduation"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>

            {/* Floating decoration */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/30 rounded-full blur-2xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />

            {/* Brochure image overlay */}
            <div className="absolute -bottom-4 right-4 lg:bottom-8 lg:right-8 w-28 h-28 lg:w-36 lg:h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white transform rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
              <img
                src="/images/brochure.png"
                alt="MMU Brochure Feature"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="animate-item">
              <h3 className="font-display text-2xl lg:text-3xl font-bold text-dark mb-4">
                Software Developer &{" "}
                <span className="text-primary">Electronics Engineer</span>
              </h3>
            </div>

            <div className="animate-item">
              <p className="text-gray-custom leading-relaxed">
                I graduated with a CGPA of <strong>3.73/4.00</strong> (First
                Class Honors) in Electronics Engineering (Majoring in Computer)
                from Multimedia University Malaysia. My coursework included
                Semi-conductors, Micro-processors & Micro-controllers, Embedded
                IoT, and Software Engineering Principles. I have hands-on
                experience using Microsoft Azure for cloud-based data and
                analytics solutions, including Azure SQL Database, Azure Data
                Factory, and Power BI Service. I specialize in data modeling,
                semantic layer design, and building interactive dashboards that
                translate complex datasets into actionable insights. My work
                emphasizes scalable architecture, clean data models, and
                practical solutions aligned with real-world business use cases.
              </p>
            </div>

            {/* Experience Section */}
            <div className="animate-item bg-gray-50 rounded-xl p-5 border border-gray-100">
              <h4 className="font-display text-lg font-semibold text-dark mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-primary" />
                Experience
              </h4>
              <div className="space-y-5">
                <div className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <p className="font-medium text-dark mb-1">
                    Custom CRM Developer Intern
                  </p>
                  <p className="text-sm text-gray-custom leading-relaxed">
                    Analyzed e2p customer interaction data from CRM, helping
                    optimize onboarding strategies. Managed and developed
                    packages consisting of access roles, parameters, privileges
                    and deploying them for OCBC employees and account holders
                    using Pega. Designed data pipelines, performed ETL
                    processes, and conducted statistical analysis using Python
                    (Pandas, NumPy) and SQL to track customer engagement
                    metrics, leading to 10% improved retention strategies.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-dark mb-1">
                    Software Developer (Remote) - CodecsTasy
                  </p>
                  <p className="text-sm text-gray-custom leading-relaxed">
                    Developed and maintained responsive, user-friendly web
                    interfaces using React.js, enhancing the overall user
                    experience by 30%. Optimized web applications for maximum
                    speed and scalability, reducing page load times by 25%
                    through code optimization.
                  </p>
                </div>
              </div>
            </div>

            <div className="animate-item">
              <p className="text-gray-custom leading-relaxed">
                I'm passionate about{" "}
                <strong>Embedded IoT and Automation</strong>, building projects
                that bridge the physical and digital worlds. Currently working
                on the funded project{" "}
                <em className="text-primary font-medium">
                  "IoT-Assisted Smart Agriculture Plot Prototype with Integrated
                  Photovoltaic-Battery Renewable Energy System."
                </em>
              </p>
            </div>

            {/* Personal Interests */}
            <div className="animate-item pt-4">
              <h4 className="font-display text-lg font-semibold text-dark mb-3">
                Beyond Tech
              </h4>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm">
                  <Dumbbell className="w-4 h-4" />
                  Weightlifting
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm">
                  <span className="text-base">🏃</span>
                  Running
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm">
                  <Plane className="w-4 h-4" />
                  Traveling
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="animate-item flex items-center gap-2 text-gray-custom">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 lg:mt-24"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-3xl lg:text-4xl font-bold text-dark">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-lg text-gray-custom">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-gray-custom mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
