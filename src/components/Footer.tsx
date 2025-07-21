import omSymbol from '@/assets/om-symbol.png';

const Footer = () => {
  return (
    <footer className="bg-spiritual-deep-blue text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={omSymbol} alt="Om Symbol" className="h-8 w-8" />
              <div>
                <h3 className="text-lg font-semibold">Pandit Aditya Guruji</h3>
                <p className="text-sm text-white/80">Vedic Priest</p>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              Serving devotees with authentic Vedic traditions for over 30 years at the sacred 
              Trimbakeshwar Jyotirlinga.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Guruji</a></li>
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-white/70 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Kaal Sarp Dosh Puja</li>
              <li className="text-white/70">Pitru Dosh Puja</li>
              <li className="text-white/70">Rudrabhishek</li>
              <li className="text-white/70">Mangal Dosh Nivaran</li>
              <li className="text-white/70">Navagrah Shanti</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p className="text-white/70">Phone: +91 87078 80017</p>
              <p className="text-white/70">Email: panditadityaguruji@gmail.com</p>
              <p className="text-white/70">
                Trimbakeshwar Temple<br />
                Nashik, Maharashtra
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-white/70">
              © 2024 Pandit Aditya Guruji. All rights reserved.
            </p>
            <p className="text-white/70 mt-2 md:mt-0">
              Sacred services with traditional authenticity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;