import { useState } from 'react';

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'about', label: 'من أنا' },
  { id: 'contact', label: 'تواصل معي' },
];

interface NavigationProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <nav className="flex justify-center gap-3 py-6 bg-background">
      {navItems.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 animate-scale-in ${
            activeSection === item.id
              ? 'gradient-button text-primary-foreground shadow-button'
              : 'bg-muted text-foreground hover:bg-muted/80'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
