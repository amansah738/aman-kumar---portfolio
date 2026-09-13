import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Terminal, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Briefcase,
  Volume2,
  VolumeX,
  Palette,
  QrCode,
  Sparkles
} from 'lucide-react';
import { ASSETS, PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audio';

interface NavbarProps {
  isDark: boolean;
  accent: 'emerald' | 'cyan' | 'violet' | 'amber';
  onSelectAccent: (accent: 'emerald' | 'cyan' | 'violet' | 'amber') => void;
  onToggleTheme: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onOpenQR: () => void;
  onToggleMatrixRain: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  accent,
  onSelectAccent,
  onToggleTheme,
  onOpenTerminal,
  onOpenResume,
  onOpenQR,
  onToggleMatrixRain,
}) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [soundOn, setSoundOn] = useState(() => soundFx.isEnabled());
  const [paletteOpen, setPaletteOpen] = useState(false);
  const paletteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        setPaletteOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'skills', 'projects', 'coding-stats', 'github', 'certifications', 'cyber-lab', 'education', 'contact'];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const nextState = soundFx.toggleSound();
    setSoundOn(nextState);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'coding-stats', label: 'DSA' },
    { id: 'github', label: 'GitHub' },
    { id: 'certifications', label: 'Certs' },
    { id: 'cyber-lab', label: 'Lab' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        isDark
          ? 'bg-[#0a0e18]/85 border-b border-[#262a35]/60 text-[#dfe2f1]'
          : 'bg-[#f8fafc]/90 border-b border-slate-200 text-slate-800'
      } backdrop-blur-xl shadow-lg`}
    >
      <div className="h-16 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a href="#hero" className="flex items-center gap-2 group shrink-0 whitespace-nowrap">
            <img
              src={ASSETS.logo}
              alt="Aman Sah Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105 shrink-0"
            />
            <span
              className={`font-bold text-base sm:text-lg lg:text-xl tracking-tight transition-colors whitespace-nowrap ${
                isDark ? 'text-[#dfe2f1] group-hover:text-[#4cd7f6]' : 'text-slate-900 group-hover:text-cyan-600'
              }`}
            >
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Available for Hire Pill - only on very wide screens so it never crowds the brand */}
          <div
            className={`hidden 2xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium shrink-0 whitespace-nowrap ${
              isDark
                ? 'bg-[#262a35]/80 text-[#4edea3] border border-[#4edea3]/20'
                : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse shrink-0"></span>
            <span className="uppercase text-[10px] tracking-wider font-semibold whitespace-nowrap">Available for Hire</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 2xl:gap-5 shrink">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            const isSecondary = link.id === 'github' || link.id === 'education' || link.id === 'certifications';
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-xs xl:text-sm font-medium transition-all whitespace-nowrap px-1.5 xl:px-2 py-1 rounded-md ${
                  isSecondary ? 'hidden 2xl:inline-block' : 'inline-block'
                } ${
                  isActive
                    ? isDark
                      ? 'text-[#4cd7f6] font-semibold bg-[#1c1f2a]/70'
                      : 'text-cyan-600 font-semibold bg-cyan-50'
                    : isDark
                    ? 'text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#1c1f2a]/40'
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right utility buttons */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Quick Resume Button */}
          <button
            id="nav-resume-btn"
            onClick={() => {
              soundFx.playClick(800);
              onOpenResume();
            }}
            className={`hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors shrink-0 ${
              isDark
                ? 'bg-[#1c1f2a] text-[#4cd7f6] hover:bg-[#262a35] border border-[#4cd7f6]/30'
                : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200'
            }`}
            title="View & Download Resume"
          >
            <Briefcase size={14} />
            <span>Resume</span>
          </button>

          {/* Quick QR VCard Button */}
          <button
            onClick={() => {
              soundFx.playClick(750);
              onOpenQR();
            }}
            aria-label="Scan vCard QR Code"
            className={`hidden sm:flex w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg items-center justify-center transition-colors shrink-0 ${
              isDark
                ? 'bg-[#1c1f2a] text-[#4edea3] hover:bg-[#262a35] border border-[#4edea3]/30'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
            title="Scan / Save Contact QR"
          >
            <QrCode size={16} />
          </button>

          {/* Matrix Rain Easter Egg Button */}
          <button
            onClick={() => {
              soundFx.playChime();
              onToggleMatrixRain();
            }}
            aria-label="Toggle Matrix Rain Mode"
            className={`hidden xl:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors shrink-0 ${
              isDark
                ? 'bg-[#1c1f2a] text-[#4edea3] hover:bg-[#262a35] border border-[#4edea3]/30'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
            }`}
            title="Toggle Iconic Matrix Digital Rain"
          >
            <Sparkles size={13} className="text-[#4edea3]" />
            <span>Matrix</span>
          </button>

          {/* Cyber Audio Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            aria-label="Toggle Sound Effects"
            className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
              soundOn
                ? 'bg-[#4edea3]/20 text-[#4edea3] border border-[#4edea3]/40'
                : isDark
                ? 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35]'
                : 'bg-slate-100 text-slate-500 hover:text-slate-800'
            }`}
            title={soundOn ? 'Cyber SFX Active (Click to Mute)' : 'Sound Muted (Click to Enable Cyber SFX)'}
          >
            {soundOn ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* Accent Color Customizer Dropdown */}
          <div className="relative shrink-0" ref={paletteRef}>
            <button
              onClick={() => {
                soundFx.playClick(700);
                setPaletteOpen(!paletteOpen);
              }}
              aria-label="Accent Palette"
              className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                paletteOpen
                  ? 'bg-[#4cd7f6]/20 text-[#4cd7f6] border border-[#4cd7f6]/40'
                  : isDark
                  ? 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35]'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title="Cyber Accent Color"
            >
              <Palette size={16} />
            </button>

            {paletteOpen && (
              <div
                className={`absolute right-0 mt-2 p-2 rounded-xl border shadow-xl flex flex-col gap-1 z-50 min-w-[140px] animate-fadeIn ${
                  isDark ? 'bg-[#171b26] border-[#313540]' : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono font-bold text-[#bcc9cd] px-2 py-1 uppercase">
                  Accent Theme
                </div>
                {[
                  { id: 'emerald', label: 'Matrix Emerald', color: '#4edea3' },
                  { id: 'cyan', label: 'Electric Cyan', color: '#4cd7f6' },
                  { id: 'violet', label: 'Quantum Violet', color: '#a78bfa' },
                  { id: 'amber', label: 'Solar Amber', color: '#fbbf24' },
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      soundFx.playClick(950);
                      onSelectAccent(p.id as 'emerald' | 'cyan' | 'violet' | 'amber');
                      setPaletteOpen(false);
                    }}
                    className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs font-mono transition-colors text-left ${
                      accent === p.id
                        ? isDark ? 'bg-[#262a35] text-white font-bold' : 'bg-slate-100 text-slate-900 font-bold'
                        : isDark ? 'hover:bg-[#1c1f2a] text-[#bcc9cd]' : 'hover:bg-slate-50 text-slate-600'
                    }`}
                  >
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                    <span>{p.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark / Light Mode Toggle */}
          <button
            id="theme-toggle-btn"
            onClick={() => {
              soundFx.playClick(650);
              onToggleTheme();
            }}
            aria-label="Toggle theme mode"
            className={`w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
              isDark
                ? 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35]'
                : 'bg-slate-100 text-slate-600 hover:text-cyan-600 hover:bg-slate-200'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* GitHub Icon Link */}
          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick(850)}
            aria-label="GitHub Profile"
            className={`hidden sm:flex w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg items-center justify-center transition-colors shrink-0 ${
              isDark
                ? 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35]'
                : 'bg-slate-100 text-slate-600 hover:text-cyan-600 hover:bg-slate-200'
            }`}
            title="GitHub Profile"
          >
            <Code2 size={17} />
          </a>

          {/* Terminal CLI Modal Launcher */}
          <button
            id="nav-terminal-btn"
            onClick={onOpenTerminal}
            aria-label="Interactive Terminal (Ctrl+K)"
            className={`px-2 sm:px-2.5 h-8.5 sm:h-9 rounded-lg flex items-center gap-1.5 transition-colors shrink-0 ${
              isDark
                ? 'bg-[#1c1f2a] text-[#bcc9cd] hover:text-[#4edea3] hover:bg-[#262a35] border border-[#313540]'
                : 'bg-slate-100 text-slate-600 hover:text-emerald-600 hover:bg-slate-200 border border-slate-200'
            }`}
            title="Open Interactive Shell (Ctrl+K)"
          >
            <Terminal size={16} />
            <span className="hidden xl:inline font-mono text-[10px] text-[#4edea3]">Ctrl+K</span>
          </button>

          {/* Avatar Thumbnail */}
          <a
            href="#about"
            className="relative rounded-full ring-2 ring-[#4cd7f6]/40 hover:ring-[#4cd7f6] transition-all shrink-0 hidden sm:block"
            title="Aman Sah - Profile"
          >
            <img
              src={ASSETS.avatar}
              alt="Aman Sah"
              className="w-8 h-8 rounded-full object-cover object-top"
            />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center shrink-0 ${
              isDark ? 'bg-[#1c1f2a] text-[#bcc9cd]' : 'bg-slate-100 text-slate-600'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className={`lg:hidden px-4 pt-2 pb-4 border-t ${
            isDark ? 'bg-[#0a0e18] border-[#262a35]' : 'bg-white border-slate-200'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? isDark
                      ? 'bg-[#1c1f2a] text-[#4cd7f6] font-semibold'
                      : 'bg-cyan-50 text-cyan-600 font-semibold'
                    : isDark
                    ? 'text-[#bcc9cd] hover:bg-[#1c1f2a]'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-mono text-[#4cd7f6] bg-[#1c1f2a] mt-1"
            >
              <Briefcase size={16} />
              <span>Download / View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
