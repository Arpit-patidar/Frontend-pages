import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WaterBackground } from "@/components/WaterBackground";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import PollutionInfo from "@/pages/PollutionInfo";
import RainwaterHarvesting from "@/pages/RainwaterHarvesting";
import UrbanConservation from "@/pages/UrbanConservation";
import RuralConservation from "@/pages/RuralConservation";
import HouseholdSteps from "@/pages/HouseholdSteps";
import MissionActivities from "@/pages/MissionActivities";
import Gallery from "@/pages/Gallery";
import SuccessStories from "@/pages/SuccessStories";
import Events from "@/pages/Events";
import JoinUs from "@/pages/JoinUs";
import LoginRegister from "@/pages/LoginRegister";
import MemberProfile from "@/pages/MemberProfile";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pollution" component={PollutionInfo} />
      <Route path="/rainwater" component={RainwaterHarvesting} />
      <Route path="/cities" component={UrbanConservation} />
      <Route path="/villages" component={RuralConservation} />
      <Route path="/households" component={HouseholdSteps} />
      <Route path="/activities" component={MissionActivities} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/success" component={SuccessStories} />
      <Route path="/events" component={Events} />
      <Route path="/join" component={JoinUs} />
      <Route path="/login" component={LoginRegister} />
      <Route path="/profile" component={MemberProfile} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WaterBackground />
      <ScrollToTop />
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
