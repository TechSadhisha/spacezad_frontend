import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Properties from "./pages/Properties";
import ValueProperties from "./pages/ValueProperties";
import PropertyDetail from "./pages/PropertyDetail";
import ValuePropertyDetail from "./pages/ValuePropertyDetail";
import AboutUs from "./pages/AboutUs";
import LetsConnect from "./pages/LetsConnect";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/lets-connect" element={<LetsConnect />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/value-properties" element={<ValueProperties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/value-property/:id" element={<ValuePropertyDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
