import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ExternalLink, Users } from 'lucide-react';

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const publications = [
    {
      title:
        'Investigating the Factors Affecting Risky Levels of Alcohol Consumption among Students Using Machine Learning Approach',
      conference: 'ACMLC 2024',
      date: 'July 2024',
      doi: '10.1145/3690771.3690777',
      role: 'Co-Author',
      description:
        'This study utilizes ML algorithms to identify key factors influencing alcohol consumption among students from a dataset of a Portuguese school. We employed Decision Trees, Random Forest, and Ensemble Learning, achieving an accuracy of 80.9% on the test set.',
      highlights: [
        'Applied XAI techniques (LIME, SHAP) to enhance model transparency',
        'Achieved 80.9% accuracy using ensemble learning methods',
        'Presented findings at ACMLC 2024 conference',
      ],
    },
  ];

  return (
    <section className="py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-16">
            Publications
          </h2>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass rounded-2xl p-8 card-hover"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex-shrink-0">
                    <FileText className="text-accent" size={32} />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono">
                        {pub.conference}
                      </span>
                      <span className="text-zinc-500 text-sm font-mono">
                        {pub.date}
                      </span>
                      <span className="flex items-center gap-1 text-zinc-500 text-sm">
                        <Users size={14} />
                        {pub.role}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">
                      {pub.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-zinc-400 mb-4 leading-relaxed">
                      {pub.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {pub.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                          <span className="font-body text-sm text-zinc-500">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* DOI Link */}
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors group"
                    >
                      <span className="font-mono text-sm">DOI: {pub.doi}</span>
                      <ExternalLink
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </a>
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

export default Publications;

