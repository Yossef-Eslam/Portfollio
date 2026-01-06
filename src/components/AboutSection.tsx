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
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gold-particles">
        <div className="absolute top-40 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/3 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-20 right-0 w-56 sm:w-80 h-56 sm:h-80 bg-secondary/3 rounded-full blur-[60px] sm:blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/8 text-primary text-xs sm:text-sm font-medium mb-4 border border-primary/15"
          >
            About Me
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-foreground">Who </span>
            <span className="text-gradient">I Am</span>
          </motion.h2>

          {/* Staggered about lines */}
          <div className="max-w-xl sm:max-w-2xl mx-auto space-y-2 sm:space-y-3 px-2">
            {aboutLines.map((line, index) => (
              <motion.p
                key={index}
                className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.12, duration: 0.7, ease: "easeOut" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>

        {/* Skills Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl shadow-card p-6 sm:p-8 text-center relative overflow-hidden border border-primary/8"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`} />
              
              <motion.div 
                className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-5 sm:mb-6 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-gold`}
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <skill.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-foreground" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 font-playfair">{skill.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Pills */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
        >
          {additionalSkills.map((skill, index) => (
            <motion.div
              key={skill.label}
              className="flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-card/60 backdrop-blur-sm shadow-sm border border-primary/10 hover:border-primary/25 transition-all duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <skill.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary/80" />
              <span className="text-xs sm:text-sm font-medium text-foreground/90">{skill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;