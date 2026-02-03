import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([headlineRef.current, subheadlineRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.9,
        clipPath: 'circle(0% at 50% 50%)',
      });
      gsap.set(badgeRef.current, {
        opacity: 0,
        scale: 0.8,
      });

      // Animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        clipPath: 'circle(100% at 50% 50%)',
        duration: 1.2,
        ease: 'power3.out',
      })
        .to(
          headlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.6'
        )
        .to(
          subheadlineRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
          },
          '-=0.4'
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        )
        .to(
          badgeRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          '-=0.2'
        );

      // Floating animation for badge
      gsap.to(badgeRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen w-full overflow-hidden bg-light"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="#242424"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-20 lg:py-0">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Available for collaborations
              </div>

              <h1
                ref={headlineRef}
                className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-tight"
              >
                Electronics
                <span className="block text-gradient">Engineer</span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-custom mt-2">
                  & Data Scientist
                </span>
              </h1>

              <p
                ref={subheadlineRef}
                className="text-base sm:text-lg text-gray-custom max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Transforming complex hardware systems into intelligent data
                solutions. Specializing in IoT, Embedded Systems, and Predictive
                Analytics.
              </p>

              <div
                ref={ctaRef}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  onClick={scrollToProjects}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-glow hover:shadow-glow-lg transition-all duration-300 group"
                >
                  View My Projects
                  <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-dark text-dark hover:bg-dark hover:text-white px-8 py-6 text-base font-semibold rounded-xl transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Get in Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="https://github.com/Mahinkhan007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulla-al-mahin-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mahinkhan.007@gmail.com"
                  className="w-10 h-10 rounded-full bg-dark/5 hover:bg-primary hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 relative">
            <div
              ref={imageRef}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/profile.png"
                alt="Abdulla Al Mahin Khan - Working at desk"
                className="w-full h-auto object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div
              ref={badgeRef}
              className="absolute -bottom-4 -left-4 lg:bottom-8 lg:-left-8 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">
                    Graduate Research
                  </p>
                  <p className="text-xs text-gray-custom">Assistant @ MMU</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-gray-custom">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
