import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import PlaceholderPage from "./components/layout/PlaceholderPage";
import Index from "./pages/Index";
import Opportunities from "./pages/Opportunities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/opportunities" element={<Opportunities />} />
            <Route
              path="/programs"
              element={
                <PlaceholderPage
                  title="Industry Learning Programs"
                  description="Browse training, certification courses, workshops, and mentorship initiatives published by industry partners. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/skill-assessment"
              element={
                <PlaceholderPage
                  title="Skill Assessment"
                  description="A guided questionnaire and aptitude test that builds your skill profile and highlights gaps against industry demand. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <PlaceholderPage
                  title="Digital Portfolio"
                  description="A verified showcase of your skills, certifications, projects, internships, and achievements. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/students"
              element={
                <PlaceholderPage
                  title="For Students"
                  description="Everything students need to assess skills, find opportunities, and grow a career profile. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/industry"
              element={
                <PlaceholderPage
                  title="For Industry"
                  description="Post internships, jobs, and training programs, and discover candidates matched to your skill requirements. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/academicians"
              element={
                <PlaceholderPage
                  title="For Academicians"
                  description="Explore faculty internships, industrial training, FDPs, consultancy, and collaborative research opportunities. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/institutions"
              element={
                <PlaceholderPage
                  title="For Institutions"
                  description="Dashboards to monitor student skill development, internship participation, and placement progress. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/analytics"
              element={
                <PlaceholderPage
                  title="Analytics & Reporting"
                  description="Data-driven dashboards on placement readiness, recruitment outcomes, and skill demand trends. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/about"
              element={
                <PlaceholderPage
                  title="About Junction"
                  description="Our mission to close the gap between academic skills and industry needs. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/contact"
              element={
                <PlaceholderPage
                  title="Contact Us"
                  description="Get in touch with the Junction team. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/sign-in"
              element={
                <PlaceholderPage
                  title="Log In"
                  description="Secure, role-based access for students, industry, academicians, and institutions. Keep prompting to build this out."
                />
              }
            />
            <Route
              path="/get-started"
              element={
                <PlaceholderPage
                  title="Get Started"
                  description="Create your Junction account and start building your skill profile. Keep prompting to build this out."
                />
              }
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
