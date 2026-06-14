import React from 'react';

export default function FreePanchangam() {
  return (
    <div className="text-left max-w-4xl mx-auto space-y-8 pt-8 pb-16 px-4 font-sans text-slate-800">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-950 font-cinzel mb-4">Free Panchangam</h2>
      </div>

      <div className="space-y-6 text-sm leading-relaxed font-medium">
        <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-100/50">
          <p>
            The Indian Astronomical Ephemeris is published anually by the Positional Astronomy Centre, Kolkata for providing astronomical data to observational astronomers and other users, such as Panchang makers. <br className="hidden md:block" /> <br className="md:hidden" /> While astronomical ephemeris with similar data are compiled by seven more countries in the world, the Indian Ephemeris is designed to cater to our particular national requirements.
          </p>
        </div>

        <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100/50">
          <p>
            இந்திய வானியல் எபிமெரிஸ் ஆண்டுதோறும் கொல்கத்தாவில் உள்ள நிலை வானியல் மையத்தால், அவதானிப்பு வானியலாளர்கள் மற்றும் பஞ்சாங்கம் தயாரிப்பாளர்கள் போன்ற பிற பயனர்களுக்கு வானியல் தரவுகளை வழங்குவதற்காக வெளியிடப்படுகிறது. <br className="hidden md:block" /> <br className="md:hidden" /> இதே போன்ற தரவுகளுடன் கூடிய வானியல் எபிமெரிஸ் உலகில் உள்ள மேலும் ஏழு நாடுகளால் தொகுக்கப்பட்டாலும், இந்திய எபிமெரிஸ் நமது குறிப்பிட்ட தேசிய தேவைகளை பூர்த்தி செய்யும் வகையில் வடிவமைக்கப்பட்டுள்ளது. <br className="hidden md:block" /> <br className="md:hidden" /> N. Ravi Rangaswamee.,M.A.,PG.D.E.A., +91 9942684099 thanks.. all the best.
          </p>
        </div>

        <div className="bg-purple-50/40 p-6 rounded-2xl border border-purple-100/50">
          <h2 className="font-bold">Access Free Panchangam Here</h2>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="https://youtu.be/nkuhjHEvuW8?si=nEL9QWq8pXd4dKDl"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-950 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-indigo-950/20 transition-all cursor-pointer"
            >
              Click Here To Access
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
