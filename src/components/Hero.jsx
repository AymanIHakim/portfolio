import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="flex flex-col items-center text-center">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-accent mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4"
          >
            Ayman Ibne Hakim
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-semibold text-zinc-500 mb-8"
          >
            I build things for the{' '}
            <span className="gradient-text">web & mobile</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl font-body text-lg text-zinc-400 mb-12"
          >
            Full-stack developer and machine learning enthusiast based in Dhaka, Bangladesh. 
            Currently leading development at{' '}
            <a href="#" className="text-accent hover:underline">Cleverlyy</a>, 
            building innovative edtech solutions backed by NVIDIA Inception Program.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-xl bg-accent px-8 py-4 font-body font-medium text-midnight transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-accent-glow opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-zinc-700 px-8 py-4 font-body font-medium text-white transition-all hover:border-accent hover:text-accent"
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/AymanIHakim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/ayman-ibne-hakim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aymanibnehakim@gmail.com"
              className="text-zinc-500 hover:text-accent transition-colors hover:-translate-y-1 transform duration-200"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-zinc-500 hover:text-accent transition-colors"
        >
          <span className="font-mono text-xs">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

