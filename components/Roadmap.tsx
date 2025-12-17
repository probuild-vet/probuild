import React from 'react';
import { BookOpen, Wrench, Rocket, Briefcase, ArrowRight } from 'lucide-react';

const Roadmap: React.FC = () => {
  const phases = [
    {
      id: 'I',
      title: 'Learn',
      icon: BookOpen,
      colorClass: 'bg-blue-50 border-blue-100 text-brand-blue',
      badgeClass: 'bg-brand-blue text-white',
      lineClass: 'bg-brand-blue',
      steps: [
        { num: 1, text: 'Discovery & Application' },
        { num: 2, text: 'Free Demo Session' },
        { num: 3, text: 'Nano Degree Kick-off' },
      ]
    },
    {
      id: 'II',
      title: 'Build',
      icon: Wrench,
      colorClass: 'bg-yellow-50 border-yellow-100 text-yellow-700',
      badgeClass: 'bg-brand-yellow text-white',
      lineClass: 'bg-brand-yellow',
      steps: [
        { num: 4, text: 'Profile Development Workshops' },
        { num: 5, text: 'Hands-On Mini Projects' },
      ]
    },
    {
      id: 'III',
      title: 'Create',
      icon: Rocket,
      colorClass: 'bg-red-50 border-red-100 text-brand-red',
      badgeClass: 'bg-brand-red text-white',
      lineClass: 'bg-brand-red',
      steps: [
        { num: 6, text: 'Capstone Project Execution' },
        { num: 7, text: 'Performance Eval & Certification' },
      ]
    },
    {
      id: 'IV',
      title: 'Gain',
      icon: Briefcase,
      colorClass: 'bg-emerald-50 border-emerald-100 text-emerald-700',
      badgeClass: 'bg-emerald-600 text-white',
      lineClass: 'bg-emerald-600',
      steps: [
        { num: 8, text: 'Internship Placement (Fall \'26)' },
        { num: 9, text: 'Ongoing Alumni Mentorship' },
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-white relative overflow-hidden">
       {/* Header */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-brand-blue font-bold tracking-wide uppercase text-sm mb-3">Service Roadmap</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">Your Journey to Industry.</h3>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            From curiosity to career in four distinct phases.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {phases.map((phase, index) => (
                <div key={phase.id} className="relative group">
                    {/* Desktop Connector Arrow */}
                    {index < phases.length - 1 && (
                        <div className="hidden lg:block absolute top-12 -right-6 z-10 text-slate-300">
                             <ArrowRight size={24} />
                        </div>
                    )}

                    {/* Phase Card */}
                    <div className={`h-full rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${phase.colorClass}`}>
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-sm ${phase.badgeClass}`}>
                                <phase.icon size={24} />
                            </div>
                            <div>
                                <span className="text-xs font-bold uppercase opacity-80 tracking-wider">Phase {phase.id}</span>
                                <h4 className="text-2xl font-bold">{phase.title}</h4>
                            </div>
                        </div>

                        {/* Steps Timeline */}
                        <div className="space-y-6 relative pl-2">
                             {/* Vertical Line */}
                            <div className={`absolute left-[15px] top-2 bottom-2 w-0.5 rounded-full opacity-30 ${phase.lineClass}`}></div>

                            {phase.steps.map((step) => (
                                <div key={step.num} className="relative flex gap-4 items-start">
                                    <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm flex-shrink-0 border-2 border-white ${phase.badgeClass}`}>
                                        {step.num}
                                    </div>
                                    <div className="pt-1">
                                        <p className="font-semibold text-slate-800 leading-tight text-sm md:text-base">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;