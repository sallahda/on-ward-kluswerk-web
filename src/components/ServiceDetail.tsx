
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ServiceDetailProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  imageUrl: string;
  reversed?: boolean;
}

const ServiceDetail = ({ 
  title, 
  description, 
  icon, 
  benefits, 
  imageUrl, 
  reversed = false 
}: ServiceDetailProps) => {
  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-12 border-b border-gray-100",
      reversed && "lg:rtl"
    )}>
      <div className={cn("ltr", reversed && "lg:text-right")}>
        <div className="flex items-center mb-4">
          <div className="p-2 bg-onward/10 rounded-lg text-onward mr-3">
            {icon}
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-onward shrink-0 mt-0.5 mr-3" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to="/contact"
          className="inline-flex items-center justify-center px-5 py-2 bg-onward text-white text-sm font-medium rounded-md shadow-sm hover:bg-onward-light focus-transition"
        >
          Vraag offerte aan
        </Link>
      </div>
      
      <div className="relative">
        <div className="aspect-video rounded-xl overflow-hidden shadow-card">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-onward-gray rounded-xl -z-10"></div>
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-onward/10 rounded-xl -z-10"></div>
      </div>
    </div>
  );
};

export default ServiceDetail;
