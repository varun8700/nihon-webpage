// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from "react";
import { Search, ChevronRight, ChevronLeft, Building2, Trophy, Users, Map, Globe } from "lucide-react";
import { COMPANY_DETAILS, domesticPackageData, internationalPackageData } from "../data.js";
import { AnimatePresence, motion } from "framer-motion";

const allInternational = Object.entries(internationalPackageData).map(([key, pkg]) => ({ ...pkg, key }));

/* ---------------- HERO SLIDER IMAGES ---------------- */
const heroImages = [
  "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=2000&q=80",
  "https://images.pexels.com/photos/1534411/pexels-photo-1534411.jpeg?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1709031984353-aaea9595405d?auto=format&fit=crop&w=2000&q=80",
  "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=format&fit=crop&w=2000&q=80"
];

/* ---------------- HERO COMPONENT ---------------- */
const Hero = ({ onSearch }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[700px] md:h-[900px] flex items-center justify-center overflow-hidden pt-20 bg-secondary-950">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          // --- NO BREATHING EFFECT HERE ---
          // We only animate opacity. No 'scale' property.
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={heroImages[currentSlide]} 
            className="w-full h-full object-cover opacity-60" 
            alt="Luxury Travel" 
          />
        </motion.div>
      </AnimatePresence>
      
      <div className="absolute inset-0 bg-gradient-to-t from-secondary-950 via-secondary-950/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-10">
        <div className="animate-slide-up mb-8 bg-primary-500/10 border border-primary-500/50 text-primary-200 px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-[0.25em] shadow-lg flex items-center gap-3 backdrop-blur-md">
          <Building2 className="w-4 h-4 text-primary-400" /> Premier B2B Partner
        </div>
        
        {/* --- FONT CHANGE HERE --- */}
        {/* 'font-serif' applies Playfair Display */}
        <h1 className="text-6xl md:text-9xl font-serif font-black text-white mb-6 drop-shadow-2xl tracking-tighter animate-slide-up bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          {COMPANY_DETAILS.name.toUpperCase()}
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-200 font-serif italic mb-12 animate-slide-up delay-100 font-light tracking-wide">
          "{COMPANY_DETAILS.motto}"
        </p>
        <button onClick={onSearch} className="group bg-primary-600 hover:bg-primary-500 text-white px-12 py-4 rounded-sm font-medium transition-all flex items-center justify-center gap-4 shadow-2xl shadow-primary-900/50 text-lg animate-slide-up delay-200 hover:scale-105 transform duration-300 uppercase tracking-widest">
          <Search className="w-5 h-5 group-hover:text-secondary-950 transition-colors" /> Explore Collections
        </button>
      </div>
    </div>
  );
};

/* ---------------- ABOUT SECTION ---------------- */
const AboutSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-[60%]">
            <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
              Our Legacy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mb-6 leading-tight">
              Crafting Journeys Since {new Date().getFullYear() - parseInt(COMPANY_DETAILS.years)} with <br/>
              <span className="text-primary-600 italic">Unmatched Expertise</span>
            </h2>
            <div className="space-y-6 text-slate-600 text-lg font-light leading-relaxed">
              <p>Welcome to <strong className="text-secondary-900 font-medium">{COMPANY_DETAILS.name}</strong>, Hyderabad's premier travel management company. For over {COMPANY_DETAILS.years} years, we have set the benchmark for luxury and B2B travel services.</p>
              <p>From the snow-capped peaks of Kashmir to the pristine beaches of Vizag, our team of industry veterans curates every detail with transparency and care.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-4 p-4 border-l-4 border-primary-500 bg-slate-50">
                <Trophy className="w-8 h-8 text-primary-600" />
                <div><h4 className="font-bold text-secondary-900 font-serif">Excellence</h4><p className="text-xs text-slate-500">Award-winning service.</p></div>
              </div>
              <div className="flex items-center gap-4 p-4 border-l-4 border-primary-500 bg-slate-50">
                <Users className="w-8 h-8 text-primary-600" />
                <div><h4 className="font-bold text-secondary-900 font-serif">24/7 Support</h4><p className="text-xs text-slate-500">Always here for you.</p></div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[40%] relative">
            <div className="absolute inset-0 border-2 border-primary-500 translate-x-3 translate-y-3 rounded-sm z-0"></div>
            <div className="relative z-10 overflow-hidden rounded-sm shadow-2xl h-[500px]"> 
              <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80" alt="Luxury Travel" className="w-full h-full object-cover hover:scale-105 transition duration-700"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------- INTERNATIONAL SLIDER ---------------- */
