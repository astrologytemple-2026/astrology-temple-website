import React from 'react';
import { Youtube } from 'lucide-react';

export default function Vaasthu() {
  return (
    <div className="text-left max-w-4xl mx-auto space-y-8 pt-2 pb-16 px-4 font-sans text-slate-800">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-indigo-950 font-cinzel mb-2">Vaasthu Consultations</h2>
      </div>
      <h3 className="font-bold text-center">Astrologer Ravi Rangaswamee.,M.A.,PG.D.E.A.,  + 91 99426 84099, Chennai,Tamil Nadu, India,<br className="hidden md:block" />  Online Astrologer,  Astrology Temple </h3>

      <div className="space-y-6 text-sm leading-relaxed font-medium">
        <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-100/50">
          <p>
            <span className="font-bold text-indigo-900">Vanakkam..</span> Vasthu Consultation Service Fees INRs @@@@/- Upto Complete Purchase Process. <br className="hidden md:block" /> <br className="md:hidden" /> I will provide guidance on Vastu System and Number.
            <br className="hidden md:block" /> <br className="md:hidden" />வாஸ்து ஆலோசனைச் சேவைக்கான கட்டணம்: ₹@@@@ <br className="hidden md:block" /> <br className="md:hidden" /> (முழு கொள்முதல் செயல்முறையும் நிறைவடையும் வரை செல்லுபடியாகும்). Full Prepaid..
          </p>
        </div>
      </div>

      <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/50 space-y-4 text-sm font-medium">
        <p>
          <strong className="text-indigo-950 block mb-2 text-base">Payment Details:</strong>
          Im available in UPI Pay @+91 9942684099 astrologytemple@gmail.com &amp; RAVI RANGASWAMEE, INDIAN BANK, Savings a/c No: 0481945502., IFSCcode:IDIB000V001, Vadapalani Branch, Chennai - 600026. India.
        </p>
        <p className="text-blue-700 font-semibold text-base border-l-4 border-blue-500 pl-3">
          Please send me Paid slip or reference number after transfer or deposit.. Same day or next day will have consultation on our convenience time after paid.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-100">
        <div className="font-bold text-indigo-950 flex flex-col gap-1 text-center sm:text-left text-lg">
          <span>Astrology Temple</span>
          <span>அஸ்ட்ராலஜி டெம்பிள்</span>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-2">
          <a href="https://www.youtube.com/@astrologytemple" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF0000] hover:bg-[#CC0000] text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg transition-all">
            <Youtube className="w-5 h-5" />
            Subscribe Youtube
          </a>
          <span className="text-xs text-slate-500 font-medium">Thanks.. All the best.</span>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => {
            const encoded = encodeURIComponent("Hello Astrology Temple! I Want to Know More About Your Vaasthu Consultations.");
            window.open(`https://wa.me/919942684099?text=${encoded}`, "_blank");
          }}
          className="px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          Book Consultation via WhatsApp
        </button>
      </div>

    </div>
  );
}
