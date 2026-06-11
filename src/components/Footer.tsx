import React from "react";
import { Facebook, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/919444001234?text=Hello%20Astrology%20Temple%2C%20I%20have%20questions.`, "_blank");
  };

  return (
    <footer className="bg-primary text-slate-300 py-8 border-t border-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-light text-sm">
            © {currentYear} Astrology Temple. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/DasaaBhukthiAntharam120Years" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://x.com/temple12741" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/@astrologytemple" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
