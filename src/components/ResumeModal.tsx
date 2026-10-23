import { useEffect, useState } from 'react';
import { X, ExternalLink, FileText, CheckCircle2, Link2, Info } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumeUrl = '/assets/aistudio/SHERIN_RUFFIA_K_____26d98e9f.pdf';
  const [driveLink, setDriveLink] = useState('');
  const [isEditingLink, setIsEditingLink] = useState(false);
  const [tempLink, setTempLink] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
              <FileText className="h-5 w-5" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Sherin Ruffia K — Official Resume
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-normal text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" /> Verified Document
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Computer Science Engineering · Dr. N.G.P. Institute of Technology
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-500 px-3 py-1.5 text-xs font-medium text-white transition-colors"
              title="Open verified resume in a new browser tab"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open in New Tab</span>
            </a>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Informational Banner */}
        <div className="bg-slate-950/50 border-b border-slate-800/60 px-5 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-blue-400 shrink-0" />
            <span className="text-slate-300">
              Note: If accessing via Google Drive, please ensure link sharing is set to <span className="text-blue-300 font-medium">&quot;Anyone with the link can view&quot;</span>.
            </span>
          </div>

          <div className="flex items-center gap-2">
            {isEditingLink ? (
              <div className="flex items-center gap-1">
                <input
                  type="url"
                  placeholder="Paste Google Drive URL"
                  value={tempLink}
                  onChange={(e) => setTempLink(e.target.value)}
                  className="bg-slate-800 border border-slate-700 text-white text-xs px-2 py-1 rounded w-64 focus:outline-none focus:ring-1 focus:ring-blue-400"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (tempLink.trim()) setDriveLink(tempLink.trim());
                    setIsEditingLink(false);
                  }}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-2 py-1 rounded"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditingLink(false)}
                  className="text-slate-400 hover:text-white text-xs px-1"
                >
                  Cancel
                </button>
              </div>
            ) : driveLink ? (
              <div className="flex items-center gap-2">
                <a
                  href={driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  <Link2 className="h-3.5 w-3.5" />
                  <span>Open Google Drive Link</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setTempLink(driveLink);
                    setIsEditingLink(true);
                  }}
                  className="text-[10px] text-slate-400 hover:text-slate-200 underline"
                >
                  (Edit)
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* Embedded Document Frame */}
        <div className="flex-1 w-full bg-slate-950 overflow-hidden relative">
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0`}
            title="Sherin Ruffia K Resume"
            className="w-full h-full border-0"
          />

          {/* Quick Fallback Action Bar */}
          <div className="absolute bottom-4 left-4 right-4 pointer-events-none flex justify-center">
            <div className="pointer-events-auto bg-slate-900/90 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-xl text-xs flex items-center gap-3 shadow-xl">
              <span className="text-slate-300">Trouble with preview?</span>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1"
              >
                <span>Open Resume in New Browser Tab</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-800 px-5 py-3 bg-slate-950/70 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Verified PDF · 121 KB
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-slate-800 hover:bg-slate-700 px-4 py-1.5 text-xs font-medium text-white transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
