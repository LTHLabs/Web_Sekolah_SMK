import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Programs from "./pages/Programs";
import Teachers from "./pages/Teachers";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import StudentGrades from "./pages/StudentGrades";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/programs"} component={Programs} />
      <Route path={"/teachers"} component={Teachers} />
      <Route path={"/news"} component={News} />
      <Route path={"/gallery"} component={Gallery} />
      <Route path={"/grades"} component={StudentGrades} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="flex flex-col min-h-screen bg-background">
            <Navigation />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
            <ChatBot />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

