import { motion } from "motion/react";
import { ArrowRight, MapPin, Anchor, Compass, ShieldCheck, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-island-sand">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-75 scale-105"
            alt="St Helena Coast"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display text-white mb-6 leading-tight text-shadow-sm">
              The Last Truly <br />
              <span className="italic">Remote</span> Escape
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
              Discover St Helena, Ascension, and Tristan da Cunha. 
              Untouched landscapes, living history, and the warmest welcome in the Atlantic.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/plan-trip" 
                className="bg-tropical-coral hover:bg-tropical-coral/90 text-white px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] transition-all shadow-xl hover:scale-105"
              >
                PLAN YOUR JOURNEY
              </Link>
              <Link 
                to="/tours" 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] transition-all"
              >
                EXPLORE TOURS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Welcome to Corkers</h2>
          <h3 className="text-4xl md:text-6xl font-display text-ocean-deep leading-tight mb-8">
            Your Gateway to the <br />South Atlantic
          </h3>
          <p className="text-ocean-deep/70 text-lg leading-relaxed mb-8">
            St Helena is one of the most extraordinary places on Earth. A volcanic island rising from the deep Atlantic, 
            it was the final exile of Napoleon and remains a sanctuary of biodiversity and heritage. 
            At Corkers, we don't just book trips; we curate life-changing experiences.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-display text-ocean-aqua">20+</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-ocean-deep/50">Years Experience</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-3xl font-display text-ocean-aqua">100%</span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-ocean-deep/50">Local Saints</span>
            </div>
          </div>
          <Link to="/about" className="inline-flex items-center gap-3 text-tropical-coral font-bold uppercase tracking-widest text-xs group">
            LEARN OUR STORY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Island View" />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
            <Star className="text-tropical-coral mb-4" fill="currentColor" />
            <p className="text-sm italic text-ocean-deep/80 leading-relaxed">
              "The most seamless travel experience I've ever had to a remote destination. Corkers are true experts."
            </p>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-ocean-aqua">— Sarah Jenkins</p>
          </div>
        </div>
      </section>

      {/* Destinations Preview */}
      <section className="py-24 bg-ocean-deep text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Choose Your Island</h2>
              <h3 className="text-4xl md:text-6xl font-display text-white leading-tight">
                Iconic Destinations
              </h3>
            </div>
            <Link to="/destinations" className="text-xs uppercase tracking-widest font-bold border-b border-ocean-aqua pb-2 hover:text-ocean-aqua transition-colors">
              VIEW ALL DESTINATIONS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "St Helena", img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop", desc: "The Napoleon Island" },
              { name: "Ascension", img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop", desc: "Volcanic Wonder" },
              { name: "Tristan da Cunha", img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop", desc: "The Loneliest Island" }
            ].map((dest, i) => (
              <Link key={i} to="/destinations" className="group relative aspect-[3/4] rounded-2xl overflow-hidden">
                <img src={dest.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75" alt={dest.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-display mb-1">{dest.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-ocean-aqua font-bold">{dest.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Services</h2>
          <h3 className="text-4xl md:text-6xl font-display text-ocean-deep leading-tight">
            Everything You Need
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Tours", icon: <Compass />, path: "/tours" },
            { title: "Transfers", icon: <Anchor />, path: "/transfers" },
            { title: "Accommodation", icon: <MapPin />, path: "/accommodation" },
            { title: "Car Hire", icon: <ShieldCheck />, path: "/car-hire" }
          ].map((service, i) => (
            <Link key={i} to={service.path} className="bg-white p-10 rounded-2xl border border-ocean-deep/5 hover:border-ocean-aqua transition-all hover:shadow-xl group text-center">
              <div className="w-16 h-16 bg-ocean-aqua/10 rounded-full flex items-center justify-center text-ocean-aqua mx-auto mb-6 group-hover:bg-ocean-aqua group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h4 className="text-lg font-bold uppercase tracking-widest text-ocean-deep mb-2">{service.title}</h4>
              <p className="text-xs text-ocean-deep/50 uppercase tracking-widest">Explore More</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
