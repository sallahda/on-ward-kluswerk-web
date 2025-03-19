
import { Wrench, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import { Link } from 'react-router-dom';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Handyman = () => {
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
      title: "Sloopwerk",
      description: "Voor verbouwingen of renovaties verzorgen wij gecontroleerd sloopwerk.",
      icon: <Wrench className="h-6 w-6" />,
      imageUrl: "https://images.unsplash.com/photo-1590412600067-e436e5441c66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      linkUrl: "/services/sloopwerk"
    }
  ];

  const seoKeywords = "klusbedrijf, allround klusser, kluswerkzaamheden, huis verbouwen, badkamer installeren, keuken plaatsen, monteren, tuinklussen, schuttingen plaatsen, meubels monteren, timmerwerk, handyman, klusjesman rotterdam, klusjesman den haag";
  
  const seoDescription = "Allround kluswerkzaamheden in Rotterdam en Den Haag. Van kleine klussen tot grote verbouwingen, badkamers en keukens monteren, timmerwerk, tuinklussen en meer. Vraag nu een offerte aan.";

  return (
    <>
      <Helmet>
        <title>Allround Kluswerk | ON-WARD | Rotterdam & Den Haag</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content="Allround Kluswerk | ON-WARD" />
        <meta property="og:description" content="Voor vrijwel elke klus in en rond uw woning of bedrijfspand kunt u bij ons terecht. Allround kluswerkzaamheden in Rotterdam en Den Haag." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://on-ward.nl/services/allround-kluswerk" />
        <link rel="canonical" href="https://on-ward.nl/services/allround-kluswerk" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Hero 
          title="Allround Kluswerkzaamheden"
          subtitle="Voor al uw klussen in en rond het huis in Rotterdam en Den Haag"
          fullHeight={false}
          backgroundImage="https://images.unsplash.com/photo-1581165825591-21e4e5a1c7a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          ctaText="Vraag een offerte aan"
          ctaLink="/contact"
          seoDescription={seoDescription}
        />
        
        {/* Service Details */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Uw betrouwbare partner voor iedere klus
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Bij ON-WARD kunt u terecht voor vrijwel alle klussen in en rond uw woning of bedrijfspand. Van kleine reparaties tot grotere verbouwingen - wij bieden een breed scala aan klusdiensten met vakmanschap en oog voor detail.
              </p>
              <p className="text-lg text-muted-foreground">
                Onze ervaren klussers zijn allround opgeleid en kunnen diverse werkzaamheden professioneel uitvoeren. We werken efficiënt, netjes en tegen eerlijke tarieven.
              </p>
            </div>
            
            {/* Services Included */}
            <div className="max-w-4xl mx-auto bg-onward-gray rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold mb-6">Onze kluswerkzaamheden omvatten:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Binnen het huis",
                    items: [
                      "Meubels monteren en installeren",
                      "Keukens plaatsen en renoveren",
                      "Badkamers installeren",
                      "Laminaat, parket en vloeren leggen",
                      "Deuren afhangen en repareren"
                    ]
                  },
                  {
                    title: "Buiten het huis",
                    items: [
                      "Schuttingen plaatsen",
                      "Terras aanleggen",
                      "Tuinhuizen en overkappingen bouwen",
                      "Bestrating",
                      "Onderhoud van buitenhoutwerk"
                    ]
                  },
                  {
                    title: "Verbouwingen",
                    items: [
                      "Wandjes plaatsen",
                      "Plafonds installeren",
                      "Isolatiewerkzaamheden",
                      "Kleine aanbouw realiseren",
                      "Zolders en kelders renoveren"
                    ]
                  },
                  {
                    title: "Technische klussen",
                    items: [
                      "Verlichting installeren",
                      "Hang- en sluitwerk",
                      "Kleine loodgieterswerkzaamheden",
                      "TV's en apparatuur monteren",
                      "Kleine elektrawerkzaamheden"
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
                Waarom kiezen voor ON-WARD voor uw kluswerk?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Allround expertise",
                    description: "Onze klussers zijn breed inzetbaar en hebben ervaring met diverse werkzaamheden."
                  },
                  {
                    title: "Betrouwbaarheid",
                    description: "We komen onze afspraken na en werken volgens planning."
                  },
                  {
                    title: "Vakkundig",
                    description: "We werken met precisie en oog voor detail voor een professioneel resultaat."
                  },
                  {
                    title: "Netheid",
                    description: "We houden de werkplek schoon en ruimen alles netjes op na afloop."
                  },
                  {
                    title: "Flexibiliteit",
                    description: "We passen ons aan op uw wensen en planning."
                  },
                  {
                    title: "Scherpe prijzen",
                    description: "Vakkundig kluswerk voor een eerlijke prijs zonder verrassingen."
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
                Heeft u een klus die uitgevoerd moet worden? Neem contact op voor een vrijblijvend gesprek of offerte. Wij helpen u graag verder met al uw kluswerkzaamheden.
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
                      <td className="py-3">Algemene kluswerkzaamheden</td>
                      <td className="py-3 text-right font-semibold">€35,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Montage van meubels en apparatuur</td>
                      <td className="py-3 text-right font-semibold">€38,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Vloeren leggen</td>
                      <td className="py-3 text-right font-semibold">€40,00</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3">Tuinwerkzaamheden</td>
                      <td className="py-3 text-right font-semibold">€35,00</td>
                    </tr>
                    <tr>
                      <td className="py-3">Gespecialiseerde klussen</td>
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

export default Handyman;
