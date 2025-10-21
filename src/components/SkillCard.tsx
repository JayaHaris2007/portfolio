import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  delay: number;
}

const SkillCard = ({ name, icon: Icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -5, 5, 0],
        transition: { duration: 0.3 }
      }}
      className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 hover-lift group"
    >
      <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.8)] transition-all" />
      </div>
      <span className="text-foreground font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
