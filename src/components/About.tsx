import React from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Lock, 
  GraduationCap 
} from 'lucide-react';
import { STATS, ABOUT_PILLARS } from '../data/portfolioData';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10 sm:mb-14">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
            // 01. INTROSPECTION
          </span>
          <div className="h-0.5 w-12 bg-[#4cd7f6]/40 rounded-full"></div>
        </div>
        <h2
          id="about-title"
          className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
          }`}
        >
          About Me
        </h2>
        <p
          className={`text-base sm:text-lg max-w-3xl ${
            isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
          }`}
        >
          Bridging creative web engineering with security-first architecture.
        </p>
      </div>

      {/* Narrative & Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        {/* Left Column: Narrative Card */}
        <div
          id="about-narrative-card"
          className={`lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-xl shadow-md border transition-all ${
            isDark
              ? 'bg-[#1c1f2a] border-[#262a35] hover:border-[#313540]'
              : 'bg-white border-slate-200 shadow-slate-100 hover:border-slate-300'
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-[#262a35] text-[#4cd7f6]' : 'bg-cyan-50 text-cyan-600'
                }`}
              >
                <ShieldCheck size={24} />
              </div>
              <h3
                className={`text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                }`}
              >
                The Developer Behind the Terminal
              </h3>
            </div>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
              }`}
            >
              I am a passionate{' '}
              <span className={`font-semibold ${isDark ? 'text-[#dfe2f1]' : 'text-slate-900'}`}>
                B.Tech Computer Science student
              </span>{' '}
              at the intersection of modern full-stack web development and adversarial threat analysis.
              Rather than treating application security as a final afterthought, I build software with
              defensive postures integrated right from inception.
            </p>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
              }`}
            >
              Whether architecting scalable interfaces with pristine user accessibility or auditing
              endpoints against the{' '}
              <span className="text-[#4edea3] font-semibold">OWASP Top 10 vulnerabilities</span>{' '}
              (injection vectors, broken authentication, data exposure), my goal is to deliver performant
              codebases that withstand hostile environments while providing delightful user journeys.
            </p>
          </div>

          {/* Metric Badges Banner */}
          <div
            className={`mt-8 pt-4 flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg border ${
              isDark
                ? 'bg-[#262a35]/60 border-[#313540]'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            {STATS.map((stat, idx) => (
              <React.Fragment key={stat.label}>
                <div className="flex-1 min-w-[90px] text-center sm:text-left">
                  <span className={`text-2xl sm:text-3xl font-extrabold ${stat.color}`}>
                    {stat.value}
                  </span>
                  <p
                    className={`font-mono text-xs ${
                      isDark ? 'text-[#bcc9cd]' : 'text-slate-500'
                    }`}
                  >
                    {stat.label}
                  </p>
                </div>
                {idx < STATS.length - 1 && (
                  <div
                    className={`hidden sm:block w-px h-8 ${
                      isDark ? 'bg-[#313540]' : 'bg-slate-200'
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Column: 3 Pillar Cards */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {ABOUT_PILLARS.map((pillar) => {
            return (
              <div
                key={pillar.id}
                id={`about-pillar-${pillar.id}`}
                className={`p-5 sm:p-6 rounded-xl shadow-md border transition-all duration-200 flex gap-4 items-start ${
                  isDark
                    ? 'bg-[#1c1f2a] border-[#262a35] hover:bg-[#262a35]'
                    : 'bg-white border-slate-200 shadow-slate-100 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    isDark ? 'bg-[#262a35]' : 'bg-slate-100'
                  } ${pillar.color}`}
                >
                  {pillar.id === 'web-engineering' && <Globe size={22} />}
                  {pillar.id === 'security-mindset' && <Lock size={22} />}
                  {pillar.id === 'continuous-learning' && <GraduationCap size={22} />}
                </div>
                <div className="flex flex-col gap-1">
                  <h4
                    className={`text-lg font-bold ${
                      isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                    }`}
                  >
                    {pillar.title}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
                    }`}
                  >
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
