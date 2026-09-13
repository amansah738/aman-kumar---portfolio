import React from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  ArrowUp 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      className={`w-full border-t transition-colors ${
        isDark
          ? 'bg-[#0a0e18]/90 border-[#262a35] text-[#bcc9cd]'
          : 'bg-slate-50 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright & Info */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-mono text-sm text-[#4edea3] font-bold">&gt;_</span>
              <span
                className={`font-semibold text-sm ${
                  isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                }`}
              >
                © 2025 Aman Sah. All rights reserved.
              </span>
            </div>
            <p className="font-mono text-xs text-[#869397]">
              Crafted with clean code &amp; security best practices.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className={`font-mono text-xs flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-[#4cd7f6]' : 'hover:text-cyan-600'
              }`}
            >
              <Mail size={15} />
              <span>Email</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-xs flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-[#4cd7f6]' : 'hover:text-cyan-600'
              }`}
            >
              <Linkedin size={15} />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-mono text-xs flex items-center gap-1.5 transition-colors ${
                isDark ? 'hover:text-[#4cd7f6]' : 'hover:text-cyan-600'
              }`}
            >
              <Github size={15} />
              <span>GitHub</span>
            </a>

            {/* Back to top button */}
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top"
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all border ${
                isDark
                  ? 'bg-[#262a35] hover:bg-[#4cd7f6] hover:text-[#003640] text-[#bcc9cd] border-[#313540]'
                  : 'bg-white hover:bg-cyan-500 hover:text-white text-slate-700 border-slate-200'
              }`}
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
