import { motion } from 'framer-motion';
import { Heart, Linkedin, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/201155625203', label: 'WhatsApp' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yossef-eslam-158094305/', label: 'LinkedIn' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="gradient-footer py-6 sm:py-8 md:py-10 px-4 sm:px-6 relative overflow-hidden border-t border-primary/6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 sm:w-48 md:w-64 h-16 sm:h-24 md:h-32 bg-primary/3 rounded-full blur-[40px] sm:blur-[50px] md:blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-24 sm:w-36 md:w-48 h-12 sm:h-16 md:h-24 bg-primary/3 rounded-full blur-[30px] sm:blur-[40px] md:blur-[60px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-5 md:mb-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-card/35 hover:bg-primary/12 flex items-center justify-center text-muted-foreground hover:text-primary active:text-primary transition-all duration-500 backdrop-blur-sm border border-primary/6 hover:border-primary/18 touch-manipulation"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.6 }}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <p className="text-muted-foreground text-xs sm:text-sm md:text-base flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 flex-wrap">
            {currentYear} <span className="text-gradient font-semibold">Yossef Eslam</span> - Made with 
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-primary fill-primary" />
            </motion.span>
            All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
