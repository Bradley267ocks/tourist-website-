import { motion } from "motion/react";
import { Compass, Users, Map, Heart, ArrowRight } from "lucide-react";

export default function IslandExperts() {
  const values = [
    {
      title: "Local Heritage",
      icon: <Users className="text-orange-500" />,
      text: "We are proud 'Saints' with deep roots in the island's culture and history."
    },
    {
      title: "Sustainable Travel",
      icon: <Heart className="text-orange-500" />,
      text: "We promote responsible tourism that respects our unique ecosystem and community."
    },
    {
      title: "Expert Guidance",
      icon: <Compass className="text-orange-500" />,
      text: "Decades of experience navigating the logistics of the South Atlantic."
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
          <h1 className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500 mb-6">Born and Raised</h1>
          <h2 className="text-6xl md:text-[8vw] font-display uppercase tracking-tighter text-white leading-[0.85] mb-12">
            Island <br />Experts
          </h2>
          <p className="text-xl text-white/60 leading-relaxed max-w-2xl">
            Corkers Tourist Service is more than an agency; we are your local family on the island. 
            We live here, work here, and love sharing our home with the world.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((v, idx) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border border-white/10">
                {v.icon}
              </div>
              <h3 className="text-2xl font-display uppercase text-white mb-4 tracking-tight">{v.title}</h3>
              <p className="text-white/60 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 rounded-[3rem] overflow-hidden aspect-[3/4]">
            <img 
              src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop" 
              className="w-full h-full object-cover"
              alt="St Helena Landscape"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-orange-500 mb-6">Our Story</h2>
            <h3 className="text-5xl font-display uppercase tracking-tighter text-white mb-8 leading-none">
              A Legacy of <br />Island Hospitality
            </h3>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                Founded on the principles of authentic storytelling and seamless travel, Corkers has grown into the island's most trusted tourist service.
              </p>
              <p>
                We believe that St Helena is not just a destination, but a feeling of isolation, beauty, and community that stays with you long after you leave.
              </p>
              <p>
                Our team consists of local experts who specialize in everything from Napoleon's history to the best fishing spots and hiking trails.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-2xl">C</div>
                <div>
                  <p className="text-white font-bold uppercase tracking-widest text-sm">Corkers Team</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest">St Helena Island</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
