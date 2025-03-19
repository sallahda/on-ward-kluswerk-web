
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Clock, CalendarCheck, Paintbrush, Hammer, Wrench } from "lucide-react";

interface RateItem {
  icon: React.ReactNode;
  service: string;
  rate: string;
  description: string;
}

const HourlyRatesUSP = () => {
  const rates: RateItem[] = [
    {
      icon: <Paintbrush className="h-6 w-6" />,
      service: "Schilderwerk",
      rate: "vanaf €15,- p/u",
      description: "Vakkundig schilderwerk van hoge kwaliteit voor binnen en buiten"
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      service: "Stucwerk",
      rate: "vanaf €18,- p/u",
      description: "Professionele afwerking van wanden en plafonds"
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      service: "Voorbereidend werk",
      rate: "vanaf €14,- p/u",
      description: "Wanden schuren, plamuren en verf klaar maken"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      service: "Spoedklussen",
      rate: "vanaf €20,- p/u",
      description: "Snelle service voor dringende klussen en reparaties"
    }
  ];

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#f5f9f9" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span 
            className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
            style={{ backgroundColor: "#a8d2cd", color: "#ffffff" }}
          >
            Betaalbare kwaliteit
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1c9688" }}>
            Scherpe uurtarieven, topkwaliteit
          </h2>
          <p className="text-lg text-muted-foreground">
            Bij ON-WARD combineren we vakmanschap met eerlijke prijzen. Bekijk onze uurtarieven en bespaar op uw volgende project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rates.map((item, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 text-center hover-lift border transition-all"
              style={{ borderColor: "#a8d2cd50" }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "#a8d2cd30", color: "#1c9688" }}
              >
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#1c9688" }}>{item.service}</h3>
              <div 
                className="text-xl font-bold py-2 px-4 rounded-full inline-block mb-3"
                style={{ backgroundColor: "#1c9688", color: "white" }}
              >
                {item.rate}
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            *Tarieven zijn richtprijzen. Voor een exacte offerte op maat voor uw specifieke project, neem vrijblijvend contact met ons op.
          </p>
          <Button 
            asChild
            className="px-6 py-3 text-base"
            style={{ backgroundColor: "#1c9688", color: "white" }}
          >
            <Link to="/contact">
              <CalendarCheck className="mr-2 h-5 w-5" /> Gratis offerte aanvragen
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HourlyRatesUSP;
