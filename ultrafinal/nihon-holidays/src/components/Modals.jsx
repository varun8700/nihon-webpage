import React, { useState } from 'react';
import { Mail, Send, X, Calendar, ChevronRight } from 'lucide-react';
import { COMPANY_DETAILS, domesticPackageData } from '../data.js'; // This path is correct relative to src/components/

// Export both modals, which App.jsx will import.

export const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! We have received your enquiry. We will contact you at ${COMPANY_DETAILS.phone} shortly.`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[110] flex justify-center items-center p-4 animate-fade-in-up">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-white hover:text-slate-200 z-10"><X className="w-6 h-6" /></button>
        <div className="bg-blue-600 p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Plan Your Trip</h3>
          <p className="text-blue-100 text-sm">Call us at <span className="font-bold">{COMPANY_DETAILS.phone}</span> or fill the form.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div><label className="block text-xs font-bold text-slate-600 uppercase mb-1">Name</label>
            <input required type="text" placeholder="Your Name" className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div><label className="block text-xs font-bold text-slate-600 uppercase mb-1">Phone Number</label>
            <input required type="tel" placeholder="+91..." className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 transition" />
          </div>
          <div><label className="block text-xs font-bold text-slate-600 uppercase mb-1">Message</label>
            <textarea placeholder="I am interested in..." className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 h-24 transition"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 shadow-lg">
            <Send className="w-4 h-4" /> Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export const ItineraryModal = ({ packageKey, onClose, onEnquire }) => {
  const packageData = domesticPackageData[packageKey];
  if (!packageData) return null;

  const [activeTab, setActiveTab] = useState(packageData.options[0].title);
  const activeOption = packageData.options.find(opt => opt.title === activeTab);

  return (
    <div className="fixed inset-0 bg-black/70 z-[100] flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col animate-fade-in-up">
        <div className="p-4 md:p-6 border-b border-slate-200 flex justify-between items-center bg-white z-10">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 truncate pr-4">{packageData.name}</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition"><X className="w-6 h-6 text-slate-500" /></button>
        </div>

        <div className="flex-1 overflow-y-auto">
            <div className="h-48 md:h-72 bg-cover bg-center relative" style={{ backgroundImage: `url(${packageData.bgImage})` }}>
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6 md:p-8'>
                    <p className='text-white text-md md:text-xl font-medium max-w-3xl leading-relaxed'>{packageData.intro}</p>
                </div>
            </div>

            <div className="p-4 bg-slate-50 flex gap-3 overflow-x-auto border-b border-slate-200 sticky top-0 z-10">
            {packageData.options.map((option) => (
                <button
                key={option.title}
                onClick={() => setActiveTab(option.title)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition whitespace-nowrap border 
                    ${activeTab === option.title ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'}`}
                >
                {option.duration}
                </button>
            ))}
            </div>

            <div className="p-6 md:p-8">
            {activeOption && (
                <div className="animate-fade-in-up">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    {activeOption.title}
                </h3>
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                    {activeOption.itinerary.map((dayData) => (
                    <div key={dayData.day} className="relative flex items-start group">
                        <div className="absolute top-0 left-0 mt-1 ml-2 bg-white border-2 border-blue-600 text-blue-600 rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold z-10 shadow-sm group-hover:scale-110 transition">
                            {dayData.day}
                        </div>
                        <div className="ml-12 pl-4 w-full">
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition">{dayData.title}</h4>
                            <p className="text-slate-600 mt-1 text-sm md:text-base leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100">
                                {dayData.activities}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>

        <div className='p-4 border-t border-slate-200 bg-white flex justify-between items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]'>
            <div className="hidden md:block">
                <p className="text-sm font-semibold text-slate-700">Call: {COMPANY_DETAILS.phone}</p>
            </div>
            <button onClick={onEnquire} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg transition w-full md:w-auto justify-center">
              <Mail className='w-4 h-4' /> Send Enquiry
            </button>
        </div>
      </div>
    </div>
  );
};