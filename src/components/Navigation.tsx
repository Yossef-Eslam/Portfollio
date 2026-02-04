import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <motion.nav 
      className="flex justify-center py-4 sm:py-6 bg-background sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-primary/5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-card/40 backdrop-blur-md border border-primary/8 mx-2 overflow-x-auto no-scrollbar">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`relative px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-400 whitespace-nowrap touch-manipulation ${
              activeSection === item.id
                ? 'text-primary-foreground'
                : 'text-foreground/60 hover:text-primary active:text-primary'
            }`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + index * 0.08, duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {activeSection === item.id && (
              <motion.div
                layoutId="activeNav"
                className="absolute inset-0 gradient-button rounded-xl shadow-button"
                initial={false}
                transition={{ type: "spring", stiffness: 350, damping: 35 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navigation;
