import { motion } from 'framer-motion';
import { Award, Shield, Database, Code } from 'lucide-react';

const certificates = [
  {
    title: 'CEH – Certified Ethical Hacker',
    icon: Shield,
  },
  {
    title: 'OSCP – Offensive Security Certified Professional',
    icon: Shield,
  },
  {
    title: 'Penetration Tester – American Board',
    icon: Shield,
  },
  {
    title: 'Bug Bounty - American University',
    icon: Shield,
  },
  {
    title: 'Oracle Database Programming SQL',
    icon: Database,
  },
  {
    title: 'Oracle Java Foundational',
    icon: Code,
  },
  {
    title: 'Oracle Database Design and Foundation',
    icon: Database,
  },
  {
    title: 'Microsoft Technology Associate Database Administration Fundamentals',
    icon: Database,
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gold-particles">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[80px]" />
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
            Credentials
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="text-foreground">My </span>
            <span className="text-gradient">Certificates</span>
          </motion.h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group bg-card rounded-2xl shadow-card p-6 relative overflow-hidden border border-primary/10 gold-glow flex items-center gap-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              
              <motion.div 
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-gold flex-shrink-0"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <cert.icon className="w-7 h-7 text-primary-foreground" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground font-playfair">{cert.title}</h3>
              </div>
              <Award className="w-5 h-5 text-primary/50 group-hover:text-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
