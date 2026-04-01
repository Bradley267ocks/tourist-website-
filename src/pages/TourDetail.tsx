import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Calendar, Clock, MapPin } from "lucide-react";

const tourData: Record<string, any> = {
  historical: {
    title: "Historical Day Tour",
    hero: "https://i.ibb.co/JWdBN6WB/the-boer-cemetery-1.jpg",
    desc: "St Helena is steeped in history, from its discovery to the present day, and it is impossible to include all historic points of interest in a single tour. Our typical day tour offers a comprehensive look at the island's heritage.",
    includes: ["Expert local guide", "Entrance fees to all sites", "Private transportation", "Bottled water and snacks"],
    itinerary: [
      { time: "09:00", activity: "Plantation House Grounds & Jonathan the Tortoise" },
      { time: "11:00", activity: "Tour of Plantation House & St Paul’s Cathedral" },
      { time: "12:30", activity: "Boer Cemetery & Princes Lodge" },
      { time: "14:00", activity: "The Castell Collection" },
      { time: "15:30", activity: "High Knoll Fort (Stunning Island Views)" }
    ]
  },
  napoleon: {
    title: "Napoleon's Life Tour",
    hero: "https://i.ibb.co/hR54T5wD/napoleon.jpg",
    desc: "Follow the Emperor's life on St Helena Island. Napoleon arrived on 15th October 1815 and died in 1821. Join us as we retrace his footsteps from Jamestown to his final resting place.",
    includes: ["Specialist history guide", "Museum entry fees", "Distillery tasting", "Transportation"],
    itinerary: [
      { time: "09:00", activity: "Jamestown to the Museum at the Briars" },
      { time: "11:00", activity: "Longwood House (Napoleon's Residence)" },
      { time: "13:30", activity: "Napoleon's Tomb (His favorite walking place)" },
      { time: "15:30", activity: "World's Most Remote Distillery (Brandy Tasting)" }
    ]
  },
  hiking: {
    title: "Inspirational Hikes",
    hero: "https://i.ibb.co/yFtkTp3h/peak-dale-1.jpg",
    desc: "We offer inspirational hikes for both beginners and experienced hikers. Discover superb scenery, endemic plants, and historic sites where wartime cannons remain abandoned.",
    includes: ["Certified hiking guide", "Safety briefing", "Packed lunch", "Walking tips and guidance"],
    itinerary: [
      { time: "08:00", activity: "Diana’s Peak (Cloud Forest & Endemics)" },
      { time: "10:30", activity: "Lots Wife Ponds (Coastal Adventure)" },
      { time: "13:00", activity: "Fairyland & Cason’s Forest" },
      { time: "14:30", activity: "Plantation Forest & Jamestown Run" }
    ]
  },
  ocean: {
    title: "Ocean Activities",
    hero: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop",
    desc: "The waters surrounding St Helena are a sanctuary for marine life. Join us for world-class diving, snorkeling with whale sharks, or peaceful dolphin watching excursions.",
    includes: ["Snorkeling gear", "Boat charter & crew", "Marine biologist briefing", "Refreshments on board"],
    itinerary: [
      { time: "08:30", activity: "Harbour Departure" },
      { time: "10:00", activity: "Whale Shark Spotting (Seasonal)" },
      { time: "12:00", activity: "Dolphin Watching & Snorkeling" },
      { time: "14:00", activity: "Return to Jamestown Harbour" }
    ]
  }
};

export default function TourDetail() {
  const { type } = useParams();
  const tour = tourData[type || "historical"];

  if (!tour) return <div className="pt-32 text-center">Tour not found.</div>;

  return (
    <div className="bg-island-sand">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end pb-20 px-6 overflow-hidden">
        <img src={tour.hero} className="absolute inset-0 w-full h-full object-cover brightness-50" alt={tour.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-island-sand via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <Link to="/tours" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 text-xs uppercase tracking-widest font-bold">
            <ArrowLeft size={16} /> BACK TO TOURS
          </Link>
          <h1 className="text-5xl md:text-7xl font-display text-ocean-deep uppercase tracking-tight">{tour.title}</h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-8">The Experience</h2>
          <p className="text-xl text-ocean-deep/70 leading-relaxed mb-12">{tour.desc}</p>
          
          <h3 className="text-2xl font-display text-ocean-deep mb-8">What's Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {tour.includes.map((item: string) => (
              <div key={item} className="flex items-center gap-4 text-ocean-deep/80">
                <CheckCircle2 className="text-ocean-aqua" size={20} />
                <span className="text-sm uppercase tracking-wider font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-display text-ocean-deep mb-8">Itinerary</h3>
          <div className="space-y-8">
            {tour.itinerary.map((step: any, i: number) => (
              <div key={i} className="flex gap-8 items-start border-l-2 border-ocean-aqua/20 pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-ocean-aqua rounded-full border-4 border-island-sand" />
                <span className="text-xs font-bold text-ocean-aqua uppercase tracking-widest pt-1">{step.time}</span>
                <span className="text-lg text-ocean-deep font-medium">{step.activity}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-ocean-deep/5 sticky top-32">
            <h4 className="text-xl font-display text-ocean-deep mb-6">Book This Tour</h4>
            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4 text-ocean-deep/60">
                <Clock size={18} className="text-ocean-aqua" />
                <span className="text-sm font-bold uppercase tracking-widest">Duration: Full Day</span>
              </div>
              <div className="flex items-center gap-4 text-ocean-deep/60">
                <MapPin size={18} className="text-ocean-aqua" />
                <span className="text-sm font-bold uppercase tracking-widest">Location: St Helena</span>
              </div>
              <div className="flex items-center gap-4 text-ocean-deep/60">
                <Calendar size={18} className="text-ocean-aqua" />
                <span className="text-sm font-bold uppercase tracking-widest">Available: Daily</span>
              </div>
            </div>
            <Link to="/book-tour" className="block w-full bg-tropical-coral text-white text-center py-4 rounded-full font-bold tracking-widest hover:bg-ocean-deep transition-all">
              RESERVE NOW
            </Link>
            <p className="text-center text-[10px] text-ocean-deep/40 uppercase tracking-widest mt-4">
              Free cancellation up to 48h before
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
