import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "sonner";
import { Navbar, Footer } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Tours from "./pages/Tours";
import Destinations from "./pages/Destinations";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import BookingPage from "./pages/BookingPage";
import TourDetail from "./pages/TourDetail";
import FAQ from "./pages/FAQ";
import Resources from "./pages/Resources";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster position="top-center" expand={true} richColors />
      <div className="min-h-screen flex flex-col font-sans selection:bg-ocean-aqua selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/tours" element={<Tours />} />
            <Route path="/tours/:type" element={<TourDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            
            {/* CTA Pages */}
            <Route path="/book-tour" element={<BookingPage type="tour" />} />
            <Route path="/plan-trip" element={<BookingPage type="plan" />} />
            <Route path="/quote" element={<BookingPage type="quote" />} />
            <Route path="/charabanc" element={<BookingPage type="charabanc" />} />
            <Route path="/custom-tour" element={<BookingPage type="custom" />} />
            <Route path="/transfers" element={<BookingPage type="transfer" />} />
            <Route path="/accommodation" element={<BookingPage type="accommodation" />} />
            <Route path="/car-hire" element={<BookingPage type="car-hire" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
