// src/pages/Domestic.jsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, ChevronRight, MessageCircle, Building2, ChevronLeft } from "lucide-react";
import { domesticPackages, COMPANY_DETAILS } from "../data.js";

// Define Filters
const regions = [
  { id: "all", label: "All Destinations" },
  { id: "south", label: "South India" },
  { id: "north", label: "North India" },
  { id: "island", label: "Islands" }
];

// Helper to categorize packages (since data.js doesn't have 'region' key)
const getRegion = (id) => {
  if (["kashmir", "himachal"].includes(id)) return "north";
  if (["lakshadweep"].includes(id)) return "island";
  return "south"; // Default to South (Kerala, Karnataka, TN, Vizag, Hyd)
};

// -------- HERO SECTION --------
const DomesticHero = ({ onEnquire }) => (
  <section className="relative overflow-hidden pt-32 pb-20 bg-secondary-950">
    <div className="absolute inset-0">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=80" // Kashmir Image as Hero
        alt="Domestic travel"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-950 via-secondary-950/80 to-transparent" />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/40 text-primary-300 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
          <MapPin className="w-3 h-3" /> Incredible India
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Discover the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Soul of India</span>
        </h1>
        <p className="text-lg text-slate-300 mb-8 font-light max-w-xl leading-relaxed">
          From the snowy peaks of the Himalayas to the tranquil backwaters of Kerala. Experience the diverse culture, heritage, and landscapes of India.
        </p>
        <button
          onClick={onEnquire}
          className="bg-primary-600 hover:bg-primary-500 text-white px-10 py-4 rounded-sm font-bold text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-primary-500/30"
        >
          Plan Your Journey
        </button>
      </div>
    </div>
  </section>
);

export default function Domestic({ onContactClick }) {
  const [activeRegion, setActiveRegion] = useState("all");
  const [selectedPackage, setSelectedPackage] = useState(null);

  // WhatsApp Handler
  const handleWhatsApp = (pkgName) => {
    const phone = COMPANY_DETAILS.phone.replace(/\D/g, ''); 
    const message = `Hi ${COMPANY_DETAILS.name}, I'm interested in the *${pkgName}* domestic package. Please share more details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Filter Logic
  const filteredPackages = domesticPackages.filter(
    (pkg) => activeRegion === "all" || getRegion(pkg.id) === activeRegion
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <DomesticHero onEnquire={onContactClick} />

      {/* FILTER TABS */}
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

      {/* PACKAGES GRID */}
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
                    <p className="text-primary-400 text-xs font-bold uppercase tracking-widest mb-1">{pkg.options[0].duration}</p>
                    <h3 className="text-2xl font-serif font-bold text-white leading-tight">{pkg.name}</h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <p className="text-slate-600 text-sm font-light mb-6 line-clamp-3 leading-relaxed">
                    {pkg.intro}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="mt-auto flex gap-3">
                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="flex-1 py-3 border border-secondary-200 text-secondary-900 font-bold text-xs uppercase tracking-widest hover:bg-secondary-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                    >
                      View Itinerary <ChevronRight className="w-3 h-3" />
                    </button>
                    
                    {/* WhatsApp Button */}
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

      {/* ITINERARY MODAL */}
      <AnimatePresence>
        {selectedPackage && (
          <Modal 
            pkg={selectedPackage} 
            close={() => setSelectedPackage(null)} 
            onEnquire={onContactClick} 
            handleWhatsApp={handleWhatsApp} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// -------- MODAL WITH SLIDESHOW --------
const Modal = ({ pkg, close, onEnquire, handleWhatsApp }) => {
  const [imgIndex, setImgIndex] = useState(0);
  
  if (!pkg) return null;

  // 🔽🔽🔽 ADDED: normalize gallery so this works with different data shapes (like International) 🔽🔽🔽
  try {
    // If pkg.gallery is empty, try pulling from options[0]
    if ((!pkg.gallery || pkg.gallery.length === 0) && pkg.options && pkg.options[0]) {
      const opt = pkg.options[0];

      if (Array.isArray(opt.gallery) && opt.gallery.length > 0) {
        pkg.gallery = opt.gallery;
      } else if (Array.isArray(opt.images) && opt.images.length > 0) {
        pkg.gallery = opt.images;
      }
    }

    // If still no gallery, try pkg.images
    if ((!pkg.gallery || pkg.gallery.length === 0) && Array.isArray(pkg.images) && pkg.images.length > 0) {
      pkg.gallery = pkg.images;
    }

    // If still no gallery, try pkg.photos
    if ((!pkg.gallery || pkg.gallery.length === 0) && Array.isArray(pkg.photos) && pkg.photos.length > 0) {
      pkg.gallery = pkg.photos;
    }

    // Normalize to plain URL strings
    if (Array.isArray(pkg.gallery)) {
      pkg.gallery = pkg.gallery.map((img) =>
        typeof img === "string"
          ? img
          : img.src || img.url || img.image || img.cover || pkg.cover
      );
    }
  } catch (e) {
    console.error("Domestic gallery normalization failed:", e);
  }
  // 🔼🔼🔼 END OF ADDED BLOCK 🔼🔼🔼

  // Setup images array
  const images = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.cover];

  const nextImg = () => setImgIndex((i) => (i + 1) % images.length);
  const prevImg = () => setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));

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
        {/* SLIDESHOW HEADER */}
        <div className="relative h-64 bg-secondary-900 group">
          <img 
            src={images[imgIndex]} 
            alt={pkg.name} 
            className="w-full h-full object-cover opacity-90 transition-opacity duration-300" 
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImg} 
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white backdrop-blur-md transition border border-white/20"
              >
                <ChevronLeft className="w-5 h-5"/>
              </button>
              <button 
                onClick={nextImg} 
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white backdrop-blur-md transition border border-white/20"
              >
                <ChevronRight className="w-5 h-5"/>
              </button>
            </>
          )}

          <button onClick={close} className="absolute top-4 right-4 bg-black/20 p-2 rounded-full text-white hover:bg-black/40 transition backdrop-blur-md">✕</button>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-3xl font-serif font-bold text-white">{pkg.name}</h2>
            <p className="text-primary-300 text-xs font-bold uppercase tracking-widest mt-1 flex items-center gap-2">
                <Building2 className="w-3 h-3" /> {pkg.options[0].duration}
            </p>
          </div>
        </div>

        {/* CONTENT */}
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

        {/* FOOTER */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex gap-3">
          <button onClick={() => { onEnquire(); close(); }} className="flex-1 bg-secondary-900 text-white py-4 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-primary-600 transition">
            Book Now
          </button>
          <button 
            onClick={() => handleWhatsApp(pkg.name)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 rounded-sm transition-colors flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
