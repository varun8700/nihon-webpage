// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Domestic from "./pages/Domestic.jsx";
import International from "./pages/International.jsx";
import About from "./pages/About.jsx";

import { AnimatePresence, motion } from "framer-motion";
import EnquiryModal from "./components/EnquiryModal.jsx";
import { COMPANY_DETAILS } from "./data.js";

// ✅ accept onContactClick as a prop
function AnimatedRoutes({ onContactClick }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="h-full"
      >
        <Routes location={location}>
          {/* Home gets onContactClick */}
          <Route path="/" element={<Home onContactClick={onContactClick} />} />

          {/* ⬇️ CHANGE HERE: pass onContactClick to Domestic */}
          <Route
            path="/domestic"
            element={<Domestic onContactClick={onContactClick} />}
          />

          <Route
            path="/international"
            element={<International onContactClick={onContactClick} />}
          />

          <Route path="/about" element={<About />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Navbar company={COMPANY_DETAILS} onContactClick={openEnquiry} />

      <main className="flex-1 pt-20 bg-slate-50">
        <AnimatedRoutes onContactClick={openEnquiry} />
      </main>

      <Footer company={COMPANY_DETAILS} onContactClick={openEnquiry} />

      <EnquiryModal open={isEnquiryOpen} onClose={closeEnquiry} />
    </div>
  );
}

export default App;
