import React from 'react';
import { Briefcase, Github, GraduationCap, ArrowUpRight } from 'lucide-react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Our Philosophy</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Why ProBUILD works.</h3>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
          
          {/* Box 1: Large - Real World Projects */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Briefcase size={180} />
            </div>
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-red/30">
                  <Briefcase />
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4">Real World Projects</h4>
                <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                  We don't do toy projects. We solve industry problems. You will work on automation systems, digital twins, and engineering designs that mimic actual corporate deliverables.
                </p>
              </div>
              <div className="mt-8">
                <a href="#" className="inline-flex items-center text-brand-red font-bold hover:underline">
                  See Project Gallery <ArrowUpRight className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Box 2: Tall/Medium - Portfolio Driven */}
          <div className="bg-brand-blue rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 text-white">
             <div className="absolute -bottom-10 -right-10 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <Github size={200} />
            </div>
            <div className="relative z-10">
               <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-6">
                  <Github />
                </div>
              <h4 className="text-2xl font-bold mb-4">Portfolio Driven</h4>
              <p className="text-blue-100 leading-relaxed">
                Students leave with a GitHub link, not just a certificate. Your code and designs speak louder than grades.
              </p>
            </div>
          </div>

          {/* Box 3: Wide - Mentorship */}
          <div className="md:col-span-3 bg-brand-yellow/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 border border-brand-yellow/20 hover:border-brand-yellow transition-colors duration-300">
            <div className="flex-shrink-0">
               <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center text-white shadow-lg shadow-brand-yellow/30">
                  <GraduationCap size={32} />
                </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h4 className="text-2xl font-bold text-slate-900 mb-2">Expert Mentorship</h4>
              <p className="text-slate-700 text-lg">
                Guidance from engineers currently working at top firms. Weekly code reviews, career pathing, and mock interviews to prepare you for the big league.
              </p>
            </div>
            <div className="flex-shrink-0">
                 <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-xl shadow-sm hover:shadow-md transition-all">
                    Meet Mentors
                 </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Philosophy;