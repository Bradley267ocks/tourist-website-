import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Plane, Hotel, Anchor, ShieldCheck, Car, Briefcase, ArrowRight } from "lucide-react";

export default function Services() {
  const mainServices = [
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

  const activities = [
    "Karaoke Nights", "Camping Trips", "Guided Hikes", "Off-Road Trips", 
    "Nature Walks", "Scuba Diving", "Fishing Trips", "Snorkeling", 
    "Water Sports", "Shooting", "Football", "Golf", "Darts & Dominoes"
  ];

  return (
    <div className="bg-island-sand pt-32">
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Services</h1>
        <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
          Seamless Island <br />Logistics
        </h2>
        <p className="text-ocean-deep/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Reliable ground-handling and destination management services are essential for a stress-free holiday. 
          We take care of everything for you from the minute you arrive to the minute of your departure.
        </p>
      </section>

      {/* Main Services Grid */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {mainServices.map((s, i) => (
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

      {/* Transport Fleet Section */}
      <section className="py-24 bg-ocean-deep text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Transport Services</h2>
              <h3 className="text-4xl md:text-6xl font-display mb-8">Our Fleet</h3>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Beyond our vintage Charabanc, we maintain a versatile fleet of modern touring vehicles to suit any group size or requirement.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-display text-ocean-aqua">04</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">Ford Escort Taxi</h4>
                    <p className="text-white/40 text-xs">Up to four passengers</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-display text-ocean-aqua">14</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">Ford Transit Saloon Buses</h4>
                    <p className="text-white/40 text-xs">Up to fourteen passengers</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-white/5 rounded-2xl border border-white/10">
                  <div className="text-3xl font-display text-ocean-aqua">16+</div>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-xs">Open Pick-ups</h4>
                    <p className="text-white/40 text-xs">Up to sixteen passengers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://i.ibb.co/fGSLD2CD/visitors-on-a-guided-tour.jpg" className="rounded-2xl aspect-square object-cover" alt="Guided Tour" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/YBGnR2rn/tasting-the-st-helena-drinks.jpg" className="rounded-2xl aspect-square object-cover mt-8" alt="Local Drinks Tasting" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Activities & Packages */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Tours & Activities</h2>
            <h3 className="text-4xl font-display text-ocean-deep mb-8">Prearranged Packages</h3>
            <p className="text-ocean-deep/70 text-lg leading-relaxed mb-10">
              Send us your desired tour or activity and we will provide a custom quote. Once agreed, we handle every detail. 
              We also offer unique cultural visits:
            </p>
            <ul className="space-y-4 mb-12">
              {["Youth at Work Visits", "Elderly Chats (Island History)", "Fish Factory Tours", "Challenging the Three Peaks"].map(item => (
                <li key={item} className="flex items-center gap-3 text-ocean-deep font-bold uppercase tracking-widest text-xs">
                  <div className="w-2 h-2 rounded-full bg-tropical-coral" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-ocean-aqua/5 p-8 rounded-3xl border border-ocean-aqua/10">
              <h4 className="font-display text-xl text-ocean-deep mb-4 italic">Coming Soon</h4>
              <p className="text-ocean-deep/60 text-sm">
                Corker's Tourist Information Office & Prebooked 4 Day Tours. Details available shortly.
              </p>
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-ocean-deep/5">
            <h3 className="text-2xl font-display text-ocean-deep mb-8 uppercase tracking-tight">Set Activities</h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {activities.map(a => (
                <div key={a} className="flex items-center gap-3 text-xs font-bold text-ocean-deep/50 uppercase tracking-widest">
                  <div className="w-1 h-1 rounded-full bg-ocean-aqua" />
                  {a}
                </div>
              ))}
            </div>
            <Link to="/plan-trip" className="mt-12 w-full bg-tropical-coral text-white py-4 rounded-full text-center font-bold tracking-widest text-xs hover:bg-ocean-deep transition-all block">
              ENQUIRE ABOUT ACTIVITIES
            </Link>
          </div>
        </div>
      </section>

      {/* Activities & Lifestyle Section */}
      <section className="py-24 bg-island-sand border-t border-ocean-deep/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl aspect-video">
            <img src="https://i.ibb.co/SDq1gNF4/enjoying-a-night-out-orig.jpg" className="w-full h-full object-cover" alt="Island Lifestyle" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Island Life</h2>
            <h3 className="text-4xl md:text-6xl font-display text-ocean-deep leading-tight mb-8">
              Authentic <br />Saint Hospitality
            </h3>
            <p className="text-ocean-deep/70 text-lg leading-relaxed mb-8">
              Experience the true heart of St Helena. From local gatherings to quiet moments of discovery, 
              we connect you with the people and traditions that make our island home so special.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://i.ibb.co/JSMF2D8/dscf1493.jpg" className="rounded-2xl aspect-square object-cover" alt="Local Culture" referrerPolicy="no-referrer" />
              <img src="https://i.ibb.co/Xr55RXMx/photo-collection-of-st-helena-1.jpg" className="rounded-2xl aspect-square object-cover" alt="Island Collection" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
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
