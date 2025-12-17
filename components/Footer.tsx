import React from 'react';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-end gap-1 h-6 mb-4">
                <div className="w-1.5 h-2 bg-brand-yellow rounded-sm"></div>
                <div className="w-1.5 h-4 bg-brand-red rounded-sm"></div>
                <div className="w-1.5 h-6 bg-brand-blue rounded-sm"></div>
                <span className="font-extrabold text-xl tracking-tight text-slate-900 ml-1">
                  ProBUILD
                </span>
             </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Empowering the next generation of digital engineers through project-based learning and industry mentorship.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-brand-blue">FreeCAD Nano Degree</a></li>
              <li><a href="#" className="hover:text-brand-blue">Digital Twin Diploma</a></li>
              <li><a href="#" className="hover:text-brand-blue">Automation Basics</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#philosophy" className="hover:text-brand-blue">Philosophy</a></li>
              <li><a href="#stories" className="hover:text-brand-blue">Success Stories</a></li>
              <li><a href="#mentoring" className="hover:text-brand-blue">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-blue hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-pink-600 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-400 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="mailto:hello@probuild.edu" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-brand-red hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; 2025 ProBUILD EdTech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;