import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CodingStats } from './components/CodingStats';
import { ProjectEstimator } from './components/ProjectEstimator';
import { GitHubTelemetry } from './components/GitHubTelemetry';
import { Certifications } from './components/Certifications';
import { CyberPlayground } from './components/CyberPlayground';
import { Timeline } from './components/Timeline';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { ContactQRCodeModal } from './components/ContactQRCodeModal';
import { MatrixRain } from './components/MatrixRain';
import { Toast } from './components/Toast';
import { ProjectItem } from './types';
import { soundFx } from './utils/audio';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [accent, setAccent] = useState<'emerald' | 'cyan' | 'violet' | 'amber'>('emerald');
  const [matrixRainActive, setMatrixRainActive] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [toastInfo, setToastInfo] = useState<{ message: string | null; type: 'success' | 'alert' | 'info' }>({
    message: null,
    type: 'success',
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme-accent', accent);
  }, [accent]);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.className = 'bg-[#0f131d] text-[#dfe2f1] antialiased selection:bg-[#06b6d4]/30 selection:text-[#4cd7f6]';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.className = 'bg-[#f8fafc] text-slate-800 antialiased selection:bg-cyan-200 selection:text-cyan-900';
    }
  }, [isDark]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string, type: 'success' | 'alert' | 'info' = 'success') => {
    setToastInfo({ message, type });
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    showToast(!isDark ? 'Obsidian Terminal Dark Mode engaged' : 'Cyber Light Mode active', 'info');
  };

  return (
    <div
      className={`min-h-screen relative flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-[#0f131d] tech-grid-pattern' : 'bg-[#f8fafc] tech-grid-pattern-light'
      }`}
    >
      {/* Top Fixed Navigation */}
      <Navbar
        isDark={isDark}
        accent={accent}
        onSelectAccent={(newAccent) => {
          setAccent(newAccent);
          showToast(`Cyber accent changed to ${newAccent.toUpperCase()}`, 'info');
        }}
        onToggleTheme={toggleTheme}
        onOpenTerminal={() => setTerminalModalOpen(true)}
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenQR={() => setQrModalOpen(true)}
        onToggleMatrixRain={() => {
          setMatrixRainActive(prev => !prev);
          showToast(!matrixRainActive ? '⚡ Matrix Code Rain Mode ENGAGED!' : 'Matrix Rain deactivated', 'info');
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-16 w-full">
        {/* Section 0: Hero */}
        <Hero
          isDark={isDark}
          onOpenResume={() => setResumeModalOpen(true)}
          onOpenTerminal={() => setTerminalModalOpen(true)}
        />

        {/* Section 1: About Me */}
        <About isDark={isDark} />

        {/* Section 2: Technical Arsenal (Skills) */}
        <Skills isDark={isDark} />

        {/* Section 3: Featured Projects */}
        <Projects
          isDark={isDark}
          onSelectProject={(project) => setSelectedProject(project)}
          onShowToast={(msg) => showToast(msg, 'info')}
        />

        {/* Section 3.2: Problem Solving & DSA Profiles */}
        <CodingStats isDark={isDark} />

        {/* Section 3.4: Interactive Project & Scope Estimator */}
        <ProjectEstimator isDark={isDark} />

        {/* Section 3.5: GitHub Activity & Telemetry */}
        <GitHubTelemetry isDark={isDark} />

        {/* Section 4: Accredited Certifications */}
        <Certifications isDark={isDark} />

        {/* Section 5: Cybersecurity Interactive Lab */}
        <CyberPlayground isDark={isDark} />

        {/* Section 6: Education & Academic Trajectory */}
        <Timeline isDark={isDark} />

        {/* Section 6.5: Peer & Academic Endorsements */}
        <Testimonials isDark={isDark} />

        {/* Section 6.8: Recruiter & Client FAQ */}
        <FAQ isDark={isDark} />

        {/* Section 7: Get In Touch (Contact) */}
        <Contact
          isDark={isDark}
          onShowToast={(msg, type) => showToast(msg, type === 'alert' ? 'alert' : 'success')}
          onOpenQR={() => setQrModalOpen(true)}
        />
      </main>

      {/* WhatsApp Floating Chat Button */}
      <WhatsAppButton isDark={isDark} />

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Interactive Modals */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        isDark={isDark}
        onShowToast={(msg) => showToast(msg, 'success')}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
        onShowToast={(msg) => showToast(msg, 'info')}
      />

      <InteractiveTerminalModal
        isOpen={terminalModalOpen}
        onClose={() => setTerminalModalOpen(false)}
        onOpenResume={() => {
          setTerminalModalOpen(false);
          setResumeModalOpen(true);
        }}
        isDark={isDark}
      />

      {/* Instant Contact vCard QR Modal */}
      <ContactQRCodeModal
        isOpen={qrModalOpen}
        onClose={() => setQrModalOpen(false)}
        isDark={isDark}
        onShowToast={(msg) => showToast(msg, 'success')}
      />

      {/* Iconic Matrix Digital Code Rain */}
      <MatrixRain
        isActive={matrixRainActive}
        onClose={() => setMatrixRainActive(false)}
        accentColor={accent === 'cyan' ? '#4cd7f6' : accent === 'violet' ? '#a78bfa' : accent === 'amber' ? '#fbbf24' : '#4edea3'}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastInfo.message}
        type={toastInfo.type}
        onClose={() => setToastInfo({ message: null, type: 'success' })}
      />
    </div>
  );
}
