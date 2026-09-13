import React from 'react';
import { 
  X, 
  ExternalLink, 
  Code2, 
  ShieldCheck, 
  Layers, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  isDark: boolean;
  onShowToast: (msg: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  isDark,
  onShowToast,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div
        className={`relative w-full max-w-2xl my-8 rounded-2xl shadow-2xl border overflow-hidden transition-all ${
          isDark
            ? 'bg-[#171b26] border-[#262a35] text-[#dfe2f1]'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Terminal Title Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'bg-[#262a35] border-[#313540]' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            <span className="font-mono text-xs font-semibold ml-2 text-[#4cd7f6]">
              specs/{project.id}.json
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'hover:bg-[#313540] text-[#bcc9cd]' : 'hover:bg-slate-200 text-slate-600'
            }`}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Header */}
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-[#4edea3] font-semibold">
              {project.categoryTag} • {project.subtitle}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4cd7f6]">
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed text-[#bcc9cd]">
              {project.details?.overview || project.description}
            </p>
          </div>

          {/* Project Screenshot / Visual Preview (if available) */}
          {project.image && (
            <div className="relative rounded-xl overflow-hidden border border-[#313540] shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 sm:h-64 object-cover object-top filter brightness-95 hover:scale-[1.01] transition-transform duration-300"
              />
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-[#0a0e18]/85 backdrop-blur-md text-[11px] font-mono text-[#4edea3] border border-[#4edea3]/30 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                <span>Verified UI Preview</span>
              </div>
            </div>
          )}

          {/* Key Features */}
          {project.details?.features && (
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4cd7f6] flex items-center gap-2">
                <Layers size={16} />
                <span>Architecture &amp; Features</span>
              </h3>
              <ul className="space-y-2">
                {project.details.features.map((feat, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 text-xs sm:text-sm p-2.5 rounded-lg border ${
                      isDark ? 'bg-[#0a0e18] border-[#262a35] text-[#dfe2f1]' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle size={16} className="text-[#4edea3] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cybersecurity & Hardening Highlights */}
          {project.details?.securityHighlights && (
            <div className="space-y-3">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4edea3] flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>Cybersecurity Hardening</span>
              </h3>
              <div
                className={`p-4 rounded-xl border space-y-2 ${
                  isDark ? 'bg-[#0a0e18] border-[#4edea3]/20' : 'bg-emerald-50/50 border-emerald-200'
                }`}
              >
                {project.details.securityHighlights.map((sec, i) => (
                  <div key={i} className="flex items-center gap-2 font-mono text-xs text-[#4edea3]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]"></span>
                    <span>{sec}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#bcc9cd] block">Technologies Utilized:</span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t.label}
                  className={`font-mono text-xs px-2.5 py-1 rounded ${
                    t.highlight
                      ? 'bg-[#262a35] text-[#4edea3] border border-[#4edea3]/30 font-semibold'
                      : isDark
                      ? 'bg-[#262a35] text-[#dfe2f1]'
                      : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${
            isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <span className="font-mono text-xs text-[#869397]">Ready to deploy</span>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onShowToast(`Opening ${project.title} on GitHub`)}
              className={`px-3 py-2 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 border transition-colors ${
                isDark
                  ? 'bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] border-[#313540]'
                  : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'
              }`}
            >
              <Code2 size={14} />
              <span>GitHub</span>
            </a>

            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onShowToast(`Launching ${project.title} live environment`)}
              className="px-4 py-2 rounded-lg bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <span>Launch Live Demo</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
