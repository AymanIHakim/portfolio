import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const featuredProjects = [
    {
      title: 'Medease',
      description:
        'A healthcare application enhancing data security and operational efficiency using blockchain technology. Patients have total control of their medical records with permission-based file management.',
      longDescription: [
        'Implemented permission-based file management with IPFS for decentralized storage',
        'Utilized Hyperledger Fabric blockchain for immutable record management',
        'Designed user-friendly appointment booking system linked with healthcare providers',
      ],
      technologies: ['Next.js', 'Tailwind CSS', 'Node.js', 'MySQL', 'IPFS', 'Hyperledger Fabric'],
      github: 'https://github.com/AymanIHakim/MedEase_CSE499_SeniorDesign',
      // live: '#',
      image: '/medease.png',
      color: '#00d4aa',
    },
    {
      title: 'Churn Prediction Model',
      description:
        'Machine learning model for predicting customer churn using ensemble methods, achieving an AUC of 0.86 with Gradient Boost.',
      longDescription: [
        'Managed dataset of 10,000 entries with One-Hot-Encoding and SMOTE preprocessing',
        'Applied Random Forest, XGBoost, SVM, and Gradient Boost algorithms',
        'Used GridSearchCV for hyperparameter tuning, achieving F1 Score up to 0.61',
      ],
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
      github: '#',
      color: '#ff6b4a',
    },
    {
      title: 'NSU Cafeteria',
      description:
        'Dynamic food ordering web application with online ordering, queue management, and real-time notifications for seamless pickup experience.',
      longDescription: [
        'Implemented live search using AJAX and jQuery',
        'Built push notification system using Service Worker',
        'Optimized operational efficiency with streamlined ordering system',
      ],
      technologies: ['HTML', 'Tailwind CSS', 'PHP', 'MySQL', 'jQuery', 'AJAX'],
      github: 'https://github.com/zahirulnahid/CSE-482-Online-Canteen-Order-and-Queue-System',
      color: '#ffd700',
    },
  ];

  return (
    <section id="projects" className="py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-16">
            Featured Projects
          </h2>

          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative glass rounded-2xl overflow-hidden card-hover"
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at ${
                      hoveredIndex === index ? '50% 50%' : '100% 100%'
                    }, ${project.color}15, transparent 40%)`,
                  }}
                />

                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      {/* Project number */}
                      <span
                        className="font-mono text-sm mb-4 block"
                        style={{ color: project.color }}
                      >
                        Featured Project
                      </span>

                      {/* Title */}
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-3">
                        <Folder style={{ color: project.color }} size={28} />
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="font-body text-zinc-400 mb-6 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2 mb-6">
                        {project.longDescription.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="mt-2 h-1.5 w-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: project.color }}
                            />
                            <span className="font-body text-sm text-zinc-500">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full text-sm font-mono"
                            style={{
                              backgroundColor: `${project.color}15`,
                              color: project.color,
                              border: `1px solid ${project.color}30`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                          >
                            <Github size={20} />
                            <span className="font-mono text-sm">Code</span>
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={20} />
                            <span className="font-mono text-sm">Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

