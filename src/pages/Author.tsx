import React from 'react';

export default function Author() {
  return (
    <div className="text-left max-w-4xl mx-auto space-y-8 pt-8 pb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-950 font-cinzel mb-4">Author's Library</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">Written by N.Ravi Rangaswamee.</p>
      </div>

      {/* Book Item 1 */}
      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-indigo-100 flex flex-col md:flex-row items-start gap-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-full md:w-48 shrink-0">
          <img
            src="/JothidamPuthiyaPaarvaiyil.jpeg"
            alt="Jothidam PuthiyaPaarvaiyil"
            className="w-full h-auto object-cover rounded-xl shadow-md border border-slate-200"
          />
        </div>
        <div className="flex flex-col gap-4 flex-grow">
          <h3 className="text-xl font-bold text-slate-800">Jothidam Puthiya Paarvaiyil</h3>
          <p className="text-slate-700 text-sm leading-relaxed font-medium">
            Jothidam Puthiya Parvaiyil Astrology Research & Reform Book..
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="https://books.nakkheeran.in/product/%E0%AE%9C%E0%AF%8B%E0%AE%A4%E0%AE%BF%E0%AE%9F%E0%AE%AE%E0%AF%8D-%E0%AE%AA%E0%AF%81%E0%AE%A4%E0%AE%BF%E0%AE%AF-%E0%AE%AA%E0%AE%BE%E0%AE%B0%E0%AF%8D%E0%AE%B5%E0%AF%88%E0%AE%AF%E0%AE%BF%E0%AE%B2%E0%AF%8D/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-950 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-indigo-950/20 transition-all cursor-pointer"
            >
              Buy Book
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-indigo-100 flex flex-col md:flex-row items-start gap-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="w-full md:w-48 shrink-0">
          <img
            src="/Thirunageshwaram.jpeg"
            alt="Thirunageshwaram"
            className="w-full h-auto object-cover rounded-xl shadow-md border border-slate-200"
          />
        </div>
        <div className="flex flex-col gap-4 flex-grow">
          <h3 className="text-xl font-bold text-slate-800">திருநாகேஸ்வரம் கோயில் கல்வெட்டுச் செய்திகள் ஆய்வு நூல்</h3>
          <p className="text-slate-700 text-sm leading-relaxed font-medium">
            Tirunageswaram Kovil Kalvettu Seithigal Aaivu Nool Author. N. Rengasamy @ N. Ravi Rangaswamee  நன்று.. நன்றி..
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="https://www.tnarch.gov.in/flipbook/Thirunageswaram/mobile/index.html"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-950 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-indigo-950/20 transition-all cursor-pointer"
            >
              View Book
            </a>
            <a
              href="https://www.tnarch.gov.in/Library%20BOOk%20PDF/Thirunageswaram.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-950 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-indigo-950/20 transition-all cursor-pointer"
            >
              View Book
            </a>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mt-2">திருநாகேஸ்வரம் மத நல்லிணக்கக் கல்வெட்டுச் செய்திகள் Tirunageswaram Religious harmony Kalvettu Seithigal</h3>
          <p className="text-slate-700 text-sm leading-relaxed font-medium">
            Author N. Rengasamy @ N. Ravi Rangaswamee  நன்று.. நன்றி..
          </p>
          <div className="mt-2 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1Nd5bCx7_sFeCMY7YHeDbWvWDFTKzTEtu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-950 hover:bg-slate-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-indigo-950/20 transition-all cursor-pointer"
            >
              Read
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
