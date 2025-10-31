import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Wrench, Cloud, Heart } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      skills: ['C++', 'Python', 'JavaScript', 'TypeScript'],
      color: 'from-primary to-primary/50',
    },
    {
      icon: Wrench,
      title: 'Web Development',
      skills: ['React', 'Tailwind CSS', 'Vite', 'shadcn/ui', 'HTML5', 'CSS'],
      color: 'from-accent to-accent/50',
    },
    {
      icon: Cloud,
      title: 'Tools & Technologies',
      skills: ['PyTorch', 'scikit-learn', 'YOLO', 'OpenCV', 'EasyOCR', 'NLTK', 'Vercel', 'Postman'],
      color: 'from-secondary to-secondary/50',
    },
    {
      icon: Heart,
      title: 'Soft Skills',
      skills: ['Leadership', 'Team Management', 'Problem Solving', 'Project Management', 'Technical Mentoring'],
      color: 'from-primary via-accent to-secondary',
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 px-6 relative">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                <category.icon size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-muted/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary hover:bg-primary/10 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
