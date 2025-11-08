import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cloud, Zap, Database, Box, Cpu, Globe, Package, TrendingUp, Rocket, Workflow, Lightbulb, BarChart3
} from "lucide-react";

function Logo({ className = "w-16 h-16 object-contain", alt = "ProBUILD" }) {
  const [imgError, setImgError] = useState(false);
  const src = "/ProBUILD.png";

  if (!imgError) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        onError={() => setImgError(true)}
        style={{ objectFit: "contain" }}
      />
    );
  }

  return (
    <div className={className} aria-hidden="true" style={{ display: "inline-flex" }}>
      <svg viewBox="0 0 140 140" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="80" width="40" height="36" rx="2" fill="#ffa700" />
        <rect x="40" y="36" width="40" height="80" rx="2" fill="#ef4b36" />
        <rect x="75" y="6" width="40" height="110" rx="2" fill="#53c0ea" />
      </svg>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fbf5ec] text-slate-900 font-sans">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/pathways" element={<Pathways />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Header() {
  return (
    <header className="p-6 border-b border-slate-200 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-4">
        <Logo className="w-16 h-16" />
        <div>
          <div className="text-2xl font-extrabold tracking-wide">ProBUILD</div>
          <div className="text-sm text-slate-600 -mt-1">Build your Profile, not Resume'</div>
        </div>
      </Link>

      <nav className="space-x-6 text-slate-700">
        <Link to="/" className="hover:text-slate-900">Home</Link>
        <Link to="/overview" className="hover:text-slate-900">Overview</Link>
        <Link to="/pathways" className="hover:text-slate-900">Pathways </Link>
        <Link to="/team" className="hover:text-slate-900">Team</Link>
        <Link to="/contact" className="hover:text-slate-900">Contact</Link>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl font-extrabold mb-4">ProBUILD</h1>
        <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Build, apply, and showcase your skills through real projects, mentorship, and portfolio-driven growth.
        </p>
      </motion.div>

      <div className="mt-10 flex justify-center gap-0 items-end">
        <div className="w-24 h-40 bg-[#ffa700] rounded-sm shadow-sm"></div>
        <div className="w-24 h-60 bg-[#ef4b36] rounded-sm shadow-sm"></div>
        <div className="w-24 h-80 bg-[#53c0ea] rounded-sm shadow-sm"></div>
      </div>

      <div className="mt-10">
        <Link
          to="/overview"
          className="inline-block bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold"
        >
          Explore ProBUILD
        </Link>
      </div>
      <EventGallery /> 
    </section>
  );
}
function EventGallery() {
  // Add your image filenames here
  const images = [
    "/events/event1.jpg",
    "/events/event2.jpg",
    "/events/event9.jpg",
    "/events/event6.jpg",
    "/events/event7.jpg",
    "/events/event8.jpg",
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-semibold text-center mb-8">Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((src, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-md group">
            <img
              src={src}
              alt={`Event ${i + 1}`}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Overview() {
  const usps = [
    {
      icon: <Package className="w-10 h-10 text-[#ef4b36]" />,
      title: "Build",
      desc: "Start from fundamentals and create tangible work that defines your skills.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-[#53c0ea]" />,
      title: "Upscale",
      desc: "Elevate your understanding with industry context and collaboration.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-[#ffa700]" />,
      title: "Empower",
      desc: "Apply, showcase and communicate your profile through real opportunities.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-4xl font-extrabold">
          ProBUILD
        </motion.h1>
        <p className="text-slate-700 leading-relaxed">
          At ProBUILD, we believe learning should create identity, not dependency. Each pathway is designed to build industry-relevant skills while shaping your professional profile through hands-on experiences, mentorship, and portfolio-driven outcomes.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {usps.map((u, idx) => (
            <div key={idx} className="bg-white/60 border border-slate-200 rounded-xl p-6">
              <div className="mb-3">{u.icon}</div>
              <h4 className="text-2xl font-semibold">{u.title}</h4>
              <p className="text-slate-600 mt-2">{u.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/80 p-8 rounded-2xl border border-slate-200">
          <h3 className="text-2xl font-semibold mb-2">Why ProBUILD</h3>
          <p className="text-slate-700">Because learning should build you — not your dependency . Turn fundamentals into real, demonstrable work that defines your professional identity.</p>
        </div>
      </div>
    </section>
  );
}

function Pathways() {
  const modules = [
    { title: "Digital Engineering & Automation", desc: "Parametric modeling, simulation-driven design, and automation.", icon: <Workflow className="w-10 h-10 text-[#ef4b36]" /> },
    { title: "Design Thinking", desc: "Empathize, Define, Ideate, Prototype, and Test.", icon: <Lightbulb className="w-10 h-10 text-[#ffa700]" /> },
    { title: "Business Intelligence", desc: "how businesses work, how value is created, and how decisions are made.", icon: <BarChart3 className="w-10 h-10 text-[#53c0ea]" /> },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto space-y-8 text-center">
        <h2 className="text-3xl font-semibold">Our Pathways</h2>
        <p className="text-slate-700 max-w-2xl mx-auto">A compact, extensible pipeline that brings design, analysis and knowledge together.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className="bg-white/60 p-6 rounded-xl border border-slate-200">
              <div className="mb-3">{m.icon}</div>
              <h4 className="text-lg font-semibold">{m.title}</h4>
              <p className="text-slate-600 mt-2">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="py-16 text-center">
      <h3 className="text-3xl font-semibold mb-4">Team</h3>
      <p className="text-slate-700 mb-8 max-w-2xl mx-auto">Cross-disciplinary team of engineers, design and startup founders.</p>

      <div className="flex justify-center gap-6 flex-wrap">
        <TeamCard name="Anand Khandekar" role="Co-founder" desc="Mechanical engineer and CAD Program Lead" />
        <TeamCard name="Suhani Kolhatkar" role="Co-founder" desc="Mechanical engineer and CAD Program Lead" />
        <TeamCard name="Pranoti Kulkarni" role="Associate Tutor" desc="Mechanical engineer and CAD Associate Tutor" />
      </div>
    </section>
  );
}

function TeamCard({ name, role, desc }) {
  return (
    <div className="bg-white/60 p-6 rounded-lg border border-slate-200 w-64">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-slate-600 text-sm mb-3">{role}</div>
      <p className="text-slate-600 text-sm">{desc}</p>
    </div>
  );
}

function Contact() {
  return (
    <section className="py-16 text-center">
      <h3 className="text-2xl font-semibold mb-4">Let's Collaborate</h3>
      <p className="text-slate-700 max-w-xl mx-auto mb-6">Interested in partnering? Reach out and let's build.</p>
      <a href="mailto:info@probuild.com" className="inline-block bg-slate-900 text-white px-6 py-2 rounded-lg">Contact Us</a>
      <p className="text-slate-600 mt-4 text-sm">Email: info@probuild.com | Pune, India</p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 py-6 text-center border-t border-slate-200 text-slate-600 text-sm">
      © {new Date().getFullYear()} ProBUILD — Product Realization Platform
    </footer>
  );
}