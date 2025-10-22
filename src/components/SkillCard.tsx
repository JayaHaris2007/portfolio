import { motion, type Variants } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  name: string;
  icon: LucideIcon;
  delay: number;
}

const iconVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.25, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
};

const SkillCard = ({ name, icon: Icon, delay }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card p-6 rounded-2xl flex flex-col items-center gap-3 group"
      style={{
        boxShadow: '0 6px 18px rgba(2,6,23,0.08)',
        transition: 'box-shadow 0.2s ease',
      }}
      onMouseEnter={(e) => {
        // slightly increase shadow on hover via inline style mutation
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = '0 12px 30px rgba(2,6,23,0.12)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = '0 6px 18px rgba(2,6,23,0.08)';
      }}
    >
      <motion.div
        className="p-4 rounded-xl bg-primary/10 transition-colors"
        variants={iconVariants}
        initial="rest"
        whileHover="hover"
      >
        <Icon className="w-8 h-8 text-primary transition-all" />
      </motion.div>
      <span className="text-foreground font-medium">{name}</span>
    </motion.div>
  );
};

export default SkillCard;
