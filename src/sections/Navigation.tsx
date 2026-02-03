import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-lg shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Hexagon background */}
                <svg 
                  viewBox="0 0 40 40" 
                  className="absolute inset-0 w-full h-full"
                >
                  <polygon
                    points="20,2 36,11 36,29 20,38 4,29 4,11"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary transition-all duration-300 group-hover:fill-primary/10"
                  />
                </svg>
                {/* MK text */}
                <span className="font-display text-sm font-bold text-dark relative z-10">
                  MK
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Hire Me
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-dark" />
              ) : (
                <Menu className="w-6 h-6 text-dark" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-80 max-w-full h-full bg-white shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 text-lg font-medium text-dark hover:text-primary transition-colors border-b border-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <Button
              className="w-full mt-8 bg-primary hover:bg-primary/90 text-white rounded-xl py-6"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
