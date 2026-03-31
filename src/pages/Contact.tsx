import { motion } from "motion/react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dates: "",
    package: "General Enquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Redirecting to WhatsApp...");
    const text = `Hello Corkers! 
Name: ${formData.name}
Email: ${formData.email}
Dates: ${formData.dates}
Package: ${formData.package}
Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    setTimeout(() => {
      window.open(`https://wa.me/29061078?text=${encodedText}`, "_blank");
    }, 1000);
  };

  return (
    <div className="bg-island-sand pt-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Get in Touch</h1>
          <h2 className="text-6xl md:text-[8vw] font-display uppercase tracking-tighter text-ocean-deep leading-[0.85] mb-12">
            Start Your <br />Adventure
          </h2>
          <p className="text-xl text-ocean-deep/60 leading-relaxed max-w-2xl">
            Our island experts are standing by to help you navigate the journey of a lifetime. 
            Whether it's a simple question or a complex multi-island itinerary, we're here for you.
          </p>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="flex gap-8">
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua shrink-0">
              <Phone size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-2">Call Us</h4>
              <a href="tel:+29061078" className="text-2xl font-display text-ocean-deep hover:text-ocean-aqua transition-colors">+290 61078</a>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-2">Email Us</h4>
              <a href="mailto:corkerstouristservice@gmail.com" className="text-2xl font-display text-ocean-deep hover:text-ocean-aqua transition-colors">corkerstouristservice@gmail.com</a>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-2">Visit Us</h4>
              <p className="text-2xl font-display text-ocean-deep">Main Street, Jamestown, St Helena Island</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-ocean-deep/5">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15587.234567890123!2d-5.716667!3d-15.933333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU2JzAwLjAiUyA1wrA0MycwMC4wIlc!5e0!3m2!1sen!2s!4v1234567890123" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-ocean-deep/5">
          <h3 className="text-3xl font-display uppercase text-ocean-deep mb-10 tracking-tight">Enquiry Form</h3>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Email Address</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Travel Dates</label>
                <input 
                  type="text" 
                  value={formData.dates}
                  onChange={(e) => setFormData({...formData, dates: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                  placeholder="e.g. Dec 2025"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Interested In</label>
                <select 
                  value={formData.package}
                  onChange={(e) => setFormData({...formData, package: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all appearance-none"
                >
                  <option>General Enquiry</option>
                  <option>Island Tours</option>
                  <option>Flight Logistics</option>
                  <option>Accommodation</option>
                  <option>Full Travel Package</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Your Message</label>
              <textarea 
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all resize-none"
                placeholder="Tell us about your travel plans..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-tropical-coral text-white py-5 rounded-2xl font-bold tracking-widest hover:bg-ocean-deep transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              SEND VIA WHATSAPP <MessageCircle size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
