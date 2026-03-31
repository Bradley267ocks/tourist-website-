import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Plane, Hotel, Anchor, ShieldCheck, Car, Briefcase, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Airport Transfers",
      icon: <Plane />,
      path: "/transfers",
      desc: "Seamless pickup and drop-off from St Helena Airport to your accommodation."
    },
    {
      title: "Accommodation Booking",
      icon: <Hotel />,
      path: "/accommodation",
      desc: "We find the best stays, from historic Jamestown hotels to rural retreats."
    },
    {
      title: "Car Hire",
      icon: <Car />,
      path: "/car-hire",
      desc: "Explore the island at your own pace with our reliable fleet of vehicles."
    },
    {
      title: "Charabanc Experience",
      icon: <Anchor />,
      path: "/charabanc",
      desc: "The traditional way to see the island. Perfect for groups and special events."
    },
    {
      title: "Travel Logistics",
      icon: <Briefcase />,
      path: "/plan-trip",
      desc: "Full itinerary planning, flight connections, and local permit assistance."
    },
    {
      title: "Custom Requests",
      icon: <ShieldCheck />,
      path: "/custom-tour",
      desc: "Need something specific? Our local network can make almost anything happen."
    }
  ];

  return (
    <div className="bg-island-sand pt-32">
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Services</h1>
        <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
          Seamless Island <br />Logistics
        </h2>
        <p className="text-ocean-deep/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Travel to remote islands shouldn't be stressful. We handle the complex details 
          so you can focus on the adventure of a lifetime.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-12 rounded-3xl border border-ocean-deep/5 hover:border-ocean-aqua transition-all hover:shadow-2xl group"
          >
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua mb-8 group-hover:bg-ocean-aqua group-hover:text-white transition-all">
              {s.icon}
            </div>
            <h3 className="text-2xl font-display uppercase tracking-tight text-ocean-deep mb-4">{s.title}</h3>
            <p className="text-ocean-deep/60 mb-8 leading-relaxed text-sm">{s.desc}</p>
            <Link to={s.path} className="inline-flex items-center gap-2 text-tropical-coral font-bold uppercase tracking-widest text-[10px] group-hover:gap-4 transition-all">
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Quote CTA */}
      <section className="py-24 bg-ocean-deep text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-display mb-8">Need a full package?</h2>
          <p className="text-white/60 text-lg mb-12">
            We can bundle flights, accommodation, tours, and transfers into a single, 
            stress-free quote tailored to your budget.
          </p>
          <Link to="/quote" className="bg-tropical-coral text-white px-12 py-5 rounded-full text-xs font-bold tracking-widest hover:scale-105 transition-all inline-block">
            GET A CUSTOM QUOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
