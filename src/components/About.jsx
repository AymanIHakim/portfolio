import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = [
    {
      school: 'North South University',
      degree: 'B.Sc. in Computer Science & Engineering',
      grade: 'CGPA: 3.52',
      year: 'June 2024',
      icon: GraduationCap,
    },
    {
      school: 'British Council',
      degree: 'A Level',
      grade: '2A 1B',
      year: 'June 2019',
      icon: Award,
    },
    {
      school: 'Mastermind School',
      degree: 'IGCSE',
      grade: '4A* 4A',
      year: 'June 2017',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-3xl md:text-4xl text-white mb-16">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bio with Photo */}
            <div className="space-y-8">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative w-64 h-64 mx-auto lg:mx-0"
              >
                {/* Decorative border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent via-accent/50 to-transparent rotate-6 blur-sm" />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/50 to-transparent -rotate-3" />
                
                {/* Image container */}
                <div className="relative h-full w-full rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl shadow-accent/10">
                  <img
                    src="/portfolio/images/profile.jpeg"
                    alt="Ayman Ibne Hakim"
                    className="h-full w-full object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 to-transparent" />
                </div>
              </motion.div>

              {/* Bio text */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-body text-lg text-zinc-400 leading-relaxed"
                >
                  I'm a passionate software developer with a strong foundation in 
                  full-stack development and machine learning. My journey in tech 
                  began with a curiosity about how things work, which led me to 
                  pursue a degree in Computer Science.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-body text-lg text-zinc-400 leading-relaxed"
                >
                  Currently, I'm leading development at <span className="text-accent">Cleverlyy</span>, 
                  an edtech startup that secured a <span className="text-white">SGD 10,000 grant</span> from 
                  NTUitive and was accepted into the <span className="text-white">NVIDIA Inception Program</span>. 
                  I work across the entire stack — from React Native mobile apps to cloud infrastructure.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="font-body text-lg text-zinc-400 leading-relaxed"
                >
                  When I'm not coding, you'll find me gaming, hitting the gym, 
                  or clearing my head on long walks.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-center gap-2 text-zinc-500"
                >
                  <MapPin size={18} className="text-accent" />
                  <span className="font-body">Dhaka, Bangladesh</span>
                </motion.div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-display text-xl font-semibold text-white mb-8">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="glass rounded-xl p-6 card-hover"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <edu.icon className="text-accent" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-display font-semibold text-white">
                            {edu.school}
                          </h4>
                          <span className="font-mono text-sm text-accent">
                            {edu.year}
                          </span>
                        </div>
                        <p className="font-body text-zinc-400 mb-1">{edu.degree}</p>
                        <p className="font-mono text-sm text-zinc-500">{edu.grade}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
