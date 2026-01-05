import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  labelAr: string;
  labelEn: string;
}

const navItems: NavItem[] = [
  { id: 'home', labelAr: 'الرئيسية', labelEn: 'Home' },
  { id: 'about', labelAr: 'من أنا', labelEn: 'Who I Am' },
  { id: 'contact', labelAr: 'تواصل معي', labelEn: 'Contact Me' },
];

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <motion.nav 
      className="flex justify-center gap-3 py-8 bg-background sticky top-0 z-40 backdrop-blur-lg bg-background/90 border-b border-primary/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex gap-3 p-2 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/10">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative px-7 py-3.5 rounded-xl text-base font-semibold font-tajawal transition-all duration-300 ${
              activeSection === item.id
                ? 'text-primary-foreground'
                : 'text-foreground/70 hover:text-primary'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 gradient-button rounded-xl shadow-button"
                initial={false}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex flex-col items-center leading-tight">
              <span className="text-sm">{item.labelAr}</span>
              <span className="text-xs opacity-80">{item.labelEn}</span>
            </span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;