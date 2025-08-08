import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Code, text: '3+ Years Experience' },
    { icon: Coffee, text: '50+ Projects Completed' },
    { icon: Lightbulb, text: 'Always Learning' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know more about who I am, what I do, and what skills I have
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="Profile"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary">
              Frontend Developer based in San Francisco
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate Frontend Developer with 3+ years of experience creating
              digital experiences that are not only visually appealing but also highly
              functional and user-friendly. I specialize in React, JavaScript, and
              modern web technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good cup of coffee
              while brainstorming the next big idea.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center p-4 glass-effect rounded-lg"
                >
                  <item.icon className="mx-auto mb-2 text-secondary" size={32} />
                  <p className="text-sm font-medium">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="/resume.pdf"
              download
              className="btn-primary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;