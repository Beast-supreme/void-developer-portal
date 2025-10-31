import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Code, Award, Star } from 'lucide-react';

export const Achievements = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const achievements = [
    {
      icon: Code,
      title: 'Competitive Programming',
      description: 'CodeChef 3★ (max 1712) • Codeforces Pupil (max 1322) • LeetCode 1727 rating, 1000+ problems solved',
      color: 'from-primary to-primary/50',
    },
    {
      icon: Award,
      title: '₹25K Seed Grant',
      description: 'Awarded ₹25K seed grant by NITRRIFIE for pet-health startup',
      color: 'from-accent to-accent/50',
    },
    {
      icon: Trophy,
      title: 'Hackathon Achievements',
      description: 'Finalist at RoboRithm (NIT Raipur) & TOP 25 at 0 to 1 Hackathon, IIT Delhi',
      color: 'from-secondary to-secondary/50',
    },
    {
      icon: Star,
      title: 'Case Ops 3.0 Winner',
      description: 'Winner of Case Ops 3.0, NIT Raipur',
      color: 'from-primary via-accent to-secondary',
    },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Recognition and milestones
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card/30 backdrop-blur-md border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color} mb-4`}>
                <achievement.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
