import { motion } from "motion/react";
import { toast } from "sonner";
import { useState } from "react";
import { Calendar, Users, Mail, User, MessageSquare, ArrowRight } from "lucide-react";

interface BookingPageProps {
  type: "tour" | "plan" | "quote" | "charabanc" | "custom" | "transfer" | "accommodation" | "car-hire";
}

const config = {
  tour: { title: "Book a Tour", subtitle: "Experience the magic of St Helena with our expert guides." },
  plan: { title: "Plan Your Trip", subtitle: "Let us curate your entire South Atlantic adventure." },
  quote: { title: "Get a Quote", subtitle: "Receive a personalized, all-inclusive travel estimate." },
  charabanc: { title: "Charabanc Experience", subtitle: "Book a traditional island group tour." },
  custom: { title: "Custom Request", subtitle: "Tell us exactly what you're looking for." },
  transfer: { title: "Airport Transfers", subtitle: "Seamless pickup and drop-off services." },
  accommodation: { title: "Book Accommodation", subtitle: "Find the perfect place to stay on the island." },
  "car-hire": { title: "Car Hire", subtitle: "Explore the island at your own pace." }
};

export default function BookingPage({ type }: BookingPageProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "1",
    message: ""
  });

  const { title, subtitle } = config[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request submitted! Redirecting to WhatsApp...");
    const text = `Hello Corkers! I'm interested in ${title}. 
Name: ${formData.name}
Email: ${formData.email}
Date: ${formData.date}
Guests: ${formData.guests}
Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    setTimeout(() => {
      window.open(`https://wa.me/29061078?text=${encodedText}`, "_blank");
    }, 1000);
  };

  return (
    <div className="bg-island-sand pt-32 pb-32">
      <section className="px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display text-ocean-deep mb-6 uppercase tracking-tight">{title}</h1>
          <p className="text-ocean-deep/60 text-lg leading-relaxed">{subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-ocean-deep/5"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-aqua" size={18} />
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-aqua" size={18} />
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Preferred Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-aqua" size={18} />
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-aqua" size={18} />
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                    className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all appearance-none"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Additional Details</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-6 text-ocean-aqua" size={18} />
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all resize-none"
                  placeholder="Tell us about your travel plans, special requirements, or questions..."
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-tropical-coral text-white py-5 rounded-2xl font-bold tracking-widest hover:bg-ocean-deep transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              SUBMIT REQUEST <ArrowRight size={20} />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
