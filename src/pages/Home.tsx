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
            src="https://i.ibb.co/vxGXzpwb/boundary-wall-walk-2-orig.jpg" 
            className="w-full h-full object-cover brightness-75 scale-105"
            alt="St Helena Mountain View"
            referrerPolicy="no-referrer"
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
              Rediscover <br />
              <span className="italic text-tropical-coral">St Helena Island</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-medium tracking-wide mb-10 max-w-2xl mx-auto leading-relaxed">
              A family legacy of 60+ years. Experience pure adventure, rich history, and the unique charm of our 1929 vintage Charabanc.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/plan-trip" 
                className="bg-tropical-coral hover:bg-tropical-coral/90 text-white px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] transition-all shadow-xl hover:scale-105"
              >
                START YOUR ADVENTURE
              </Link>
              <Link 
                to="/charabanc" 
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full text-sm font-bold tracking-[0.2em] transition-all"
              >
                THE CHARABANC EXPERIENCE
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Welcome to Paradise</h2>
          <h3 className="text-4xl md:text-6xl font-display text-ocean-deep leading-tight mb-8">
            Explore St Helena Island
          </h3>
          <p className="text-ocean-deep/70 text-xl leading-relaxed max-w-4xl mx-auto italic">
            "Pure Adventure, Rich History, Heritage and Natural Beauty... and on top of that, St Helena offers Amazing Hospitality."
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-ocean-deep/70 text-lg leading-relaxed">
            <p>
              St Helena remains a paradise, off the normal beaten tracks. The island has all the facilities one would expect of a British Overseas Territory. Everybody speaks English and you should enjoy a comfortable, happy, and rather unique holiday.
            </p>
            <p>
              Visitors are made most welcome by the friendliness of the local inhabitants. Come and see the island for yourself and enjoy its varied landscapes. Enjoy the freedom of life on a tropical island that has not yet been discovered by the masses.
            </p>
            <p>
              Its contrasting and spectacular scenery, centuries-old military fortifications, and graceful buildings make it the perfect place for active exploration.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img 
              src="https://i.ibb.co/zHsxb1Zc/82-radioa-019.jpg" 
              className="w-full h-full object-cover"
              alt="St Helena Sea View"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Charabanc Feature Section */}
      <section className="py-24 bg-ocean-deep text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://i.ibb.co/v6H6B7mX/1929-charabanc-1.jpg" 
                className="w-full h-full object-cover opacity-80"
                alt="Vintage Charabanc"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-tropical-coral px-8 py-4 rounded-2xl shadow-xl">
              <p className="font-display text-2xl">EST. 1929</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">A Unique Advantage</h2>
            <h3 className="text-4xl md:text-6xl font-display text-white leading-tight mb-8">
              The Vintage <br />Charabanc
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Corkers' Tourist Service is a family business which has been operating for 60+ years. We have a distinct advantage over our competitors: our operational vintage 1929 Charabanc open-topper.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              This magnificent piece of history is used to take tourists around the island, offering an authentic and nostalgic way to rediscover St Helena. It's an extraordinary adventure that awaits you.
            </p>
            <Link 
              to="/charabanc" 
              className="inline-flex items-center gap-3 text-ocean-aqua font-bold uppercase tracking-widest text-xs group"
            >
              LEARN ABOUT THE CHARABANC <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
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

          <div className="grid grid-cols-1 max-w-md mx-auto">
            {[
              { name: "St Helena", img: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop", desc: "The Napoleon Island" }
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

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-y border-ocean-deep/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Our Customers' Experiences</h2>
            <h3 className="text-4xl md:text-6xl font-display text-ocean-deep leading-tight mb-8">
              What People Say
            </h3>
            <p className="text-ocean-deep/60 text-lg leading-relaxed max-w-2xl mx-auto">
              We welcome feedback from visitors, tourists and anyone in general who have used our services. 
              Here are some of the comments we received:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Unique experience", author: "Verified Visitor" },
              { quote: "Knowledgeable tour guide and driver", author: "Island Explorer" },
              { quote: "Super guide", author: "Travel Enthusiast" }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-island-sand/30 p-12 rounded-[3rem] border border-ocean-deep/5 text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="flex justify-center gap-1 mb-8 text-tropical-coral">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-2xl font-display text-ocean-deep mb-8 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="w-12 h-1 bg-ocean-aqua/20 mx-auto mb-6 group-hover:w-24 transition-all duration-500" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-ocean-deep/40">
                  {testimonial.author}
                </p>
              </motion.div>
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
