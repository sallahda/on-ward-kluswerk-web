import { Brush, Hammer, Home, Wrench, Award, Clock, CreditCard, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ProjectGallery from '@/components/ProjectGallery';
import HourlyRatesUSP from '@/components/HourlyRatesUSP';
import CallToActionBanner from '@/components/CallToActionBanner';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Vakkundig",
    description: "Jarenlange ervaring en expertise in verschillende kluswerkzaamheden."
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Scherpe prijzen",
    description: "Kwalitatief hoogwaardig werk voor een eerlijke en concurrerende prijs."
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Snelle service",
    description: "Flexibel, betrouwbaar en altijd op tijd voor elke klus."
  }
];

const services = [
  {
    icon: <Brush className="h-6 w-6" />,
    title: "Schilderwerk",
    description: "Professioneel binnen- en buitenschilderwerk voor een frisse uitstraling van uw woning of bedrijfspand.",
    imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Stucwerk",
    description: "Perfecte afwerking van wanden en plafonds met stucwerk, van fijn schuurwerk tot sierpleister.",
    imageUrl: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Home className="h-6 w-6" />,
    title: "Voegwerk",
    description: "Reparatie en vernieuwing van voegwerk voor een waterdichte gevel en een verzorgde uitstraling.",
    imageUrl: "https://images.unsplash.com/photo-1518570400542-cffdda403d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: "Sloopwerk",
    description: "Professionele sloop- en demontagewerk voor verbouwingen, van kleine aanpassingen tot complete renovaties.",
    imageUrl: "https://images.unsplash.com/photo-1590412600067-e436e5441c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Allround kluswerk",
    description: "Voor al uw overige klussen in en om het huis, van kleine reparaties tot grote verbouwingen.",
    imageUrl: "https://images.unsplash.com/photo-1581165825591-21e4e5a1c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const projects = [
  { id: 1, title: "Renovatie woonkamer", category: "Schilderwerk", imageUrl: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Stucwerk appartement", category: "Stucwerk", imageUrl: "https://images.unsplash.com/photo-1581165825591-21e4e5a1c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Gevelrenovatie", category: "Voegwerk", imageUrl: "https://images.unsplash.com/photo-1518570400542-cffdda403d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Badkamerrenovatie", category: "Sloopwerk", imageUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 5, title: "Keukenverbouwing", category: "Allround kluswerk", imageUrl: "https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { id: 6, title: "Trappenhal", category: "Schilderwerk", imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

const Index = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Vakkundige kluswerkzaamheden voor een scherpe prijs"
          backgroundImage="/hero-bg.jpg"
          ctaText="Vraag een offerte aan"
          ctaLink="/contact"
          services={[
            "schilderwerk", 
            "stucwerk", 
            "voegwerk", 
            "sloopwerk", 
            "allround kluswerk"
          ]}
        />
        
        {/* USP Section with hourly rates */}
        <HourlyRatesUSP />
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{ backgroundColor: "#1c9688", color: "white" }}>
                Waarom ON-WARD?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1c9688" }}>
                Kwaliteit en betrouwbaarheid staan voorop
              </h2>
              <p className="text-lg text-muted-foreground">
                Wij zorgen voor vakkundig uitgevoerde klussen tegen een eerlijke prijs. Ontdek waarom klanten voor ons kiezen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                       style={{ backgroundColor: "#a8d2cd30", color: "#1c9688" }}>
                    <div>
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: "#1c9688" }}>{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Compelling Call To Action */}
        <CallToActionBanner />
        
        {/* Services Section */}
        <section className="py-16 md:py-24 bg-service-pattern">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{ backgroundColor: "#1c9688", color: "white" }}>
                Onze diensten
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1c9688" }}>
                Wat kunnen we voor u betekenen?
              </h2>
              <p className="text-lg text-muted-foreground">
                Wij bieden een breed scala aan kluswerkzaamheden aan voor zowel particulieren als bedrijven.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  imageUrl={service.imageUrl}
                  linkUrl="/services"
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-3 text-white font-medium rounded-md shadow-sm hover:bg-opacity-90 focus-transition"
                style={{ backgroundColor: "#1c9688" }}
              >
                Bekijk al onze diensten
              </Link>
            </div>
          </div>
        </section>
        
        {/* Projects Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{ backgroundColor: "#1c9688", color: "white" }}>
                Onze projecten
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1c9688" }}>
                Recente werkzaamheden
              </h2>
              <p className="text-lg text-muted-foreground">
                Bekijk een selectie van onze recente projecten. Klik op een afbeelding voor meer details.
              </p>
            </div>
            
            <ProjectGallery projects={projects} />
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24" style={{ backgroundColor: "#f5f9f9" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{ backgroundColor: "#1c9688", color: "white" }}>
                Tevreden klanten
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1c9688" }}>
                Wat onze klanten zeggen
              </h2>
              <p className="text-lg text-muted-foreground">
                De ervaringen van onze klanten spreken voor zich.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card rounded-xl p-6 hover-lift border" style={{ borderColor: "#a8d2cd30" }}>
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star} 
                        className="w-5 h-5" 
                        fill="#1c9688" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="mb-4 text-muted-foreground">
                    {i === 1 && "Zeer tevreden met het schilderwerk dat ON-WARD heeft uitgevoerd. Nette afwerking en duidelijke communicatie. Aanrader!"}
                    {i === 2 && "Het stucwerk is prachtig geworden. Vakkundig team, werken netjes en ruimen alles goed op. De prijs was bovendien zeer redelijk."}
                    {i === 3 && "Prima service voor onze gevelrenovatie. Professioneel advies vooraf en uitstekende uitvoering. Zelfs sneller klaar dan gepland."}
                  </blockquote>
                  
                  <div className="font-medium">
                    {i === 1 && "Mark de Vries"}
                    {i === 2 && "Anouk Jansen"}
                    {i === 3 && "Pieter Bakker"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final Call to Action */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                    style={{ backgroundColor: "#1c9688", color: "white" }}>
                Klaar om te beginnen?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#1c9688" }}>
                Neem vandaag nog contact met ons op
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Vraag een vrijblijvende offerte aan of neem contact op voor gratis advies voor uw project.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-white text-base font-medium rounded-md shadow-sm hover:bg-opacity-90 focus-transition"
                style={{ backgroundColor: "#1c9688" }}
              >
                Gratis advies & offerte
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
