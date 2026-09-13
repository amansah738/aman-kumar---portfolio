import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Award, 
  Shield, 
  Users, 
  Flag, 
  ExternalLink,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';

interface CertificationsProps {
  isDark: boolean;
}

export const Certifications: React.FC<CertificationsProps> = ({ isDark }) => {
  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={28} className="text-[#4edea3]" />;
      case 'Cpu':
        return <Cpu size={28} className="text-[#4cd7f6]" />;
      default:
        return <Award size={28} className="text-[#4fdbc8]" />;
    }
  };

  const getAchieveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award size={18} className="text-[#4cd7f6]" />;
      case 'Shield':
        return <Shield size={18} className="text-[#4edea3]" />;
      case 'Users':
        return <Users size={18} className="text-[#4fdbc8]" />;
      case 'Flag':
        return <Flag size={18} className="text-amber-400" />;
      default:
        return <CheckCircle2 size={18} className="text-[#4edea3]" />;
    }
  };

  return (
    <section
      id="certifications"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10 sm:mb-14">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#4edea3] uppercase tracking-wider">
            // 05. ACCREDITED CREDENTIALS
          </span>
          <div className="h-0.5 w-12 bg-[#4edea3]/40 rounded-full"></div>
        </div>
        <h2
          id="certifications-title"
          className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
          }`}
        >
          Certifications &amp; Accreditations
        </h2>
        <p
          className={`text-base sm:text-lg max-w-3xl ${
            isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
          }`}
        >
          Industry-recognized certifications and public-service leadership training validating technical rigor and defensive disciplines.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
        {CERTIFICATIONS.map((cert) => (
          <div
            key={cert.id}
            className={`p-6 sm:p-8 rounded-2xl border shadow-lg transition-all duration-300 hover:scale-[1.01] flex flex-col justify-between ${
              isDark
                ? `bg-[#1c1f2a] ${cert.borderColor} hover:bg-[#222736]`
                : 'bg-white border-slate-200 shadow-slate-100 hover:shadow-cyan-100/50'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    isDark ? 'bg-[#0a0e18]' : 'bg-slate-50'
                  } border ${isDark ? 'border-[#262a35]' : 'border-slate-200'}`}
                >
                  {getCertIcon(cert.icon)}
                </div>

                <div className="flex flex-col items-end gap-1">
                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider border ${
                      isDark
                        ? 'bg-[#0a0e18] text-[#4edea3] border-[#4edea3]/30'
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}
                  >
                    {cert.badgeText}
                  </span>
                  <span className="font-mono text-xs text-[#869397] flex items-center gap-1">
                    <Calendar size={12} />
                    {cert.date}
                  </span>
                </div>
              </div>

              <div>
                <h3
                  className={`text-xl sm:text-2xl font-bold ${
                    isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                  }`}
                >
                  {cert.title}
                </h3>
                <p className={`font-mono text-xs font-semibold mt-1 ${cert.color}`}>
                  {cert.issuer}
                </p>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
                }`}
              >
                {cert.description}
              </p>
            </div>

            {/* Skills tags */}
            <div className="mt-6 pt-4 border-t border-[#262a35]/60 flex flex-wrap gap-1.5">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className={`font-mono text-[11px] px-2.5 py-0.5 rounded ${
                    isDark
                      ? 'bg-[#0a0e18] text-[#dfe2f1] border border-[#262a35]'
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Leadership & Public Service Honours */}
      <div
        className={`p-6 sm:p-8 rounded-2xl border ${
          isDark
            ? 'bg-[#171b26] border-[#262a35]'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <h3
              className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${
                isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
              }`}
            >
              <Award size={20} className="text-[#4cd7f6]" />
              <span>Public Service, Discipline &amp; Leadership Honors</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#869397] mt-0.5">
              Official defense and state-level volunteer response trainings.
            </p>
          </div>
          <span className="font-mono text-xs text-[#4edea3]">4 Verified Accreditations</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((achieve, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl border flex flex-col gap-2 transition-colors ${
                isDark
                  ? 'bg-[#0a0e18] border-[#262a35] hover:border-[#4cd7f6]/40'
                  : 'bg-white border-slate-200 hover:border-cyan-300'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isDark ? 'bg-[#1c1f2a]' : 'bg-slate-100'
                  }`}
                >
                  {getAchieveIcon(achieve.icon)}
                </div>
                <span
                  className={`font-bold text-xs sm:text-sm ${
                    isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                  }`}
                >
                  {achieve.title}
                </span>
              </div>
              <span className="font-mono text-[11px] text-[#869397]">
                {achieve.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
