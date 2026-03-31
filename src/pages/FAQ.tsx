import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I get to St Helena?",
      a: "Currently, the most common way is via Airlink flights from Johannesburg, South Africa. There are also occasional cruise ship visits and private yacht arrivals. We can help you coordinate all flight logistics."
    },
    {
      q: "Do I need a visa to visit?",
      a: "Most visitors require an Entry Permit. You can apply for this online via the St Helena Government website. We provide guidance on this process as part of our travel planning service."
    },
    {
      q: "What is the best time of year to visit?",
      a: "St Helena is a year-round destination. The summer (December to March) is warmest and best for whale shark swimming. The winter (June to September) is cooler and perfect for hiking."
    },
    {
      q: "Is there internet on the island?",
      a: "Yes, there is Wi-Fi available in many public places and hotels, and mobile data is available via local SIM cards. However, connection speeds can be slower than what you might be used to—perfect for a digital detox!"
    },
    {
      q: "What currency is used?",
      a: "The local currency is the St Helena Pound, which is at parity with the British Pound (GBP). British Pounds are also widely accepted. Credit cards are accepted in some places, but cash is still king on the island."
    }
  ];

  return (
    <div className="bg-island-sand pt-32 pb-32">
      <section className="px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Common Questions</h1>
          <h2 className="text-5xl md:text-7xl font-display text-ocean-deep uppercase tracking-tight">Travel FAQ</h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} />
          ))}
        </div>
      </section>
    </div>
  );
}

function FAQItem({ faq }: { faq: { q: string, a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-ocean-deep/5 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-8 py-6 flex justify-between items-center text-left"
      >
        <span className="text-lg font-bold text-ocean-deep uppercase tracking-tight">{faq.q}</span>
        <div className="text-ocean-aqua">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 text-ocean-deep/60 leading-relaxed">
          {faq.a}
        </div>
      </motion.div>
    </div>
  );
}
