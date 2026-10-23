import { GraduationCap, School, Calendar, Award } from 'lucide-react';
import { EducationItem } from '../types.ts';

export function Education() {
  const educationList: EducationItem[] = [
    {
      degree: 'Bachelor of Engineering — Computer Science Engineering',
      institution: 'Dr. N.G.P. Institute of Technology',
      location: 'Coimbatore, Tamil Nadu',
      year: '2026',
      scoreLabel: 'CGPA',
      scoreValue: '8.47',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Kongu Vellalar Matriculation Higher Secondary School',
      location: 'Coimbatore, Tamil Nadu',
      year: '2022',
      scoreLabel: 'Percentage',
      scoreValue: '89.8%',
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Kongu Vellalar Matriculation Higher Secondary School',
      location: 'Coimbatore, Tamil Nadu',
      year: '2020',
      scoreLabel: 'Percentage',
      scoreValue: '86.2%',
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-8 space-y-10 pl-6 md:pl-10">
          {educationList.map((item, index) => (
            <div key={item.degree} className="relative group">
              
              {/* Timeline Marker Node */}
              <div className="absolute -left-[35px] md:-left-[51px] top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700 text-blue-400 group-hover:border-blue-400 transition-colors shadow-sm">
                {index === 0 ? (
                  <GraduationCap className="h-5 w-5" />
                ) : (
                  <School className="h-4 w-4" />
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-slate-900/70 border border-slate-800/90 p-6 shadow-md hover:border-slate-700 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  
                  <div>
                    {/* Degree */}
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {item.degree}
                    </h3>
                    
                    {/* Institution */}
                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {item.institution}
                    </p>
                    
                    {/* Location */}
                    <p className="text-xs text-slate-400 mt-0.5">
                      {item.location}
                    </p>
                  </div>

                  {/* Year & Score Pill-free badge */}
                  <div className="flex sm:flex-col items-start sm:items-end justify-between gap-2 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                      <Calendar className="h-3.5 w-3.5 text-blue-400" />
                      <span>{item.year}</span>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-semibold tabular-nums">
                      <Award className="h-3.5 w-3.5 text-blue-400" />
                      <span>{item.scoreLabel}: {item.scoreValue}</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
