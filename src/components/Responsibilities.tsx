import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users } from 'lucide-react';

export const Responsibilities = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const positions = [
    {
      title: 'Executive',
      organization: 'Technocracy (Technical Committee)',
      location: 'NIT Raipur',
      period: 'Oct 2024 – Present',
      description: 'Managed shortlisting and technical evaluation for Vigyaan; handled 50+ submissions with comprehensive assessment.',
    },
    {
      title: 'Executive',
      organization: 'Innovation Cell',
      location: 'NIT Raipur',
      period: 'Sept 2024 – Jun 2025',
      description: 'Led monthly technical sessions and supported Avinya\'25 execution, fostering innovation among students.',
    },
  ];

  return (
    <section id="responsibilities" className="py-20 md:py-32 px-6 relative">
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
              Positions of Responsibility
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Contributing to technical communities
          </p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((position, index) => (
            <motion.div
              key={position.title + position.organization}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-xl">
                  <Users size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-primary mb-2">
                    <span className="font-semibold">{position.period}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-1">{position.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {position.organization} • {position.location}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {position.description}
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
