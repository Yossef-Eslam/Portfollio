import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  // Defer animations until after first paint for better LCP
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Use requestIdleCallback or setTimeout to defer animations
    const timer = requestAnimationFrame(() => {
      setIsReady(true);
    });
    return () => cancelAnimationFrame(timer);
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="gradient-hero min-h-[50vh] sm:min-h-[55vh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-20 text-center relative overflow-hidden gold-particles">
      {/* Gold glow effects - only animate after first paint */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 rounded-full bg-primary/6 blur-[60px] sm:blur-[80px] md:blur-[120px]"
          style={{ opacity: 0.15 }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[200px] sm:w-[300px] md:w-[500px] h-[150px] sm:h-[200px] md:h-[300px] rounded-full bg-primary/8 blur-[80px] sm:blur-[100px] md:blur-[140px]"
          style={{ opacity: 0.12 }}
        />
      </div>

      {/* LCP element - render immediately without animation delays */}
      <div className="relative z-10 w-full max-w-3xl mx-auto">
        <div className="mb-4 sm:mb-5 md:mb-6">
          <span className="inline-block px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full bg-primary/6 backdrop-blur-sm text-primary text-[10px] sm:text-xs md:text-sm font-medium border border-primary/12">
            Software Engineer & Cybersecurity Expert
          </span>
        </div>

        {/* Main heading - LCP element, no animation blocking */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-5 md:mb-6 tracking-tight font-playfair">
          <span className="text-foreground">Yossef </span>
          <span className="text-gradient">Eslam</span>
          <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light mt-1 sm:mt-2 text-foreground/75">
            El-Tokhy
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md sm:max-w-lg md:max-w-xl mx-auto leading-relaxed px-2">
          Specializing in building secure, automated software ecosystems and high-performance platforms.
        </p>
      </div>

      {/* Scroll indicator - animate after ready */}
      {isReady && (
        <motion.button
          onClick={scrollToContent}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 text-primary/40 hover:text-primary/70 active:text-primary/80 transition-colors duration-600 touch-manipulation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
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
      )}
    </section>
  );
};

export default HeroSection;
