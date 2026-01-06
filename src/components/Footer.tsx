import { motion } from 'framer-motion';
import { Heart, Linkedin, Facebook, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: MessageCircle, href: 'https://wa.me/201155625203', label: 'WhatsApp' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yossef-eslam-158094305/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/yossef.eltokhy/about', label: 'Facebook' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      className="gradient-footer py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden border-t border-primary/8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-48 sm:w-64 h-24 sm:h-32 bg-primary/3 rounded-full blur-[50px] sm:blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-36 sm:w-48 h-16 sm:h-24 bg-primary/3 rounded-full blur-[40px] sm:blur-[60px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-3 sm:gap-4 mb-5 sm:mb-6"
          initial={{ opacity: 0, y: 15 }}
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
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-card/40 hover:bg-primary/15 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-500 backdrop-blur-sm border border-primary/8 hover:border-primary/20"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
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
          <p className="text-muted-foreground text-sm sm:text-base flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
            {currentYear} <span className="text-gradient font-semibold">Yossef Eslam</span> - Made with 
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary fill-primary" />
            </motion.span>
            All rights reserved
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;