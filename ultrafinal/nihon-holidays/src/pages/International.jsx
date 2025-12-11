// src/pages/International.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe2, ChevronRight, MessageCircle, ChevronLeft } from "lucide-react";
import { COMPANY_DETAILS, internationalPackageData } from "../data.js";

const regions = [
  { id: "all", label: "All Regions" },
  { id: "asia", label: "Asia" },
  { id: "middle-east", label: "Middle East" },
  { id: "beach", label: "Beach & Islands" }
];

const InternationalHero = ({ onEnquire }) => (
  <section className="relative overflow-hidden pt-32 pb-20 bg-secondary-950">
    <div className="absolute inset-0">
      <img
        src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=2000"
        alt="International travel"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-950/80 to-transparent" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
          <Globe2 className="w-3 h-3" /> Global Destinations
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Explore the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">World</span>
        </h1>
        <p className="text-lg text-slate-300 mb-8 font-light max-w-xl leading-relaxed">
          From the skyscrapers of Dubai to the beaches of Bali, we curate seamless international experiences with full visa and forex support.
        </p>
        <button
          onClick={onEnquire}
          className="bg-primary-600 hover:bg-primary-500 text-white px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-primary-500/30"
        >
          Plan Your Trip
        </button>
      </div>
    </div>
  </section>
);

export default function International({ onContactClick }) {
  const [activeRegion, setActiveRegion] = useState("all");
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleWhatsApp = (pkgName) => {
    const phone = COMPANY_DETAILS.phone.replace(/\D/g, ''); 
    const message = `Hi ${COMPANY_DETAILS.name}, I'm interested in the *${pkgName}* international package. Please share more details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredPackages = Object.values(internationalPackageData).filter(
    (pkg) => activeRegion === "all" || pkg.region === activeRegion
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <InternationalHero onEnquire={onContactClick} />

      <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 overflow-x-auto">
          <div className="flex space-x-2 md:justify-center">
            {regions.map((region) => (
              <button
                key={region.id}
                onClick={() => setActiveRegion(region.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap border ${
                  activeRegion === region.id
                    ? "bg-secondary-900 text-white border-secondary-900 shadow-md"
                    : "bg-white text-slate-500 border-slate-200 hover:border-primary-400 hover:text-primary-600"
                }`}
              >
                {region.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="py-20 max-w-6xl mx-auto px-6">
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={pkg.id}
                className="bg-white group rounded-sm shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.cover}
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-1">{pkg.duration}</p>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-600 text-sm font-light mb-6 line-clamp-3 leading-relaxed">
                    {pkg.intro}
                  </p>
                  
                  <div className="mt-auto flex gap-3">
                    <button
                      onClick={() => setSelectedPkg(pkg.id)}
                      className="flex-1 py-3 border border-secondary-200 text-secondary-900 font-bold text-xs uppercase tracking-widest hover:bg-secondary-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      View Itinerary <ChevronRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => handleWhatsApp(pkg.name)}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 rounded-sm transition-colors flex items-center justify-center"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedPkg && (
          <Modal 
            pkgId={selectedPkg} 
            close={() => setSelectedPkg(null)} 
            onEnquire={onContactClick} 
            handleWhatsApp={handleWhatsApp} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

const Modal = ({ pkgId, close, onEnquire, handleWhatsApp }) => {
  // ✅ NEW: state for image slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const pkg = internationalPackageData[pkgId];
  if (!pkg) return null;

  // ✅ NEW: support multiple images if pkg.gallery exists, else use cover
  const images = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.cover];

  const handlePrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length === 0 ? 0 : (prev === images.length - 1 ? 0 : prev + 1)
    );
  };

  return (
    <motion.div
      className="fixed inset-0 bg-secondary-950/80 backdrop-blur-sm z-50 flex justify-end"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={close}
    >
      <motion.div
        className="w-full max-w-lg bg-white h-full shadow-2xl overflow-y-auto flex flex-col"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ CHANGED: top image now a slider with arrows */}
        <div className="relative h-64 bg-secondary-900 overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={pkg.name}
            className="w-full h-full object-cover opacity-80 transition-transform duration-500"
          />

          {/* Close button (same as before) */}
          <button
            onClick={close}
            className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition"
          >
            ✕
          </button>

          {/* Left arrow */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg"
            >
              ‹
            </button>
          )}

          {/* Right arrow */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg"
            >
              ›
            </button>
          )}

          {/* Dots indicator */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentImageIndex ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          <div className="absolute bottom-6 left-6 text-white">
            <h2 className="text-3xl font-serif font-bold">{pkg.name}</h2>
            <p className="text-primary-300 text-xs font-bold uppercase tracking-widest mt-1">
              {pkg.duration}
            </p>
          </div>
        </div>

        {/* 🔹 BELOW THIS: EXACTLY YOUR OLD CODE 🔹 */}
        <div className="p-8 flex-1">
          <h3 className="text-lg font-bold text-secondary-900 mb-4 font-serif">Itinerary Snapshot</h3>
          <div className="space-y-6 relative border-l border-primary-200 ml-3 pl-6">
            {pkg.options[0].itinerary.map((day, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-primary-500 border-2 border-white shadow-sm"></span>
                <p className="text-slate-600 text-sm leading-relaxed">{day}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
          <button onClick={() => { onEnquire(); close(); }} className="flex-1 bg-secondary-900 text-white py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary-600 transition">
            Book Now
          </button>
          <button onClick={() => handleWhatsApp(pkg.name)} className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-sm transition-colors flex items-center justify-center">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
