import { motion } from "motion/react";

export default function Gallery() {
  const images = [
    { url: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop", title: "St Helena Coast" },
    { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop", title: "Diana's Peak" },
    { url: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=2011&auto=format&fit=crop", title: "Remote Trails" },
    { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop", title: "Ascension Island" },
    { url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1933&auto=format&fit=crop", title: "Island Life" },
    { url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop", title: "South Atlantic" },
    { url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop", title: "Jamestown" },
    { url: "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=1965&auto=format&fit=crop", title: "Nature" }
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
