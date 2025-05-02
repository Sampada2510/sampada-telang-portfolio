
import { Linkedin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="portfolio-card">
            <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://www.linkedin.com/in/sampadatelang/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="p-3 bg-portfolio-purple/20 rounded-full">
                  <Linkedin className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <p className="text-sm">linkedin.com/in/sampadatelang</p>
                </div>
              </a>
              
              <a 
                href="mailto:telangsampada68@gmail.com" 
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <div className="p-3 bg-portfolio-purple/20 rounded-full">
                  <Mail className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <p className="text-sm">telangsampada68@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="portfolio-card flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Let's Connect</h3>
              <p className="text-gray-300 mb-8">
                I'm currently exploring new opportunities in Quality Assurance and Test Automation Engineering. If you're looking for someone to enhance your software quality processes, I'd love to chat.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href="mailto:telangsampada68@gmail.com" 
                  className="button-primary"
                >
                  Send Me An Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
