
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
  fullHeight?: boolean;
  backgroundImage?: string;
  className?: string;
}

const Hero = ({ 
  title,
  subtitle,
  ctaText = "Neem contact op",
  ctaLink = "/contact",
  fullHeight = true,
  backgroundImage = "/hero-bg.jpg",
  className
}: HeroProps) => {
  return (
    <section 
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        fullHeight ? "min-h-screen" : "py-40",
        className
      )}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `linear-gradient(rgba(20, 92, 158, 0.7), rgba(20, 92, 158, 0.4)), url(${backgroundImage})`,
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
          
          <p 
            className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up"
            style={{animationDelay: '0.3s'}}
          >
            {subtitle}
          </p>
          
          <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-onward text-base font-medium rounded-md shadow-sm hover:bg-gray-100 focus-transition"
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
