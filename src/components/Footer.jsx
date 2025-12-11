import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="font-display text-xl font-bold gradient-text">
              Ayman Ibne Hakim
            </span>
            <p className="font-body text-sm text-zinc-500">
              © {currentYear} All rights reserved.
            </p>
          </motion.div>

          {/* Built with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-zinc-500 text-sm"
          >
            <span className="font-body">Built with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span className="font-body">using</span>
            <span className="font-mono text-accent">React</span>
            <span className="font-body">&</span>
            <span className="font-mono text-accent">Tailwind</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/AymanIHakim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ayman-ibne-hakim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:aymanibnehakim@gmail.com"
              className="text-zinc-500 hover:text-accent transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

