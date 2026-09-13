import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, Minimize2, CornerDownLeft, Shield } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  isDark: boolean;
}

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
  onOpenResume,
  isDark,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'init',
      output: (
        <div className="space-y-1 text-xs">
          <p className="text-[#4cd7f6] font-bold">
            🛡️ Aman Sah Cybernetic Security Shell (v2.4.0-release)
          </p>
          <p className="text-[#bcc9cd]">
            Type <span className="text-[#4edea3] font-bold font-mono">help</span> to view available commands, or click the quick command chips below.
          </p>
        </div>
      ),
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1 font-mono text-xs text-[#bcc9cd]">
            <p className="text-[#4cd7f6] font-semibold">Available Shell Directives:</p>
            <p><span className="text-[#4edea3]">about</span> - Developer origin &amp; philosophy</p>
            <p><span className="text-[#4edea3]">skills</span> - Print Technical Capabilities Matrix</p>
            <p><span className="text-[#4edea3]">projects</span> - List Featured Production Code</p>
            <p><span className="text-[#4edea3]">contact</span> - Transmit communication endpoints</p>
            <p><span className="text-[#4edea3]">resume</span> - Open complete curriculum vitae</p>
            <p><span className="text-[#4edea3]">status</span> - Check live employment availability</p>
            <p><span className="text-[#4edea3]">clear</span> - Clear current console buffer</p>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="font-mono text-xs text-[#bcc9cd] space-y-1 leading-relaxed">
            <p className="text-[#dfe2f1] font-bold">{PERSONAL_INFO.name} - {PERSONAL_INFO.roleTitle}</p>
            <p>B.Tech Computer Science student fusing modern responsive web engineering with defensive cyber audits (OWASP Top 10).</p>
            <p className="text-[#4edea3]">Stats: {STATS.map(s => `${s.value} ${s.label}`).join(' | ')}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="font-mono text-xs text-[#bcc9cd] space-y-1">
            <p className="text-[#4cd7f6] font-semibold">[Core Matrix]</p>
            <p>• Languages: Java (85%), JavaScript ES6+ (90%), SQL (80%)</p>
            <p>• Web Dev: HTML5 &amp; CSS3 (95%), Responsive UI (92%), Frameworks (82%)</p>
            <p>• Tools: Git/GitHub (90%), Linux (85%), Postman/VS Code (88%)</p>
            <p>• CyberSec: OWASP Top 10 (88%), Network Defense (82%), Data Protection (85%)</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="font-mono text-xs text-[#bcc9cd] space-y-1.5">
            <p className="text-[#4cd7f6] font-semibold">[Active Deployments]</p>
            <p>1. <span className="text-[#dfe2f1] font-bold">Xynox Solutions</span> (Corporate Web Architecture, SEO 100/100)</p>
            <p>2. <span className="text-[#dfe2f1] font-bold">E-Commerce Store</span> (Cart Management, Secure Sanitized Checkout)</p>
            <p>3. <span className="text-[#dfe2f1] font-bold">Optical ERP System</span> (Java Enterprise, RBAC, Patient Prescription Logs)</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="font-mono text-xs text-[#bcc9cd] space-y-1">
            <p className="text-[#4cd7f6] font-semibold">[Communication Channels]</p>
            <p>• Email: <span className="text-[#4edea3]">{PERSONAL_INFO.email}</span></p>
            <p>• LinkedIn: {PERSONAL_INFO.linkedin}</p>
            <p>• GitHub: {PERSONAL_INFO.github}</p>
          </div>
        );
        break;

      case 'status':
        response = (
          <p className="font-mono text-xs text-[#4edea3]">
            [ONLINE] {PERSONAL_INFO.availabilityStatus}: {PERSONAL_INFO.availabilityNotice}
          </p>
        );
        break;

      case 'resume':
        onOpenResume();
        response = (
          <div className="font-mono text-xs text-[#4cd7f6] space-y-1">
            <p>Opening curriculum vitae console...</p>
            <p>Direct download: <a href="/Aman_Sah_Resume.pdf" download="Aman_Sah_Resume.pdf" className="text-[#4edea3] underline font-bold">Aman_Sah_Resume.pdf</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'whoami':
        response = (
          <p className="font-mono text-xs text-[#4edea3]">
            aman@devsec:~$ Full Stack Web Artisan &amp; Security Analyst (B.Tech CSE)
          </p>
        );
        break;

      case 'sudo':
        response = <p className="font-mono text-xs text-[#ffb4ab]">User is not in the sudoers file. This incident will be reported to Aman.</p>;
        break;

      default:
        response = (
          <p className="font-mono text-xs text-[#ffb4ab]">
            command not found: '{trimmed}'. Type <span className="text-[#4cd7f6] underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for known operations.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        command: cmdText,
        output: response,
      },
    ]);
    setInputVal('');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-xl shadow-2xl border border-[#262a35] bg-[#0a0e18] text-[#dfe2f1] overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#171b26] border-b border-[#262a35]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            <span className="font-mono text-xs text-[#bcc9cd] ml-2 flex items-center gap-1.5">
              <Terminal size={13} className="text-[#4edea3]" />
              <span>aman@terminal: ~ (zsh)</span>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={onClose}
              className="p-1 rounded hover:bg-[#262a35] text-[#bcc9cd] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#101522] border-b border-[#262a35] flex flex-wrap gap-2 text-[11px] font-mono">
          <span className="text-[#869397] self-center">Quick Run:</span>
          {['help', 'about', 'skills', 'projects', 'contact', 'resume', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => {
                soundFx.playClick(850);
                handleCommand(cmd);
              }}
              className="px-2 py-0.5 rounded bg-[#1c1f2a] hover:bg-[#262a35] text-[#4cd7f6] hover:text-[#4edea3] transition-colors border border-[#262a35]"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Body Screen */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-3 cursor-text selection:bg-[#4cd7f6]/30"
        >
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              {item.command !== 'init' && (
                <div className="flex items-center gap-2 text-[#4edea3]">
                  <span>aman@devsec:~$</span>
                  <span className="text-[#dfe2f1] font-bold">{item.command}</span>
                </div>
              )}
              <div className="pl-0">{item.output}</div>
            </div>
          ))}

          {/* Active Command Input Line */}
          <form onSubmit={handleFormSubmit} className="flex items-center gap-2 text-[#4edea3] pt-1">
            <span>aman@devsec:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onKeyDown={() => soundFx.playKey()}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type a command..."
              className="flex-1 bg-transparent text-[#dfe2f1] focus:outline-none placeholder:text-[#3d494c] font-mono text-xs"
            />
            <button type="submit" className="text-[#4cd7f6] hover:text-[#4edea3] transition-colors">
              <CornerDownLeft size={14} />
            </button>
          </form>

          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};
