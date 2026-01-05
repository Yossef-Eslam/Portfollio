import { motion } from 'framer-motion';
import { Database, Shield, Code, Cpu, Globe, Lock } from 'lucide-react';

const skills = [
  {
    icon: Database,
    title: 'Databases',
    description: 'Expert in designing and managing various database systems for optimal performance',
    color: 'from-primary to-secondary',
  },
  {
    icon: Code,
    title: 'Programming',
    description: 'Developing web applications and diverse software solutions with modern technologies',
    color: 'from-primary via-accent to-secondary',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protecting systems and networks from electronic threats and vulnerabilities',
    color: 'from-secondary to-primary',
  },
];

const additionalSkills = [
  { icon: Cpu, label: 'System Architecture' },
  { icon: Globe, label: 'Network Security' },
  { icon: Lock, label: 'Data Protection' },
];

const aboutLines = [
  "I am passionate about technology and its potential to solve real-world problems.",
  "With years of experience in IT, I specialize in creating secure and efficient systems.",
  "I believe in continuous learning and staying updated with the latest industry trends.",
  "My goal is to build solutions that make a meaningful impact.",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gold-particles">
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20"
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-foreground">Who </span>
            <span className="text-gradient">I Am</span>
          </motion.h2>

          {/* Staggered about lines */}
          <div className="max-w-2xl mx-auto space-y-3">
            {aboutLines.map((line, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground text-lg leading-relaxed"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group bg-card rounded-2xl shadow-card p-8 text-center relative overflow-hidden border border-primary/10 gold-glow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <motion.div 
                className={`w-18 h-18 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-gold`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <skill.icon className="w-9 h-9 text-primary-foreground" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-playfair">{skill.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-card shadow-sm border border-primary/15 hover:border-primary/40 hover:shadow-gold transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <skill.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;