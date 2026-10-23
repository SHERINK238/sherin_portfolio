import { Linkedin, Github, Code2, GitFork, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-slate-800/80 bg-[#0B1120] text-slate-400 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/60">
          
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Sherin Ruffia K
            </h3>
            <p className="text-sm text-slate-300">
              Computer Science Engineering Graduate | Aspiring Data Analyst & Software Developer
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Passionate about problem-solving, exploring practical data architectures, and building modern, reliable software systems.
            </p>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </div>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Profiles Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-200">
              Profiles & Code
            </div>
            <div className="flex flex-col space-y-2 text-xs">
              <a
                href="https://linkedin.com/in/sherin-ruffia-k-49a39b287"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/SHERINK238"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Github className="h-3.5 w-3.5 text-white" />
                <span>GitHub Profile</span>
              </a>

              <a
                href="https://leetcode.com/u/SHERIN_K/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Code2 className="h-3.5 w-3.5 text-amber-500" />
                <span>LeetCode</span>
              </a>

              <a
                href="https://github.com/SHERINK238/sr.git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-slate-200 transition-colors"
              >
                <GitFork className="h-3.5 w-3.5 text-slate-400" />
                <span>Repository (sr.git)</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Sherin Ruffia K. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>Coimbatore, Tamil Nadu, India</span>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
