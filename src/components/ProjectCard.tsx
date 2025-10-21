import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  delay: number;
}

const ProjectCard = ({ title, description, tech, delay }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="glass-card p-6 rounded-2xl hover-lift group"
    >
      <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center">
        <div className="text-6xl group-hover:scale-110 transition-transform">🚀</div>
      </div>
      
      <h3 className="text-2xl font-bold text-gradient mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
            {t}
          </span>
        ))}
      </div>
      
      <div className="flex gap-2">
        <Button variant="default" size="sm" className="gap-2">
          <Github className="w-4 h-4" />
          Code
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <ExternalLink className="w-4 h-4" />
          Demo
        </Button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
