
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Use the uploaded profile image
  const profileImage = "/lovable-uploads/7793a8b2-b5ca-427a-b451-8079853f9538.png";

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
