import React from 'react';
import { X, QrCode, Download, Phone, Mail, MapPin, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface ContactQRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  onShowToast: (msg: string) => void;
}

export const ContactQRCodeModal: React.FC<ContactQRCodeModalProps> = ({
  isOpen,
  onClose,
  isDark,
  onShowToast,
}) => {
  if (!isOpen) return null;

  // Generate standard vCard .vcf string
  const generateVCard = () => {
    return [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Sah;Aman;;;',
      'FN:Aman Sah',
      'ORG:Galgotias University - CSE Cyber Security',
      'TITLE:Web Developer & Cybersecurity Specialist',
      `TEL;TYPE=CELL,VOICE:${PERSONAL_INFO.phone}`,
      `EMAIL;TYPE=PREF,INTERNET:${PERSONAL_INFO.email}`,
      `URL:${window.location.origin}`,
      `URL;TYPE=GitHub:${PERSONAL_INFO.github}`,
      `URL;TYPE=LinkedIn:${PERSONAL_INFO.linkedin}`,
      `ADR;TYPE=WORK:;;${PERSONAL_INFO.location};;;;`,
      'NOTE:Aman Sah Portfolio - Full-Stack & Cyber Defense Engineer',
      'END:VCARD'
    ].join('\r\n');
  };

  const handleDownloadVCard = () => {
    soundFx.playChime();
    const vCardData = generateVCard();
    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Aman_Sah_Contact.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    onShowToast('Aman_Sah_Contact.vcf downloaded! Open on phone to save contact.');
  };

  // Modern SVG QR Code representation encoding contact URI
  const portfolioUrl = window.location.href;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className={`relative w-full max-w-md rounded-2xl shadow-2xl border overflow-hidden transition-all ${
          isDark
            ? 'bg-[#171b26] border-[#262a35] text-[#dfe2f1]'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header Bar */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'bg-[#262a35] border-[#313540]' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2">
            <QrCode size={18} className="text-[#4edea3]" />
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#4edea3]">
              Instant VCard &amp; Mobile QR
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              soundFx.playClick(600);
              onClose();
            }}
            aria-label="Close QR Modal"
            className={`p-1.5 rounded-lg transition-colors ${
              isDark ? 'hover:bg-[#313540] text-[#bcc9cd]' : 'hover:bg-slate-200 text-slate-600'
            }`}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 text-center">
          {/* Avatar + Name */}
          <div className="flex flex-col items-center">
            <div className="relative mb-3">
              <img
                src="/profile.jpg"
                alt="Aman Sah"
                className="w-20 h-20 rounded-full object-cover object-top ring-4 ring-[#4edea3]/40 shadow-xl"
              />
              <span className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-[#4edea3] border-2 border-[#171b26] flex items-center justify-center">
                <Check size={12} className="text-[#0a0e18]" />
              </span>
            </div>
            <h3 className="text-xl font-extrabold">{PERSONAL_INFO.name}</h3>
            <p className="font-mono text-xs text-[#4cd7f6] mt-0.5">{PERSONAL_INFO.role}</p>
            <p className="text-xs text-[#bcc9cd] mt-1">{PERSONAL_INFO.location}</p>
          </div>

          {/* QR Code Container */}
          <div
            className={`p-5 rounded-2xl border flex flex-col items-center justify-center max-w-[220px] mx-auto shadow-inner ${
              isDark ? 'bg-[#0a0e18] border-[#313540]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {/* Dynamic QR SVG generated via free standard qr api */}
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
                `MECARD:N:Sah,Aman;TEL:${PERSONAL_INFO.phone};EMAIL:${PERSONAL_INFO.email};NOTE:Portfolio: ${portfolioUrl};;`
              )}&color=00e5a3&bgcolor=0a0e18`}
              alt="Scan Aman Sah Contact QR"
              className="w-40 h-40 rounded-xl"
              loading="lazy"
            />
            <span className="font-mono text-[10px] text-[#bcc9cd] mt-3 flex items-center gap-1">
              <ShieldCheck size={12} className="text-[#4edea3]" />
              <span>Camera Scan to Save</span>
            </span>
          </div>

          {/* Quick Contact Info */}
          <div
            className={`p-3.5 rounded-xl border text-xs font-mono space-y-1.5 text-left ${
              isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[#bcc9cd]">Phone:</span>
              <span className="font-bold text-[#4edea3]">{PERSONAL_INFO.phone}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#bcc9cd]">Email:</span>
              <span className="font-bold text-[#4cd7f6]">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#bcc9cd]">University:</span>
              <span className="font-bold text-[#dfe2f1]">Galgotias (CSE)</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={handleDownloadVCard}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#4edea3] to-[#4cd7f6] text-[#0a0e18] font-mono text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:opacity-90 transition-opacity"
            >
              <Download size={15} />
              <span>Download Contact (.vcf)</span>
            </button>

            <a
              href={`https://wa.me/916206971738?text=${encodeURIComponent('Hi Aman, I saw your portfolio and would like to connect.')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick(900)}
              className={`py-3 px-4 rounded-xl border font-mono text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
                isDark
                  ? 'bg-[#1c1f2a] border-[#313540] text-[#dfe2f1] hover:bg-[#262a35]'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>WhatsApp Chat</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
