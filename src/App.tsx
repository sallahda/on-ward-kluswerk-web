
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Painting from "./pages/services/Painting";
import Plastering from "./pages/services/Plastering";
import Pointing from "./pages/services/Pointing";
import Demolition from "./pages/services/Demolition";
import Handyman from "./pages/services/Handyman";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/schilderwerk" element={<Painting />} />
          <Route path="/services/stucwerk" element={<Plastering />} />
          <Route path="/services/voegwerk" element={<Pointing />} />
          <Route path="/services/sloopwerk" element={<Demolition />} />
          <Route path="/services/allround-kluswerk" element={<Handyman />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
