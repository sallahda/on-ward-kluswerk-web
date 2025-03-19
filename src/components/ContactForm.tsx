
import { useState } from 'react';
import { Phone, Mail, Upload, X, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles].slice(0, 5)); // Limit to 5 files
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    try {
      // In a real app, you would submit the form data and files to your backend here
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Succesvol verzonden!",
        description: "We nemen zo spoedig mogelijk contact met u op.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setSelectedFiles([]);
    } catch (error) {
      toast({
        title: "Er is iets misgegaan",
        description: "Probeer het later opnieuw of neem telefonisch contact op.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    "Schilderwerk",
    "Stucwerk",
    "Voegwerk",
    "Sloopwerk",
    "Allround klussen",
    "Anders / weet ik niet"
  ];

  return (
    <div className="glass-card rounded-xl p-6 md:p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Neem contact op</h3>
        <p className="text-muted-foreground">
          Vul het formulier in voor een vrijblijvende offerte of gratis advies. Upload foto's voor een nauwkeurigere inschatting.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Naam <span className="text-onward-accent">*</span>
            </label>
            <Input
              id="name"
              name="name"
              placeholder="Uw volledige naam"
              value={formData.name}
              onChange={handleChange}
              required
              className="focus-transition"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-onward-accent">*</span>
            </label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="uw@email.nl"
                value={formData.email}
                onChange={handleChange}
                required
                className="focus-transition pl-10"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefoonnummer
            </label>
            <div className="relative">
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+31 6 12345678"
                value={formData.phone}
                onChange={handleChange}
                className="focus-transition pl-10"
              />
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Dienst <span className="text-onward-accent">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus-transition bg-background"
            >
              <option value="" disabled>Selecteer een dienst</option>
              {services.map(service => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Bericht <span className="text-onward-accent">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Beschrijf uw project of vraag zo specifiek mogelijk..."
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[120px] focus-transition"
          />
        </div>
        
        <div className="space-y-3">
          <label className="text-sm font-medium block">
            Foto's uploaden (optioneel)
          </label>
          <div className="flex flex-wrap gap-3">
            {selectedFiles.map((file, index) => (
              <div key={index} className="relative flex items-center bg-onward/5 rounded-md p-2 pr-8">
                <span className="text-sm truncate max-w-[200px]">
                  {file.name}
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive focus-transition"
                  aria-label="Verwijder bestand"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
            
            {selectedFiles.length < 5 && (
              <label className={cn(
                "flex flex-col items-center justify-center w-32 h-24 border-2 border-dashed rounded-md cursor-pointer",
                "hover:bg-secondary focus-transition",
                "border-onward/20 hover:border-onward/40"
              )}>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <Upload className="h-6 w-6 text-onward mb-2" />
                  <p className="text-xs text-center text-muted-foreground">
                    Klik om te uploaden
                  </p>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  multiple
                  accept="image/*"
                  className="hidden"
                />
              </label>
            )}
          </div>
          <p className="text-xs text-muted-foreground flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            Max. 5 foto's van uw project om ons te helpen bij de offerte
          </p>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-onward hover:bg-onward-light focus-transition"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>Verzenden...</>
          ) : (
            <>Verstuur aanvraag</>
          )}
        </Button>
        
        <p className="text-xs text-center text-muted-foreground">
          Door dit formulier te versturen gaat u akkoord met onze privacyvoorwaarden.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
