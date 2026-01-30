import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-hero min-h-[50vh] sm:min-h-[55vh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center relative overflow-hidden gold-particles">
      {/* Gold glow effects - softer on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-primary/6 blur-[60px] sm:blur-[80px] md:blur-[120px]"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.12, 0.2, 0.12]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[200px] sm:w-[300px] md:w-[500px] h-[150px] sm:h-[200px] md:h-[300px] rounded-full bg-primary/8 blur-[80px] sm:blur-[100px] md:blur-[140px]"
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.08, 0.16, 0.08]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating gold particles - fewer on mobile */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-primary/30"
            style={{
              left: `${25 + i * 15}%`,
              top: `${35 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 7 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 w-full max-w-3xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="mb-4 sm:mb-5 md:mb-6"
        >
          <span className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-primary/6 backdrop-blur-sm text-primary text-[10px] sm:text-xs md:text-sm font-medium border border-primary/12">
            IT Engineer & Cybersecurity Enthusiast
          </span>
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-tight font-playfair"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: "easeOut" }}
        >
          <span className="text-foreground">Yossef </span>
          <span className="text-gradient">Eslam</span>
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-1 sm:mt-2 text-foreground/75">
            El-Tokhy
          </span>
        </motion.h1>

        <motion.p 
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-relaxed px-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: "easeOut" }}
        >
          Building secure digital solutions with expertise in databases, 
          programming, and cybersecurity
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-primary/40 hover:text-primary/70 active:text-primary/80 transition-colors duration-600 touch-manipulation"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
