
import { Home, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Pointing = () => {
  // Related services (excluding current service)
  const relatedServices = [
    {
      title: "Schilderwerk",
      description: "Professioneel binnen- en buitenschilderwerk voor een frisse uitstraling van uw woning of bedrijfspand.",
      icon: <Home className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/schilderwerk"
    },
    {
      title: "Stucwerk",
      description: "Voor een perfecte afwerking van wanden en plafonds bieden wij diverse stuctechnieken aan.",
      icon: <Home className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/stucwerk"
    }
  ];

  const seoKeywords = "voegwerk, gevelrenovatie, voegen vervangen, voegen uitkappen, gevel impregneren, gevelreiniging, metselwerk herstellen, gevelonderhoud, voegwerkspecialist, voeger rotterdam, voegen repareren";
  
  const seoDescription = "Professioneel voegwerk in Rotterdam en Den Haag. Vakkundige gevelrenovatie, voegen vervangen, uitkappen en herstellen voor een waterdichte en mooie gevel. Vraag nu een offerte aan.";

  return (
    <>
      <Helmet>
        <title>Duurzaam Voegwerk | ON-WARD | Rotterdam & Den Haag</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="Duurzaam Voegwerk | ON-WARD" />
        <meta property="og:description" content="Professioneel voegwerk is essentieel voor de duurzaamheid en uitstraling van uw gevel. Vakkundig voegwerk in Rotterdam en Den Haag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://on-ward.nl/services/voegwerk" />
        <link rel="canonical" href="https://on-ward.nl/services/voegwerk" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero 
          title="Duurzaam Voegwerk"
          subtitle="Vakkundige gevelrenovatie in Rotterdam en Den Haag"
          fullHeight={false}
          backgroundImage="https://images.unsplash.com/photo-1518570400542-cffdda403d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          ctaText="Vraag een offerte aan"
          ctaLink="/contact"
          seoDescription={seoDescription}
        />
        
        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Specialisten in gevelrenovatie en voegwerk
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Goed voegwerk is essentieel voor een waterdichte gevel en de algehele uitstraling van uw woning. Bij ON-WARD zijn we gespecialiseerd in het vervangen en herstellen van voegwerk voor een duurzaam resultaat.
              </p>
              <p className="text-lg text-muted-foreground">
                Onze ervaren vakmannen werken met hoogwaardige materialen en hebben oog voor detail. Of het nu gaat om het vervangen van enkele beschadigde voegen of een complete gevelrenovatie, wij zorgen voor een strak en waterdicht resultaat.
              </p>
            </div>
            
            {/* Services Included */}
            <div className="max-w-4xl mx-auto bg-onward-gray rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Onze voegwerkdiensten omvatten:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Gevelrenovatie",
                    items: [
                      "Voegwerk vervangen",
                      "Uitkappen van oude voegen",
                      "Gevelreiniging",
                      "Metselwerk herstellen",
                      "Scheuroverbrugging"
                    ]
                  },
                  {
                    title: "Voegwerk",
                    items: [
                      "Knipvoeg",
                      "Platvolle voeg",
                      "Schaduwvoeg",
                      "Verdiepte voeg",
                      "Snijvoeg"
                    ]
                  },
                  {
                    title: "Voorbereidende werkzaamheden",
                    items: [
                      "Inspectie van de gevel",
                      "Vochtmetingen",
                      "Uitkappen van slechte voegen",
                      "Reinigen van de gevel",
                      "Steigerwerk plaatsen"
                    ]
                  },
                  {
                    title: "Extra services",
                    items: [
                      "Gevel impregneren",
                      "Vochtbestrijding",
                      "Schimmelbestrijding",
                      "Voegen repareren",
                      "Kleuradvies voegwerk"
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
                Waarom kiezen voor ON-WARD voor uw voegwerk?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Vakmanschap",
                    description: "Onze voegspecialisten hebben jarenlange ervaring en oog voor detail."
                  },
                  {
                    title: "Duurzame materialen",
                    description: "We werken met hoogwaardige voegmortels voor een langdurig resultaat."
                  },
                  {
                    title: "Waterdicht resultaat",
                    description: "Ons voegwerk voorkomt vochtproblemen en beschermt uw metselwerk."
                  },
                  {
                    title: "Netheid",
                    description: "We werken zorgvuldig en houden de werkplek schoon tijdens en na de werkzaamheden."
                  },
                  {
                    title: "Compleet advies",
                    description: "We beoordelen de gehele gevel en adviseren over alle nodige werkzaamheden."
                  },
                  {
                    title: "Scherpe prijzen",
                    description: "Kwalitatief hoogwaardig voegwerk voor een eerlijke prijs."
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
                Wilt u meer weten over de mogelijkheden voor uw gevelrenovatie? Neem contact op voor een vrijblijvend gesprek of offerte. Wij helpen u graag verder met uw voegwerkproject.
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
                      <td className="py-3">Voegwerk vervangen</td>
                      <td className="py-3 text-right font-semibold">€42,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Uitkappen van oude voegen</td>
                      <td className="py-3 text-right font-semibold">€38,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Gevelreiniging</td>
                      <td className="py-3 text-right font-semibold">€40,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Metselwerk herstellen</td>
                      <td className="py-3 text-right font-semibold">€45,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Gevel impregneren</td>
                      <td className="py-3 text-right font-semibold">€42,00</td>
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

export default Pointing;
