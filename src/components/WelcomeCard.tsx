import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const WelcomeCard = () => {
  return (
    <section id="home" className="py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          className="glass-card rounded-3xl shadow-card p-10 md:p-14 relative overflow-hidden border border-primary/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Decorative gold accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Welcome</span>
            <Sparkles className="w-5 h-5 text-primary animate-sparkle" />
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8 text-center font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="text-foreground">Welcome to My </span>
            <span className="text-gradient">Personal Website</span>
          </motion.h2>

          <div className="space-y-4 text-center">
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I'm Yossef, an Information Technology engineer passionate about building innovative solutions.
            </motion.p>
            <motion.p 
              className="text-muted-foreground text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              My expertise spans databases, programming, and cybersecurity.
            </motion.p>
            <motion.p 
              className="text-foreground text-lg md:text-xl font-medium"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Explore the site to learn more about me!
            </motion.p>
          </div>

          <motion.div
            className="flex justify-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <motion.button
              onClick={() => {
                const element = document.getElementById('about');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl gradient-button text-primary-foreground font-bold text-lg shadow-button font-tajawal gold-glow"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
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