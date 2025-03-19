
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
  linkUrl?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  imageUrl,
  linkUrl = "/services",
  className,
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-xl overflow-hidden hover-lift", 
        className
      )}
    >
      {imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-onward/10 rounded-lg text-onward mr-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <Link 
          to={linkUrl} 
          className="inline-flex items-center text-sm font-medium text-onward hover:text-onward-light focus-transition"
        >
          Meer informatie
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
