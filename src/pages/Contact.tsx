
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero 
          title="Contact"
          subtitle="Neem contact op voor een vrijblijvende offerte of advies"
          fullHeight={false}
          backgroundImage="/contact-bg.jpg"
        />
        
        {/* Contact Info & Form */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="mb-8">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-onward/10 text-onward rounded-full mb-3">
                    Contact informatie
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Hoe kunnen we u helpen?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Wij staan voor u klaar voor advies en vrijblijvende offertes. Neem contact met ons op via onderstaande gegevens of vul het contactformulier in.
                  </p>
                </div>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="p-3 bg-onward/10 rounded-xl text-onward mr-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Telefonisch contact</h3>
                      <p className="text-muted-foreground mb-2">
                        Bel ons direct voor snel advies of om een afspraak te maken.
                      </p>
                      <a 
                        href="tel:+31612345678" 
                        className="text-onward hover:text-onward-light focus-transition font-medium"
                      >
                        +31 6 12345678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-onward/10 rounded-xl text-onward mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">
                        Stuur ons een email met uw vraag of verzoek voor een offerte.
                      </p>
                      <a 
                        href="mailto:info@on-ward.nl" 
                        className="text-onward hover:text-onward-light focus-transition font-medium"
                      >
                        info@on-ward.nl
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-onward/10 rounded-xl text-onward mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Werkgebied</h3>
                      <p className="text-muted-foreground mb-2">
                        Wij zijn actief in Rotterdam, Den Haag en de omliggende regio's.
                      </p>
                      <p className="font-medium">
                        Rotterdam, Den Haag, Delft, Zoetermeer, Leiden en omgeving
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="p-3 bg-onward/10 rounded-xl text-onward mr-4">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Bereikbaarheid</h3>
                      <p className="text-muted-foreground mb-2">
                        Wij zijn op werkdagen telefonisch bereikbaar op de volgende tijden:
                      </p>
                      <ul className="space-y-1">
                        <li>Maandag - Vrijdag: 08:00 - 18:00</li>
                        <li>Zaterdag: 09:00 - 15:00</li>
                        <li>Zondag: Gesloten</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-onward-gray rounded-xl p-6">
                  <h3 className="text-lg font-medium mb-3">Onze belofte aan u</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-onward shrink-0 mt-0.5 mr-3" />
                      <span>Binnen 24 uur reactie op uw aanvraag</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-onward shrink-0 mt-0.5 mr-3" />
                      <span>Vrijblijvende offertes zonder verplichtingen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-onward shrink-0 mt-0.5 mr-3" />
                      <span>Transparante prijzen zonder verborgen kosten</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-onward shrink-0 mt-0.5 mr-3" />
                      <span>Professioneel en vakkundig advies</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-onward-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-onward/10 text-onward rounded-full mb-3">
                Veelgestelde vragen
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Offerte & contact
              </h2>
              <p className="text-lg text-muted-foreground">
                Antwoorden op veelgestelde vragen over het aanvraagproces en contact.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "Hoe snel kan ik een reactie verwachten op mijn aanvraag?",
                    answer: "Wij streven ernaar om binnen 24 uur te reageren op alle aanvragen. Voor dringende zaken kunt u ons ook telefonisch bereiken tijdens onze openingstijden."
                  },
                  {
                    question: "Moet ik betalen voor een offerte?",
                    answer: "Nee, al onze offertes zijn volledig vrijblijvend en kosteloos. U zit nergens aan vast wanneer u een offerte bij ons aanvraagt."
                  },
                  {
                    question: "Waarom is het handig om foto's te uploaden bij mijn aanvraag?",
                    answer: "Door foto's van uw project toe te voegen, kunnen wij een nauwkeurigere inschatting maken van de benodigde materialen en tijd. Dit resulteert in een preciezere offerte en voorkomt verrassingen achteraf."
                  },
                  {
                    question: "Komen jullie langs voor een persoonlijk adviesgesprek?",
                    answer: "Ja, voor grotere projecten komen wij graag langs voor een persoonlijk adviesgesprek en een inspectie ter plaatse. Dit is meestal kosteloos en zonder verplichtingen."
                  }
                ].map((item, index) => (
                  <div key={index} className="glass-card rounded-xl p-6 hover-lift">
                    <h3 className="text-lg font-medium mb-3">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
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

export default Contact;
