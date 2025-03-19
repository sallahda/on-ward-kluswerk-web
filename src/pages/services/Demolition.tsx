
import { Hammer, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Demolition = () => {
  // Related services (excluding current service)
  const relatedServices = [
    {
      title: "Stucwerk",
      description: "Voor een perfecte afwerking van wanden en plafonds bieden wij diverse stuctechnieken aan.",
      icon: <Hammer className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/stucwerk"
    },
    {
      title: "Allround Kluswerk",
      description: "Voor vrijwel elke klus in en rond uw woning of bedrijfspand kunt u bij ons terecht.",
      icon: <Hammer className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1581165825591-21e4e5a1c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/allround-kluswerk"
    }
  ];

  const seoKeywords = "sloopwerk, slopen, binnenslopen, muur slopen, stripwerk, sloopwerkzaamheden, gecontroleerd slopen, sloop rotterdam, sloop den haag, afvoer bouwafval, sloopbedrijf";
  
  const seoDescription = "Gecontroleerd sloopwerk in Rotterdam en Den Haag. Professionele slopers voor binnenslopen, muren verwijderen, stripwerk en complete verbouwingen. Vraag nu een offerte aan.";

  return (
    <>
      <Helmet>
        <title>Gecontroleerd Sloopwerk | ON-WARD | Rotterdam & Den Haag</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="Gecontroleerd Sloopwerk | ON-WARD" />
        <meta property="og:description" content="Voor verbouwingen of renovaties verzorgen wij gecontroleerd sloopwerk. Professionele slopers in Rotterdam en Den Haag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://on-ward.nl/services/sloopwerk" />
        <link rel="canonical" href="https://on-ward.nl/services/sloopwerk" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero 
          title="Gecontroleerd Sloopwerk"
          subtitle="Vakkundige sloopwerkzaamheden in Rotterdam en Den Haag"
          fullHeight={false}
          backgroundImage="https://images.unsplash.com/photo-1590412600067-e436e5441c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          ctaText="Vraag een offerte aan"
          ctaLink="/contact"
          seoDescription={seoDescription}
        />
        
        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Veilig en efficiënt sloopwerk
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bij ON-WARD verzorgen wij vakkundig en gecontroleerd sloopwerk voor uw verbouwing of renovatie. Of het nu gaat om het verwijderen van een niet-dragende muur, het strippen van een badkamer of een complete renovatie - wij zorgen voor een veilige en efficiënte uitvoering.
              </p>
              <p className="text-lg text-muted-foreground">
                Onze ervaren slopers werken gecontroleerd en met respect voor de omgeving. We nemen maatregelen om stof en geluid te beperken en zorgen voor een nette afvoer van het sloopafval.
              </p>
            </div>
            
            {/* Services Included */}
            <div className="max-w-4xl mx-auto bg-onward-gray rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Onze sloopwerkzaamheden omvatten:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Binnenslopen",
                    items: [
                      "Verwijderen van niet-dragende muren",
                      "Doorbraken maken",
                      "Plafonds verwijderen",
                      "Vloeren slopen",
                      "Trappen verwijderen"
                    ]
                  },
                  {
                    title: "Stripwerkzaamheden",
                    items: [
                      "Keukens strippen",
                      "Badkamers strippen",
                      "Verwijderen van wandtegels",
                      "Verwijderen van vloertegels",
                      "Sanitair demonteren"
                    ]
                  },
                  {
                    title: "Voorbereidende werkzaamheden",
                    items: [
                      "Onderzoek naar dragende constructies",
                      "Tijdelijke stutten plaatsen",
                      "Afschermen werkgebied",
                      "Stofbeperking",
                      "Beschermen van te behouden onderdelen"
                    ]
                  },
                  {
                    title: "Extra services",
                    items: [
                      "Afvoer van sloopafval",
                      "Asbest inventarisatie",
                      "Gecontroleerde sloop bij asbest",
                      "Hoogwerker voor moeilijk bereikbare plekken",
                      "Noodvoorzieningen aanbrengen"
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
                Waarom kiezen voor ON-WARD voor uw sloopwerk?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Veiligheid",
                    description: "Wij werken volgens de veiligheidsvoorschriften en nemen alle nodige voorzorgsmaatregelen."
                  },
                  {
                    title: "Ervaring",
                    description: "Onze slopers hebben jarenlange ervaring met gecontroleerd sloopwerk."
                  },
                  {
                    title: "Gecontroleerd",
                    description: "We slopen doordacht en beperken schade aan de omgeving tot een minimum."
                  },
                  {
                    title: "Netheid",
                    description: "We beperken stof en geluid en ruimen alles netjes op na afloop."
                  },
                  {
                    title: "Compleet advies",
                    description: "We denken met u mee over de beste aanpak voor uw specifieke situatie."
                  },
                  {
                    title: "Scherpe prijzen",
                    description: "Veilig en professioneel sloopwerk voor een eerlijke prijs."
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
                Heeft u plannen voor een verbouwing of renovatie? Neem contact op voor een vrijblijvend gesprek of offerte voor uw sloopwerkzaamheden. Wij adviseren u graag over de beste aanpak.
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
                      <td className="py-3">Binnenslopen</td>
                      <td className="py-3 text-right font-semibold">€40,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Stripwerkzaamheden</td>
                      <td className="py-3 text-right font-semibold">€38,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Verwijderen van tegels</td>
                      <td className="py-3 text-right font-semibold">€42,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Afvoer sloopafval</td>
                      <td className="py-3 text-right font-semibold">€35,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Gespecialiseerd sloopwerk</td>
                      <td className="py-3 text-right font-semibold">€45,00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mt-4 italic">
                * Prijzen zijn exclusief materiaalkosten, afvalverwerkingskosten en BTW. Voor een exacte prijsopgave maken wij graag een offerte op maat.
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

export default Demolition;
