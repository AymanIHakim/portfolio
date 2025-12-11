import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-midnight"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent/30"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent/50"
          style={{ width: 120, height: 120 }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        
        {/* Logo */}
        <motion.div
          className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-obsidian"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          <span className="font-display text-5xl font-bold gradient-text">A</span>
        </motion.div>
      </motion.div>
      
      {/* Loading text */}
      <motion.p
        className="absolute bottom-1/3 font-mono text-sm text-accent/70"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Initializing...
      </motion.p>
    </motion.div>
  );
};

export default Loader;

