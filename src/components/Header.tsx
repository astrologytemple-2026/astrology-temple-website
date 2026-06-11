import React, { useState, useEffect } from "react";
import { Menu, X, Home, Youtube } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBookConsultation = () => {
    const encoded = encodeURIComponent("Hello Astrology Temple! I Want to Know More About Your Consultations.");
    window.open(`https://wa.me/919942684099?text=${encoded}`, "_blank");
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.reload();
  };

  const menuItems = [
    {
      id: "menu-home",
      label: "Home",
      href: "/",
      icon: <Home className="w-3.5 h-3.5" />
    },
    {
      id: "menu2",
      label: "Consultations",
      href: "#services",
      submenus: [
        { label: "Astrology", href: "#services" },
        { label: "Horoscope", href: "#services" },
        { label: "Numerology", href: "#services" },
        { label: "Nameology", href: "#services" },
        { label: "Vaasthu", href: "#services" },
        { label: "Marriage Matching", href: "#services" },
        { label: "Parikaaram @ Remedy", href: "#services" },
        { label: "Scriptology", href: "#services" },
        { label: "Phonology", href: "#services" }
      ]
    },
    { id: "menu3", label: "Free Software", href: "/software" },
    {
      id: "menu4",
      label: "Youtube",
      href: "https://www.youtube.com/@astrologytemple",
      icon: <Youtube className="w-4 h-4" />,
      className: "text-[#FF0000] hover:text-[#CC0000] font-black"
    },
    { id: "menu5", label: "Free Panchangam", href: "https://youtu.be/nkuhjHEvuW8" },
    { id: "menu6", label: "Devotional Songs", href: "https://www.youtube.com/watch?v=nEDbHnYsKSY&list=PLXoiyvGD4QuPL-waGa63YgMmVH9uDP7LZ" },
    { id: "menu7", label: "Author", href: "/author" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-[0_4px_25px_rgba(26,27,75,0.03)] border-b border-gray-100 py-3.5"
        : "bg-white/60 backdrop-blur-sm py-5 border-b border-gray-100/40"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between relative w-full">

          {/* Mobile Centered Text */}
          <div className="absolute left-1/2 -translate-x-1/2 lg:hidden font-bold text-sm tracking-widest uppercase text-primary whitespace-nowrap opacity-90 pointer-events-none">
            Astrology Temple
          </div>

          {/* Logo Brand Frame */}
          <a
            href="#"
            onClick={handleLogoClick}
            onDoubleClick={handleLogoDoubleClick}
            className="flex items-center gap-3 group select-none order-last"
          >
            <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden border border-gray-200 shadow-sm bg-white">
              <img
                src="/logo.png"
                alt="Astrology Temple Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation Link Cluster */}
            <nav className="hidden lg:flex items-center gap-8">
              {menuItems.map((link) => (
                <div key={link.id} className="relative group/menu py-2">
                  <a
                    href={link.href}
                    className={`text-[11px] font-semibold uppercase tracking-widest transition-all duration-200 flex items-center gap-1 cursor-pointer ${link.className || "text-slate-500 hover:text-primary"}`}
                  >
                    {link.icon && <span className="mr-0.5">{link.icon}</span>}
                    <span>{link.label}</span>
                    {link.submenus && link.submenus.length > 0 && <span className="text-[7px] opacity-60">▼</span>}
                  </a>

                  {/* Submenu Dropdown Container */}
                  {link.submenus && link.submenus.length > 0 && (
                    <div className="absolute top-full left-0 mt-1 min-w-[180px] bg-white border border-gray-100 shadow-xl rounded-sm py-2 px-1 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200 z-50 transform translate-y-1 group-hover/menu:translate-y-0 text-left">
                      {link.submenus.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.href}
                          className="block px-3.5 py-1.5 text-[9.5px] text-slate-550 hover:bg-slate-50 hover:text-primary transition-colors uppercase tracking-widest font-semibold"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={handleBookConsultation}
                className="px-5 py-2.5 bg-primary hover:bg-primary-light text-white text-[11px] uppercase tracking-widest font-semibold rounded-sm shadow-sm transition-all duration-200 cursor-pointer"
              >
                <span>Book Consultation</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-primary transition-colors order-first"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu Overlays */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl py-6 px-4 space-y-4 text-left">
          <div className="flex flex-col gap-2.5">
            {menuItems.map((link) => (
              <div key={link.id} className="border-b border-gray-50 pb-2">
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xs font-semibold uppercase tracking-widest flex items-center gap-2 ${link.className || "text-slate-600 hover:text-primary"}`}
                >
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.label}</span>
                </a>

                {/* Mobile Nested Submenus */}
                {link.submenus && link.submenus.length > 0 && (
                  <div className="pl-4 mt-2 space-y-2 border-l border-accent-gold/25 text-left">
                    {link.submenus.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-[10px] uppercase tracking-widest text-slate-400 hover:text-primary"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleBookConsultation();
              }}
              className="w-full justify-center flex items-center px-4 py-2.5 bg-primary text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