const InternationalSlider = ({ onPackageClick }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIndex = allInternational.length - 1;
  const pkg = allInternational[activeIndex];

  if (!pkg) return null;

  const next = () => setActiveIndex((i) => (i === lastIndex ? 0 : i + 1));
  const prev = () => setActiveIndex((i) => (i === 0 ? lastIndex : i - 1));

  return (
    <section className="py-20 bg-secondary-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="flex justify-between items-end mb-10">
                <div>
                    <span className="text-primary-500 font-bold uppercase tracking-[0.2em] text-xs">Global Reach</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mt-2">International Collections</h2>
                </div>
                <div className="flex gap-2">
                    <button onClick={prev} className="p-3 border border-white/20 rounded-full hover:bg-primary-600 hover:border-primary-600 transition"><ChevronLeft className="w-5 h-5"/></button>
                    <button onClick={next} className="p-3 border border-white/20 rounded-full hover:bg-primary-600 hover:border-primary-600 transition"><ChevronRight className="w-5 h-5"/></button>
                </div>
            </div>
            <div className="flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pkg.key}
                        initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}
                        className="w-full bg-secondary-800 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[400px] border border-white/5"
                    >
                        <div className="md:w-1/2 h-64 md:h-full relative overflow-hidden group">
                            <img src={pkg.cover} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700"/>
                            <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">{pkg.options[0].duration}</div>
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 text-primary-400 mb-2 text-sm font-medium"><Globe className="w-4 h-4"/> {pkg.short}</div>
                            <h3 className="text-3xl font-serif font-bold mb-4">{pkg.name}</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed font-light">{pkg.intro}</p>
                            <div className="flex items-center gap-4">
                                <button onClick={() => onPackageClick(pkg)} className="bg-white text-secondary-900 px-8 py-3 rounded-sm font-bold text-sm hover:bg-primary-500 hover:text-white transition uppercase tracking-widest">View Itinerary</button>
                                <span className="text-xs text-slate-500">{activeIndex + 1} / {allInternational.length}</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    </section>
  );
};

/* ---------------- ITINERARY MODAL ---------------- */
const ItineraryModal = ({ pkg, onClose, onContactClick }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const images = pkg?.gallery && pkg.gallery.length > 0 ? pkg.gallery : (pkg?.cover ? [pkg.cover] : []);
  const nextImg = () => setImgIndex((i) => (i + 1) % images.length);
  const prevImg = () => setImgIndex((i) => (i === 0 ? images.length - 1 : i - 1));

  return (
    <AnimatePresence>
      {pkg && (
        <motion.div className="fixed inset-0 bg-secondary-950/90 backdrop-blur-md flex items-center justify-center z-50 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
            <div className="md:w-1/2 relative h-64 md:h-auto bg-secondary-900 group">
              <img src={images[imgIndex]} className="w-full h-full object-cover transition-opacity duration-500" alt="Destination"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              {images.length > 1 && (
                <>
                  <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-md transition"><ChevronLeft/></button>
                  <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-md transition"><ChevronRight/></button>
                </>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-serif font-bold mb-1">{pkg.name}</h2>
                <p className="text-primary-300 text-sm tracking-wider uppercase flex items-center gap-2"><Building2 className="w-4 h-4"/> Exclusive B2B Itinerary</p>
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col bg-slate-50">
              <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white">
                <h3 className="font-serif text-xl text-secondary-900 font-bold">Trip Highlights</h3>
                <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition">✕</button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {pkg.options?.map((opt, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-bold text-secondary-900 font-serif">{opt.title}</h4>
                      <span className="bg-primary-50 text-primary-700 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-primary-200">{opt.duration}</span>
                    </div>
                    {opt.itinerary && (
                      <div className="space-y-4 pl-2 border-l border-primary-200">
                        {opt.itinerary.map((line, i) => (
                          <div key={i} className="pl-4 relative">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-primary-500 rounded-full border-2 border-white shadow-sm"></div>
                            <p className="text-sm text-slate-600 leading-relaxed">{line}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-slate-200 bg-white">
                <button onClick={() => { onContactClick(); onClose(); }} className="w-full bg-secondary-900 hover:bg-primary-600 text-white py-4 rounded-sm font-bold text-sm shadow-xl transition-all uppercase tracking-widest">Request Custom Quote</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ---------------- MAIN PAGE COMPONENT ---------------- */
export default function HomePage({ onContactClick }) {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const featuredRef = useRef(null);
  const featuredList = Object.entries(domesticPackageData).slice(0, 3).map(([k, v]) => ({ ...v, key: k }));

  return (
    <main className="bg-slate-50 min-h-screen">
      <Hero onSearch={() => featuredRef.current?.scrollIntoView({ behavior: 'smooth' })} />
      <AboutSection />
      <section ref={featuredRef} className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs">Curated Experiences</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary-900 mt-4">Luxury Domestic Collections</h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto mt-6"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {featuredList.map((pkg) => (
            <div key={pkg.key} className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition duration-500 border border-slate-100 flex flex-col">
              <div className="relative h-72 overflow-hidden">
                <img src={pkg.cover} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-in-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <p className="text-white/90 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition delay-100">{pkg.intro}</p>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1 relative bg-white">
                <div className="absolute -top-6 right-6 bg-primary-500 text-white p-3 shadow-lg">
                  {pkg.icon && <pkg.icon className="w-6 h-6" />}
                </div>
                <h3 className="text-2xl font-serif font-bold text-secondary-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 border-b border-slate-100 pb-4">{pkg.description}</p>
                <div className="mt-auto">
                  <button onClick={() => setSelectedPackage(pkg)} className="w-full py-3 border border-secondary-900 text-secondary-900 font-medium hover:bg-secondary-900 hover:text-white transition uppercase text-xs tracking-widest">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <InternationalSlider onPackageClick={setSelectedPackage} />
      <ItineraryModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} onContactClick={onContactClick} />
    </main>
  );
}