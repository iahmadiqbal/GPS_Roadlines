import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";

import IndexPage from "./pages/index";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import EmergencyServicesPage from "./pages/emergency-services";
import GetInTouchPage from "./pages/get-in-touch";
import HowItWorksPage from "./pages/how-it-works";
import TransportMovingPage from "./pages/transport-moving";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    const scroll = () => {
      if (location.hash) {
        const targetId = location.hash.replace(/^#/, "");
        const el = document.getElementById(targetId);
        if (el) {
          const headerHeight =
            parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue("--header-height")
            ) || 80;
          const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
          window.scrollTo({ top, behavior: "smooth" });
        }
        return;
      }
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
    // Small delay to let the page render first
    const timer = setTimeout(scroll, 120);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash, location.key]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/emergency-services" element={<EmergencyServicesPage />} />
        <Route path="/get-in-touch" element={<GetInTouchPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/transport-moving" element={<TransportMovingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
