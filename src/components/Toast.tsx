import React, { useEffect } from 'react';
import { CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'alert' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short flex items-center gap-3 px-4 py-3 rounded-xl bg-[#262a35] text-[#dfe2f1] shadow-2xl border border-[#4edea3]/30 font-mono text-xs max-w-md">
      {type === 'success' && <CheckCircle2 size={18} className="text-[#4edea3] shrink-0" />}
      {type === 'alert' && <AlertCircle size={18} className="text-[#ffb4ab] shrink-0" />}
      {type === 'info' && <Info size={18} className="text-[#4cd7f6] shrink-0" />}
      <span>{message}</span>
    </div>
  );
};
