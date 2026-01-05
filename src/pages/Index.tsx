import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import WelcomeCard from '@/components/WelcomeCard';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        <WelcomeCard />
        <AboutSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
