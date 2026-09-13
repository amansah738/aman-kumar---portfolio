import React from 'react';
import { GraduationCap, BookOpen, School, Calendar, MapPin } from 'lucide-react';
import { EDUCATION_TIMELINE } from '../data/portfolioData';

interface TimelineProps {
  isDark: boolean;
}

export const Timeline: React.FC<TimelineProps> = ({ isDark }) => {
  return (
    <section
      id="education"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-2 mb-10 sm:mb-14">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
            // 07. ACADEMIC TRAJECTORY
          </span>
          <div className="h-0.5 w-12 bg-[#4cd7f6]/40 rounded-full"></div>
        </div>
        <h2
          id="education-title"
          className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
          }`}
        >
          Education &amp; Milestones
        </h2>
        <p
          className={`text-base sm:text-lg max-w-3xl ${
            isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
          }`}
        >
          Foundational institutions, academic milestones, and engineering growth shaping technical rigor.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-[#262a35] ml-4 sm:ml-8 space-y-10">
        {EDUCATION_TIMELINE.map((item, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Glowing Timeline Marker */}
            <div
              className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                item.active
                  ? 'bg-[#4cd7f6] border-[#003640] ring-4 ring-[#4cd7f6]/20'
                  : isDark
                  ? 'bg-[#1c1f2a] border-[#4cd7f6]/50'
                  : 'bg-white border-cyan-500'
              }`}
            ></div>

            {/* Timeline Card */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border shadow-lg transition-all duration-300 hover:scale-[1.005] ${
                isDark
                  ? 'bg-[#1c1f2a] border-[#262a35] hover:border-[#4cd7f6]/40'
                  : 'bg-white border-slate-200 shadow-slate-100 hover:border-cyan-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <span
                  className={`font-mono text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider inline-flex items-center gap-1.5 self-start ${
                    item.active
                      ? isDark
                        ? 'bg-[#0a0e18] text-[#4edea3] border border-[#4edea3]/30'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : isDark
                      ? 'bg-[#0a0e18] text-[#bcc9cd] border border-[#262a35]'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </span>

                <span
                  className={`font-mono text-xs font-semibold ${
                    item.active ? 'text-[#4edea3]' : 'text-[#869397]'
                  }`}
                >
                  {item.status}
                </span>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                }`}
              >
                {item.degree}
              </h3>

              <div className="flex items-center gap-2 mt-1 mb-3 text-sm font-semibold text-[#4cd7f6]">
                <School size={16} />
                <span>{item.institution}</span>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
                }`}
              >
                {item.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
