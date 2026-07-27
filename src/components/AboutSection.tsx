import { motion } from 'framer-motion';
import { Shield, Code, Bot, Cpu, Globe, Lock } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Core Engineering',
    description: 'Architecting secure, scalable software systems, APIs, and high-performance web platforms.',
    color: 'from-primary to-secondary',
  },
  {
    icon: Shield,
    title: 'Offensive Security (OSCP)',
    description: 'OSCP-aligned penetration testing, red teaming, and hardening of production systems.',
    color: 'from-primary via-accent to-secondary',
  },
  {
    icon: Bot,
    title: 'AI & Business Automation',
    description: 'Engineering autonomous AI agents and workflow automation that protect revenue and scale operations.',
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
  "As a Software Engineer\u00a0 I specialize in creating secure and efficient systems.",
  "I believe in continuous learning and staying updated with the latest industry trends.",
  "My goal is to build solutions that make a meaningful impact.",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gold-particles">
        <div className="absolute top-40 left-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/3 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-secondary/3 rounded-full blur-[50px] sm:blur-[60px] md:blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/6 text-primary text-[10px] sm:text-xs md:text-sm font-medium mb-3 sm:mb-4 border border-primary/12"
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 font-playfair"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-foreground">Who </span>
            <span className="text-gradient">I Am</span>
          </motion.h2>

          {/* Staggered about lines */}
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto space-y-2 sm:space-y-3 px-1">
            {aboutLines.map((line, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.7, ease: "easeOut" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group bg-card/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-card p-5 sm:p-6 md:p-8 text-center relative overflow-hidden border border-primary/6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -4, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700`} />
              
              <motion.div 
                className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-gold`}
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <skill.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-2 sm:mb-3 font-playfair">{skill.title}</h3>
              <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        >
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-full bg-card/50 backdrop-blur-sm shadow-sm border border-primary/8 hover:border-primary/20 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <skill.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary/70" />
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-foreground/85">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
