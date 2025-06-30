
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import Admissions from "./pages/Admissions";
import Academics from "./pages/Academics";
import CampusLife from "./pages/CampusLife";
import KnowledgeBase from "./pages/KnowledgeBase";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";
import InternationalGuide from "./pages/InternationalGuide";
import FinancialAid from "./pages/FinancialAid";
import Apply from "./pages/Apply";
import RequestInfo from "./pages/RequestInfo";
import CampusTour from "./pages/CampusTour";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/research" element={<Research />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/international-guide" element={<InternationalGuide />} />
            <Route path="/financial-aid" element={<FinancialAid />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/request-info" element={<RequestInfo />} />
            <Route path="/campus-tour" element={<CampusTour />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
