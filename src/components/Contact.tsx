import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Copy, 
  Check, 
  Linkedin, 
  Github, 
  ArrowRight, 
  Loader2, 
  ShieldCheck,
  QrCode
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface ContactProps {
  isDark: boolean;
  onShowToast: (msg: string, icon?: string) => void;
  onOpenQR: () => void;
}

export const Contact: React.FC<ContactProps> = ({ isDark, onShowToast, onOpenQR }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('Please fill out all required fields.', 'alert');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `Portfolio Query from ${formData.name}`,
          message: formData.message,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
        onShowToast(`Message sent directly to ${PERSONAL_INFO.email}! Aman will respond shortly.`, 'check');
      } else {
        throw new Error('API dispatch failed, falling back to mail client');
      }
    } catch {
      setIsSubmitting(false);
      const subject = encodeURIComponent(formData.subject || `Portfolio Query from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Aman,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      onShowToast(`Opening mail client to send query to ${PERSONAL_INFO.email}...`, 'info');
    }
  };

  const handleOpenMailClient = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Query from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Aman,\n\nName: ${formData.name || 'Visitor'}\nEmail: ${formData.email || 'Not specified'}\n\nMessage:\n${formData.message || ''}\n`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(PERSONAL_INFO.email)
      .then(() => {
        setCopiedEmail(true);
        onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`, 'check');
        setTimeout(() => setCopiedEmail(false), 2500);
      })
      .catch(() => {
        onShowToast(`Email: ${PERSONAL_INFO.email}`, 'info');
      });
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex flex-col gap-2 mb-10 sm:mb-14">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#4fdbc8] uppercase tracking-wider">
            // 04. TRANSMISSION CONSOLE
          </span>
          <div className="h-0.5 w-12 bg-[#4fdbc8]/40 rounded-full"></div>
        </div>
        <h2
          id="contact-title"
          className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
          }`}
        >
          Get In Touch
        </h2>
        <p
          className={`text-base sm:text-lg max-w-2xl ${
            isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
          }`}
        >
          Have a project in mind, interested in hiring, or want to talk cybersecurity architecture? Let's talk!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Interactive Contact Form */}
        <div
          id="contact-form-container"
          className={`lg:col-span-7 rounded-xl p-6 sm:p-8 shadow-xl border ${
            isDark
              ? 'bg-[#1c1f2a] border-[#262a35]'
              : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 sm:gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className={`font-mono text-xs font-semibold ${
                    isDark ? 'text-[#bcc9cd]' : 'text-slate-700'
                  }`}
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. John Doe"
                  type="text"
                  className={`w-full px-4 py-2.5 rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#4cd7f6] border transition-all ${
                    isDark
                      ? 'bg-[#0a0e18] text-[#dfe2f1] border-[#262a35] placeholder:text-[#3d494c]'
                      : 'bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400'
                  }`}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className={`font-mono text-xs font-semibold ${
                    isDark ? 'text-[#bcc9cd]' : 'text-slate-700'
                  }`}
                >
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="name@company.com"
                  type="email"
                  className={`w-full px-4 py-2.5 rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#4cd7f6] border transition-all ${
                    isDark
                      ? 'bg-[#0a0e18] text-[#dfe2f1] border-[#262a35] placeholder:text-[#3d494c]'
                      : 'bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400'
                  }`}
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-subject"
                className={`font-mono text-xs font-semibold ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-700'
                }`}
              >
                Subject *
              </label>
              <input
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                placeholder="Project Inquiry / Job Opportunity"
                type="text"
                className={`w-full px-4 py-2.5 rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#4cd7f6] border transition-all ${
                  isDark
                    ? 'bg-[#0a0e18] text-[#dfe2f1] border-[#262a35] placeholder:text-[#3d494c]'
                    : 'bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400'
                }`}
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="contact-message"
                className={`font-mono text-xs font-semibold ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-700'
                }`}
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className={`w-full px-4 py-2.5 rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#4cd7f6] border transition-all resize-y ${
                  isDark
                    ? 'bg-[#0a0e18] text-[#dfe2f1] border-[#262a35] placeholder:text-[#3d494c]'
                    : 'bg-slate-50 text-slate-900 border-slate-200 placeholder:text-slate-400'
                }`}
              ></textarea>
            </div>

            {/* Submit & Email Client Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#4cd7f6] text-[#003640] font-bold text-sm sm:text-base shadow-lg shadow-cyan-500/20 hover:bg-[#38bdf8] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Dispatching to {PERSONAL_INFO.email}...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleOpenMailClient}
                className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-mono text-xs font-semibold border transition-all cursor-pointer ${
                  isDark
                    ? 'bg-[#262a35] hover:bg-[#313540] text-[#4cd7f6] border-[#313540]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
                }`}
                title="Open directly in your mail application (Gmail, Outlook, etc.)"
              >
                <Mail size={15} />
                <span>Open in Mail / Gmail</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Direct Info Cards */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 sm:gap-5">
          {/* Direct Email Card */}
          <div
            id="contact-email-card"
            className={`p-5 sm:p-6 rounded-xl shadow-md border flex flex-col gap-3 ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35]'
                : 'bg-white border-slate-200 shadow-slate-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#4cd7f6] flex items-center gap-2">
                <Mail size={16} />
                <span>DIRECT EMAIL DISPATCH</span>
              </span>

              <button
                id="copy-email-btn"
                type="button"
                onClick={handleCopyEmail}
                className={`px-2.5 py-1 rounded font-mono text-xs transition-colors flex items-center gap-1.5 border cursor-pointer ${
                  isDark
                    ? 'bg-[#262a35] hover:bg-[#313540] text-[#bcc9cd] hover:text-[#4cd7f6] border-[#313540]'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                }`}
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check size={13} className="text-[#4edea3]" />
                    <span className="text-[#4edea3]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`text-base sm:text-lg font-semibold hover:text-[#4cd7f6] transition-colors break-all ${
                  isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                }`}
              >
                {PERSONAL_INFO.email}
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Project%20Inquiry`}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs font-semibold transition-colors border self-start sm:self-auto ${
                  isDark
                    ? 'bg-[#262a35] hover:bg-[#4cd7f6] text-[#4cd7f6] hover:text-[#003640] border-[#313540]'
                    : 'bg-slate-100 hover:bg-cyan-500 text-slate-800 hover:text-white border-slate-200'
                }`}
                title="Open compose window in email client"
              >
                <span>Write Mail</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <span
              className={`font-mono text-xs ${
                isDark ? 'text-[#bcc9cd]' : 'text-slate-500'
              }`}
            >
              Typically responds within 24 hours
            </span>
          </div>

          {/* Quick Phone & vCard QR Card */}
          <div
            id="contact-vcard-qr-card"
            className={`p-5 rounded-xl shadow-md border flex items-center justify-between cursor-pointer transition-all hover:scale-[1.01] ${
              isDark
                ? 'bg-gradient-to-r from-[#1c1f2a] to-[#262a35] border-[#4edea3]/40 hover:border-[#4edea3]'
                : 'bg-emerald-50 border-emerald-200 hover:border-emerald-400 shadow-slate-100'
            }`}
            onClick={() => {
              soundFx.playClick(750);
              onOpenQR();
            }}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#4edea3]/20 text-[#4edea3]">
                <QrCode size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-[#4edea3] font-semibold">Instant Mobile Contact</span>
                <span className={`text-sm font-bold ${isDark ? 'text-[#dfe2f1]' : 'text-slate-900'}`}>
                  Scan or Download vCard (.vcf)
                </span>
              </div>
            </div>
            <span className="px-3 py-1.5 rounded-lg bg-[#4edea3] text-[#0a0e18] font-mono text-xs font-bold shrink-0">
              Open QR 📱
            </span>
          </div>

          {/* LinkedIn Profile Card */}
          <div
            id="contact-linkedin-card"
            className={`p-5 rounded-xl shadow-md border flex items-center justify-between ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35]'
                : 'bg-white border-slate-200 shadow-slate-100'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-[#4edea3] ${
                  isDark ? 'bg-[#262a35]' : 'bg-emerald-50'
                }`}
              >
                <Linkedin size={20} />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm font-bold ${
                    isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                  }`}
                >
                  LinkedIn Profile
                </span>
                <span
                  className={`font-mono text-xs ${
                    isDark ? 'text-[#bcc9cd]' : 'text-slate-500'
                  }`}
                >
                  {PERSONAL_INFO.linkedinUser}
                </span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                isDark
                  ? 'bg-[#262a35] hover:bg-[#4cd7f6] text-[#dfe2f1] hover:text-[#003640] border-[#313540]'
                  : 'bg-slate-100 hover:bg-cyan-500 text-slate-800 hover:text-white border-slate-200'
              }`}
            >
              <span>Connect</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* GitHub Card */}
          <div
            id="contact-github-card"
            className={`p-5 rounded-xl shadow-md border flex items-center justify-between ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35]'
                : 'bg-white border-slate-200 shadow-slate-100'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-[#4fdbc8] ${
                  isDark ? 'bg-[#262a35]' : 'bg-teal-50'
                }`}
              >
                <Github size={20} />
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-sm font-bold ${
                    isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                  }`}
                >
                  GitHub Repositories
                </span>
                <span
                  className={`font-mono text-xs ${
                    isDark ? 'text-[#bcc9cd]' : 'text-slate-500'
                  }`}
                >
                  {PERSONAL_INFO.githubUser}
                </span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors border ${
                isDark
                  ? 'bg-[#262a35] hover:bg-[#4cd7f6] text-[#dfe2f1] hover:text-[#003640] border-[#313540]'
                  : 'bg-slate-100 hover:bg-cyan-500 text-slate-800 hover:text-white border-slate-200'
              }`}
            >
              <span>Explore</span>
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Availability Status Card */}
          <div
            id="contact-availability-card"
            className={`p-5 rounded-xl shadow-inner border flex items-center gap-3.5 ${
              isDark
                ? 'bg-[#262a35]/80 border-[#313540]'
                : 'bg-emerald-50/70 border-emerald-200'
            }`}
          >
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4edea3] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#4edea3]"></span>
            </span>
            <div className="flex flex-col">
              <span
                className={`text-sm font-bold ${
                  isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                }`}
              >
                {PERSONAL_INFO.availabilityStatus}
              </span>
              <span
                className={`font-mono text-xs ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
                }`}
              >
                {PERSONAL_INFO.availabilityNotice}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
