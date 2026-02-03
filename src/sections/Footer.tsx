import { Heart, ArrowUp } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-dark py-12 lg:py-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-noise opacity-5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo & Tagline */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
                  <polygon
                    points="20,2 36,11 36,29 20,38 4,29 4,11"
                    fill="none"
                    stroke="#0eafff"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-display text-sm font-bold text-white relative z-10">
                  MK
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white">
                Abdulla Al Mahin Khan
              </h3>
            </div>
            <p className="text-gray-400 text-sm">
              Electronics Engineer & Software Developer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-400 hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:bg-primary hover:text-white transition-all"
          >
            <ArrowUp className="w-4 h-4" />
            <span className="text-sm">Back to top</span>
          </button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/10" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> in
            Kuala Lumpur, Malaysia
          </p>
          <p>© {new Date().getFullYear()} Abdulla Al Mahin Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
