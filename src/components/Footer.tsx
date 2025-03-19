
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ON-WARD</h3>
            <p className="text-white/80 mb-6">
              Vakkundige kluswerkzaamheden voor een scherpe prijs in Rotterdam, Den Haag en omgeving.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white focus-transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white focus-transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white focus-transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Diensten</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Schilderwerk
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Stucwerk
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Voegwerk
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Sloopwerk
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Allround Kluswerk
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Snelkoppelingen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Diensten
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Gratis advies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white focus-transition inline-flex items-center">
                  <ArrowRight className="mr-2 h-4 w-4" />
                  Offerte aanvragen
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="mr-3 h-5 w-5 text-onward-light mt-0.5" />
                <div>
                  <p className="text-white/80">Bel ons</p>
                  <a href="tel:+31612345678" className="text-white hover:text-onward-light focus-transition">
                    +31 6 12345678
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-3 h-5 w-5 text-onward-light mt-0.5" />
                <div>
                  <p className="text-white/80">Email</p>
                  <a href="mailto:info@on-ward.nl" className="text-white hover:text-onward-light focus-transition">
                    info@on-ward.nl
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-onward-light mt-0.5" />
                <div>
                  <p className="text-white/80">Werkgebied</p>
                  <p className="text-white">Rotterdam, Den Haag en omgeving</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} ON-WARD. Alle rechten voorbehouden.
          </p>
          <p className="text-white/60 text-sm">
            <a href="#" className="hover:text-white focus-transition">Privacybeleid</a>
            {' '}&bull;{' '}
            <a href="#" className="hover:text-white focus-transition">Algemene voorwaarden</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
