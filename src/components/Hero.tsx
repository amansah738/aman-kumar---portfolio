import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Download, 
  MapPin, 
  Terminal, 
  ShieldCheck, 
  Sparkles,
  Clock
} from 'lucide-react';
import { ASSETS, PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  isDark,
  onOpenResume,
  onOpenTerminal,
}) => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      id="hero"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24 flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Text Column */}
        <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-5">
          {/* Security Badge */}
          <div
            id="hero-security-badge"
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium shadow-sm transition-all ${
              isDark
                ? 'bg-[#262a35] text-[#4edea3] border border-[#4edea3]/25'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-ping"></span>
            <span>{PERSONAL_INFO.badge}</span>
          </div>

          {/* Heading Stack */}
          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="font-mono text-xs sm:text-sm font-semibold text-[#4cd7f6] tracking-wider uppercase">
              {PERSONAL_INFO.tagline}
            </span>
            <h1
              id="hero-main-title"
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${
                isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
              }`}
            >
              {PERSONAL_INFO.name}
            </h1>
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight ${
                isDark ? 'text-[#4cd7f6]' : 'text-cyan-600'
              }`}
            >
              Web Developer{' '}
              <span className={isDark ? 'text-[#bcc9cd] font-light' : 'text-slate-400 font-light'}>
                &amp;
              </span>{' '}
              Cybersecurity Enthusiast
            </h2>
          </div>

          {/* Intro Description */}
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
              isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
            }`}
          >
            {PERSONAL_INFO.intro}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              id="hero-view-projects-btn"
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4cd7f6] text-[#003640] font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 hover:bg-[#38bdf8] hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>

            <button
              id="hero-download-resume-btn"
              onClick={onOpenResume}
              type="button"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                isDark
                  ? 'bg-[#262a35] text-[#dfe2f1] hover:text-[#4cd7f6] hover:bg-[#313540] border border-[#3d494c]/60'
                  : 'bg-white text-slate-800 hover:text-cyan-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Download size={18} />
              <span>View &amp; Download Resume</span>
            </button>
          </div>

          {/* Terminal Quick Status Pill */}
          <div
            id="hero-status-pill"
            className={`mt-2 flex flex-wrap items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-lg font-mono text-xs shadow-inner w-full sm:w-auto ${
              isDark
                ? 'bg-[#0a0e18] text-[#bcc9cd] border border-[#262a35]'
                : 'bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            <span className="text-[#4edea3] font-bold">&gt;_</span>
            <span className={`font-medium ${isDark ? 'text-[#dfe2f1]' : 'text-slate-900'}`}>Status:</span>
            <span className="text-[#4edea3] font-medium flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
              <span>{PERSONAL_INFO.status}</span>
            </span>
            <span className={isDark ? 'text-[#3d494c]' : 'text-slate-300'}>|</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-[#4cd7f6]" />
              <span>{PERSONAL_INFO.location}</span>
            </span>
            {currentTime && (
              <>
                <span className={isDark ? 'text-[#3d494c]' : 'text-slate-300'}>|</span>
                <span className="flex items-center gap-1.5 text-[#4cd7f6] font-semibold">
                  <Clock size={13} />
                  <span>IST: {currentTime}</span>
                </span>
              </>
            )}
          </div>
        </div>

        {/* Hero Visual Showcase / Terminal Card */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div
            id="hero-terminal-card"
            className={`relative w-full max-w-md rounded-xl shadow-2xl overflow-hidden border transition-all duration-300 ${
              isDark
                ? 'bg-[#171b26] border-[#262a35] shadow-cyan-950/40'
                : 'bg-white border-slate-200 shadow-slate-200'
            }`}
          >
            {/* Terminal Header Bar */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                isDark ? 'bg-[#262a35] border-[#313540]' : 'bg-slate-100 border-slate-200'
              }`}
            >
              {/* Traffic light dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-sm"></span>
                <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-sm"></span>
              </div>

              {/* Shell Name */}
              <span
                className={`font-mono text-xs flex items-center gap-1.5 ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
                }`}
              >
                <Terminal size={14} className="text-[#4edea3]" />
                <span>bash aman.sh</span>
              </span>

              {/* Online Indicator */}
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#4edea3] uppercase font-bold tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
                online
              </span>
            </div>

            {/* Terminal Card Body */}
            <div className="p-6 flex flex-col items-center">
              {/* Avatar Container with Cyber Gradient Halo */}
              <div className="relative group cursor-pointer" onClick={onOpenTerminal} title="Click to launch interactive CLI">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-1.5 bg-gradient-to-tr from-[#4cd7f6] via-[#4edea3] to-[#06b6d4] shadow-xl shadow-cyan-500/15 group-hover:shadow-cyan-500/30 transition-all duration-300">
                  <img
                    src={ASSETS.avatar}
                    alt="Aman Sah - Cybersecurity & Web Developer"
                    className="w-full h-full object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Verified Pill Badge */}
                  <div
                    className={`absolute bottom-2 right-4 px-2.5 py-0.5 rounded-full font-mono text-[11px] uppercase font-bold shadow-md flex items-center gap-1.5 border ${
                      isDark
                        ? 'bg-[#0a0e18] text-[#4edea3] border-[#4edea3]/30'
                        : 'bg-white text-emerald-700 border-emerald-300'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4edea3]"></span>
                    <span>verified</span>
                  </div>
                </div>
              </div>

              {/* Terminal Code Snippet Box */}
              <div
                className={`w-full mt-6 p-4 rounded-lg font-mono text-xs overflow-x-auto shadow-inner border ${
                  isDark
                    ? 'bg-[#0a0e18] border-[#262a35] text-[#bcc9cd]'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between pb-2 border-b border-[#262a35] text-xs mb-2.5">
                  <span className="text-slate-400">payload.json</span>
                  <span className="text-[#4fdbc8] font-bold">200 OK</span>
                </div>
                <div className="space-y-0.5 leading-relaxed text-xs">
                  <div>
                    <span className="text-[#4cd7f6] font-semibold">const</span>{' '}
                    <span className="text-[#4edea3]">aman</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-[#4fdbc8]">degree</span>:{' '}
                    <span className="text-amber-200">'B.Tech CS'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-[#4fdbc8]">focus</span>: [
                    <span className="text-amber-200">'Web Dev'</span>,{' '}
                    <span className="text-amber-200">'CyberSec'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-[#4fdbc8]">status</span>:{' '}
                    <span className="text-[#4edea3]">'Building Secure Systems'</span>
                  </div>
                  <div>&#125;;</div>
                </div>
              </div>

              {/* Quick interactive trigger */}
              <button
                onClick={onOpenTerminal}
                className={`mt-4 w-full py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                  isDark
                    ? 'bg-[#262a35]/60 hover:bg-[#262a35] text-[#4cd7f6] hover:text-[#4edea3] border border-[#313540]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <Terminal size={14} />
                <span>Launch Interactive Shell ($ aman.sh)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
