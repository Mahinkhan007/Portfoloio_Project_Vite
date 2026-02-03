import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Award, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  verifyUrl: string;
  color: string;
  icon: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google & Coursera',
    date: 'June 2025',
    description:
      'Completed 8 comprehensive courses covering the entire data analysis process. Gained hands-on experience with spreadsheets, SQL, Tableau, and R programming. Developed skills in data preparation, processing, analysis, and visualization.',
    skills: ['SQL', 'Tableau', 'R Programming', 'Data Visualization', 'Spreadsheets'],
    verifyUrl: 'https://coursera.org/verify/professional-cert/XW38A2BQ4QL5',
    color: 'from-blue-500 to-blue-600',
    icon: '📊',
  },
  {
    id: 2,
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan',
    date: 'March 2025',
    description:
      'Mastered fundamental programming concepts including data structures, networked application program interfaces, and databases using Python. Completed a capstone project involving data retrieval, processing, and visualization.',
    skills: ['Python', 'Data Structures', 'Web APIs', 'Databases', 'Data Visualization'],
    verifyUrl: 'https://coursera.org/verify/specialization/P2YDFB2ZMUCM',
    color: 'from-yellow-500 to-amber-600',
    icon: '🐍',
  },
  {
    id: 3,
    title: 'Microsoft Azure Data Fundamentals (DP-900)',
    issuer: 'Microsoft',
    date: 'October 2025',
    description:
      'Earned certification in Azure Data Fundamentals, demonstrating foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.',
    skills: ['Azure', 'Cloud Data', 'SQL', 'NoSQL', 'Data Analytics'],
    verifyUrl:
      'https://learn.microsoft.com/en-us/users/abdullaalmahinkhan-2907/credentials/certification/azure-data-fundamentals',
    color: 'from-blue-600 to-indigo-700',
    icon: '☁️',
  },
  {
    id: 4,
    title: 'The Complete Flutter Development Bootcamp',
    issuer: 'Udemy',
    date: '2024',
    description:
      'Comprehensive training in Flutter framework and Dart programming. Built multiple cross-platform mobile applications with modern UI/UX principles and state management.',
    skills: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX', 'Firebase'],
    verifyUrl: '#',
    color: 'from-cyan-500 to-blue-500',
    icon: '📱',
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Cards stagger animation
      const cardsTrigger = ScrollTrigger.create({
        trigger: cardsRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current?.querySelectorAll('.cert-card') || [],
            { opacity: 0, y: 60, scale: 0.95 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.15,
              ease: 'power3.out',
            }
          );
        },
        once: true,
      });
      triggers.push(cardsTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="relative w-full py-20 lg:py-32 bg-light overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Award className="w-4 h-4 inline mr-2" />
            Certifications
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Professional Credentials
          </h2>
          <p className="text-gray-custom max-w-2xl mx-auto">
            Industry-recognized certifications that validate my expertise in data
            analytics, programming, and cloud technologies.
          </p>
        </div>

        {/* Certificates Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="cert-card group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Color header */}
              <div
                className={`h-24 bg-gradient-to-r ${cert.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white/10" />
                <div className="absolute top-4 right-4 text-5xl opacity-30">
                  {cert.icon}
                </div>
                <div className="absolute bottom-4 left-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-medium backdrop-blur-sm">
                    <Calendar className="w-3 h-3" />
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-dark group-hover:text-primary transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-custom">
                      <Building2 className="w-4 h-4" />
                      {cert.issuer}
                    </div>
                  </div>
                </div>

                <p className="text-gray-custom text-sm line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2.5 py-1 rounded-md bg-gray-100 text-gray-600 text-xs font-medium">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-lg">
                    <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Detail Dialog */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCert && (
            <>
              <DialogHeader>
                <div
                  className={`h-32 -mx-6 -mt-6 mb-6 bg-gradient-to-r ${selectedCert.color} relative overflow-hidden rounded-t-lg`}
                >
                  <div className="absolute inset-0 bg-white/10" />
                  <div className="absolute top-6 right-6 text-7xl opacity-30">
                    {selectedCert.icon}
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                      <Calendar className="w-4 h-4" />
                      {selectedCert.date}
                    </span>
                  </div>
                </div>
                <DialogTitle className="font-display text-2xl font-bold text-dark">
                  {selectedCert.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-gray-custom">
                  <Building2 className="w-5 h-5" />
                  <span className="font-medium">{selectedCert.issuer}</span>
                </div>

                <div>
                  <h4 className="font-semibold text-dark mb-2">Description</h4>
                  <p className="text-gray-custom leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-dark mb-3">Skills Acquired</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() =>
                    window.open(selectedCert.verifyUrl, '_blank')
                  }
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
