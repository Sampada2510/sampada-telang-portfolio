import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ New: Mobile menu toggle

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
    setIsOpen(false); // ✅ New: Close menu on link click
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-md' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center md:justify-center items-center">
            <nav className="hidden lg:flex space-x-1 sm:space-x-2 md:space-x-4">
              {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
                <div 
                  key={section} 
                  onClick={() => scrollToSection(section)}
                  className={`nav-link capitalize cursor-pointer ${activeSection === section ? 'active' : ''}`}
                >
                  {section}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* ✅ Mobile menu toggle button (hamburger) */}
        <div className="lg:hidden absolute right-4 top-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white bg-gray-800 rounded-md focus:outline-none"
          >
            ☰
          </button>
        </div>
      </header>

      {/* ✅ Mobile menu dropdown */}
      {isOpen && (
        <div className="fixed top-16 left-0 right-0 bg-black text-white flex flex-col items-center space-y-4 py-4 lg:hidden z-40 shadow-md">
          {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((section) => (
            <div
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-lg capitalize cursor-pointer ${activeSection === section ? 'font-bold text-portfolio-purple' : ''}`}
            >
              {section}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Header;