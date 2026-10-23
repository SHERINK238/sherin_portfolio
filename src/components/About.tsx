import { GraduationCap, Database, Code, Compass } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#111827]/60 border-y border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Background & Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a dedicated <strong className="text-white font-semibold">Computer Science Engineering graduate</strong> from Dr. N.G.P. Institute of Technology, Coimbatore. My academic journey has provided me with a robust foundation in algorithmic problem solving, software engineering principles, and database management.
            </p>

            <p>
              With strong proficiencies in <strong className="text-white font-semibold">Python, Java, and MySQL</strong>, I am deeply enthusiastic about uncovering actionable insights through <strong className="text-blue-400 font-semibold">Data Analytics</strong> and creating clean, dependable software solutions. I appreciate how analytical thinking bridges the gap between raw data and impactful real-world decisions.
            </p>

            <p>
              Rather than theoretical concepts alone, I find fulfillment in building practical systems—from conceptualizing accessible electric vehicle charging networks to designing food waste mitigation workflows and tamper-proof voter authentication systems.
            </p>

            <p>
              I am committed to <strong className="text-white font-semibold">continuous learning</strong>, currently expanding my capabilities in advanced SQL queries, data visualization tools, and modern web application development with Django. I am actively seeking opportunities where I can contribute my analytical skills, dedication, and technical adaptability to meaningful projects.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-blue-400" />
                <span>Dr. N.G.P. Institute of Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-indigo-400" />
                <span>Data Analytics Aspirant</span>
              </div>
            </div>
          </div>

          {/* Pillars Card Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  <Database className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Data Analytics Interest</h3>
              </div>
              <p className="text-sm text-slate-400 leading-normal">
                Curious about discovering trends, crafting clear visual representations, and leveraging SQL queries to answer strategic questions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Code className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Software Development</h3>
              </div>
              <p className="text-sm text-slate-400 leading-normal">
                Grounded in structured object-oriented programming with Python and Java, paired with relational database architecture using MySQL.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">Commitment to Growth</h3>
              </div>
              <p className="text-sm text-slate-400 leading-normal">
                Consistently learning new technologies, practicing algorithmic challenges on LeetCode, and exploring modern data engineering principles.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
