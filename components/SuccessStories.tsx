import React from 'react';
import { Quote } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      name: "Alex M.",
      role: "Intern at AutoTech",
      quote: "The portfolio I built with ProBUILD was the main topic during my internship interview. They didn't care about my grades, they cared about the gearbox simulation I built.",
      image: "https://picsum.photos/100/100?random=10"
    },
    {
      name: "Sarah K.",
      role: "Digital Twin Analyst",
      quote: "Mentorship changed everything. I was stuck on theory, but my mentor showed me how these tools are actually used in a factory setting.",
      image: "https://picsum.photos/100/100?random=11"
    },
    {
      name: "Rahul P.",
      role: "Mechanical Design Intern",
      quote: "The roadmap is clear. I went from knowing nothing about FreeCAD to designing complex assemblies in 8 weeks.",
      image: "https://picsum.photos/100/100?random=12"
    }
  ];

  return (
    <section id="stories" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">Success of Cohort 2025</h2>
          <p className="mt-4 text-lg text-slate-600">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col relative hover:-translate-y-2 transition-transform duration-300">
              <Quote className="absolute top-8 right-8 text-gray-100 w-12 h-12" />
              <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed">"{story.quote}"</p>
              
              <div className="mt-auto flex items-center">
                <img src={story.image} alt={story.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-blue" />
                <div>
                  <h4 className="font-bold text-slate-900">{story.name}</h4>
                  <p className="text-xs text-brand-blue font-bold uppercase tracking-wide">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;