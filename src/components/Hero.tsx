'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/BrandIcons';
import Button from './ui/Button';
import { socialLinks } from '@/data/social';
import Hero3D from './Hero3D';

const roles = [
  'Lead Developer',
  'Backend Architect',
  'React & Next.js Expert',
  'Django REST Specialist',
  'Python FastAPI Expert',
  'Engineering Team Leader',
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentText = roles[currentRole];
      
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-0 h-auto md:min-h-[calc(100vh-4rem)] flex items-center justify-center pt-20 sm:pt-24 md:pt-28 pb-2 md:pb-12 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="py-1 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-2 sm:mb-4 tracking-tight leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="block sm:inline-block lg:block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                Ajay Renjith
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="py-1 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-300 mb-2 sm:mb-4"
            >
              Senior Stack Engineer
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-base font-medium mb-4 sm:mb-8 shadow-sm backdrop-blur-sm"
            >
              <span>{displayText}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-3.5 sm:h-5 bg-blue-400 ml-1.5"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="py-2 text-gray-300/90 text-xs sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl leading-relaxed mx-auto lg:mx-0"
            >
              I build scalable web applications, CMS platforms, and business automation systems using modern frameworks like Django, React, and Next.js. I specialize in backend architecture, API development, and deploying production-ready systems on VPS and cloud infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-10 w-full max-w-sm lg:max-w-none"
            >
              <Button
                size="md"
                className="w-full sm:w-auto px-6 py-3 justify-center shadow-lg shadow-blue-500/25"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <div className="grid grid-cols-2 gap-3 w-full sm:w-auto">
                <Button
                  size="md"
                  variant="outline"
                  className="w-full sm:w-auto px-5 py-3 justify-center"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </Button>
                <Button
                  size="md"
                  variant="secondary"
                  className="w-full sm:w-auto px-5 py-3 justify-center"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon === 'Github' ? Github : 
                           social.icon === 'Linkedin' ? Linkedin : Mail;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-sm"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D React Logo Scene (DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative w-full h-[500px] mt-0"
          >
            <Hero3D />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-blue-400"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
