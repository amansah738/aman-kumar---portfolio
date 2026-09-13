import React from 'react';
import { MessageCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface WhatsAppButtonProps {
  isDark: boolean;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ isDark }) => {
  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const defaultMessage = encodeURIComponent(
    `Hello Aman, I visited your portfolio and would like to connect with you regarding opportunities.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-40 group">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Contact with Aman Sah"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-green-500/40 cursor-pointer"
      >
        {/* Pulse ring */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-30"></span>

        {/* WhatsApp Icon */}
        <MessageCircle size={26} className="fill-current" />
      </a>

      {/* Hover Tooltip */}
      <div className="absolute left-14 bottom-2.5 hidden group-hover:flex items-center px-3 py-1.5 rounded-lg bg-[#0a0e18] text-[#dfe2f1] font-mono text-xs shadow-2xl border border-[#262a35] whitespace-nowrap pointer-events-none transition-opacity">
        <span className="text-[#25D366] font-bold mr-1">●</span>
        <span>Quick Chat on WhatsApp</span>
      </div>
    </div>
  );
};
