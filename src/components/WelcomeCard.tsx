import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <section id="home" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px] bg-primary/4 rounded-full blur-[80px] sm:blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="glass-card rounded-2xl sm:rounded-3xl shadow-card p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden border border-primary/8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative gold accent */}
          <div className="absolute top-0 right-0 w-40 sm:w-52 md:w-64 h-40 sm:h-52 md:h-64 bg-primary/8 rounded-full blur-[60px] sm:blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 bg-primary/4 rounded-full blur-[50px] sm:blur-[60px] translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4 sm:mb-5 md:mb-6"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-sparkle" />
            <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">Welcome</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary animate-sparkle" />
          </motion.div>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 sm:mb-6 md:mb-8 text-center font-playfair"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-foreground">Welcome to My </span>
            <span className="text-gradient">Personal Website</span>
          </motion.h2>

          <div className="space-y-3 sm:space-y-4 text-center">
            <motion.p 
              className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
            >
              I'm Yossef, an Information Technology engineer passionate about building innovative solutions.
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              My expertise spans databases, programming, and cybersecurity.
            </motion.p>
            <motion.p 
              className="text-foreground text-sm sm:text-base md:text-lg lg:text-xl font-medium"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            >
              Explore the site to learn more about me!
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center mt-8 sm:mt-10"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl gradient-button text-primary-foreground font-bold text-sm sm:text-base md:text-lg shadow-button font-tajawal gold-glow touch-manipulation"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              More
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeCard;
