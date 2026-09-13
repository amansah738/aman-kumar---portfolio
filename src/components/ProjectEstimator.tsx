import React, { useState } from 'react';
import { Calculator, CheckCircle2, Clock, Sparkles, MessageSquare, Mail, ShieldCheck, Zap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface ProjectEstimatorProps {
  isDark: boolean;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ isDark }) => {
  const [selectedService, setSelectedService] = useState('fullstack');
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    'responsive',
    'security',
    'seo'
  ]);

  const services = [
    {
      id: 'fullstack',
      title: 'Full-Stack Web App',
      description: 'Dynamic database-driven web platform with React, Java/Node backend & SQL schema.',
      timeline: '10–14 Days',
      tag: 'Most Popular',
      icon: '🚀'
    },
    {
      id: 'business-site',
      title: 'Business & Agency Site',
      description: 'High-speed, SEO-optimized, pixel-perfect corporate presence with dynamic inquiries.',
      timeline: '5–7 Days',
      tag: 'Fast Delivery',
      icon: '🏢'
    },
    {
      id: 'security-audit',
      title: 'Cyber Security & Vulnerability Audit',
      description: 'OWASP Top 10 penetration assessment, input sanitizer review & defensive hardening.',
      timeline: '3–5 Days',
      tag: 'Security Focus',
      icon: '🛡️'
    },
    {
      id: 'ui-revamp',
      title: 'UI/UX Redesign & Optimization',
      description: 'Modernizing legacy interfaces, Lighthouse 99+ speed audits, and mobile responsiveness.',
      timeline: '4–6 Days',
      tag: 'Performance',
      icon: '⚡'
    }
  ];

  const addons = [
    { id: 'responsive', label: '100% Mobile & Tablet Responsive UI', icon: '📱' },
    { id: 'security', label: 'OWASP Defensive Hardening & CSP Headers', icon: '🔒' },
    { id: 'database', label: 'PostgreSQL / SQL Database Architecture', icon: '🗄️' },
    { id: 'seo', label: 'Semantic SEO & Structured OpenGraph Tags', icon: '📈' },
    { id: 'deploy', label: 'Continuous Deployment to Vercel / Cloud', icon: '☁️' }
  ];

  const toggleAddon = (id: string) => {
    soundFx.playClick(850);
    setSelectedAddons(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const currentServiceObj = services.find(s => s.id === selectedService) || services[0];

  const generateWhatsAppMessage = () => {
    const addonLabels = addons
      .filter(a => selectedAddons.includes(a.id))
      .map(a => `• ${a.label}`)
      .join('\n');

    const msg = `Hi Aman,\nI visited your portfolio and would like to hire you for a project:\n\n*Service:* ${currentServiceObj.title}\n*Estimated Timeline:* ${currentServiceObj.timeline}\n*Scope Addons:*\n${addonLabels}\n\nLet's discuss the project details!`;
    return encodeURIComponent(msg);
  };

  const generateEmailLink = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${currentServiceObj.title}`);
    const addonLabels = addons
      .filter(a => selectedAddons.includes(a.id))
      .map(a => `- ${a.label}`)
      .join('\n');

    const body = encodeURIComponent(
      `Hi Aman,\n\nI want to discuss a new project with you:\n\nService: ${currentServiceObj.title}\nEstimated Timeline: ${currentServiceObj.timeline}\nAddons Requested:\n${addonLabels}\n\nPlease let me know your availability.\n\nBest regards.`
    );

    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="estimator" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#4cd7f6]">
            <Calculator size={14} />
            <span>Interactive Scope Planner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Project &amp;{' '}
            <span className="bg-gradient-to-r from-[#4cd7f6] via-[#4edea3] to-[#4fdbc8] bg-clip-text text-transparent">
              Freelance Estimator
            </span>
          </h2>
          <p className={`mt-2 text-sm max-w-2xl ${isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}`}>
            Planning a custom web application, corporate site, or security audit? Select your project parameters to estimate timeline and dispatch pre-formatted requirements.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className={`px-3 py-1.5 rounded-xl font-mono text-xs border flex items-center gap-1.5 ${
            isDark ? 'bg-[#1c1f2a] border-[#313540] text-[#4edea3]' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Sparkles size={13} className="text-[#4edea3]" />
            <span>Fast Turnaround Guaranteed</span>
          </span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Select Service & Addons */}
        <div className="lg:col-span-8 space-y-6">
          {/* Service Cards */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-semibold mb-3">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {services.map((service) => {
                const isSelected = selectedService === service.id;
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      soundFx.playClick(750);
                      setSelectedService(service.id);
                    }}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                      isSelected
                        ? isDark
                          ? 'bg-[#1e2738] border-[#4cd7f6] ring-2 ring-[#4cd7f6]/40 shadow-lg shadow-cyan-950/30'
                          : 'bg-cyan-50 border-cyan-500 ring-2 ring-cyan-200 shadow-sm'
                        : isDark
                        ? 'bg-[#171b26] border-[#262a35] hover:border-[#313540]'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl">{service.icon}</span>
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/30 border border-white/10 text-[#4edea3]">
                          {service.tag}
                        </span>
                      </div>
                      <h4 className="font-bold text-sm text-[#dfe2f1] mb-1">{service.title}</h4>
                      <p className="text-xs text-[#bcc9cd] leading-relaxed mb-3">{service.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/5 font-mono text-xs">
                      <span className="text-[#869397]">Delivery:</span>
                      <span className="font-bold text-[#4cd7f6] flex items-center gap-1">
                        <Clock size={12} />
                        <span>{service.timeline}</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Addons Selection */}
          <div>
            <label className="block font-mono text-xs uppercase tracking-wider text-[#4edea3] font-semibold mb-3">
              2. Included Deliverables &amp; Addons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {addons.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border text-left transition-all duration-150 flex items-center justify-between ${
                      isChecked
                        ? isDark
                          ? 'bg-[#171f2a] border-[#4edea3]/60 text-[#dfe2f1]'
                          : 'bg-emerald-50 border-emerald-400 text-emerald-900'
                        : isDark
                        ? 'bg-[#171b26] border-[#262a35] text-[#869397] hover:border-[#313540]'
                        : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 text-xs font-semibold">
                      <span>{addon.icon}</span>
                      <span>{addon.label}</span>
                    </div>
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-[#4edea3] border-[#4edea3] text-[#0a0e18]'
                          : 'border-[#313540]'
                      }`}
                    >
                      {isChecked && <CheckCircle2 size={12} className="text-black" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Scope Summary & Dispatch Card */}
        <div className="lg:col-span-4">
          <div
            className={`p-6 rounded-2xl border sticky top-24 shadow-xl ${
              isDark ? 'bg-[#171b26] border-[#262a35]' : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] font-bold">
                Project Scope Summary
              </span>
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse"></span>
            </div>

            <div className="space-y-3 mb-6 font-mono text-xs">
              <div>
                <span className="text-[#bcc9cd] block mb-0.5">Selected Service:</span>
                <span className="font-bold text-sm text-[#dfe2f1]">{currentServiceObj.title}</span>
              </div>

              <div>
                <span className="text-[#bcc9cd] block mb-0.5">Estimated Turnaround:</span>
                <span className="font-bold text-sm text-[#4edea3] flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{currentServiceObj.timeline}</span>
                </span>
              </div>

              <div>
                <span className="text-[#bcc9cd] block mb-1">Included Addons ({selectedAddons.length}):</span>
                <ul className="space-y-1 text-[11px] text-[#bcc9cd]">
                  {addons
                    .filter(a => selectedAddons.includes(a.id))
                    .map(a => (
                      <li key={a.id} className="flex items-center gap-1.5">
                        <span className="text-[#4edea3]">✓</span>
                        <span className="truncate">{a.label}</span>
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/916206971738?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playChime()}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:opacity-95 transition-opacity"
              >
                <MessageSquare size={16} />
                <span>Book Scope via WhatsApp</span>
              </a>

              <a
                href={generateEmailLink()}
                onClick={() => soundFx.playClick(900)}
                className={`w-full py-2.5 px-4 rounded-xl border font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                  isDark
                    ? 'bg-[#1c1f2a] border-[#313540] text-[#dfe2f1] hover:bg-[#262a35] hover:border-[#4cd7f6]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Mail size={15} />
                <span>Inquire via Email</span>
              </a>
            </div>

            <p className="text-[11px] text-center text-[#869397] font-mono mt-4">
              🛡️ Non-disclosure &amp; direct developer communication guaranteed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
