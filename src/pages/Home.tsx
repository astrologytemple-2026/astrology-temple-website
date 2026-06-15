import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function Home() {
  const youtubeLinks = [
    { url: "https://www.youtube.com/watch?v=tB_whqfZoN0", thumbVid: "tB_whqfZoN0" },
    { url: "https://www.youtube.com/watch?v=cu7UraqHoj8&list=PLXoiyvGD4QuMxnpjI2maXraDsEyaCDDDh", thumbVid: "cu7UraqHoj8" },
    { url: " https://www.youtube.com/watch?v=r0H03FyIKIM&list=PLXoiyvGD4QuP2cP5StUUD1UbC3VlEQjKp", thumbVid: "r0H03FyIKIM" },
    { url: "https://www.youtube.com/watch?v=sBJbAeMeB7Y&list=PLXoiyvGD4QuMJYAZ3iGikBLboLEovy0lv", thumbVid: "sBJbAeMeB7Y" },
    { url: "https://www.youtube.com/watch?v=Kxb88z3go0w&list=PLXoiyvGD4QuPIWJME_wv8w_3HPjpFPKY-&index=2", thumbVid: "Kxb88z3go0w" },
    { url: "https://www.youtube.com/watch?v=hwvsaS_ElY0&list=PLXoiyvGD4QuNfh5KF8R7Drh3AVKVQavPx", thumbVid: "hwvsaS_ElY0" },
    { url: "https://www.youtube.com/watch?v=zzXsHSOT264&list=PLXoiyvGD4QuNsKp7_zjyeV1SYVKj2GLBO", thumbVid: "zzXsHSOT264" },
    { url: "https://www.youtube.com/watch?v=Z-rQgmVSePk&list=PLXoiyvGD4QuPbb1A8O3qUL9rSTJRsGzzo", thumbVid: "Z-rQgmVSePk" },
    { url: "https://www.youtube.com/watch?v=N8Zmxw8pnp8&list=PLXoiyvGD4QuPbb1A8O3qUL9rSTJRsGzz&index=2&pp=gAQBiAQB", thumbVid: "N8Zmxw8pnp8" },
    { url: "https://www.youtube.com/watch?v=nEDbHnYsKSY&list=PLXoiyvGD4QuPL-waGa63YgMmVH9uDP7LZ", thumbVid: "nEDbHnYsKSY" },
    { url: "https://www.youtube.com/watch?v=4BoNColJ-8I&list=PLXoiyvGD4QuPFTC6DK-5q3vx2uj_8JQiQ", thumbVid: "4BoNColJ-8I" },
    { url: "https://www.youtube.com/watch?v=F_eVcHfPeHs&list=PLXoiyvGD4QuOy1ptcdkIkEm-Dj2EBlPVQ", thumbVid: "F_eVcHfPeHs" },
    { url: "https://www.youtube.com/watch?v=Z8LY7PnXorQ&list=PLXoiyvGD4QuOV-T4RUvB8fN37XmoUmMoI&index=2", thumbVid: "Z8LY7PnXorQ" },
    { url: "https://www.youtube.com/watch?v=RmMpeMiLd04&list=PLXoiyvGD4QuMUWFgJXvqJEsC6mLhoTxnP", thumbVid: "RmMpeMiLd04" },
    { url: "https://www.youtube.com/watch?v=UjsIB1HvuCU&list=PLXoiyvGD4QuPL_8kMGLJ7aKD60F7d7Z5t", thumbVid: "UjsIB1HvuCU" },
    { url: "https://www.youtube.com/watch?v=1omhcoC_itM&list=PLXoiyvGD4QuMvEAbLniZzeT3H97ycxcZw", thumbVid: "1omhcoC_itM" },
    { url: "http://youtube.com/watch?v=E_pwLBLFY7s", thumbVid: "E_pwLBLFY7s" },
    { url: "https://www.youtube.com/watch?v=GeSQlv-UV0M&list=PLXoiyvGD4QuOizqXcv3PN91_SopuM5p5W", thumbVid: "GeSQlv-UV0M" },
  ];

  const getProperUrl = (url: string) => {
    const cleanUrl = url.trim();
    if (cleanUrl.includes('list=')) {
      const match = cleanUrl.match(/[?&]list=([^&]+)/);
      if (match && match[1]) {
        return `https://www.youtube.com/playlist?list=${match[1]}`;
      }
    }
    return cleanUrl;
  };

  const handleBookConsultation = () => {
    const encoded = encodeURIComponent("Hello Astrology Temple! I Want to Know More About Your Consultations.");
    window.open(`https://wa.me/919942684099?text=${encoded}`, "_blank");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div className="lg:col-span-7 text-left space-y-5 md:space-y-6">
        <div className="space-y-6 text-{slate-700} text-sm leading-relaxed max-w-2xl font-sans font-medium">
          <p className="font-bold text-[#FF0099] tracking-wider capitalize">Astrology Temple அஸ்ட்ராலஜி டெம்பிள்</p> </div>
        <div className="space-y-6 text-{slate-700} text-sm leading-relaxed max-w-2xl font-sans font-medium">
          <p className="font-bold text-[#7D0000] tracking-wider capitalize">
            Astrologer N.Ravi Rangaswamee., <br className="md:hidden" /> M.A., PG.D.E.A.,<br className="hidden md:block" />
            <br className="md:hidden" /> Astrological Compatibility Research, Training & Prediction Professional..<br className="hidden md:block" />
            Astrology, Horoscope, Numerology, Nameology, Vaasthu, <br className="md:hidden" /> Marriage Matching,<br className="hidden md:block" /> Parikaaram @ Remedy <br className="hidden md:block" /> <br className="md:hidden" />
            Accurate Astrology Calculations and Predictions. Updated Astrology.<br className="hidden md:block" /> <br className="md:hidden" /> Reformed Astrology. +91 9942684099, <span className="lowercase">astrologytemple@gmail.com</span>
          </p>

          <p className="font-bold text-[#7D0000]">
            ஜோதிட ஆலோசகர் நா. ரவி ரங்கசுவாமி., M.A.,PG.D.E.A.,<br className="hidden md:block" /> <br className="md:hidden" />
            காலக்கணிய ஒப்பறிவியல் ஆய்வு, பயிற்சி & பலாபலன் தீர்வாளர். ஜோதிடம், ஜாதகம்,<br className="md:hidden" /> எண் கணிதம், பெயரியல், வாஸ்து, <br className="md:hidden" /> திருமணப் பொருத்தம், பரிகாரம். <br className="hidden md:block" />
            புதுப்பிக்கப்பட்ட ஜோதிடம். <br className="md:hidden" /> சீர்திருத்த ஜோதிடம். +91 9942684099
          </p>

          <p className="font-bold text-[#00571D]">
            பிறந்த தேதி, நேரம், தசா இருப்பு <br className="md:hidden" /> வரு - மாத- நாள்- மணி: நிமிடம்: வினாடி முதல்.. <br className="hidden md:block" />
            120 ஆண்டுகளுக்கு.. மிகச்சரியான 360-&gt;365[365.25]366 days?! <br className="hidden md:block" />
            நடப்பு தசாபுத்தி அந்தர அட்டவணை 16 A4 Pages.. Multi Lingual.. INRs 100 Only..<br className="hidden md:block" />
            தொடர்புக்கு: +91 9942684099
          </p>

          <p className="font-bold text-[#00571D]">
            Accurate Current 360--&gt;365[365.25]366 Days?!.. Dasaa Bhukthi Antharam Chart for 120 years from <br className="md:hidden" /> Birth Date, Time and Dasaa Years-Months-Days-Hrs:Mints:Seconds Balance,<br className="hidden md:block" /> 16 A4 Pages.. <br className="md:hidden" /> Multi Lingual.. INRs 100 Only..<br className="hidden md:block" />
            <br className="md:hidden" /> Contact: +91 9942684099, <span className="lowercase">astrologytemple@gmail.com</span>
          </p>

          <div className="pt-2 font-bold text-[#000BD1]">
            © First and Only.. Sample pdf:<br className="hidden md:block" />
            <a href="https://drive.google.com/file/d/1ZyQHq9J2QEGffedkcsCJIVBKybZ9kHxe/view?usp=sharing" target="_blank" rel="noreferrer"
              className="mt-3 inline-flex items-center justify-center gap-2 px-6 py-4 bg-indigo-950 hover:bg-slate-900 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-indigo-950/20 transition-all font-keepcalm cursor-pointer">
              Click Here To View PDF
            </a>
          </div>

          <p className="font-bold text-[#5E005E]">
            தவறு.. கம்ப்யூட்டர் ஜாதக தசா இருப்பு <br className="md:hidden" /> வரு - மாத- நாள் & தொடர் தசாபுத்தி தேதிகளும் தவறு.. எனவே, நீங்கள் பிறந்த நட்சத்திரத்தின் 'ஆதி அந்த' மொத்த நேரத்தைக் கணக்கிலெடுத்துக் கொண்டு மிகச்சரியான தசா இருப்பு <br className="hidden md:block" /> வரு - மாத- நாள்- <br className="md:hidden" /> மணி: நிமிடம்: வினாடி கணக்கிட்டு <br className="hidden md:block" /> <br className="md:hidden" /> 120 ஆண்டுகளுக்கு மிகச்சரியான <br className="md:hidden" /> 360-&gt;365[365.25]366 days?! <br className="hidden md:block" /> நடப்பு தசாபுத்தி அந்தர அட்டவணை ரூ.700, 16 A4 Pages.. <br className="md:hidden" /> Multi Lingual..<br className="hidden md:block" /> Contact : +91 9942684099
          </p>

          <p className="font-bold text-[#5E005E]">
            I Will Give PDF of <br className="md:hidden" /> <br className="hidden md:block" /> 1] New computerized Horoscope  Single Page, <br className="md:hidden" /> <br className="hidden md:block" /> 2]. More than 33 pages with general predictions..<br className="md:hidden" /> <br className="hidden md:block" /> 3] Manually Calculated ( based on your birth star - begin and finish ) <br className="md:hidden" /> <br className="hidden md:block" /> Accurate Current 360--&gt;365[365.25]366 Days?!.. <br className="md:hidden" /> <br className="hidden md:block" /> Dasaa Bhukthi Antharam Chart for 120 years from Birth Date, Time and Dasaa Years-Months-Days-Hrs:Mints:Seconds Balance.. Rs.700,<br className="md:hidden" /> <br className="hidden md:block" /> +91 9942684099, <span className="lowercase">astrologytemple@gmail.com</span>
          </p>
        </div>
      </div>

      <div className="lg:col-span-5 relative grid grid-cols-2 gap-4 items-start content-start">
        {youtubeLinks.map((item, idx) => (
          <a key={idx} href={getProperUrl(item.url)} target="_blank" rel="noreferrer" className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-100 relative group cursor-pointer bg-slate-900 block">
            <img src={`https://img.youtube.com/vi/${item.thumbVid}/hqdefault.jpg`} alt="Astrologer N.Ravi Rangaswamee Vadapalani Chennai Astrology Consultation" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
          </a>
        ))}
      </div>

      {/* Full Width Buttons Container */}
      <div className="lg:col-span-12 flex flex-col md:flex-row justify-center items-stretch md:items-center gap-4 pt-10 pb-4">
        <button
          onClick={handleBookConsultation}
          className="px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
          Book My Consultation
        </button>
        <button
          onClick={() => {
            if (window.innerWidth < 768) {
              window.location.href = "tel:+919942684099";
            } else {
              alert("Call Astrology Temple at: +91 9942684099");
            }
          }}
          className="px-6 py-4 bg-accent-gold hover:bg-yellow-600 text-slate-900 text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <Phone className="w-4 h-4" />
          Call Astrology Temple
        </button>
        <button
          onClick={() => window.location.href = "mailto:astrologytemple@gmail.com"}
          className="px-6 py-4 bg-primary hover:bg-primary-light text-white text-xs uppercase tracking-widest font-bold rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 w-full md:w-auto"
        >
          <Mail className="w-4 h-4" />
          Mail Astrology Temple
        </button>
      </div>

    </div>
  );
}
