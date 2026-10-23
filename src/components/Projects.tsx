import { useState } from 'react';
import { Eye, X, CheckCircle2, Lightbulb } from 'lucide-react';
import { Project } from '../types.ts';

// Import high-fidelity generated project visuals
import chargeConnectImg from '../assets/images/charge_connect_ev_1792759815769.jpg';
import foodRedistributionImg from '../assets/images/food_redistribution_platform_1792759816264.jpg';
import rfidVotingImg from '../assets/images/rfid_voting_system_1792759816572.jpg';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'charge-connect',
      title: 'Charge Connect',
      tagline: 'Electric Vehicle Community Charging Infrastructure Concept',
      description: 'A platform concept connecting electric vehicle drivers with private charging station owners to improve charging accessibility.',
      image: chargeConnectImg,
      domain: 'EV Infrastructure & Sharing Economy',
      problemSolved: 'Overcomes geographic gaps in public EV charging stations by enabling residential and private chargers to be shared securely.',
      coreConcept: 'Peer-to-peer charging accessibility model where EV owners can discover nearby verified private charging hosts and optimize daily transit.',
      keyHighlights: [
        'Decentralized peer-to-peer charging slot discovery concept',
        'Addresses urban EV range anxiety and charging grid bottlenecks',
        'Incentive and access model for private charging station hosts',
      ],
    },
    {
      id: 'sustainable-food',
      title: 'Sustainable Food Redistribution',
      tagline: 'Surplus Food Waste Reduction & Community Routing Platform',
      description: 'A concept designed to reduce food waste by connecting surplus food with people or organizations that can use it.',
      image: foodRedistributionImg,
      domain: 'Sustainability & Supply Chain Optimization',
      problemSolved: 'Tackles food wastage across restaurants, grocery chains, and banquets by coordinating rapid redistribution to food banks and community centers.',
      coreConcept: 'Time-sensitive surplus food matching system coordinating donor alerts, route prioritization, and intake verification for recipient organizations.',
      keyHighlights: [
        'Connects surplus food sources with verified local food shelters',
        'Mitigates perishability constraints through fast algorithmic matching',
        'Promotes environmental sustainability and community hunger relief',
      ],
    },
    {
      id: 'rfid-voting',
      title: 'RFID-Based Voting System',
      tagline: 'Electronic Voter Authentication & Anti-Duplication Terminal',
      description: 'An electronic voting system concept focused on voter authentication and preventing duplicate voting.',
      image: rfidVotingImg,
      domain: 'Embedded Systems Concept & Cyber Security',
      problemSolved: 'Prevents electoral fraud and duplicate ballot submission through hardware-enforced unique RFID card validation.',
      coreConcept: 'Microcontroller and RFID reader terminal architecture that verifies registered voter credentials, records the ballot state once, and locks repeated attempts.',
      keyHighlights: [
        'Hardware-level biometric or RFID token voter authentication',
        'Single-vote state locking preventing duplicate ballot cast attempts',
        'Transparent vote tabulation integrity and reduced polling station delays',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#111827]/40 border-t border-slate-800/80 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            Selected Works & Academic Concepts
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Practical engineering concepts addressing urban infrastructure, sustainability, and secure electronic governance.
          </p>
          <div className="h-1 w-16 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-slate-900/80 border border-slate-800/90 overflow-hidden shadow-lg hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Visual Image Slot */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle top/bottom overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30" />
                  
                  {/* Domain Tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium text-blue-300 border border-slate-700/60">
                    {project.domain}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-blue-400/90 font-medium mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-800/60">
                <span className="text-[11px] text-slate-400">Concept Platform</span>
                
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors py-1 px-2.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 active:scale-95 cursor-pointer"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>View Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700 p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close project modal"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-950 mb-6 border border-slate-800">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Modal Title & Domain */}
            <div className="mb-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                {selectedProject.domain}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {selectedProject.title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {selectedProject.tagline}
              </p>
            </div>

            {/* Overview */}
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed mb-6">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <div className="flex items-center gap-2 text-blue-400 font-semibold mb-1">
                  <Lightbulb className="h-4 w-4" />
                  <span>Project Overview</span>
                </div>
                <p>{selectedProject.description}</p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Problem Addressed</h4>
                <p className="text-slate-400">{selectedProject.problemSolved}</p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-sm mb-1">Core Architecture Concept</h4>
                <p className="text-slate-400">{selectedProject.coreConcept}</p>
              </div>

              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Key Highlights</h4>
                <ul className="space-y-2">
                  {selectedProject.keyHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Action */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Academic Concept Project
              </span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-2 text-xs font-medium text-white transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
