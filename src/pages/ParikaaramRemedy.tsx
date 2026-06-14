import React from 'react';

export default function ParikaaramRemedy() {
  return (
    <div className="text-left max-w-4xl mx-auto space-y-8 pt-8 pb-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-indigo-950 font-cinzel mb-4">Parikaaram @ Remedy</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Welcome to the Parikaaram and Remedy consultations page. Add your specific content, detailed service descriptions, and other information here.
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-xl text-sm font-bold uppercase tracking-wider shadow-lg transition-all cursor-pointer">
          Book Consultation
        </button>
      </div>
    </div>
  );
}
