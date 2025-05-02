
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="portfolio-card">
            <h3 className="text-xl font-semibold mb-4 text-white">Get In Touch</h3>
            
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-4 gradient-text">Let's Connect</h4>
              <p className="text-gray-300 mb-8">
                I'm currently exploring new opportunities in Quality Assurance and Test Automation Engineering. If you're looking for someone to enhance your software quality processes, I'd love to chat.
              </p>
            </div>
            
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
