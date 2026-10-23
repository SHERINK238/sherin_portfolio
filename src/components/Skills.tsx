import { Code2, Layout, Server, Database, Wrench, Sparkles, Compass } from 'lucide-react';

interface SkillGroup {
  category: string;
  icon: typeof Code2;
  skills: string[];
}

export function Skills() {
  const technicalCategories: SkillGroup[] = [
    {
      category: 'Programming Languages',
      icon: Code2,
      skills: ['Python', 'Java'],
    },
    {
      category: 'Frontend Development',
      icon: Layout,
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    },
    {
      category: 'Backend Development',
      icon: Server,
      skills: ['Django'],
    },
    {
      category: 'Database',
      icon: Database,
      skills: ['MySQL'],
    },
    {
      category: 'Development Tools',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code'],
    },
  ];

  const careerInterests = [
    'Data Analytics',
    'SQL',
    'Data Visualization',
    'Artificial Intelligence',
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Technical Stack & Focus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Technical Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {technicalCategories.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 p-6 hover:border-slate-700 transition-colors shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-blue-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-sm font-medium text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Distinct Career Interests Card */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-950/30 border border-blue-500/30 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400">
                  <Compass className="h-4 w-4" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Career Interests
                </h3>
                <span className="text-xs text-blue-400 font-medium bg-blue-950/60 border border-blue-800/50 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <Sparkles className="h-3 w-3" />
                  Currently Learning Data Analytics
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Active study and exploratory interests. Currently learning foundational Data Analytics workflows, structured SQL querying, and data visualization principles.
              </p>
            </div>

            {/* Interest Tags */}
            <div className="flex flex-wrap items-center gap-2.5">
              {careerInterests.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-blue-950/40 border border-blue-700/50 text-sm font-medium text-blue-200"
                >
                  {interest}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
