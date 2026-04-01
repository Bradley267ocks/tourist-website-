import { motion } from "motion/react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Redirecting to WhatsApp...");
    const text = `Hello Corkers! 
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Comment: ${formData.comment}`;
    
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
          <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Contact Us</h1>
          <h2 className="text-6xl md:text-[8vw] font-display uppercase tracking-tighter text-ocean-deep leading-[0.85] mb-12">
            Visit Us in <br />Jamestown
          </h2>
          <div className="space-y-6 text-xl text-ocean-deep/60 leading-relaxed max-w-3xl">
            <p>
              Our business is strategically located in the historical city of Jamestown, the Island's capital and main sea access point to the Island.
            </p>
            <p className="text-sm uppercase tracking-widest font-bold text-ocean-deep/40">We are within close proximity of:</p>
            <p className="text-base">
              Accommodation Providers, Shipping and Air Services Agency, St Helena Museum, Swimming Pool, High Street Shops, Police and Medical Services, Garages, St James Church (the oldest Church in the Southern Hemisphere), Bars and Dining Venues, St Helena Government, Castle Gardens, Water Front, Pilling Primary School, Jacobs Ladder, plus many more amenities and attractions.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="flex gap-8">
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua shrink-0">
              <Phone size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-2">Telephone & Fax</h4>
              <p className="text-xl font-display text-ocean-deep">00 290 22735 or 22518</p>
              <p className="text-sm text-ocean-deep/60">Fax: 00 290 22735</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-2">Email Us</h4>
              <a href="mailto:CorkersTouristService@helanta.co.sh" className="text-xl font-display text-ocean-deep hover:text-ocean-aqua transition-colors">CorkersTouristService@helanta.co.sh</a>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="w-16 h-16 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-2">Our Office</h4>
              <p className="text-xl font-display text-ocean-deep">Tracey and Colin Corker</p>
              <p className="text-lg text-ocean-deep/70">Main Street, Jamestown</p>
              <p className="text-sm text-ocean-deep/60">St Helena Island, South Atlantic Ocean STHL 1ZZ</p>
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
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">First Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Last Name *</label>
                <input 
                  type="text" 
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Email *</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-ocean-deep/40 mb-3">Comment *</label>
              <textarea 
                required
                rows={6}
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className="w-full bg-island-sand/50 border border-ocean-deep/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-ocean-aqua transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-tropical-coral text-white py-5 rounded-2xl font-bold tracking-widest hover:bg-ocean-deep transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              SUBMIT VIA WHATSAPP <MessageCircle size={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
