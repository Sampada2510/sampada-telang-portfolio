
import { ArrowRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Projects</h2>
        
        <div className="portfolio-card">
          <h3 className="text-2xl font-semibold mb-6 text-white">Test Automation Lab</h3>
          <p className="text-gray-300 mb-8">
            Check out my test automation repository showcasing various testing frameworks, best practices, and automation solutions for web, API, and mobile testing. This project demonstrates my expertise in building robust, maintainable test automation frameworks and implementing efficient testing strategies.
          </p>
          
          <div className="flex justify-center">
            <a 
              href="https://github.com/Sampada2510/test-automation-lab" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary flex items-center gap-2"
            >
              View on GitHub <ArrowRight size={18} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">More projects coming soon...</p>
          <div className="flex justify-center">
            <a href="#contact" className="button-outline">
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
