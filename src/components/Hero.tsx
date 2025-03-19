
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  fullHeight?: boolean;
  backgroundImage?: string;
  className?: string;
  services?: string[];
  seoDescription?: string;
}

const Hero = ({ 
  title,
  subtitle,
  ctaText = "Neem contact op",
  ctaLink = "/contact",
  fullHeight = true,
  backgroundImage = "/hero-bg.jpg",
  className,
  services = ["schilderwerk", "stucwerk", "voegwerk", "sloopwerk", "allround kluswerk"],
  seoDescription
}: HeroProps) => {
  const [currentService, setCurrentService] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");
  
  // Typing effect for the service text
  useEffect(() => {
    const currentServiceText = services[currentService];
    
    if (isTyping) {
      if (displayText.length < currentServiceText.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentServiceText.substring(0, displayText.length + 1));
        }, 100);
        
        return () => clearTimeout(timer);
      } else {
        setIsTyping(false);
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500); // Pause at the end of the word
        
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
        
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        const nextService = (currentService + 1) % services.length;
        setCurrentService(nextService);
      }
    }
  }, [displayText, isTyping, currentService, services]);
  
  return (
    <section 
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        fullHeight ? "min-h-screen" : "py-40",
        className
      )}
    >
      {/* Background Image with brand colors overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(28, 150, 136, 0.8), rgba(168, 210, 205, 0.5)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up"
            style={{animationDelay: '0.1s'}}
          >
            {title}
          </h1>
          
          <div className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up min-h-16"
               style={{animationDelay: '0.3s'}}
          >
            {subtitle ? (
              <p>{subtitle}</p>
            ) : (
              <>
                <p className="mb-2">Waar ben jij naar op zoek?</p>
                <div className="font-bold text-white flex justify-center items-center min-h-12">
                  <span className="mr-2">Professioneel</span>
                  <span className="text-white relative border-r-2 border-white pr-1 h-8 inline-flex items-center">
                    {displayText}
                    <span className={`absolute top-0 right-0 h-full w-1 bg-white ${isTyping ? 'animate-pulse' : 'opacity-0'}`}></span>
                  </span>
                  <span className="ml-2">in Rotterdam en Den Haag</span>
                </div>
              </>
            )}
          </div>
          
          {seoDescription && (
            <div className="sr-only" aria-hidden="true">
              <p>{seoDescription}</p>
            </div>
          )}
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-base font-medium rounded-md shadow-sm hover:bg-gray-100 focus-transition"
              style={{ color: "#1c9688" }}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
