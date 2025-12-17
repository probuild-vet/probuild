import React from 'react';
import { Calendar, FileText, MessageCircle } from 'lucide-react';

const MentoringHub: React.FC = () => {
  return (
    <section id="mentoring" className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <MessageCircle className="w-8 h-8 text-brand-yellow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Not sure where to start? Let's Talk.</h2>
          <p className="text-xl text-slate-300">
            Choosing a career path in digital engineering can be confusing. We offer free guidance sessions to help you decide if ProBUILD is right for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Option A */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center mb-6 shadow-lg shadow-brand-blue/40 group-hover:scale-110 transition-transform">
                    <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Book a 1:1 Session</h3>
                <p className="text-slate-400 mb-6">15-minute Zoom call with a lead mentor. Discuss your current skills and career goals.</p>
                <span className="inline-block text-brand-yellow font-bold border-b border-brand-yellow pb-1 group-hover:border-b-2">Schedule Free Call &rarr;</span>
            </div>

            {/* Option B */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-brand-red flex items-center justify-center mb-6 shadow-lg shadow-brand-red/40 group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Download Curriculum</h3>
                <p className="text-slate-400 mb-6">Detailed PDF syllabus of the FreeCAD Nano Degree and upcoming advanced modules.</p>
                <span className="inline-block text-brand-yellow font-bold border-b border-brand-yellow pb-1 group-hover:border-b-2">Get PDF Guide &rarr;</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default MentoringHub;