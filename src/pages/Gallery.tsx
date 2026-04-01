import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    { url: "https://i.ibb.co/Xr55RXMx/photo-collection-of-st-helena-1.jpg", title: "Island Overview" },
    { url: "https://i.ibb.co/fGSLD2CD/visitors-on-a-guided-tour.jpg", title: "Guided Tours" },
    { url: "https://i.ibb.co/YBGnR2rn/tasting-the-st-helena-drinks.jpg", title: "Local Flavors" },
    { url: "https://i.ibb.co/JWdBN6WB/the-boer-cemetery-1.jpg", title: "Boer Cemetery" },
    { url: "https://i.ibb.co/fzgY9V34/plantation-house-3.jpg", title: "Plantation House" },
    { url: "https://i.ibb.co/yFtkTp3h/peak-dale-1.jpg", title: "Peak Dale Nature" },
    { url: "https://i.ibb.co/hR54T5wD/napoleon.jpg", title: "Napoleon Bonaparte" },
    { url: "https://i.ibb.co/9mW879qy/longwood-house-orig.jpg", title: "Longwood House" },
    { url: "https://i.ibb.co/9mPnjtHX/mg-0169.jpg", title: "Coastal Views" },
    { url: "https://i.ibb.co/yLjbc0C/jean-accom.jpg", title: "Accommodation" },
    { url: "https://i.ibb.co/VY4bMp9r/img-1908.jpg", title: "Island Scenery" },
    { url: "https://i.ibb.co/SDq1gNF4/enjoying-a-night-out-orig.jpg", title: "Island Life" },
    { url: "https://i.ibb.co/JSMF2D8/dscf1493.jpg", title: "Local Culture" },
    { url: "https://i.ibb.co/fVphQNr1/class-afloat-021-orig.jpg", title: "Charabanc Experience" },
    { url: "https://i.ibb.co/Q3KzhH2x/corkers-unique-tour-bus-2-orig.jpg", title: "Unique Tour Bus" },
    { url: "https://i.ibb.co/V0ZwvXqr/diana-s-peak.jpg", title: "Diana's Peak" },
    { url: "https://i.ibb.co/vxGXzpwb/boundary-wall-walk-2-orig.jpg", title: "Boundary Wall Walk" },
    { url: "https://i.ibb.co/HD1XPWfx/1929-charabanc.jpg", title: "1929 Charabanc" },
    { url: "https://i.ibb.co/v6H6B7mX/1929-charabanc-1.jpg", title: "Vintage Bus" },
    { url: "https://i.ibb.co/s9LVC03D/1929-charabanc-on-tour.jpg", title: "On Tour" }
  ];

  return (
    <div className="bg-island-sand pt-32">
      <section className="px-6 max-w-7xl mx-auto mb-24 text-center">
        <h1 className="text-xs uppercase tracking-[0.4em] font-bold text-ocean-aqua mb-6">Visual Journey</h1>
        <h2 className="text-5xl md:text-7xl font-display text-ocean-deep leading-tight mb-8">
          Island Gallery
        </h2>
        <p className="text-ocean-deep/70 text-lg leading-relaxed max-w-2xl mx-auto">
          A glimpse into the extraordinary landscapes and vibrant culture of the South Atlantic islands.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-32">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-lg"
            >
              <img src={img.url} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110" alt={img.title} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-display text-2xl uppercase tracking-widest">{img.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
