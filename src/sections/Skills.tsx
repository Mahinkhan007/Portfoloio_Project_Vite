import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    name: 'Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'C/C++', level: 85 },
      { name: 'SQL', level: 80 },
      { name: 'R', level: 70 },
      { name: 'JavaScript', level: 75 },
    ],
    color: 'bg-blue-500',
  },
  {
    name: 'IoT & Embedded',
    skills: [
      { name: 'Arduino', level: 95 },
      { name: 'ESP32', level: 90 },
      { name: 'Raspberry Pi', level: 85 },
      { name: 'MQTT', level: 80 },
      { name: 'IoT Protocols', level: 75 },
    ],
    color: 'bg-green-500',
  },
  {
    name: 'Data & ML',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'Pandas', level: 85 },
      { name: 'NumPy', level: 80 },
      { name: 'Scikit-learn', level: 70 },
      { name: 'Data Visualization', level: 85 },
    ],
    color: 'bg-purple-500',
  },
  {
    name: 'Tools & Platforms',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'AWS', level: 65 },
      { name: 'Tableau', level: 75 },
    ],
    color: 'bg-orange-500',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Categories stagger animation
      const catTrigger = ScrollTrigger.create({
        trigger: categoriesRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            categoriesRef.current?.querySelectorAll('.skill-category') || [],
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power3.out',
            }
          );

          // Animate progress bars
          gsap.fromTo(
            categoriesRef.current?.querySelectorAll('.progress-bar') || [],
            { width: '0%' },
            {
              width: (_i, target) => target.getAttribute('data-width') || '0%',
              duration: 1,
              stagger: 0.05,
              delay: 0.3,
              ease: 'power3.out',
            }
          );
        },
        once: true,
      });
      triggers.push(catTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-20 lg:py-32 bg-dark overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-noise opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            Technical Arsenal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built through academic excellence, professional
            experience, and continuous learning.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={categoriesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="skill-category bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-3 h-3 rounded-full ${category.color}`} />
                <h3 className="font-display text-lg font-semibold text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className={`progress-bar h-full rounded-full ${category.color} transition-all duration-1000`}
                        data-width={`${skill.level}%`}
                        style={{ width: '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="font-display text-lg font-semibold text-white text-center mb-6">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'React',
              'Node.js',
              'Flask',
              'REST APIs',
              'GraphQL',
              'MongoDB',
              'PostgreSQL',
              'Firebase',
              'Power BI',
              'MATLAB',
              'Circuit Design',
              'PCB Layout',
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
