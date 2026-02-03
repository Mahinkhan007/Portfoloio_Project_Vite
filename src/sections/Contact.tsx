import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Loader2,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      // Form animation
      const formTrigger = ScrollTrigger.create({
        trigger: formRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            formRef.current,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(formTrigger);

      // Info animation
      const infoTrigger = ScrollTrigger.create({
        trigger: infoRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(
            infoRef.current,
            { opacity: 0, x: 30 },
            { opacity: 1, x: 0, duration: 0.7, delay: 0.2, ease: 'power3.out' }
          );
        },
        once: true,
      });
      triggers.push(infoTrigger);
    }, sectionRef);

    return () => {
      triggers.forEach((t) => t.kill());
      ctx.revert();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-20 lg:py-32 bg-light overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Mail className="w-4 h-4 inline mr-2" />
            Get in Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-dark mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-custom max-w-2xl mx-auto">
            Have a project in mind? Let's build something amazing together. I'm
            always open to discussing new opportunities and collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-dark mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 hover:bg-green-500'
                    : 'bg-primary hover:bg-primary/90'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div ref={infoRef} className="space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-dark mb-4">
                Contact Information
              </h3>
              <p className="text-gray-custom">
                Feel free to reach out through any of these channels. I'm always
                excited to connect with fellow tech enthusiasts and potential
                collaborators.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Email</h4>
                  <a
                    href="mailto:mahinkhan.007@gmail.com"
                    className="text-gray-custom hover:text-primary transition-colors"
                  >
                    mahinkhan.007@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Location</h4>
                  <p className="text-gray-custom">Kuala Lumpur, Malaysia</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark">Availability</h4>
                  <p className="text-gray-custom">
                    Open for collaborations & opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-dark mb-4">Connect Online</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Mahinkhan007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-dark text-white hover:bg-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abdulla-al-mahin-khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#0077b5] text-white hover:bg-[#006396] transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
