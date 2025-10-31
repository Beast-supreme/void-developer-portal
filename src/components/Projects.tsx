import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Calendar } from 'lucide-react';
import { Button } from './ui/button';

export const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Hireable — Job Portal',
      date: 'April 2025',
      description: 'Responsive job portal with modular React + TypeScript architecture',
      highlights: [
        'Built responsive job portal with modular architecture',
        'Implemented search & filter with optimized performance',
        'Created forms with validation using react-hook-form + Zod',
        'Deployed on Vercel with CI/CD pipeline',
      ],
      tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Vercel'],
      link: '#',
    },
    {
      title: 'Smart-Scan — Object Detection + OCR',
      date: 'October 2024',
      description: 'Flask object-detection system with YOLO and EasyOCR integration',
      highlights: [
        'Built Flask system using YOLO for fruit detection',
        'Integrated EasyOCR for text extraction',
        'Collected and annotated 3000+ images',
        'Trained models on Roboflow and Google Colab',
      ],
      tech: ['Python', 'Flask', 'YOLO', 'EasyOCR', 'Roboflow'],
      link: '#',
    },
    {
      title: 'Farm-Guru — AI Agricultural Assistant',
      date: 'July 2025',
      description: 'Frontend integrating weather, crop health and market APIs',
      highlights: [
        'Developed responsive frontend with multiple API integrations',
        'Implemented multilingual UI with voice input',
        'Created dynamic dashboards for data visualization',
        'Deployed on Vercel with optimized performance',
      ],
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      link: '#',
    },
    {
      title: 'DiagnoseAI — Medical Chatbot',
      date: 'June 2025',
      description: 'AI chatbot for disease prediction using NLP',
      highlights: [
        'Developed chatbot for disease prediction',
        'Implemented symptom classification with PyTorch',
        'Built Flask backend with PDF generation',
        'Integrated NLP for symptom analysis',
      ],
      tech: ['Python', 'Flask', 'PyTorch', 'scikit-learn', 'NLTK'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Building solutions that make an impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card/30 backdrop-blur-md border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={16} />
                  {project.date}
                </div>
              </div>

              <p className="text-muted-foreground mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">▹</span>
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-muted/50 backdrop-blur-sm border border-border rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-border hover:border-primary hover:bg-primary/10 transition-all group/btn"
              >
                View Project
                <ExternalLink className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
