import { motion } from "motion/react";
import { ExternalLink, Globe, Info, Shield, Landmark, Anchor } from "lucide-react";

export default function Resources() {
  const linkCategories = [
    {
      title: "Official & Government",
      icon: <Shield size={20} />,
      links: [
        { name: "St Helena Government", url: "http://www.sainthelena.gov.sh" },
        { name: "Ascension Island Government", url: "https://www.ascension.gov.ac" },
        { name: "St Helena Tourism", url: "https://www.sthelenatourism.com" },
        { name: "St Helena National Trust", url: "http://www.trust.org.sh" },
      ]
    },
    {
      title: "Travel & News",
      icon: <Globe size={20} />,
      links: [
        { name: "St Helena Online", url: "http://www.sthelenaonline.org" },
        { name: "St Helena News and Travel", url: "http://www.sthelena.se" },
        { name: "Tourism Update", url: "http://www.tourismupdate.co.za" },
        { name: "Traveller24", url: "http://www.traveller24.com" },
        { name: "BT News", url: "http://www.btnews.co.uk" },
      ]
    },
    {
      title: "Island Information",
      icon: <Info size={20} />,
      links: [
        { name: "St Helena Island Info", url: "http://sainthelenaisland.info" },
        { name: "Wikitravel - St Helena", url: "https://wikitravel.org/en/Saint_Helena" },
        { name: "Napoleon.org", url: "https://www.napoleon.org" },
        { name: "Dive Magazine", url: "http://www.divemagazine.co.uk" },
      ]
    },
    {
      title: "Local Services",
      icon: <Anchor size={20} />,
      links: [
        { name: "Royal Mail Ship St Helena", url: "http://rms-st-helena.com" },
        { name: "Sure South Atlantic Ltd", url: "http://www.sure.co.sh" },
        { name: "Connect Saint Helena Ltd", url: "http://www.connect.co.sh" },
        { name: "Island Holidays", url: "http://www.islandhoildays.co.uk" },
      ]
    }
  ];

  return (
    <div className="bg-island-sand pt-32 pb-32">
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Resources</h1>
        <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
          Useful Links & <br />Information
        </h2>
        <p className="text-ocean-deep/70 text-lg leading-relaxed max-w-2xl mx-auto">
          Planning a trip to the South Atlantic requires the right information. 
          We've curated a list of official and helpful resources to help you prepare.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {linkCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-10 rounded-[3rem] shadow-xl border border-ocean-deep/5"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-ocean-aqua/10 rounded-2xl flex items-center justify-center text-ocean-aqua">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-display text-ocean-deep uppercase tracking-tight">{cat.title}</h3>
            </div>
            <ul className="space-y-4">
              {cat.links.map(link => (
                <li key={link.name}>
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-island-sand transition-all group"
                  >
                    <span className="text-sm font-bold text-ocean-deep/70 uppercase tracking-widest">{link.name}</span>
                    <ExternalLink size={16} className="text-ocean-aqua opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* Social Links */}
      <section className="mt-24 px-6 max-w-3xl mx-auto text-center">
        <div className="bg-ocean-deep text-white p-12 rounded-[3rem] shadow-2xl">
          <h3 className="text-2xl font-display mb-8">Follow Our Journey</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="#" 
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl transition-all font-bold tracking-widest text-xs"
            >
              FACEBOOK
            </a>
            <a 
              href="#" 
              className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 px-8 py-4 rounded-2xl transition-all font-bold tracking-widest text-xs"
            >
              TWITTER
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
