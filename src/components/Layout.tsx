import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tours", path: "/tours" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-3 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-ocean-aqua rounded-lg rotate-3 flex items-center justify-center text-white font-bold text-xl shadow-lg">
            C
          </div>
          <span className={`font-display text-2xl tracking-tight font-bold ${scrolled ? "text-ocean-deep" : "text-white"}`}>
            Corkers
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs uppercase tracking-[0.2em] font-bold transition-all hover:text-ocean-aqua ${
                location.pathname === link.path 
                  ? "text-ocean-aqua" 
                  : scrolled ? "text-ocean-deep/70" : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/plan-trip"
            className="bg-tropical-coral hover:bg-tropical-coral/90 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest transition-all shadow-md hover:shadow-lg"
          >
            PLAN YOUR TRIP
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className={`${scrolled ? "text-ocean-deep" : "text-white"} lg:hidden`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl flex flex-col p-8 gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-display uppercase tracking-tight ${
                  location.pathname === link.path ? "text-ocean-aqua" : "text-ocean-deep"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/plan-trip"
              onClick={() => setIsOpen(false)}
              className="bg-tropical-coral text-white p-4 rounded-xl text-center font-bold tracking-widest text-xs"
            >
              PLAN YOUR TRIP
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-ocean-deep text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-ocean-aqua rounded-lg flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <span className="font-display text-2xl tracking-tight font-bold">
              Corkers
            </span>
          </Link>
          <p className="text-white/60 leading-relaxed mb-8 text-sm">
            Expert travel curators for St Helena, Ascension, and Tristan da Cunha. 
            We turn remote dreams into seamless island realities.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-aqua transition-all">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-aqua transition-all">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-aqua transition-all">
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ocean-aqua mb-8">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/destinations" className="text-white/60 hover:text-white transition-colors">Destinations</Link></li>
            <li><Link to="/tours" className="text-white/60 hover:text-white transition-colors">Our Tours</Link></li>
            <li><Link to="/services" className="text-white/60 hover:text-white transition-colors">Travel Services</Link></li>
            <li><Link to="/gallery" className="text-white/60 hover:text-white transition-colors">Island Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ocean-aqua mb-8">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/faq" className="text-white/60 hover:text-white transition-colors">Travel FAQ</Link></li>
            <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/quote" className="text-white/60 hover:text-white transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-ocean-aqua mb-8">Contact</h4>
          <ul className="space-y-6 text-sm">
            <li className="flex items-start gap-4 text-white/60">
              <MapPin size={20} className="text-ocean-aqua shrink-0" />
              <span>Main Street, Jamestown, St Helena Island</span>
            </li>
            <li className="flex items-center gap-4 text-white/60">
              <Phone size={20} className="text-ocean-aqua shrink-0" />
              <a href="tel:+29061078" className="hover:text-white">+290 61078</a>
            </li>
            <li className="flex items-center gap-4 text-white/60">
              <Mail size={20} className="text-ocean-aqua shrink-0" />
              <a href="mailto:corkerstouristservice@gmail.com" className="hover:text-white">corkerstouristservice@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 uppercase tracking-[0.2em]">
        <p>© 2025 Corkers Tourist Service. All rights reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white">Terms of Service</Link>
        </div>
        <p>Powered by <a href="https://vibrantws.co.za" target="_blank" className="text-ocean-aqua/60 hover:text-ocean-aqua">vibrantws.co.za</a></p>
      </div>
    </footer>
  );
}
