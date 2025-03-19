
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, Calendar } from "lucide-react";

interface CallToActionBannerProps {
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
}

const CallToActionBanner = ({
  backgroundColor = "#1c9688",
  textColor = "white",
  buttonColor = "white",
  buttonTextColor = "#1c9688"
}: CallToActionBannerProps) => {
  return (
    <section 
      className="py-16 md:py-20 relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full" style={{ backgroundColor: "#a8d2cd" }}></div>
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full" style={{ backgroundColor: "#a8d2cd" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in-up"
            style={{ color: textColor, animationDelay: '0.1s' }}
          >
            Betaal niet teveel voor uw klus!
            <br />
            <span className="italic">Vraag nu een gratis offerte aan</span>
          </h2>
          
          <p 
            className="text-xl md:text-2xl mb-8 animate-fade-in-up font-light"
            style={{ color: `${textColor}DD`, animationDelay: '0.3s' }}
          >
            Wacht niet langer en profiteer van onze scherpe tarieven.
            <br />
            Wij staan klaar om uw project vakkundig uit te voeren.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              asChild
              size="lg"
              className="text-base font-medium shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: buttonColor, color: buttonTextColor }}
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-5 w-5" />
                Gratis offerte aanvragen
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="text-base font-medium border-2 shadow-lg hover:shadow-xl transition-all"
              style={{ borderColor: textColor, color: textColor }}
            >
              <a href="tel:+31612345678">
                <Phone className="mr-2 h-5 w-5" />
                Direct bellen
              </a>
            </Button>
          </div>
          
          <p 
            className="mt-8 text-sm animate-fade-in-up"
            style={{ color: `${textColor}AA`, animationDelay: '0.7s' }}
          >
            Geen verplichtingen. Binnen 24 uur reactie. 100% tevredenheidsgarantie.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBanner;
