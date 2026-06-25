'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Github, Linkedin, Instagram } from '@/components/ui/BrandIcons';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import emailjs from '@emailjs/browser';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'ajayrenjith.work@gmail.com', href: 'mailto:ajayrenjith.work@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 9633175758', href: 'tel:+919633175758' },
  { icon: MapPin, label: 'Location', value: 'Kochi, Kerala, India', href: '#' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/ajaycodesx', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/ajay-renjith', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/_aj_aii._', label: 'Instagram' },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const serviceId = 'service_8vdicct';
      const templateId = 'template_yy7qhhq';
      const publicKey = '1_5cVOMpSJgT_vbXI';

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        Message: formData.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <Section id="contact">
      <SectionHeader
        subtitle="Get In Touch"
        title="Contact Me"
        description="Have a project in mind? Let's talk! I'm always open to discussing new opportunities."
      />

      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left — Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white text-center lg:text-left mb-4">Let&apos;s work together</h3>
          <p className="text-gray-400 leading-relaxed text-center lg:text-left mb-10 max-w-lg mx-auto lg:mx-0">
            Whether you need a full-stack application, a polished frontend, or just want to say hello —
            my inbox is always open. I&apos;ll get back to you within 24 hours.
          </p>

          <div className="space-y-6 mb-10 flex flex-col items-center lg:items-start">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-300">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <p className="text-gray-500 text-sm">{label}</p>
                  <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur" />
            <form
              onSubmit={handleSubmit}
              className="relative p-5 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {(['name', 'email'] as const).map((field) => (
                  <div key={field}>
                    <label className="block text-gray-400 text-sm mb-2 capitalize">{field}</label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      placeholder={field === 'email' ? 'you@example.com' : 'Ajay Renjith'}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/60 focus:bg-white/10 transition-all resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="w-full justify-center"
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'sent' ? (
                  <>Message Sent! ✓</>
                ) : status === 'error' ? (
                  <>Error Occurred! ✗</>
                ) : (
                  <><Send className="mr-2 w-4 h-4" /> Send Message</>
                )}
              </Button>
              {status === 'sent' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center"
                >
                  Thank you! I&apos;ll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center"
                >
                  Oops! Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
