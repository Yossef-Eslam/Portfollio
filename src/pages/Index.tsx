import { useState, useEffect, lazy, Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import WelcomeCard from '@/components/WelcomeCard';

// Lazy load below-the-fold components for better initial load performance
const AboutSection = lazy(() => import('@/components/AboutSection'));
const ProjectsSection = lazy(() => import('@/components/ProjectsSection'));
const CertificatesSection = lazy(() => import('@/components/CertificatesSection'));
const ContactSection = lazy(() => import('@/components/ContactSection'));
const Footer = lazy(() => import('@/components/Footer'));

// Minimal loading skeleton for lazy-loaded sections
const SectionSkeleton = () => (
  <div className="py-16 px-4 animate-pulse">
    <div className="max-w-4xl mx-auto">
      <div className="h-8 bg-muted/20 rounded-lg w-48 mx-auto mb-8" />
      <div className="h-64 bg-muted/10 rounded-2xl" />
    </div>
  </div>
);

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeroSection />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main className="flex-1">
        <WelcomeCard />
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <CertificatesSection />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
