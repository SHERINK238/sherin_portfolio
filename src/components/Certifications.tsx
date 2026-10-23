import { Cloud, Award, CheckCircle, ShieldCheck, Cpu } from 'lucide-react';

export function Certifications() {
  const certifications = [
    {
      id: 'cloud-computing',
      title: 'Cloud Computing',
      badge: 'Elite',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      description:
        'Rigorous curriculum covering distributed cloud computing architectures, virtualization mechanisms, storage virtualization, resource management, and cloud security invariants.',
      icon: <Cloud className="h-8 w-8" />,
    },
    {
      id: 'industry-4-0-iiot',
      title: 'Introduction to Industry 4.0 & Industrial Internet of Things',
      badge: 'Elite',
      issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
      description:
        'Comprehensive study of cyber-physical systems, industrial IoT network protocols, sensor integration, edge computing, smart manufacturing architectures, and connected data ecosystems.',
      icon: <Cpu className="h-8 w-8" />,
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-[#111827]/40 border-t border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Professional Certification Cards List */}
        <div className="max-w-4xl space-y-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-blue-950/20 border border-slate-800 hover:border-blue-500/40 p-6 sm:p-8 shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                    {cert.icon}
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                        NPTEL Online Certification
                      </span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Elite Classification
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-slate-300 mt-1">
                      Issued by {cert.issuer}
                    </p>
                    
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed max-w-2xl">
                      {cert.description}
                    </p>
                  </div>
                </div>

                {/* Elite Badge */}
                <div className="sm:self-center shrink-0 w-full sm:w-auto flex justify-start sm:justify-end">
                  <div className="px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-left sm:text-right">
                    <div className="flex items-center sm:justify-end gap-1.5 text-xs text-amber-400 font-semibold mb-0.5">
                      <Award className="h-4 w-4" />
                      <span>Elite Performance</span>
                    </div>
                    <div className="text-[11px] text-slate-400">
                      NPTEL Standard
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-400" />
                  <span>Verified academic certification by Ministry of Education / IIT initiative</span>
                </div>
                <span className="font-mono text-slate-500">Cred: NPTEL Elite</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
