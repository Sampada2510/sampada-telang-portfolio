
import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for header styling
      setIsScrolled(window.scrollY > 50);
      
      // Find which section is currently in viewport
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const halfViewport = window.innerHeight / 2;
        
        if (sectionTop <= halfViewport && sectionBottom >= halfViewport) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-center items-center">
          <nav className="flex space-x-1 sm:space-x-2 md:space-x-4">
            {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
              <div 
                key={section} 
                onClick={() => scrollToSection(section)}
                className={`nav-link capitalize ${activeSection === section ? 'active' : ''}`}
              >
                {section}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
