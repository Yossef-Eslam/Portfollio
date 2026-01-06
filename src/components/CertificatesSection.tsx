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
    <section id="certificates" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gold-particles">
        <div className="absolute top-20 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/3 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-40 left-0 w-56 sm:w-80 h-56 sm:h-80 bg-secondary/3 rounded-full blur-[60px] sm:blur-[100px]" />
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
            Credentials
          </motion.span>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-foreground">My </span>
            <span className="text-gradient">Certificates</span>
          </motion.h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl shadow-card p-5 sm:p-6 relative overflow-hidden border border-primary/8 flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.08, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -3, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700" />
              
              <motion.div 
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-gold flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-semibold text-foreground font-playfair leading-snug">{cert.title}</h3>
              </div>
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary/40 group-hover:text-primary/70 transition-colors duration-500 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
