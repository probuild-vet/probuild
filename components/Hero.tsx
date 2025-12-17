import React from 'react';
import { CheckCircle2, Zap, Layout, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gray-50 pt-10 pb-20 sm:pt-16 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-6 text-center lg:text-left z-10 relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse"></span>
              New Cohort Starting Fall 2026
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-500">Profile</span>, <br className="hidden lg:block"/>
              not just a Resume.
            </h1>
            
            <p className="mt-4 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Digital Engineering & Automation Pathway. A program designed to make students 
              industry-relevant through <span className="text-slate-900 font-semibold underline decoration-brand-yellow decoration-2 underline-offset-2">real projects</span>, mentorship, and portfolio-driven growth.
            </p>
          
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 rounded-2xl bg-brand-red text-white font-bold text-lg shadow-xl shadow-brand-red/20 hover:bg-red-600 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
                Start Your Journey
              </button>
              <button className="px-8 py-4 rounded-2xl bg-white text-slate-700 border border-gray-200 font-bold text-lg shadow-sm hover:border-brand-blue hover:text-brand-blue transition-all duration-300">
                View Student Work
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>Verified Certs</span>
                </div>
                <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-blue" />
                    <span>Live Mentors</span>
                </div>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
             {/* Abstract Shapes */}
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-yellow/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl"></div>

             <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                    src="https://picsum.photos/800/600?random=1" 
                    alt="Students collaborating on robotics" 
                    className="w-full h-auto object-cover"
                />
                
                {/* Floating Cards */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg flex items-center gap-4 animate-bounce-slow">
                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                        <Users className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-500 font-bold uppercase">Placement Rate</p>
                        <p className="text-lg font-bold text-slate-900">100% (2025)</p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="flex flex-col items-center text-center p-2">
                <Zap className="w-8 h-8 text-brand-yellow mb-3" />
                <h3 className="text-3xl font-extrabold text-slate-900">100%</h3>
                <p className="text-slate-500 font-medium mt-1">Internship Placement <br/>(Cohort 2025)</p>
            </div>
             <div className="flex flex-col items-center text-center p-2">
                <Layout className="w-8 h-8 text-brand-blue mb-3" />
                <h3 className="text-3xl font-extrabold text-slate-900">12+</h3>
                <p className="text-slate-500 font-medium mt-1">Digital Engineering <br/>Modules</p>
            </div>
             <div className="flex flex-col items-center text-center p-2">
                <Users className="w-8 h-8 text-brand-red mb-3" />
                <h3 className="text-3xl font-extrabold text-slate-900">1:1</h3>
                <p className="text-slate-500 font-medium mt-1">Industry Expert <br/>Mentorship</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;