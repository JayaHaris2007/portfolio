import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Code2, Database, Palette, Cpu, Rocket, 
  Github, Linkedin, Youtube, Mail, ChevronDown,
  FileCode, Layers, Terminal, Sparkles, CheckCircle, AlertCircle
} from 'lucide-react';
// Background3D removed per user request
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import profileImage from '@/assets/jaya-haris-portrait.png';
import { useForm, ValidationError } from '@formspree/react';

const Index = () => {
  const { toast } = useToast();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [state, handleSubmit] = useForm("xeorbgvy");
  
  // Use useEffect to handle form submission success
  useEffect(() => {
    if (state.succeeded && formStatus !== 'success') {
      setFormStatus('success');
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form status after 3 seconds
      const timer = setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
      
      // Clean up timer
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, formStatus, toast]);

  const skills = [
    { name: 'React.js', icon: Code2 },
    { name: 'Node.js', icon: Terminal },
    { name: 'Firebase', icon: Database },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Python', icon: FileCode },
  { name: 'AI Tools', icon: Cpu },
  { name: 'PHP', icon: FileCode },
  { name: 'API Integration', icon: Database },
  ];

  const projects = [
    {
      title: 'Noteflow',
      description: 'A modern notes sharing platform for students and educators with real-time collaboration.',
      tech: ['React', 'Firebase', 'Tailwind'],
    },
    {
      title: 'AIThinkr',
      description: 'AI-powered study assistant that helps students learn smarter with personalized insights.',
      tech: ['Python', 'AI', 'React'],
    },
    {
      title: 'Orbit',
      description: 'Intelligent voice assistant with natural language processing and task automation.',
      tech: ['Python', 'AI', 'Speech API'],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Background graphics removed per user request */}
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4 z-10 hero-section">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-7xl md:text-9xl font-black mb-6"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundImage: 'linear-gradient(90deg, hsl(263 70% 50.4%), hsl(189 94% 43%), hsl(326 78% 59%), hsl(263 70% 50.4%))',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Jaya Haris 👋
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-2 mb-8"
            >
              <p className="text-2xl md:text-3xl text-muted-foreground">
                Full-Stack Developer
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground flex items-center justify-center gap-3 flex-wrap">
                <span className="flex items-center gap-2">
                  <Cpu className="text-primary" />
                  AI Explorer
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <Sparkles className="text-secondary" />
                  Creative Coder
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Rocket className="w-5 h-5" />
                View Projects
              </Button>
              <Button variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10 about-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-8">About Me</h2>
            <div className="grid md:grid-cols-[1fr,320px] gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4">
                  I'm a Computer Science Engineering student at <span className="text-primary font-semibold">Sankara Polytechnic College</span>, passionate about crafting digital experiences that merge creativity with technology.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  From full‑stack web development to exploring the frontiers of AI, I love building intelligent applications that solve real‑world problems. When I'm not coding, you'll find me sketching new ideas or learning about the latest tech innovations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: true }}
                className="relative flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative group w-56 h-56 md:w-72 md:h-72"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative rounded-full p-[6px] bg-background/60 backdrop-blur-xl shadow-2xl overflow-hidden aspect-square">
                    <img
                      src={profileImage}
                      alt="Jaya Haris - Full-Stack Developer"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4 relative z-10 skills-section">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gradient text-center mb-16"
          >
            Tech Arsenal
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                icon={skill.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 relative z-10 projects-section">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gradient text-center mb-16"
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 relative z-10 contact-section">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gradient text-center mb-16"
          >
            Let's Connect
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input 
                  id="name"
                  name="name"
                  placeholder="Your name" 
                  className="bg-background/50" 
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-background/50" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Your message..." 
                  rows={6} 
                  className="bg-background/50" 
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 hover:scale-105 transition-transform"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </Button>
              
              {formStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md flex items-center gap-2 text-green-500">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}
              
              {state.errors && (
                <div className="mt-4 p-3 bg-red-500/20 border border-red-500/50 rounded-md flex items-center gap-2 text-red-500">
                  <AlertCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>

            <div className="flex justify-center gap-6 mt-12">
              <a href="#" className="p-4 rounded-full glass-card hover:scale-110 transition-transform">
                <Github className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-4 rounded-full glass-card hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-4 rounded-full glass-card hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-border/50 relative z-10">
        <p className="text-muted-foreground">
          © 2025 Jaya Haris • Built with React & Framer Motion
        </p>
      </footer>
    </div>
  );
};

export default Index;
