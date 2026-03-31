import { motion } from "motion/react";
import { Plane, Hotel, Ship, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

export default function TravelAgents() {
  const services = [
    {
      title: "Flight Bookings",
      icon: <Plane className="text-orange-500" size={32} />,
      description: "We handle all flight arrangements between St Helena and Johannesburg or Cape Town, ensuring a smooth connection."
    },
    {
      title: "Accommodation",
      icon: <Hotel className="text-orange-500" size={32} />,
      description: "From boutique hotels in Jamestown to charming guesthouses in the countryside, we find the perfect stay for you."
    },
    {
      title: "Cruise Logistics",
      icon: <Ship className="text-orange-500" size={32} />,
      description: "Planning a visit via sea? We coordinate port arrivals, shore excursions, and local transport."
    },
    {
      title: "Travel Insurance",
      icon: <ShieldCheck className="text-orange-500" size={32} />,
      description: "Peace of mind for your remote adventure. We advise on the necessary coverage for island travel."
    }
  ];

  return (
    <div className="bg-[#050505] pt-32">
      <section className="px-6 max-w-7xl mx-auto mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500 mb-6">Logistics Experts</h1>
          <h2 className="text-6xl md:text-[8vw] font-display uppercase tracking-tighter text-white leading-[0.85] mb-12">
            Travel <br />Agents
          </h2>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            Navigating travel to one of the world's most remote islands requires expertise. 
            We handle the details so you can focus on the discovery.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 p-12 rounded-[2.5rem] border border-white/10 hover:border-orange-500/30 transition-all group"
            >
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl group-hover:bg-orange-500/10 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-3xl font-display uppercase text-white mb-6 tracking-tight">{s.title}</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8">{s.description}</p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3 text-white/40 text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-orange-500" /> Personalized Service
                </li>
                <li className="flex items-center gap-3 text-white/40 text-sm uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-orange-500" /> Local Knowledge
                </li>
              </ul>
              <a 
                href="https://wa.me/29061078"
                target="_blank"
                className="flex items-center gap-2 text-orange-500 font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
              >
                ENQUIRE NOW <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-orange-600">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter text-white mb-8">
              Why Book <br />With Us?
            </h2>
            <p className="text-white/80 text-xl leading-relaxed mb-12">
              We are based on St Helena. We know the flight schedules, the best rooms, 
              and the local contacts that aren't on the internet.
            </p>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-4xl font-display text-white/40">01</div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Instant Support</h4>
                  <p className="text-white/70">Chat with us directly via WhatsApp for real-time updates.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-display text-white/40">02</div>
                <div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight mb-2">Tailor-Made</h4>
                  <p className="text-white/70">Every itinerary is built from scratch to suit your interests.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden aspect-square">
            <img 
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="Planning"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
