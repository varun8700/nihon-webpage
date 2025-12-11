// src/pages/About.jsx
import React from 'react';
import { Phone, Globe, ShieldCheck, HeartHandshake } from 'lucide-react';
import { COMPANY_DETAILS } from '../data.js';

export default function AboutPage() {
    return (
        <main className="pt-32 pb-24 bg-slate-50 min-h-screen font-sans">
            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* HEADER SECTION */}
                <div className="text-center mb-20">
                    <span className="text-primary-600 font-bold uppercase tracking-[0.2em] text-xs block mb-3">
                        Discover Our Legacy
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-secondary-900 mb-6">
                        About {COMPANY_DETAILS.name}
                    </h1>
                    <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
                </div>

                {/* INTRODUCTION & PHILOSOPHY */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-secondary-900">
                            More Than Just a <span className="text-primary-600">Travel Agency</span>
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed font-light">
                            Founded in Hyderabad, <strong>{COMPANY_DETAILS.name}</strong> has grown from a humble beginning into one of South India's most trusted travel management companies. With over <strong>{COMPANY_DETAILS.years} years</strong> of excellence, we specialize in crafting bespoke journeys that go beyond the ordinary.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed font-light">
                            Managed by a team of tourism veterans, our core philosophy is simple: <em>"{COMPANY_DETAILS.motto}"</em>. We believe that travel is not just about visiting places; it's about the seamless experience, the safety of our clients, and the memories they carry back home. Whether it's a corporate MICE event, a family vacation, or a honeymoon, we handle the complexities so you can enjoy the journey.
                        </p>
                        
                        <div className="pt-4 grid grid-cols-2 gap-6">
                            <div className="p-4 bg-white border-l-4 border-primary-500 shadow-sm rounded-sm">
                                <h4 className="font-bold text-secondary-900 font-serif mb-1">Our Mission</h4>
                                <p className="text-sm text-slate-500">To deliver world-class travel experiences with 100% transparency and personalized care.</p>
                            </div>
                            <div className="p-4 bg-white border-l-4 border-secondary-900 shadow-sm rounded-sm">
                                <h4 className="font-bold text-secondary-900 font-serif mb-1">Our Vision</h4>
                                <p className="text-sm text-slate-500">To be the most preferred B2B travel partner known for integrity and innovation.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-primary-500/10 rounded-lg transform translate-x-4 translate-y-4"></div>
                        <img 
                            src="https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=1000&q=80" 
                            alt="Team meeting" 
                            className="relative rounded-lg shadow-2xl w-full h-auto object-cover z-10"
                        />
                    </div>
                </div>

                {/* WHY CHOOSE US GRID */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary-900 mb-4">Why Partner With Us?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">We offer a distinct advantage in the competitive travel market through our deep networks and commitment to quality.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-primary-200 transition-colors group">
                            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                                <ShieldCheck className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary-900 mb-3 font-serif">Transparency & Trust</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                No hidden costs. We provide detailed itineraries and cost break-ups upfront. We value the trust you place in us above all else.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-primary-200 transition-colors group">
                            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                                <HeartHandshake className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary-900 mb-3 font-serif">Personalized Service</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                We don't believe in "one size fits all". Every itinerary is customized to match your budget, preferences, and travel style.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-primary-200 transition-colors group">
                            <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-500 transition-colors">
                                <Globe className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-secondary-900 mb-3 font-serif">Global Network</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">
                                Strong B2B connections with hotels and transport providers across India and international hubs ensure you get the best rates.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CONTACT CTA CARD */}
                <div className="relative bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-3xl p-10 md:p-16 text-center text-white overflow-hidden shadow-2xl">
                    {/* Decorative Rings */}
                    <div className="absolute top-0 left-0 w-64 h-64 border-[20px] border-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 border-[40px] border-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <Phone className="w-16 h-16 text-primary-500 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Need Immediate Assistance?</h2>
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                            Our dedicated support team is available 24/7. Whether you are a partner or a traveler, we are just a phone call away.
                        </p>
                        
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 inline-block">
                            <p className="text-sm uppercase tracking-widest text-primary-400 mb-2">Call Us Anytime</p>
                            <a href={`tel:${COMPANY_DETAILS.phone}`} className="text-3xl md:text-5xl font-bold font-serif hover:text-primary-400 transition-colors">
                                {COMPANY_DETAILS.phone}
                            </a>
                            <p className="mt-4 text-sm text-slate-400 border-t border-white/10 pt-4">
                                Proud Member of: <span className="text-white font-semibold">{COMPANY_DETAILS.memberships}</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}