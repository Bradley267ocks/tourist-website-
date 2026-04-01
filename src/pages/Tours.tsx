import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight, Compass, History, Mountain, Waves } from "lucide-react";

export default function Tours() {
  const tours = [
    {
      id: "historical",
      title: "Historical Day Tour",
      icon: <History />,
      desc: "St Helena is steeped in history, from its discovery to the present day. A typical day tour can include a visit to Plantation House to meet Jonathan the Tortoise, St Paul’s Cathedral, the Boer Cemetery, and stunning views from High Knoll.",
      img: "https://i.ibb.co/fzgY9V34/plantation-house-3.jpg",
      highlights: ["Jonathan the Tortoise", "Plantation House", "St Paul's Cathedral", "High Knoll Fort"]
    },
    {
      id: "napoleon",
      title: "Napoleon's Life Tour",
      icon: <Compass />,
      desc: "Follow the Emperor's life on St Helena. Retrace his footsteps from Jamestown to the Briars, visit his home at Longwood House, and his final resting place at the Tomb. Conclude with a visit to the world's most remote distillery.",
      img: "https://i.ibb.co/9mW879qy/longwood-house-orig.jpg",
      highlights: ["Longwood House", "The Briars", "Napoleon's Tomb", "Remote Distillery"]
    },
    {
      id: "hiking",
      title: "Inspirational Hikes",
      icon: <Mountain />,
      desc: "From gentle ambles to challenging hikes, we offer everything for beginners and experienced hikers. Discover endemic plants, historic wartime cannons, and spectacular coastal views.",
      img: "https://i.ibb.co/V0ZwvXqr/diana-s-peak.jpg",
      highlights: ["Diana's Peak", "Lots Wife Ponds", "Fairyland", "Jamestown Run"]
    }
  ];

  return (
    <div className="bg-island-sand pt-32">
      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <div className="max-w-4xl">
          <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Tours</h1>
          <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
            Stress-Free <br />Island Exploration
          </h2>
          <p className="text-ocean-deep/70 text-xl leading-relaxed max-w-2xl">
            Have that personal touch to your holiday. We take care of everything for you from the minute you arrive to the minute of your departure. Reliable ground-handling and destination management services are essential.
          </p>
        </div>
      </section>

      {/* Accommodation Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img src="https://i.ibb.co/yLjbc0C/jean-accom.jpg" className="rounded-2xl aspect-square object-cover" alt="Accommodation" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/6RXbPd1K/20180331-170619-orig.jpg" className="rounded-2xl aspect-square object-cover mt-8" alt="B&B" referrerPolicy="no-referrer" />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Where to Stay</h2>
            <h3 className="text-4xl font-display text-ocean-deep mb-8">Tailored Accommodation</h3>
            <p className="text-ocean-deep/70 text-lg leading-relaxed mb-8">
              There are a number of accommodation places on the Island, from Bed and Breakfasts and Self Catering to luxury Hotels. 
              Booking through us allows you to have a choice that is best suited to your budget, needs, and requirements.
            </p>
            <Link to="/accommodation" className="bg-ocean-deep text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-ocean-aqua transition-all inline-block">
              BOOK ACCOMMODATION
            </Link>
          </div>
        </div>
      </section>

      {/* Once in a Lifetime Ride */}
      <section className="py-24 bg-ocean-deep text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Unique Experience</h2>
          <h3 className="text-4xl md:text-6xl font-display mb-8">Once in a Lifetime Ride</h3>
          <p className="text-white/70 text-xl max-w-3xl mx-auto leading-relaxed mb-12">
            In St Helena, only with Corkers’ Tourist Service in our touring buses. Come and join us for that one-time experience. 
            Choose any of our tours and we will provide you with that unique experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <img src="https://i.ibb.co/Q3KzhH2x/corkers-unique-tour-bus-2-orig.jpg" className="rounded-2xl aspect-[4/5] object-cover" alt="Unique Tour Bus" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/fVphQNr1/class-afloat-021-orig.jpg" className="rounded-2xl aspect-[4/5] object-cover md:mt-12" alt="Class Afloat Charabanc" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/HD1XPWfx/1929-charabanc.jpg" className="rounded-2xl aspect-[4/5] object-cover" alt="1929 Charabanc" referrerPolicy="no-referrer" />
            <img src="https://i.ibb.co/v6H6B7mX/1929-charabanc-1.jpg" className="rounded-2xl aspect-[4/5] object-cover md:mt-12" alt="Vintage Bus" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Tour List */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-32">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[16/10] rounded-[3rem] overflow-hidden shadow-2xl">
                  <img src={tour.img} className="w-full h-full object-cover" alt={tour.title} referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="w-12 h-12 bg-ocean-aqua/10 rounded-xl flex items-center justify-center text-ocean-aqua mb-6">
                  {tour.icon}
                </div>
                <h3 className="text-4xl font-display text-ocean-deep mb-6 uppercase tracking-tight">{tour.title}</h3>
                <p className="text-ocean-deep/70 text-lg leading-relaxed mb-8">{tour.desc}</p>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {tour.highlights.map(h => (
                    <div key={h} className="flex items-center gap-3 text-sm font-bold text-ocean-deep/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-tropical-coral" />
                      {h}
                    </div>
                  ))}
                </div>
                <Link 
                  to={`/tours/${tour.id}`} 
                  className="bg-tropical-coral text-white px-10 py-4 rounded-full text-xs font-bold tracking-widest hover:bg-ocean-deep transition-all inline-flex items-center gap-3"
                >
                  VIEW FULL ITINERARY <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Custom Tour CTA */}
      <section className="py-24 bg-ocean-aqua text-white text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display mb-8">Ready for Adventure?</h2>
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            We specialize in custom tour requests. Tell us your interests, and we'll build a 
            bespoke itinerary just for you.
          </p>
          <Link to="/custom-tour" className="bg-ocean-deep text-white px-12 py-5 rounded-full text-xs font-bold tracking-widest hover:scale-105 transition-all inline-block">
            GET STARTED
          </Link>
        </div>
      </section>
    </div>
  );
}
