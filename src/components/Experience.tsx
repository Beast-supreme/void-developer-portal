import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const experiences = [
    {
      role: 'Founder / Team Lead',
      company: 'ML Pet-Health Startup',
      location: 'NIT Raipur, India',
      period: '2024 – Present',
      description: 'Led product development for a smart collar with ML-based anomaly detection and mobile app integration. Awarded a ₹25K seed grant from NITRRIFIE; managed prototype, data collection and early deployment.',
    },
    {
      role: 'Technical Executive',
      company: 'Robotix Club',
      location: 'NIT Raipur, India',
      period: 'Sept 2023 – Present',
      description: 'Led robotics projects including surface cleaning bot, smart helmet, and obstacle-avoiding robot. Implemented A* pathfinding in Python simulator and mentored juniors on prototyping.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building innovative solutions and leading teams
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-background flex items-center justify-center">
                <Briefcase size={16} className="text-white" />
              </div>

              <div className="ml-16 md:ml-0 md:px-8">
                <div className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <span className="font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <p className="text-muted-foreground mb-4">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
