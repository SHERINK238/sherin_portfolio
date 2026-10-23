import { ArrowRight, Mail, Linkedin, Github, FileText, Code2, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-600/15 blur-[120px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" 
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Academic & Specialty Kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400 tracking-wide mb-3">
              <span>Computer Science Engineering</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2026</span>
              <span aria-hidden="true">·</span>
              <span>Coimbatore, India</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight mb-4">
              Sherin Ruffia K
            </h1>

            {/* Title */}
            <p className="text-lg sm:text-xl font-medium text-blue-300/90 leading-snug mb-6">
              Computer Science Engineering Graduate | Aspiring Data Analyst & Software Developer
            </p>

            {/* Introduction Quote */}
            <blockquote className="border-l-2 border-blue-500/40 pl-4 py-1 text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl bg-slate-900/40 rounded-r-xl p-4">
              &ldquo;I am a Computer Science Engineering graduate interested in Data Analytics and Software Development. I enjoy solving problems, learning new technologies, and building practical projects. I am currently developing my skills in Python, SQL, data analytics, and web development.&rdquo;
            </blockquote>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 hover:text-white px-5 py-2.5 text-sm font-medium text-slate-200 border border-slate-700/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] active:scale-95"
              >
                <Mail className="h-4 w-4 text-slate-400" />
                <span>Contact Me</span>
              </a>

              <a
                href="/assets/aistudio/SHERIN_RUFFIA_K_____26d98e9f.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800/90 hover:bg-slate-700 hover:text-white px-5 py-2.5 text-sm font-medium text-slate-200 border border-slate-700/80 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120] active:scale-95"
              >
                <FileText className="h-4 w-4 text-blue-400" />
                <span>View Resume</span>
              </a>
            </div>

            {/* Verified Social & Code Profiles */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/80">
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                Profiles:
              </span>
              
              <a
                href="https://linkedin.com/in/sherin-ruffia-k-49a39b287"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                title="Sherin Ruffia K on LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <span aria-hidden="true" className="text-slate-600">·</span>

              <a
                href="https://github.com/SHERINK238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                title="Sherin Ruffia K on GitHub"
              >
                <Github className="h-4 w-4 text-white" />
                <span>GitHub</span>
              </a>

              <span aria-hidden="true" className="text-slate-600">·</span>

              <a
                href="https://leetcode.com/u/SHERIN_K/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors"
                title="Sherin Ruffia K on LeetCode"
              >
                <Code2 className="h-4 w-4 text-amber-500" />
                <span>LeetCode</span>
              </a>

              <span aria-hidden="true" className="text-slate-600">·</span>

              <a
                href="https://github.com/SHERINK238/sr.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-400 hover:text-slate-200 transition-colors"
                title="GitHub Project Repository"
              >
                <span>Repo (sr)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Professional Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm w-full">
              
              {/* Outer decorative ambient glow */}
              <div 
                aria-hidden="true" 
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-30 blur-lg transition duration-500 group-hover:opacity-50"
              />

              {/* Portrait Frame Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900 p-2 sm:p-2.5 shadow-2xl border border-slate-700/80">
                <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-950">
                  <img
                    src="/profile.png"
                    alt="Sherin Ruffia K - Portrait"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback in case of local file glitch
                      const target = e.currentTarget;
                      if (!target.src.endsWith('/sherin-ruffia.png')) {
                        target.src = '/sherin-ruffia.png';
                      }
                    }}
                  />
                  
                  {/* Subtle vignette scrim at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />

                  {/* Corner Accent Label */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/60 text-slate-200">
                    <span className="font-medium text-white flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-blue-400" />
                      Sherin Ruffia K
                    </span>
                    <span className="text-slate-400 text-[11px]">B.E. CSE (2026)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
