
import { Brush, Hammer, Home, Wrench, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { cn } from '@/lib/utils';

interface ServiceDetailProps {
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

const Services = () => {
  const services = [
    {
      title: "Professioneel schilderwerk",
      description: "Professioneel binnen- en buitenschilderwerk voor een frisse uitstraling van uw woning of bedrijfspand. Wij werken met hoogwaardige materialen en hebben oog voor detail.",
      icon: <Brush className="h-6 w-6" />,
      benefits: [
        "Binnen- en buitenschilderwerk",
        "Grondige voorbereiding en schuurwerk",
        "Advies over kleuren en materialen",
        "Vakkundige afwerking",
        "Lange levensduur door kwalitatief materiaal"
      ],
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Strak stucwerk",
      description: "Voor een perfecte afwerking van wanden en plafonds bieden wij diverse stuctechnieken aan. Of u nu op zoek bent naar een gladde afwerking of decoratief stucwerk, wij leveren maatwerk.",
      icon: <Wrench className="h-6 w-6" />,
      benefits: [
        "Glad pleisterwerk en sierpleister",
        "Wand- en plafondafwerking",
        "Reparatie van beschadigde wanden",
        "Voorbereiden voor schilderwerk",
        "Verschillende afwerkingsmogelijkheden"
      ],
      imageUrl: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Duurzaam voegwerk",
      description: "Professioneel voegwerk is essentieel voor de duurzaamheid en uitstraling van uw gevel. Wij zorgen voor waterdichte gevels en een perfecte afwerking van uw metselwerk.",
      icon: <Home className="h-6 w-6" />,
      benefits: [
        "Gevelrenovatie en -reiniging",
        "Voegwerk herstellen en vernieuwen",
        "Waterdichte afwerking",
        "Verschillende voegstijlen en -kleuren",
        "Voorkomt vochtproblemen in huis"
      ],
      imageUrl: "https://images.unsplash.com/photo-1518570400542-cffdda403d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Gecontroleerd sloopwerk",
      description: "Voor verbouwingen of renovaties verzorgen wij gecontroleerd sloopwerk. Van het verwijderen van niet-dragende muren tot complete stripwerkzaamheden, wij doen het veilig en efficiënt.",
      icon: <Hammer className="h-6 w-6" />,
      benefits: [
        "Veilige en gecontroleerde sloop",
        "Verwijderen van wanden en vloeren",
        "Stripwerk bij renovaties",
        "Afvoer van sloopafval",
        "Minimale overlast en stofproductie"
      ],
      imageUrl: "https://images.unsplash.com/photo-1590412600067-e436e5441c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Allround kluswerkzaamheden",
      description: "Naast onze specialisaties bieden wij een breed scala aan allround kluswerkzaamheden. Voor vrijwel elke klus in en rond uw woning of bedrijfspand kunt u bij ons terecht.",
      icon: <Wrench className="h-6 w-6" />,
      benefits: [
        "Kleine en grote verbouwingen",
        "Monteren van keukens en badkamers",
        "Plaatsen van wanden en plafonds",
        "Timmerwerk en afwerking",
        "Tuinonderhoud en bestrating"
      ],
      imageUrl: "https://images.unsplash.com/photo-1581165825591-21e4e5a1c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Onze diensten"
          subtitle="Vakkundige kluswerkzaamheden in en om het huis"
          fullHeight={false}
          backgroundImage="/services-bg.jpg"
        />
        
        {/* Services Overview */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-onward/10 text-onward rounded-full mb-3">
                Wat we doen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Diensten op maat voor uw project
              </h2>
              <p className="text-lg text-muted-foreground">
                Bij ON-WARD werken we met passie voor elk project, groot of klein. Ontdek onze specialisaties.
              </p>
            </div>
            
            {services.map((service, index) => (
              <ServiceDetail
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                imageUrl={service.imageUrl}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 md:py-24 bg-onward-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-onward/10 text-onward rounded-full mb-3">
                Onze werkwijze
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hoe wij te werk gaan
              </h2>
              <p className="text-lg text-muted-foreground">
                Een duidelijk proces voor een zorgeloos verloop van uw project.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: "Vrijblijvend gesprek",
                  description: "We bespreken uw wensen en eisen, en maken een inschatting van het project."
                },
                {
                  step: 2,
                  title: "Offerte op maat",
                  description: "U ontvangt een gedetailleerde offerte met transparante prijsopgave."
                },
                {
                  step: 3,
                  title: "Planning & uitvoering",
                  description: "We plannen de werkzaamheden in en voeren deze uit volgens afspraak."
                },
                {
                  step: 4,
                  title: "Oplevering & nazorg",
                  description: "Na oplevering controleert u of alles naar wens is en bespreken we eventuele nazorg."
                }
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-xl p-6 relative hover-lift">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-onward text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 mt-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-onward text-white text-base font-medium rounded-md shadow-sm hover:bg-onward-light focus-transition"
              >
                Start uw project
              </Link>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-onward/10 text-onward rounded-full mb-3">
                Veelgestelde vragen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Antwoorden op uw vragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Hieronder vindt u antwoorden op veelgestelde vragen. Staat uw vraag er niet tussen? Neem dan contact met ons op.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "Wat is de gemiddelde doorlooptijd van een project?",
                    answer: "Dit hangt sterk af van de omvang van het project. Een gemiddeld schilderproject voor een woonkamer duurt ongeveer 2-3 dagen, terwijl een complete gevelrenovatie enkele weken in beslag kan nemen. Bij de offerte geven we altijd een realistische inschatting van de doorlooptijd."
                  },
                  {
                    question: "Werken jullie met vaste prijzen of met een uurtarief?",
                    answer: "Voor de meeste projecten werken we met een vaste prijs die we vooraf met u overeenkomen. Voor kleinere klussen of werk waarbij de omvang vooraf moeilijk in te schatten is, kunnen we ook op basis van een uurtarief werken. Dit bespreken we altijd vooraf."
                  },
                  {
                    question: "Zijn jullie verzekerd voor eventuele schade?",
                    answer: "Ja, wij zijn volledig verzekerd voor aansprakelijkheid en schade die mogelijk tijdens de werkzaamheden kan ontstaan. We werken zorgvuldig en nemen altijd maatregelen om schade te voorkomen."
                  },
                  {
                    question: "Kan ik zelf materialen aanschaffen of doen jullie dat?",
                    answer: "Beide opties zijn mogelijk. We kunnen alle benodigde materialen voor u verzorgen, maar als u specifieke wensen heeft of zelf materialen wilt aanschaffen, is dat geen probleem. We adviseren u graag over de benodigde hoeveelheden en kwaliteit."
                  },
                  {
                    question: "Geven jullie garantie op de uitgevoerde werkzaamheden?",
                    answer: "Ja, we geven garantie op al onze werkzaamheden. De exacte garantietermijn is afhankelijk van het type werk en de gebruikte materialen. Deze informatie staat ook vermeld in onze offertes en contracten."
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-card rounded-xl p-6 hover-lift">
                    <h3 className="text-lg font-medium mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-4">
                  Heeft u een andere vraag of wilt u direct persoonlijk advies?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-onward text-white text-base font-medium rounded-md shadow-sm hover:bg-onward-light focus-transition"
                  >
                    Neem contact op
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Services;
