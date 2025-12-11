import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Globe } from 'lucide-react';

// Custom Apple icon
const AppleIcon = ({ size = 16, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// Custom Google Play icon
const PlayStoreIcon = ({ size = 16, className }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" className={className}>
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
  </svg>
);

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      company: 'Cleverlyy',
      role: 'Co-Founder & Lead Developer',
      period: 'June 2024 - Present',
      type: 'Full-time',
      description: 'Leading a team of 4 developers in building an innovative edtech platform.',
      links: [
        { label: 'Web App', url: 'https://app.cleverlyy.com', icon: Globe },
        { label: 'App Store', url: 'https://apps.apple.com/us/app/cleverlyy/id6741533181', icon: AppleIcon },
        // { label: 'Play Store', url: '#', icon: PlayStoreIcon, comingSoon: true },
      ],
      highlights: [
        'Secured SGD 10,000 grant from NTUitive\'s Multidisciplinary Team (MDT) Fund',
        'Accepted into NVIDIA Inception Program for growth and infrastructure support',
        'Led full-stack product development across backend, frontend, and database',
        'Developed React Native mobile app with Expo Dev Client',
        'Implemented Redux state management and SecureStore for secure data',
        'Integrated in-app purchases and third-party payment gateways',
        'Managed cloud infrastructure and CI/CD deployment pipelines',
        'Collaborated with UI/UX designers for user-centric design',
      ],
      technologies: ['React Native', 'Redux', 'Node.js', 'AWS', 'Expo'],
    },
  ];

  return (
    <section id="experience" className="py-32 bg-obsidian/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-16">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 hidden md:flex h-5 w-5 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-accent animate-glow" />
                  </div>

                  <div className="md:ml-20 glass rounded-2xl p-8 card-hover">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Briefcase className="text-accent" size={20} />
                          <h3 className="font-display text-2xl font-bold text-white">
                            {exp.role}
                          </h3>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="font-display text-lg text-accent">
                            {exp.company}
                          </span>
                          {exp.links && exp.links.map((link) => (
                            link.comingSoon ? (
                              <span
                                key={link.label}
                                className="relative flex items-center gap-1 text-zinc-600 cursor-not-allowed group"
                                title={`${link.label} - Coming Soon`}
                              >
                                <link.icon size={16} />
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-xs text-zinc-400 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                  Coming Soon
                                </span>
                              </span>
                            ) : (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-zinc-500 hover:text-accent transition-colors"
                                title={link.label}
                              >
                                <link.icon size={16} />
                              </a>
                            )
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-right">
                        <p className="font-mono text-sm text-accent">{exp.period}</p>
                        <p className="font-body text-sm text-zinc-500">{exp.type}</p>
                      </div>
                    </div>

                    <p className="font-body text-zinc-400 mb-6">{exp.description}</p>

                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="font-body text-zinc-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

