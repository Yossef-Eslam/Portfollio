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
    <section id="certificates" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none gold-particles">
        <div className="absolute top-20 right-0 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-primary/3 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-40 left-0 w-40 sm:w-56 md:w-80 h-40 sm:h-56 md:h-80 bg-secondary/3 rounded-full blur-[50px] sm:blur-[60px] md:blur-[100px]" />
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
            Credentials
          </motion.span>
          <motion.h2 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5 sm:mb-6 font-playfair"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-foreground">My </span>
            <span className="text-gradient">Certificates</span>
          </motion.h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="group bg-card/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-card p-4 sm:p-5 md:p-6 relative overflow-hidden border border-primary/6 flex items-center gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: index * 0.06, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -2, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700" />
              
              <motion.div 
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-gold flex-shrink-0"
                whileHover={{ scale: 1.03, rotate: 2 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
              >
                <cert.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary-foreground" />
              </motion.div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-foreground font-playfair leading-snug">{cert.title}</h3>
              </div>
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary/30 group-hover:text-primary/60 transition-colors duration-500 flex-shrink-0" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
