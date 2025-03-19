
import { Brush, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Painting = () => {
  // Related services (excluding current service)
  const relatedServices = [
    {
      title: "Stucwerk",
      description: "Voor een perfecte afwerking van wanden en plafonds bieden wij diverse stuctechnieken aan.",
      icon: <Brush className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/stucwerk"
    },
    {
      title: "Voegwerk",
      description: "Professioneel voegwerk is essentieel voor de duurzaamheid en uitstraling van uw gevel.",
      icon: <Brush className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1518570400542-cffdda403d05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/voegwerk"
    }
  ];

  const seoKeywords = "schilderwerk, schilderen, verven, binnenhuis schilderen, buitenhuis schilderen, professioneel schilderwerk rotterdam, schildersbedrijf den haag, vakkundig schilderwerk, latex muren, kleuradvies, houtrot reparatie, schilderklusjes";
  
  const seoDescription = "Vakkundig schilderwerk in Rotterdam en Den Haag voor binnen- en buitenhuis. Professionele schilders voor muren verven, latex schilderen, houtrot reparatie, kleuradvies en hoogwaardige afwerking. Vraag een offerte aan voor uw schilderklus.";

  return (
    <>
      <Helmet>
        <title>Professioneel Schilderwerk | ON-WARD | Rotterdam & Den Haag</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="Professioneel Schilderwerk | ON-WARD" />
        <meta property="og:description" content="Vakkundig binnen- en buitenschilderwerk voor een frisse uitstraling van uw woning of bedrijfspand. Professionele schilders in Rotterdam en Den Haag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://on-ward.nl/services/schilderwerk" />
        <link rel="canonical" href="https://on-ward.nl/services/schilderwerk" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero 
          title="Professioneel Schilderwerk"
          subtitle="Vakkundig binnen- en buitenschilderwerk in Rotterdam en Den Haag"
          fullHeight={false}
          backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          ctaText="Vraag een offerte aan"
          ctaLink="/contact"
          seoDescription={seoDescription}
        />
        
        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Uw woning verdient het beste schilderwerk
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bij ON-WARD verzorgen we vakkundig schilderwerk voor zowel binnen als buiten. Of het nu gaat om het verven van muren, plafonds, kozijnen of ander houtwerk - wij garanderen een professionele afwerking die lang mooi blijft.
              </p>
              <p className="text-lg text-muted-foreground">
                Onze ervaren schilders werken uitsluitend met hoogwaardige verfproducten en hebben oog voor detail. Voordat we beginnen met schilderen, zorgen we voor een grondige voorbereiding van de ondergrond, wat essentieel is voor een duurzaam resultaat.
              </p>
            </div>
            
            {/* Services Included */}
            <div className="max-w-4xl mx-auto bg-onward-gray rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Onze schilderdiensten omvatten:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Binnenschilderwerk",
                    items: [
                      "Muren en plafonds schilderen",
                      "Latex schilderwerk",
                      "Houtwerk (deuren, kozijnen, plinten)",
                      "Trappen schilderen",
                      "Radiatoren schilderen"
                    ]
                  },
                  {
                    title: "Buitenschilderwerk",
                    items: [
                      "Gevelschilderwerk",
                      "Kozijnen en deuren",
                      "Dakgoten en boeidelen",
                      "Tuinhuizen en schuren",
                      "Houtrot reparatie"
                    ]
                  },
                  {
                    title: "Voorbereidend werk",
                    items: [
                      "Schuren en plamuren",
                      "Oneffenheden herstellen",
                      "Ondergrond reinigen",
                      "Grondverf aanbrengen",
                      "Afplakken en afdekken"
                    ]
                  },
                  {
                    title: "Extra services",
                    items: [
                      "Kleuradvies",
                      "Behang verwijderen",
                      "Spuitwerk",
                      "Decoratieve technieken",
                      "Houtreparaties"
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
                Waarom kiezen voor ON-WARD voor uw schilderwerk?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Vakmanschap",
                    description: "Onze schilders zijn geschoold en hebben jarenlange ervaring met diverse schildertechnieken."
                  },
                  {
                    title: "Kwaliteitsmaterialen",
                    description: "We werken uitsluitend met hoogwaardige verfproducten voor een langdurig mooi resultaat."
                  },
                  {
                    title: "Strak eindresultaat",
                    description: "We streven naar perfectie en zorgen voor een strakke afwerking zonder verfvlekken of oneffenheden."
                  },
                  {
                    title: "Netheid",
                    description: "We werken schoon en ruimen alles netjes op na afloop van de werkzaamheden."
                  },
                  {
                    title: "Advies op maat",
                    description: "We denken met u mee over de beste kleurkeuze en afwerking voor uw specifieke situatie."
                  },
                  {
                    title: "Scherpe prijzen",
                    description: "Kwalitatief hoogwaardig schilderwerk voor een eerlijke prijs zonder verrassingen achteraf."
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
                Wilt u weten wat wij voor u kunnen betekenen? Neem contact op voor een vrijblijvend gesprek of offerte. Wij helpen u graag verder met uw schilderproject.
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
                      <td className="py-3">Binnenschilderwerk</td>
                      <td className="py-3 text-right font-semibold">€35,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Buitenschilderwerk</td>
                      <td className="py-3 text-right font-semibold">€40,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Voorbereidend werk (schuren, plamuren)</td>
                      <td className="py-3 text-right font-semibold">€30,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Houtrot reparatie</td>
                      <td className="py-3 text-right font-semibold">€45,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Kleuradvies</td>
                      <td className="py-3 text-right font-semibold">Gratis bij opdracht</td>
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

export default Painting;
