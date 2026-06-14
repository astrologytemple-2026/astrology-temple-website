import React, { useState, useEffect } from "react";

// Import modular components
import SEOHeader from "./components/SEOHeader";
import Header from "./components/Header";

import Footer from "./components/Footer";
import InteractiveStarTrail from "./components/InteractiveStarTrail";
import AstrologyHoroscope from "./pages/AstrologyHoroscope";
import Numerology from "./pages/Numerology";
import Vaasthu from "./pages/Vaasthu";
import MarriageMatching from "./pages/MarriageMatching";
import ParikaaramRemedy from "./pages/ParikaaramRemedy";
import NewBornBaby from "./pages/NewBornBaby";
import AuspiciousDate from "./pages/AuspiciousDate";
import FreePanchangam from "./pages/FreePanchangam";
import Software from "./pages/Software";
import Author from "./pages/Author";
import Home from "./pages/Home";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);


  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);



  const schemaFAQs = [
    {
      id: "faq1",
      category: "METHODOLOGY",
      question: "How does a professional astrology consultation work at Astrology Temple?",
      answer: "We do not believe in generic automated reports. First, you share your precise birth details. Our leading astrologers dedicate up to 2 hours manually casting and inspecting your Sidereal Kundli, Navamsha charts, and active Dasha timelines. During your scheduled video or audio call, our expert explains major planetary aspects in simple, actionable English or Tamil. We isolate constraints and provide direct, verified remedy actions."
    },
    {
      id: "faq2",
      category: "LOCATION",
      question: "Who is the best astrologer in Vadapalani, Chennai?",
      answer: "Astrologer Ravi Rangaswamee is widely regarded as one of the best astrologers in Vadapalani, Chennai, offering comprehensive services including 120 Years Dasaa Bhukthi Antharam Charts, Numerology, Vaasthu, and Parikaaram remedies."
    },
    {
      id: "faq3",
      category: "SERVICES",
      question: "What is the 120 Years Dasaa Bhukthi Antharam Chart?",
      answer: "The 120 Years Dasaa Bhukthi Antharam Chart is an incredibly accurate, manually calculated astrological chart based on your birth star. It predicts precise timelines and major life events, mapping out active planetary periods to the exact year, month, day, and hour."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative selection:bg-accent-gold selection:text-primary">

      <InteractiveStarTrail />

      <SEOHeader
        title="Astrologer Ravi Rangaswamee Chennai,Online Astrologer, Astrology Temple"
        description="Consult Chennai's leading Astrologer Ravi Rangaswamee in Vadapalani for Astrology, Horoscope, Numerology, Nameology, Vaasthu, Marriage Matching and Parikaaram @ RemedyAstrology, Horoscope, Numerology, Nameology, Vaasthu, Marriage Matching and Parikaaram @ Remedy"
        keywords={["astrologer in chennai", "best astrologer in vadapalani", "astrology consultation in chennai", "free astrology software", "horoscope reading", "vaasthu", "numerology", "parikaaram", "astrologer in tamil nadu", "astrologer in india", "24*7 astroloogy consultancy services", "astrology phone consultation", "astrology chat consultation", "best astrologer in chennai for marriage matching", "best astrologer in chennai for numerology", "free astrology software"]}
        faqs={schemaFAQs}
      />

      <Header />

      <main className="flex-grow pt-28 md:pt-16 lg:pt-20">
        <section className="relative overflow-hidden py-8 md:py-12 lg:py-16 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/15 via-transparent to-transparent min-h-screen">
          <div className="absolute top-1/4 left-10 w-1.5 h-1.5 rounded-full bg-indigo-950/30 animate-pulse"></div>
          <div className="absolute top-1/2 right-12 w-2 h-2 rounded-full bg-amber-500/20 animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-purple-500/30 animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentPath === '/software' ? (
              <Software />
            ) : currentPath === '/author' ? (
              <Author />
            ) : currentPath === '/astrology-horoscope' ? (
              <AstrologyHoroscope />
            ) : currentPath === '/numerology' ? (
              <Numerology />
            ) : currentPath === '/vaasthu' ? (
              <Vaasthu />
            ) : currentPath === '/marriage-matching' ? (
              <MarriageMatching />
            ) : currentPath === '/parikaaram-remedy' ? (
              <ParikaaramRemedy />
            ) : currentPath === '/new-born-baby' ? (
              <NewBornBaby />
            ) : currentPath === '/auspicious-date-selections' ? (
              <AuspiciousDate />
            ) : currentPath === '/free-panchangam' ? (
              <FreePanchangam />
            ) : (
              <Home />
            )}
          </div>
        </section>


      </main>

      <Footer />

    </div >
  );
}
