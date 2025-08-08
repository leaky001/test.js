import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex.johnson@example.com', label: 'Email' },
  ];

  return (
    <footer className="bg-slate-900/80 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold gradient-text mb-2">Alex Johnson</h3>
            <p className="text-gray-400">Frontend Developer & UI/UX Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.button
            onClick={scrollToTop}
            className="bg-secondary/20 hover:bg-secondary/30 p-3 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ArrowUp className="text-secondary" size={20} />
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;