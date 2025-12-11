import React from "react";
import { ChevronRight, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { COMPANY_DETAILS } from "../data.js"; // Correct import path

export default function Footer({ onContactClick }) {
  const navigate = useNavigate();

  const handleFooterNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">
                {COMPANY_DETAILS.name}
              </span>
            </div>
            <p className="text-slate-500 mb-6 leading-relaxed max-w-md">
              Your trusted travel partner for Pan India and Abroad destinations.
              Managed by professionals with {COMPANY_DETAILS.years}+ years of
              experience.
            </p>
            <div className="flex gap-4">
              <span className="bg-blue-50 px-3 py-1 rounded text-xs font-bold text-blue-700 border border-blue-100">
                {COMPANY_DETAILS.memberships}
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-500">
              <li>
                <button
                  onClick={() => handleFooterNav("/domestic")}
                  className="hover:text-blue-600 transition"
                >
                  Domestic Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav("/international")}
                  className="hover:text-blue-600 transition"
                >
                  International
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleFooterNav("/about")}
                  className="hover:text-blue-600 transition"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
            <p className="text-slate-500 mb-4">{COMPANY_DETAILS.address}</p>
            <p className="text-slate-500 mb-4">{COMPANY_DETAILS.email}</p>
            <p className="text-slate-900 font-bold mb-4">
              {COMPANY_DETAILS.phone}
            </p>
            <button
              onClick={onContactClick}
              className="text-blue-600 font-bold hover:text-blue-800 transition flex items-center gap-2"
            >
              Send an Enquiry <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
          <p>© 2024 {COMPANY_DETAILS.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
