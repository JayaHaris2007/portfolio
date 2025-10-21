import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Palette, Cpu, Rocket, 
  Github, Linkedin, Youtube, Mail, ChevronDown,
  FileCode, Layers, Terminal, Sparkles, Upload, X
} from 'lucide-react';
import Background3D from '@/components/Background3D';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [sketchImage, setSketchImage] = useState<string | null>(null);

  const handleSketchUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSketchImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const skills = [
    { name: 'React.js', icon: Code2 },
    { name: 'Node.js', icon: Terminal },
    { name: 'Firebase', icon: Database },
    { name: 'Tailwind CSS', icon: Palette },
    { name: 'Python', icon: FileCode },
    { name: 'Flutter', icon: Layers },
    { name: 'AI Tools', icon: Cpu },
    { name: 'Three.js', icon: Sparkles },
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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Background3D />
      
      {/* Floating Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-card px-6 py-3 rounded-full"
      >
        <div className="flex gap-6">
          {['About', 'Skills', 'Projects', 'Sketches', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
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
      <section id="about" className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl"
          >
            <h2 className="text-5xl font-bold text-gradient mb-8">About Me</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a Computer Science Engineering student at <span className="text-primary font-semibold">Sankara Polytechnic College</span>, 
              passionate about crafting digital experiences that merge creativity with technology. 
              From full-stack web development to exploring the frontiers of AI, I love building intelligent 
              applications that solve real-world problems. When I'm not coding, you'll find me sketching 
              new ideas or learning about the latest tech innovations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-4">
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
      <section id="projects" className="py-32 px-4">
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

      {/* Sketch Upload Section */}
      <section id="sketches" className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-gradient text-center mb-16"
          >
            My Sketches 🎨
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card p-12 rounded-3xl"
          >
            {!sketchImage ? (
              <label className="flex flex-col items-center justify-center min-h-[400px] cursor-pointer hover:scale-105 transition-transform">
                <Upload className="w-16 h-16 text-primary mb-4" />
                <p className="text-xl text-muted-foreground mb-2">Upload Your Sketch</p>
                <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSketchUpload}
                  className="hidden"
                />
              </label>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative"
              >
                <button
                  onClick={() => setSketchImage(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-destructive/90 hover:bg-destructive transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <img
                  src={sketchImage}
                  alt="Uploaded sketch"
                  className="w-full rounded-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px hsl(263 70% 50.4% / 0.3))',
                  }}
                />
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4">
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
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Your name" className="bg-background/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="your.email@example.com" className="bg-background/50" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">Message</label>
                <Textarea placeholder="Your message..." rows={6} className="bg-background/50" />
              </div>
              
              <Button size="lg" className="w-full gap-2 hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
                Send Message
              </Button>
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
      <footer className="py-12 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          © 2025 Jaya Haris • Built with React, Framer Motion & Three.js
        </p>
      </footer>
    </div>
  );
};

export default Index;
