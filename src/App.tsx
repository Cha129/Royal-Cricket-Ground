import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import {
  SiteShell,
  HomePage,
  AboutPage,
  BookSlotPage,
  PricingPage,
  FacilitiesPage,
  GalleryPage,
  TournamentsPage,
  ContactPage,
  WebsiteCraftedPage,
} from "@/royal-site";

const queryClient = new QueryClient();

function Router() {
  return (
    <SiteShell>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/book-slot" component={BookSlotPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/facilities" component={FacilitiesPage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/tournaments" component={TournamentsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/website-crafted" component={WebsiteCraftedPage} />
        <Route component={NotFound} />
      </Switch>
    </SiteShell>
  );
}

function App() {
  const baseUrl = import.meta.env.BASE_URL || "";
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={baseUrl.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
