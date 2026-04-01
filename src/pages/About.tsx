import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Users, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="bg-island-sand pt-32">
      {/* Hero */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Story</h1>
            <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
              Local Heart, <br />Global Standards
            </h2>
            <p className="text-ocean-deep/70 text-lg leading-relaxed mb-8">
              Corkers' Tourist Service is a family business which has been operating for 60+ years. 
              We have a unique advantage over our competitors: we own and operate a vintage 1929 Charabanc open-topper, 
              the only one of its kind used to take tourists around our beautiful island.
            </p>
            <p className="text-ocean-deep/70 text-lg leading-relaxed mb-10">
              As "Saints" (St Helenians) ourselves, we have lived the history and walked the trails we now share with you. 
              We invite you to enjoy the freedom of life on a tropical island that has not yet been discovered by the masses.
            </p>
            <Link to="/contact" className="bg-ocean-deep text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-ocean-aqua transition-all inline-block">
              MEET THE TEAM
            </Link>
          </motion.div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1933&auto=format&fit=crop" className="rounded-2xl shadow-2xl" alt="Team" />
            <div className="absolute -bottom-10 -right-10 bg-tropical-coral p-10 rounded-2xl text-white hidden md:block">
              <p className="text-4xl font-display mb-2">20+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">Years of Island <br />Hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-ocean-deep text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Values</h2>
            <h3 className="text-4xl md:text-6xl font-display text-white">Why Choose Corkers?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Local Expertise", icon: <Users />, text: "We don't just know the island; we are part of its fabric. Our connections ensure you get the most authentic experience." },
              { title: "Sustainable Tourism", icon: <Globe />, text: "We are committed to preserving the fragile beauty of our islands for generations to come." },
              { title: "Reliability", icon: <ShieldCheck />, text: "In remote travel, logistics are everything. We pride ourselves on being the most reliable partner in the South Atlantic." }
            ].map((v, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center text-ocean-aqua mx-auto mb-8 border border-white/10">
                  {v.icon}
                </div>
                <h4 className="text-xl font-display mb-4 uppercase tracking-tight">{v.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team/CTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-display text-ocean-deep mb-8 italic">
          "We don't just show you the island; we welcome you home."
        </h2>
        <p className="text-ocean-deep/50 uppercase tracking-widest font-bold text-xs mb-12">— The Corkers Family</p>
        <Link to="/gallery" className="inline-flex items-center gap-3 text-tropical-coral font-bold uppercase tracking-widest text-xs group">
          VIEW OUR GALLERY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
        </Link>
      </section>
    </div>
  );
}
