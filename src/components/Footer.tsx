
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-400 text-center">
            &copy; {currentYear} Sampada Bhalchandra Telang. Built with lovable.dev.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
