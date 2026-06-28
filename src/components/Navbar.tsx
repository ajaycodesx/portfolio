'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail } from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/BrandIcons';
import { socialLinks } from '@/data/social';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'backdrop-blur-xl border-b border-white/10'
            : ''
        }`}
        style={{ backgroundColor: isScrolled ? 'rgba(10, 10, 15, 0.8)' : 'transparent' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-0">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              Ajay.dev
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`relative text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon === 'Github' ? Github : 
                             social.icon === 'Linkedin' ? Linkedin :
                             social.icon === 'Instagram' ? Instagram : Mail;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Icon size={18} />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-gray-300 hover:text-white relative z-50"
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full-Screen Mobile Menu Overlay — rendered outside nav to avoid stacking context issues */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] lg:hidden flex flex-col overflow-hidden"
            style={{ backgroundColor: '#0a0a0f' }}
          >
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute top-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3), transparent 70%)' }}
              />
              <div
                className="absolute bottom-[-15%] left-[-15%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-20"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)' }}
              />
              {/* Subtle grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '60px 60px',
                }}
              />
            </div>

            {/* Top bar with logo and close */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative z-10 flex items-center justify-between px-6 pt-5 pb-4"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Ajay.dev
              </span>
              <motion.button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={20} />
              </motion.button>
            </motion.div>

            {/* Gradient divider */}
            <div className="relative z-10 mx-6">
              <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), rgba(139,92,246,0.5), transparent)' }} />
            </div>

            {/* Navigation Links — centered vertically */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-8 gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ x: -40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 40, opacity: 0 }}
                  transition={{ delay: 0.15 + index * 0.06, duration: 0.4, ease: 'easeOut' }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="group flex items-center gap-4 py-3"
                >
                  {/* Numbered index */}
                  <span className="text-xs font-mono text-gray-600 group-hover:text-blue-500 transition-colors w-6 text-right">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {/* Accent dot */}
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                        : 'bg-white/15 group-hover:bg-purple-400'
                    }`}
                  />
                  {/* Link text */}
                  <span
                    className={`text-2xl font-semibold tracking-tight transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? 'text-white'
                        : 'text-gray-500 group-hover:text-white group-hover:translate-x-1'
                    }`}
                  >
                    {item.name}
                  </span>
                  {/* Active indicator line */}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="mobileActiveLink"
                      className="h-px flex-1 ml-3"
                      style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.6), transparent)' }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Bottom section — social icons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="relative z-10 px-6 pb-8"
            >
              {/* Gradient divider */}
              <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), rgba(59,130,246,0.4), transparent)' }} />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  {socialLinks.map((social) => {
                    const Icon = social.icon === 'Github' ? Github : 
                                 social.icon === 'Linkedin' ? Linkedin :
                                 social.icon === 'Instagram' ? Instagram : Mail;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-400 transition-colors"
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icon size={20} />
                        <span className="sr-only">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
                <span className="text-xs text-gray-600 font-mono">© 2024</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
