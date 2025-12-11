import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Layers, 
  Cloud, 
  Smartphone, 
  Database, 
  CreditCard, 
  Brain, 
  TestTube,
  Globe
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code2,
      skills: ['Java', 'C', 'C++', 'Python', 'JavaScript', 'PHP', 'SQL', 'HTML', 'CSS'],
      color: '#00d4aa',
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['ReactJS', 'React Native', 'Expo', 'Node.js', 'Spring Boot'],
      color: '#ff6b4a',
    },
    {
      title: 'State Management',
      icon: Layers,
      skills: ['Redux', 'Context API'],
      color: '#a855f7',
    },
    {
      title: 'Cloud',
      icon: Cloud,
      skills: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Vercel'],
      color: '#3b82f6',
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      skills: ['React Native', 'Expo Dev Client', 'In-App Purchases'],
      color: '#10b981',
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL'],
      color: '#f59e0b',
    },
    {
      title: 'Payment',
      icon: CreditCard,
      skills: ['Stripe','SSLCommerz', 'Subscription Models', 'Payment Gateway Integration'],
      color: '#ef4444',
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      skills: ['scikit-learn', 'XGBoost', 'Pandas', 'NumPy'],
      color: '#8b5cf6',
    },
    {
      title: 'Testing',
      icon: TestTube,
      skills: ['Selenium'],
      color: '#06b6d4',
    },
    {
      title: 'Languages',
      icon: Globe,
      skills: ['English', 'Bangla', 'Hindi'],
      color: '#ec4899',
    },
  ];

  return (
    <section id="skills" className="py-32 bg-obsidian/50" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-16">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="glass rounded-xl p-6 card-hover group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <category.icon
                      size={20}
                      style={{ color: category.color }}
                    />
                  </div>
                  <h3 className="font-display font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg text-sm font-body transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: `${category.color}10`,
                        color: category.color,
                        border: `1px solid ${category.color}20`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Relevant Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16"
          >
            <h3 className="font-display text-xl font-semibold text-white mb-6">
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Data Structures & Algorithms',
                'Design & Analysis of Algorithms',
                'Software Engineering',
                'Software System Architecture',
                'Software Quality Assurance & Testing',
                'Machine Learning',
                'Internet & Web Technology',
                'Operating Systems',
                'Computer Organization & Architecture',
              ].map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 rounded-full text-sm font-body text-zinc-400 bg-zinc-800/50 border border-zinc-700/50 hover:border-accent/50 hover:text-accent transition-all duration-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

