import React, { useEffect } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  ExternalLink,
  Building2, 
  GraduationCap, 
  Award,
  ShieldCheck, 
  Code2,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  isDark,
  onShowToast,
}) => {
  const [activeTab, setActiveTab] = React.useState<'pdf' | 'interactive'>('pdf');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.open('/Aman_Sah_Resume.pdf', '_blank');
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Aman_Sah_Resume.pdf';
    link.download = 'Aman_Sah_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    onShowToast('Resume downloaded successfully: Aman_Sah_Resume.pdf');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`relative w-full max-w-4xl my-4 sm:my-8 rounded-2xl shadow-2xl border overflow-hidden transition-all flex flex-col max-h-[92vh] ${
          isDark
            ? 'bg-[#171b26] border-[#262a35] text-[#dfe2f1]'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-3.5 border-b ${
            isDark ? 'bg-[#262a35] border-[#313540]' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            <span className="font-mono text-xs font-semibold ml-2 text-[#4cd7f6] flex items-center gap-1.5">
              <FileText size={14} />
              <span>Aman_Sah_Resume.pdf</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Aman_Sah_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-colors border ${
                isDark
                  ? 'bg-[#1c1f2a] hover:bg-[#262a35] text-[#4cd7f6] border-[#313540]'
                  : 'bg-white hover:bg-slate-50 text-cyan-600 border-slate-200'
              }`}
              title="Open full PDF in new tab"
            >
              <ExternalLink size={15} />
              <span className="hidden sm:inline">Open PDF</span>
            </a>

            <button
              onClick={handleDownload}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs flex items-center gap-1.5 transition-colors border shadow-sm ${
                isDark
                  ? 'bg-[#4cd7f6] text-[#003640] hover:bg-[#38bdf8] border-[#4cd7f6] font-bold'
                  : 'bg-cyan-500 text-white hover:bg-cyan-600 border-cyan-500 font-bold'
              }`}
              title="Download original PDF resume"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className={`p-1.5 rounded-lg font-mono text-xs hidden sm:flex items-center gap-1.5 transition-colors border ${
                isDark
                  ? 'bg-[#1c1f2a] hover:bg-[#313540] border-[#313540] text-[#bcc9cd]'
                  : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700'
              }`}
              title="Print Resume"
            >
              <Printer size={15} />
              <span>Print</span>
            </button>

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
        </div>

        {/* View Mode Tabs */}
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2 border-b text-xs font-mono ${
            isDark ? 'bg-[#101522] border-[#262a35]' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('pdf')}
              className={`px-3 py-1 rounded-md transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'pdf'
                  ? 'bg-[#4cd7f6] text-[#003640] shadow-sm'
                  : isDark
                  ? 'text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#1c1f2a]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText size={13} />
              <span>PDF Document Preview</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('interactive')}
              className={`px-3 py-1 rounded-md transition-all font-semibold flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'interactive'
                  ? 'bg-[#4cd7f6] text-[#003640] shadow-sm'
                  : isDark
                  ? 'text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#1c1f2a]'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Code2 size={13} />
              <span>Structured View</span>
            </button>
          </div>

          <span className="hidden sm:inline text-[#869397] text-[11px]">
            Aman Sah • B.Tech CSE (Galgotias University)
          </span>
        </div>

        {/* Modal Resume Content */}
        {activeTab === 'pdf' ? (
          <div className="p-3 sm:p-5 flex-1 min-h-[500px] h-[68vh] flex flex-col">
            <iframe
              src="/Aman_Sah_Resume.pdf#view=FitH"
              className="w-full h-full rounded-xl border border-[#262a35] bg-slate-900 shadow-inner"
              title="Aman Sah Resume PDF"
            />
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto">
          {/* Header Title */}
          <div className="border-b border-[#262a35] pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#4cd7f6]">
                {PERSONAL_INFO.name}
              </h2>
              <p className="font-mono text-sm text-[#4edea3] font-medium">
                {PERSONAL_INFO.roleTitle}
              </p>
              <p className="text-xs text-[#bcc9cd] mt-1 font-mono">
                Aghoria Bazar Chowk, Muzaffarpur, Bihar – 842002, India
              </p>
            </div>
            <div className="font-mono text-xs text-left sm:text-right space-y-1">
              <div><a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#4cd7f6] hover:underline">{PERSONAL_INFO.email}</a></div>
              <div>{PERSONAL_INFO.phone}</div>
              <div><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#4edea3] hover:underline">{PERSONAL_INFO.linkedinUser}</a></div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4cd7f6]">
              Summary
            </h3>
            <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
              Motivated B.Tech (Computer Science) student with strong foundation in programming and web development. Skilled in Java, JavaScript, and front-end technologies with hands-on experience in building real-world projects like e-commerce platforms and business websites. Basic knowledge of cybersecurity concepts including network security and data protection. Seeking an opportunity to apply technical skills and grow as a software developer.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4cd7f6] flex items-center gap-2">
              <GraduationCap size={16} />
              <span>Education</span>
            </h3>
            <div className="space-y-2.5">
              {/* College 1 */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm sm:text-base text-[#dfe2f1]">Galgotias University, Greater Noida, Uttar Pradesh</span>
                  <span className="font-mono text-xs text-[#4edea3]">Aug 2022 – Jun 2026</span>
                </div>
                <p className="text-xs sm:text-sm text-[#4cd7f6]">B.Tech (CSE) – Computer Science Engineering</p>
              </div>

              {/* College 2 */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm text-[#dfe2f1]">Shaheed Pramod ITC College, Muzaffarpur, Bihar</span>
                  <span className="font-mono text-xs text-[#4edea3]">Aug 2019 – Oct 2022</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">Intermediate (PCM) Electrician</p>
              </div>

              {/* School 3 */}
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex justify-between items-start">
                  <span className="font-bold text-sm text-[#dfe2f1]">RK Tirhut Academy, Muzaffarpur</span>
                  <span className="font-mono text-xs text-[#4edea3]">Apr 2017 – Apr 2019</span>
                </div>
                <p className="text-xs text-[#bcc9cd]">Matriculation (10th)</p>
              </div>
            </div>
          </div>

          {/* Technical Arsenal */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4edea3] flex items-center gap-2">
              <Code2 size={16} />
              <span>Technical Skills</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[#4cd7f6] font-bold block mb-1">Programming Languages</span>
                <span className="text-[#bcc9cd]">Java, JavaScript, SQL</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[#4edea3] font-bold block mb-1">Web Development</span>
                <span className="text-[#bcc9cd]">HTML, CSS, Responsive Web Design</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[#4fdbc8] font-bold block mb-1">Tools &amp; Technologies</span>
                <span className="text-[#bcc9cd]">Git, GitHub</span>
              </div>
              <div className={`p-3 rounded-lg border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <span className="text-[#4edea3] font-bold block mb-1">Core Concepts &amp; CyberSec</span>
                <span className="text-[#bcc9cd]">Data Structures &amp; Algorithms, Problem Solving, Network Security, Data Protection</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-3">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4fdbc8] flex items-center gap-2">
              <Building2 size={16} />
              <span>Key Projects</span>
            </h3>
            <div className="space-y-3">
              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <span className="font-bold text-sm text-[#4cd7f6]">Xynox Solutions Website</span>
                <p className="text-xs text-[#bcc9cd] mt-1.5 leading-relaxed">
                  Developed a responsive business website using HTML, CSS, and JavaScript. Designed modern UI for showcasing services, portfolio, and company branding with optimized performance.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#4edea3]">E-Commerce Website</span>
                  <span className="font-mono text-[11px] text-[#4cd7f6]">eyecares.in</span>
                </div>
                <p className="text-xs text-[#bcc9cd] mt-1.5 leading-relaxed">
                  Developed a full-featured e-commerce platform with product listing, cart, and checkout. Implemented order management and user-friendly interface.
                </p>
              </div>

              <div className={`p-4 rounded-xl border ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <span className="font-bold text-sm text-[#4fdbc8]">Optical ERP System</span>
                <p className="text-xs text-[#bcc9cd] mt-1.5 leading-relaxed">
                  Built an ERP system to manage inventory, billing, customers, and sales reports. Improved efficiency of store operations through automation.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4cd7f6] flex items-center gap-1.5">
                <ShieldCheck size={15} />
                <span>Certifications</span>
              </h3>
              <div className={`p-3 rounded-lg border font-mono text-xs space-y-2 ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <div>
                  <span className="text-[#dfe2f1] font-semibold block">Cybersecurity Essentials</span>
                  <span className="text-[#4edea3] text-[11px]">Cisco Networking Academy (May 2024)</span>
                </div>
                <div>
                  <span className="text-[#dfe2f1] font-semibold block">Field Technician Computing &amp; Peripherals</span>
                  <span className="text-[#4cd7f6] text-[11px]">NSDC (Apr 2020)</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#4edea3] flex items-center gap-1.5">
                <Award size={15} />
                <span>Achievements &amp; Activities</span>
              </h3>
              <div className={`p-3 rounded-lg border font-mono text-xs space-y-1.5 text-[#bcc9cd] ${isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'}`}>
                <div>• Uttar Pradesh Police Training</div>
                <div>• State Disaster Response Force (SDRF)</div>
                <div>• NSS (National Service Scheme)</div>
                <div>• NCC (National Cadet Corps)</div>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Footer actions */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-t ${
            isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <a
            href="/Aman_Sah_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-[#4cd7f6] hover:underline flex items-center gap-1"
          >
            <span>Open PDF Viewer</span>
            <ExternalLink size={13} />
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-semibold ${
                isDark ? 'text-[#bcc9cd] hover:text-[#dfe2f1]' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2.5 rounded-lg bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors flex items-center gap-2 shadow-md shadow-cyan-500/20"
            >
              <Download size={15} />
              <span>Download Official PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
