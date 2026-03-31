import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Anchor, Compass } from "lucide-react";

export default function Destinations() {
  const islands = [
    {
      name: "St Helena",
      tagline: "The Secret of the South Atlantic",
      desc: "A lush volcanic island with a dramatic coastline and a heart of green. Home to the world's oldest living land animal (Jonathan the Tortoise) and the final home of Napoleon Bonaparte.",
      img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop",
      highlights: ["Napoleon's Tomb", "Jacob's Ladder", "Diana's Peak National Park"]
    },
    {
      name: "Ascension Island",
      tagline: "A Volcanic Masterpiece",
      desc: "Known for its unique 'Green Mountain' and its role as a vital communications hub. A paradise for turtle watching and exploring stark, beautiful volcanic landscapes.",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
      highlights: ["Green Mountain", "Turtle Nesting Beaches", "Comfortless Cove"]
    },
    {
      name: "Tristan da Cunha",
      tagline: "The Loneliest Island in the World",
      desc: "The most remote inhabited archipelago on Earth. A place where time slows down and the community spirit is as strong as the Atlantic winds.",
      img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop",
      highlights: ["Edinburgh of the Seven Seas", "The Volcano", "Rockhopper Penguins"]
    }
  ];

  return (
    <div className="bg-island-sand pt-32">
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl">
          <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our World</h1>
          <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
            The South Atlantic <br />Archipelago
          </h2>
          <p className="text-ocean-deep/70 text-lg leading-relaxed">
            Explore the three jewels of the British Overseas Territories. Each island offers a 
            distinct personality, from the lush history of St Helena to the volcanic raw beauty of Ascension.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto space-y-32 pb-32">
        {islands.map((island, i) => (
          <motion.div
            key={island.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
          >
            <div className="w-full lg:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img src={island.img} className="w-full h-full object-cover" alt={island.name} />
            </div>
            <div className="w-full lg:w-1/2">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-ocean-aqua mb-4">{island.tagline}</h3>
              <h4 className="text-4xl md:text-6xl font-display text-ocean-deep mb-8">{island.name}</h4>
              <p className="text-ocean-deep/70 text-lg leading-relaxed mb-8">{island.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {island.highlights.map(h => (
                  <div key={h} className="flex items-center gap-3 text-ocean-deep/80">
                    <div className="w-1.5 h-1.5 bg-tropical-coral rounded-full" />
                    <span className="text-xs uppercase tracking-widest font-bold">{h}</span>
                  </div>
                ))}
              </div>
              <Link to="/plan-trip" className="bg-ocean-deep text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-tropical-coral transition-all inline-block">
                PLAN A TRIP TO {island.name.toUpperCase()}
              </Link>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
