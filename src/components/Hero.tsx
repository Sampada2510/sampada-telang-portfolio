
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  profileImage: string;
}

const Hero = ({ profileImage }: HeroProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in py-4">
            <h1 className="text-4xl sm:text-5xl font-bold gradient-text" style={{ marginBottom: '1.5rem' }}>  // equivalent to mb-6
              Quality Assurance Engineer
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Software QA Engineer | 6+ years in Test Automation | SDET | Agile & Scrum | Data Quality | Committed to enhancing software reliability
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="button-primary flex items-center gap-2">
                Get In Touch <ArrowRight size={18} />
              </a>
              <a href="#about" className="button-outline">
                Learn More
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex flex-col items-center animate-fade-in-right">
            <div className="rounded-full p-1 bg-gradient-to-r from-portfolio-purple to-portfolio-blue mb-4">
              <div className="rounded-full overflow-hidden w-64 h-64 md:w-72 md:h-72 border-4 border-portfolio-card">
                <img 
                  src={profileImage} 
                  alt="Sampada Telang" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h2 className="text-xl font-medium text-white text-center">
              Sampada Bhalchandra Telang
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
