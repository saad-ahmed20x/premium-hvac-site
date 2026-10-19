import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Home from "@/pages/Home";
import Reviews from "@/pages/Reviews";
import ServiceArea from "@/pages/ServiceArea";
import ServiceDetail from "@/pages/ServiceDetail";
import Services from "@/pages/Services";
import Legal from "@/pages/Legal";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ScrollRestoration } from "./components/ScrollRestoration";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/services" component={Services} />
    <Route path="/services/:service" component={ServiceDetail} />
    <Route path="/about" component={About} />
    <Route path="/reviews" component={Reviews} />
    <Route path="/service-area" component={ServiceArea} />
    <Route path="/service-areas" component={ServiceArea} />
    <Route path="/faq" component={FAQ} />
    <Route path="/contact" component={Contact} />
    <Route path="/privacy" component={Legal} />
    <Route path="/terms" component={Legal} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster /><ScrollRestoration /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}

export default App;
