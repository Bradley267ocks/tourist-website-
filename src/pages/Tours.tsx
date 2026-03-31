import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Compass, History, Mountain, Waves } from "lucide-react";

export default function Tours() {
  const tourCategories = [
    {
      id: "historical",
      title: "Historical Tours",
      icon: <History />,
      desc: "Walk in the footsteps of Napoleon, East India Company merchants, and liberated Africans.",
      img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "hiking",
      title: "Hiking & Nature",
      icon: <Mountain />,
      desc: "From the lush peaks of Diana's Peak to the rugged 'Post Box' walks across volcanic ridges.",
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "island",
      title: "Island Highlights",
      icon: <Compass />,
      desc: "A complete overview of St Helena's most iconic landmarks in a single day.",
      img: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop"
    },
    {
      id: "ocean",
      title: "Ocean Activities",
      icon: <Waves />,
      desc: "Whale shark swimming, dolphin watching, and world-class diving in crystal clear waters.",
      img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-island-sand pt-32">
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-3xl">
          <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Experiences</h1>
          <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
            Unforgettable <br />Island Journeys
          </h2>
          <p className="text-ocean-deep/70 text-lg leading-relaxed">
            Every tour we offer is a story waiting to be told. Whether you are a history buff, 
            an avid hiker, or an ocean lover, we have crafted the perfect way to experience the South Atlantic.
          </p>
        </div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        {tourCategories.map((tour, i) => (
          <motion.div
            key={tour.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-[500px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img src={tour.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75" alt={tour.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/20 to-transparent" />
            <div className="absolute inset-0 p-12 flex flex-col justify-end">
              <div className="w-12 h-12 bg-ocean-aqua rounded-xl flex items-center justify-center text-white mb-6">
                {tour.icon}
              </div>
              <h3 className="text-3xl font-display text-white mb-4 uppercase tracking-tight">{tour.title}</h3>
              <p className="text-white/70 mb-8 max-w-sm text-sm leading-relaxed">{tour.desc}</p>
              <Link 
                to={`/tours/${tour.id}`} 
                className="bg-tropical-coral text-white px-8 py-3 rounded-full text-[10px] font-bold tracking-widest hover:bg-white hover:text-tropical-coral transition-all w-fit"
              >
                VIEW TOUR DETAILS
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Custom Tour CTA */}
      <section className="py-24 bg-ocean-aqua text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display mb-8">Want something unique?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            We specialize in custom tour requests. Tell us your interests, and we'll build a 
            bespoke itinerary just for you.
          </p>
          <Link to="/custom-tour" className="bg-ocean-deep text-white px-12 py-5 rounded-full text-xs font-bold tracking-widest hover:scale-105 transition-all inline-block">
            REQUEST CUSTOM TOUR
          </Link>
        </div>
      </section>
    </div>
  );
}
