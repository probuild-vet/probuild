import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Lightbulb,
  BarChart3,
  Package,
  TrendingUp,
  Rocket,
  Database,
  ImageIcon,
  User,
  Mail,
  MapPin,
  Award,
  Clock,
  ClipboardCheck,
  Grid,
} from "lucide-react";

// Replace these with actual assets in /public or import them
const LOGO_SRC = "/ProBUILD.png";
const APPLY_LINK = "https://forms.gle/pC2YtxtTioFBnzrS8"; // from your PDF

export default function ProBUILDOnePager() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="min-h-screen bg-[#fbf5ec] text-slate-900 font-['Inter_Tight',sans-serif]">
      <Nav imgError={imgError} setImgError={setImgError} />

      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <Overview />
        <Pathways />
        <Program />
        <Featured />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

function Logo({ className = "w-16 h-16 object-contain", imgError, setImgError }) {
  const src = LOGO_SRC;

  if (!imgError) {
    return (
      <img
        src={src}
        alt="ProBUILD"
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

function Nav({ imgError, setImgError }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="p-4 border-b border-slate-200 sticky top-0 bg-[#fbf5ec] z-50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between w-full">
        {/* LEFT SECTION (desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#overview" className="hover:text-slate-900">Overview</a>
          <a href="#pathways" className="hover:text-slate-900">Pathways</a>
          <a href="#program" className="hover:text-slate-900">Program</a>
        </div>

        {/* LOGO */}
        <a href="#overview" className="flex items-center gap-3">
          <Logo className="w-14 h-14" imgError={imgError} setImgError={setImgError} />
          <div className="hidden md:block">
            <div className="text-2xl font-extrabold tracking-wide">ProBUILD</div>
          </div>
        </a>

        {/* RIGHT SECTION (desktop) */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="#featured" className="hover:text-slate-900">Featured</a>
          <a href="#team" className="hover:text-slate-900">Team</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
        >
          <span className={`block w-6 h-0.5 bg-slate-800 transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-800 transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-slate-800 transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden mt-4 flex flex-col gap-4 bg-white/90 p-4 rounded-xl border border-slate-200 shadow transition-all duration-300 ${open ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <a href="#overview" className="hover:text-slate-900">Overview</a>
        <a href="#pathways" className="hover:text-slate-900">Pathways</a>
        <a href="#program" className="hover:text-slate-900">Program</a>
        <a href="#featured" className="hover:text-slate-900">Featured</a>
        <a href="#team" className="hover:text-slate-900">Team</a>
        <a href="#contact" className="hover:text-slate-900">Contact</a>
      </div>
    </header>
  );
}

function Overview() {
  return (
    <section id="overview" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-[#ffa700]/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-40 -right-20 w-80 h-80 bg-[#ef4b36]/25 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/3 w-72 h-72 bg-[#53c0ea]/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center relative z-10"
      ></motion.div>  
      
        <div className="relative flex flex-col items-center">
          {/* Decorative Illustration / Hero Graphic */}
          <div className="absolute -top-10 -z-10 w-72 h-72 bg-[#53c0ea]/40 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 -z-10 w-56 h-56 bg-[#ef4b36]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-10 -z-10 w-40 h-40 bg-[#ffa700]/40 rounded-full blur-3xl"></div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Build your Profile, not Resume</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Build, apply, and showcase your skills through real projects, mentorship, and portfolio-driven growth — a
            program designed to make students industry-relevant.
          </p>

          {/* Illustration element */}
          <div className="mt-12 flex justify-center">
            <img
              src="/events/profile-building.png"
              alt="profile-building-illustration"
              className="w-full max-w-3xl object-contain"
            />
        </div>


          

          <div className="mt-16 flex justify-center gap-6 flex-wrap">
            <Card icon={<Package className="w-8 h-8 text-[#ef4b36]" />} title="Build" desc="Start from fundamentals and create tangible work that defines your skills." />
            <Card icon={<TrendingUp className="w-8 h-8 text-[#53c0ea]" />} title="Upscale" desc="Elevate your understanding with industry context and collaboration." />
            <Card icon={<Rocket className="w-8 h-8 text-[#ffa700]" />} title="Empower" desc="Apply, showcase and communicate your profile through real opportunities." />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="bg-white/80 border border-slate-200 rounded-2xl p-6 w-72 text-left shadow-sm">
      <div className="mb-3">{icon}</div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-slate-600 mt-2">{desc}</p>
    </div>
  );
}

function Pathways() {
  const modules = [
    { title: "Digital Engineering & Automation", desc: "Parametric modeling, simulation-driven design, and automation.", icon: <Workflow className="w-10 h-10 text-[#ef4b36]" /> },
    { title: "Design Thinking", desc: "Empathize, Define, Ideate, Prototype, and Test.", icon: <Lightbulb className="w-10 h-10 text-[#ffa700]" /> },
    { title: "Business Intelligence", desc: "How businesses work, how value is created, and how decisions are made.", icon: <BarChart3 className="w-10 h-10 text-[#53c0ea]" /> },
  ];

  return (
    <section id="pathways" className="py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Pathways</h2>
        <p className="text-slate-700">Compact, focused pipelines designed to bring skill, design and analytical thinking together.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <div key={i} className={`bg-white/80 p-6 rounded-xl border border-slate-200 hover:shadow-lg transition`}>{/* highlight Digital Engineering */}
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

function Program() {
  return (
    <section id="program" className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-extrabold">Nano Degree in FreeCAD</h2>
            <p className="mt-4 text-slate-700 text-lg">
              Master Parametric CAD + Python Automation in FreeCAD — the skillset driving modern engineering workflows.
              Structured guidance, hands-on practice, and portfolio-focused learning to build real engineering capability.
            </p>

            <div className="mt-6 bg-white/80 p-4 rounded-lg border border-slate-200 flex flex-wrap gap-4">
              <Badge icon={<Clock className="w-5 h-5 text-[#ef4b36]" />} label="Hybrid • 3 hrs / week" />
              <Badge icon={<CalendarIcon />} label="Next cohort: Feb 2026" />
              <Badge icon={<Database className="w-5 h-5 text-[#53c0ea]" />} label="Fee: ₹ 4,999" />
              <Badge icon={<User className="w-5 h-5 text-[#ffa700]" />} label="Instructors: Suhani & Pranoti" />
            </div>

            <div className="mt-6 flex gap-4">
              <a href={APPLY_LINK} target="_blank" rel="noreferrer" className="inline-block bg-[#ef4b36] hover:bg-[#d63d2d] text-white px-6 py-3 rounded-lg font-semibold">Apply Now</a>
              <a href="#featured" className="inline-block border border-slate-300 px-6 py-3 rounded-lg">See cohort work</a>
            </div>
          </div>

          <div>
            <div className="bg-white/90 border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="text-xl font-semibold mb-3">What you will learn</h4>
              <ul className="text-slate-600 space-y-2 list-inside list-disc">
                <li>Parametric CAD fundamentals & constraint modelling</li>
                <li>Multibody workflows & Assembly4 basics</li>
                <li>TechDraw: manufacturing-ready documentation</li>
                <li>VarSet + spreadsheet-driven modelling</li>
                <li><strong>Python + CAD Automation</strong> — macros & script-driven design</li>
                <li>Surface modelling: Curves & Lattice</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What you will build */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">What you will build</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Outcome title="Parametric Parts" desc="Reproducible, driven-by-constraints 3D parts" icon={<Grid className="w-6 h-6 text-[#ef4b36]" />} />
            <Outcome title="Mini Assemblies" desc="Functional assemblies with LCS & anchors" icon={<Grid className="w-6 h-6 text-[#53c0ea]" />} />
            <Outcome title="Automation Tasks" desc="Small Python scripts & macros for CAD automation" icon={<Grid className="w-6 h-6 text-[#ffa700]" />} />
          </div>
        </div>

        {/* Statistics block */}
        <Stats />

        {/* Testimonials & CTA */}
        <div className="mt-12 bg-white/80 p-6 rounded-xl border border-slate-200">
          <h4 className="text-xl font-semibold mb-3">What students say</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <Quote text="Parametric thinking finally makes sense." author="— Student, Cohort 1" />
            <Quote text="Assignments pushed me to think like an engineer." author="— Student, Cohort 1" />
            <Quote text="I built more in 5 weeks than I did all year." author="— Student, Cohort 1" />
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a href={APPLY_LINK} target="_blank" rel="noreferrer" className="inline-block bg-[#ef4b36] hover:bg-[#d63d2d] text-white px-6 py-3 rounded-lg font-semibold">Apply Now</a>
            <a href="#syllabus" className="inline-block border border-slate-300 px-6 py-3 rounded-lg">See detailed syllabus</a>
          </div>
        </div>

        {/* Detailed Syllabus at the end of Program section */}
        <div id="syllabus" className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Detailed Syllabus</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <SyllabusCard title="PartDesign & Parametric Modelling" items={["Sketch constraints", "Pads & pockets", "Fillets & chamfers", "Patterns & mirroring"]} />
            <SyllabusCard title="Assembly & Multi-body" items={["Assembly4 basics", "LCS & anchors", "Fasteners & mates"]} />
            <SyllabusCard title="Drafting & Documentation" items={["TechDraw views", "Dimensions", "Title blocks & export"]} />
            <SyllabusCard title="Parametric Data" items={["VarSets", "Spreadsheet-driven design"]} />
            <SyllabusCard title="Automation & Scripting" items={["Python in FreeCAD", "Macro scripting", "Small automation projects"]} />
            <SyllabusCard title="Surface modelling" items={["Curves Workbench", "Lattice2 patterns"]} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Badge({ icon, label }) {
  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-md border border-slate-200">
      <div>{icon}</div>
      <div className="text-sm text-slate-700">{label}</div>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function Outcome({ title, desc, icon }) {
  return (
    <div className="bg-white/80 p-4 rounded-lg border border-slate-200">
      <div className="mb-3">{icon}</div>
      <h5 className="font-semibold">{title}</h5>
      <p className="text-slate-600 text-sm mt-1">{desc}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: "30+", label: "Hours guided practice", icon: <Clock className="w-6 h-6 text-[#ef4b36]" /> },
    { value: "12+", label: "Assignments completed", icon: <ClipboardCheck className="w-6 h-6 text-[#53c0ea]" /> },
    { value: "6+", label: "Portfolio projects", icon: <Award className="w-6 h-6 text-[#ffa700]" /> },
    { value: "Week 5", label: "Cohort progress", icon: <Grid className="w-6 h-6 text-[#ef4b36]" /> },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6">By the Numbers</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white/90 rounded-2xl p-6 border border-slate-200 text-center">
            <div className="flex items-center justify-center mb-3">{s.icon}</div>
            <div className="text-3xl font-extrabold">{s.value}</div>
            <div className="text-slate-600 mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Quote({ text, author }) {
  return (
    <div className="bg-white/80 p-4 rounded-lg border border-slate-200">
      <p className="text-slate-700 italic">“{text}”</p>
      <div className="text-slate-600 text-sm mt-3">{author}</div>
    </div>
  );
}

function SyllabusCard({ title, items }) {
  return (
    <div className="bg-white/80 p-4 rounded-lg border border-slate-200">
      <h5 className="font-semibold mb-2">{title}</h5>
      <ul className="text-slate-600 list-disc list-inside space-y-1 text-sm">
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function Featured() {
  // placeholder images. Replace with real student work images
  const images = new Array(6).fill(0).map((_, i) => ({ src: `/events/event${i + 1}.jpg`, caption: `Week ${i + 1} exercise` }));

  return (
    <section id="featured" className="py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-6">Featured — Cohort Work</h3>
        <p className="text-center text-slate-600 mb-6">Our ongoing cohort (Week 5) — curated snapshots of student assignments & projects.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div key={i} className="bg-white/80 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="w-full h-48 bg-slate-100 flex items-center justify-center text-slate-400">Image {i + 1}</div>
              <div className="p-4">
                <div className="text-sm text-slate-600">{img.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const cofounders = [
    { name: "Anand Khandekar", role: "Co-founder Director", desc: "20+ years teaching • 10+ years industry • Senior Mentor" },
    { name: "Suhani Kolhatkar", role: "Co-founder Director", desc: "COEP Mech • IITM Data Science dual degree" },
  ];

  const mentors = [
    { name: "Pranoti Kulkarni", role: "Mentor / Tutor", desc: "PVG Mech • IITM Data Science dual degree" },
  ];

  return (
    <section id="team" className="py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-semibold mb-4">Team</h3>
        <p className="text-slate-700 mb-8">Cross-disciplinary leadership & mentors guiding practical learning.</p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {cofounders.map((c, i) => (
            <div key={i} className="bg-white/90 p-6 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">Photo</div>
              <div className="text-left">
                <div className="font-semibold">{c.name}</div>
                <div className="text-sm text-slate-600">{c.role}</div>
                <div className="text-sm text-slate-600 mt-2">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {mentors.map((m, i) => (
            <div key={i} className="bg-white/90 p-6 rounded-xl border border-slate-200 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">Photo</div>
              <div className="text-left">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
                <div className="text-sm text-slate-600 mt-2">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 text-center">
      <div className="max-w-3xl mx-auto bg-white/90 p-8 rounded-xl border border-slate-200">
        <h3 className="text-2xl font-semibold mb-2">Let's Collaborate</h3>
        <p className="text-slate-700 mb-4">Interested in partnering or joining the next cohort? Reach out and let's build.</p>
        <div className="flex items-center justify-center gap-4">
          <a href={`mailto:probuild.vet@gmail.com`} className="inline-flex items-center gap-2 bg-[#1f2937] text-white px-6 py-3 rounded-lg">
            <Mail className="w-4 h-4" /> Email Us
          </a>
          <div className="text-sm text-slate-600 flex items-center gap-2"><MapPin className="w-4 h-4" /> Pune, India</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-12 py-6 text-center border-t border-slate-200 text-slate-600 text-sm">
      © {new Date().getFullYear()} ProBUILD — Validus EduTech • Build your Profile, not Resume
    </footer>
  );
}