
import { Wrench, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Plastering = () => {
  // Related services (excluding current service)
  const relatedServices = [
    {
      title: "Schilderwerk",
      description: "Professioneel binnen- en buitenschilderwerk voor een frisse uitstraling van uw woning of bedrijfspand.",
      icon: <Wrench className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/schilderwerk"
    },
    {
      title: "Voegwerk",
      description: "Professioneel voegwerk is essentieel voor de duurzaamheid en uitstraling van uw gevel.",
      icon: <Wrench className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1518570400542-cffdda403d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/voegwerk"
    }
  ];

  const seoKeywords = "stucwerk, stucen, stucadoor, wanden stucen, plafond stucen, sierpleister, spachtelputz, gladpleister, betonstuc, wand egaliseren, wanden afwerken, stukadoor rotterdam, stukadoor den haag";
  
  const seoDescription = "Vakkundig stucwerk in Rotterdam en Den Haag. Professionele stukadoors voor het stucen van wanden en plafonds, sierpleister, spachtelputz, gladpleister en meer. Vraag een offerte aan voor uw stucproject.";

  return (
    <>
      <Helmet>
        <title>Professioneel Stucwerk | ON-WARD | Rotterdam & Den Haag</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="Professioneel Stucwerk | ON-WARD" />
        <meta property="og:description" content="Voor een perfecte afwerking van wanden en plafonds bieden wij diverse stuctechnieken aan. Professionele stukadoors in Rotterdam en Den Haag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://on-ward.nl/services/stucwerk" />
        <link rel="canonical" href="https://on-ward.nl/services/stucwerk" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero 
          title="Strak Stucwerk"
          subtitle="Perfecte wand- en plafondafwerking in Rotterdam en Den Haag"
          fullHeight={false}
          backgroundImage="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          ctaText="Vraag een offerte aan"
          ctaLink="/contact"
          seoDescription={seoDescription}
        />
        
        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Specialist in wand- en plafondafwerking
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bij ON-WARD bent u aan het juiste adres voor vakkundig stucwerk. Of het nu gaat om het egaliseren van wanden, het aanbrengen van sierpleister of het stucen van plafonds - wij zorgen voor een perfect eindresultaat.
              </p>
              <p className="text-lg text-muted-foreground">
                Onze ervaren stukadoors werken met hoogwaardige materialen en hebben jarenlange ervaring met diverse stuctechnieken. Voordat we beginnen, zorgen we voor een grondige voorbereiding om een duurzaam en strak resultaat te garanderen.
              </p>
            </div>
            
            {/* Services Included */}
            <div className="max-w-4xl mx-auto bg-onward-gray rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Onze stucwerkdiensten omvatten:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Wandafwerking",
                    items: [
                      "Gladpleisterwerk",
                      "Sierpleister (spachtelputz)",
                      "Structuurpleister",
                      "Betonlook stuc",
                      "Renovatiepleister"
                    ]
                  },
                  {
                    title: "Plafondafwerking",
                    items: [
                      "Glad stucwerk plafonds",
                      "Spackspuiten",
                      "Ornamenten aanbrengen",
                      "Plafond egaliseren",
                      "Spanplafonds"
                    ]
                  },
                  {
                    title: "Voorbereidend werk",
                    items: [
                      "Wanden egaliseren",
                      "Gipsplaten plaatsen",
                      "Oude stuclagen verwijderen",
                      "Gaatjes en scheuren repareren",
                      "Voorstrijken van de ondergrond"
                    ]
                  },
                  {
                    title: "Specialistische technieken",
                    items: [
                      "Tadelakt (Marokkaans stucwerk)",
                      "Beton ciré",
                      "Microcement",
                      "Authentieke kalkpleister",
                      "Leemstuc"
                    ]
                  }
                ].map((category, index) => (
                  <div key={index} className="glass-card rounded-xl p-6">
                    <h4 className="text-xl font-semibold mb-4">{category.title}</h4>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-onward shrink-0 mt-0.5 mr-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Why Choose Us */}
            <div className="max-w-3xl mx-auto mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Waarom kiezen voor ON-WARD voor uw stucwerk?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Vakmanschap",
                    description: "Onze stukadoors hebben jarenlange ervaring en leveren altijd strak werk."
                  },
                  {
                    title: "Kwaliteitsmaterialen",
                    description: "We werken met hoogwaardige materialen voor een duurzaam resultaat."
                  },
                  {
                    title: "Strakke afwerking",
                    description: "We besteden extra aandacht aan hoeken en aansluitingen voor een perfect eindresultaat."
                  },
                  {
                    title: "Netheid",
                    description: "We werken zorgvuldig, dekken alles goed af en ruimen op na afloop."
                  },
                  {
                    title: "Advies op maat",
                    description: "We denken met u mee over de beste afwerking voor uw specifieke situatie."
                  },
                  {
                    title: "Scherpe prijzen",
                    description: "Kwalitatief hoogwaardig stucwerk voor een eerlijke prijs."
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h3 className="text-2xl font-bold mb-4">
                Vraag vrijblijvend een offerte aan
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Wilt u meer weten over de mogelijkheden voor uw wanden of plafonds? Neem contact op voor een vrijblijvend gesprek of offerte. Wij helpen u graag verder met uw stucwerk project.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-onward text-white text-base font-medium rounded-md shadow-sm hover:bg-onward-light focus-transition"
              >
                Neem contact op
              </Link>
            </div>
            
            {/* Pricing */}
            <div className="max-w-4xl mx-auto bg-onward/10 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6 text-center">Onze tarieven</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 text-left font-semibold">Dienst</th>
                      <th className="py-3 text-right font-semibold">Vanaf prijs (per uur)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Gladpleisterwerk</td>
                      <td className="py-3 text-right font-semibold">€38,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Sierpleister aanbrengen</td>
                      <td className="py-3 text-right font-semibold">€40,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Wanden egaliseren</td>
                      <td className="py-3 text-right font-semibold">€35,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Plafond stucen</td>
                      <td className="py-3 text-right font-semibold">€42,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Specialistische technieken</td>
                      <td className="py-3 text-right font-semibold">€45,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                * Prijzen zijn exclusief materiaalkosten en BTW. Voor een exacte prijsopgave maken wij graag een offerte op maat.
              </p>
            </div>
            
            {/* Related Services */}
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Gerelateerde diensten
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedServices.map((service, index) => (
                  <ServiceCard
                    key={index}
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    imageUrl={service.imageUrl}
                    linkUrl={service.linkUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Plastering;
