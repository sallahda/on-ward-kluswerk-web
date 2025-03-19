
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Diensten', path: '/services' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        isScrolled 
          ? "bg-white/95 shadow-sm backdrop-blur-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span className="text-2xl font-bold text-onward">ON-WARD</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-onward focus-transition",
                  location.pathname === item.path 
                    ? "text-onward" 
                    : "text-foreground/80"
                )}
              >
                {item.title}
              </Link>
            ))}
            <a 
              href="tel:+31612345678" 
              className="flex items-center text-base font-medium text-onward hover:text-onward-light focus-transition"
            >
              <span>+31 6 12345678</span>
            </a>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-foreground p-2"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 transform transition-all duration-300 ease-out-expo",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col p-8 space-y-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-xl font-medium py-2 border-b border-gray-100 transition-colors",
                location.pathname === item.path 
                  ? "text-onward" 
                  : "text-foreground/80"
              )}
              onClick={closeMenu}
            >
              {item.title}
            </Link>
          ))}
          <a 
            href="tel:+31612345678" 
            className="text-xl font-medium py-2 text-onward border-b border-gray-100"
            onClick={closeMenu}
          >
            Bel: +31 6 12345678
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
