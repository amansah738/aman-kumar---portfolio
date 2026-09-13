import React, { useState } from 'react';
import { HelpCircle, ChevronDown, CheckCircle, Shield, Briefcase, Zap, Terminal } from 'lucide-react';
import { soundFx } from '../utils/audio';

interface FAQProps {
  isDark: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Are you available for internships, contract roles, or full-time 2026 positions?',
      a: 'Yes, absolutely! I am currently pursuing B.Tech in Computer Science & Engineering (Specialization: Cyber Security) with expected graduation in 2026. I am actively available for Summer Internships, Remote/Hybrid developer roles, and freelance consulting.',
      icon: Briefcase,
      color: 'text-[#4cd7f6]'
    },
    {
      q: 'What are your core technical competencies and primary programming languages?',
      a: 'My primary programming foundations are Java (OOP, Data Structures, Multithreading) and Modern JavaScript/TypeScript (React, DOM, REST APIs). In addition, I work with SQL (PostgreSQL, MySQL), HTML5/CSS3/Tailwind, Linux Shell Scripting, and Git/GitHub.',
      icon: Terminal,
      color: 'text-[#4edea3]'
    },
    {
      q: 'Can you conduct cybersecurity audits and vulnerability assessments on existing apps?',
      a: 'Yes. With certifications from Cisco Networking Academy (Cybersecurity Essentials) and hands-on CTF lab experience, I assess web applications against the OWASP Top 10 vulnerabilities, including XSS, SQL Injection, CSRF token validation, and Content-Security-Policy (CSP) hardening.',
      icon: Shield,
      color: 'text-[#a78bfa]'
    },
    {
      q: 'How do you guarantee responsive mobile layout and high Google Lighthouse performance?',
      a: 'I employ mobile-first CSS architecture (Flexbox, CSS Grid), lazy-loaded responsive media assets, clean semantic markup, and zero layout shift strategies. My production projects consistently score 95+ on Google Lighthouse across Performance, Accessibility, Best Practices, and SEO.',
      icon: Zap,
      color: 'text-amber-400'
    },
    {
      q: 'How can recruiters or clients get in touch with you quickly?',
      a: 'You can reach out directly via the Contact Form on this site (which routes straight to ak526387@gmail.com), phone/WhatsApp at +91 6206971738, or connect on LinkedIn (linkedin.com/in/aman-sah01). I typically respond within 12 to 24 hours.',
      icon: CheckCircle,
      color: 'text-[#4fdbc8]'
    }
  ];

  const handleToggle = (idx: number) => {
    soundFx.playClick(800);
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#4edea3]">
            <HelpCircle size={14} />
            <span>Recruiter &amp; Client Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#4edea3] via-[#4cd7f6] to-[#a78bfa] bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className={`mt-2 text-sm max-w-2xl ${isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}`}>
            Quick answers to common questions about my availability, technical stack, security methodologies, and work process.
          </p>
        </div>

        <span className={`px-3 py-1.5 rounded-xl font-mono text-xs border flex items-center gap-1.5 self-start md:self-auto ${
          isDark ? 'bg-[#1c1f2a] border-[#313540] text-[#4cd7f6]' : 'bg-cyan-50 border-cyan-200 text-cyan-700'
        }`}>
          <span>Got another question? Reach out anytime!</span>
        </span>
      </div>

      {/* Accordion List */}
      <div className="space-y-3.5 max-w-4xl mx-auto">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          const Icon = faq.icon;

          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? isDark
                    ? 'bg-[#171f2a] border-[#4cd7f6]/50 shadow-lg shadow-cyan-950/20'
                    : 'bg-white border-cyan-400 shadow-md'
                  : isDark
                  ? 'bg-[#171b26] border-[#262a35] hover:border-[#313540]'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => handleToggle(idx)}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isDark ? 'bg-[#1c2233]' : 'bg-slate-100'
                  }`}>
                    <Icon size={16} className={faq.color} />
                  </div>
                  <span className={`font-bold text-sm sm:text-base ${
                    isOpen ? 'text-[#4cd7f6]' : isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                  }`}>
                    {faq.q}
                  </span>
                </div>

                <div className={`p-1.5 rounded-lg transition-transform duration-300 shrink-0 ${
                  isOpen ? 'rotate-180 text-[#4cd7f6]' : 'text-[#869397]'
                }`}>
                  <ChevronDown size={18} />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-0 font-sans text-xs sm:text-sm leading-relaxed border-t border-white/5 mt-1 pt-4 animate-fadeIn">
                  <p className={isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
