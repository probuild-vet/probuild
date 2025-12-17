import React from 'react';
import { Download, ArrowRight, Check } from 'lucide-react';

const ProgramShowcase: React.FC = () => {
  return (
    <section id="program" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="md:w-2/5 relative h-64 md:h-auto">
             <img 
              src="https://picsum.photos/600/800?random=2" 
              alt="Engineering Design" 
              className="absolute inset-0 w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-brand-blue/20 mix-blend-multiply"></div>
             <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 bg-brand-yellow text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                    Admissions Open
                </span>
             </div>
          </div>

          {/* Content Side */}
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <h5 className="text-slate-400 font-bold uppercase text-sm tracking-wide mb-2">Featured Program</h5>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              FreeCAD Foundation <span className="text-brand-blue">Nano Degree</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Master open-source parametric modeling. This course creates the bedrock for Diploma Level I. Built for students who want to move beyond theory.
            </p>

            <ul className="space-y-3 mb-8">
                <li className="flex items-center text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                        <Check size={12} strokeWidth={4} />
                    </div>
                    8 Weeks Duration
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                         <Check size={12} strokeWidth={4} />
                    </div>
                    Live Weekend Classes
                </li>
                <li className="flex items-center text-slate-700 font-medium">
                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3">
                         <Check size={12} strokeWidth={4} />
                    </div>
                    Github Portfolio Building
                </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                    <Download size={18} />
                    Brochure
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-all hover:scale-[1.02]">
                    Enroll Now
                    <ArrowRight size={18} />
                </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProgramShowcase;