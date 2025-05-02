
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Use the newly uploaded profile image
  const profileImage = "/lovable-uploads/8cb69979-7680-4a95-adc4-50fa735e02f9.png";

  return (
    <div className="min-h-screen bg-portfolio-background text-white">
      <Header />
      <Hero profileImage={profileImage} />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
