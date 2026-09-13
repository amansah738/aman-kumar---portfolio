import React, { useState } from 'react';
import { 
  Trophy, 
  Cpu, 
  CheckCircle2, 
  Award, 
  Flame, 
  Terminal, 
  ExternalLink, 
  Layers, 
  Zap,
  TrendingUp,
  Brain
} from 'lucide-react';
import { soundFx } from '../utils/audio';

interface CodingStatsProps {
  isDark: boolean;
}

export const CodingStats: React.FC<CodingStatsProps> = ({ isDark }) => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const platforms = [
    {
      name: 'LeetCode',
      username: 'ak526387',
      profileUrl: 'https://leetcode.com/u/ak526387/',
      totalSolved: '160+',
      rank: 'Top 18%',
      badge: '50-Days Badge 2024',
      primaryColor: '#ffa116',
      icon: '⚡',
      breakdown: { easy: 80, medium: 70, hard: 10 }
    },
    {
      name: 'GeeksforGeeks',
      username: 'aman22scsu84l',
      profileUrl: 'https://www.geeksforgeeks.org/user/aman22scsu84l/',
      totalSolved: '85+',
      rank: 'Campus Rank 12',
      badge: 'POTD Specialist',
      primaryColor: '#2f8d46',
      icon: '🟢',
      breakdown: { easy: 45, medium: 35, hard: 5 }
    },
    {
      name: 'HackerRank',
      username: 'ak526387',
      profileUrl: 'https://www.hackerrank.com/profile/ak526387',
      totalSolved: '5★ Gold',
      rank: 'Java & SQL Certified',
      badge: 'Problem Solving 5-Star',
      primaryColor: '#00ea64',
      icon: '🛡️',
      breakdown: { easy: 40, medium: 25, hard: 5 }
    },
    {
      name: 'TryHackMe & CTF',
      username: 'ak526387',
      profileUrl: 'https://tryhackme.com/p/ak526387',
      totalSolved: '24 Rooms',
      rank: 'Top 12%',
      badge: 'Pre-Security & Web Fundamentals',
      primaryColor: '#dc2626',
      icon: '🏴‍☠️',
      breakdown: { easy: 12, medium: 10, hard: 2 }
    }
  ];

  const topics = [
    { name: 'Arrays & Hashing', solved: 62, total: 80, mastery: '85%' },
    { name: 'Two Pointers & Sliding Window', solved: 38, total: 50, mastery: '78%' },
    { name: 'Dynamic Programming', solved: 28, total: 45, mastery: '65%' },
    { name: 'Binary Trees & Graphs', solved: 34, total: 50, mastery: '70%' },
    { name: 'Binary Search', solved: 26, total: 35, mastery: '82%' },
    { name: 'SQL Schema & Joins', solved: 42, total: 50, mastery: '90%' },
    { name: 'Web Defense & Sanitization', solved: 22, total: 25, mastery: '92%' }
  ];

  const stats = [
    { label: 'Total Problems Solved', value: '280+', sub: 'Across 4 coding platforms', icon: Trophy, color: 'text-amber-400' },
    { label: 'Primary Language', value: 'Java & JS', sub: 'Core DSA & Algorithmic efficiency', icon: Cpu, color: 'text-[#4cd7f6]' },
    { label: 'Max Active Streak', value: '42 Days', sub: 'Consistent problem of the day', icon: Flame, color: 'text-[#4edea3]' },
    { label: 'Acceptance Rate', value: '78.4%', sub: 'First-try optimal time complexity', icon: TrendingUp, color: 'text-[#a78bfa]' },
  ];

  return (
    <section id="coding-stats" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#4edea3]">
            <Brain size={14} />
            <span>Algorithmic Rigor &amp; Problem Solving</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Data Structures &amp;{' '}
            <span className="bg-gradient-to-r from-[#4edea3] via-[#4cd7f6] to-[#a78bfa] bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>
          <p className={`mt-2 text-sm max-w-2xl ${isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}`}>
            Demonstrating algorithmic foundation, continuous competitive coding, and security problem-solving across leading platforms.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className={`px-3 py-1.5 rounded-xl font-mono text-xs border flex items-center gap-1.5 ${
            isDark ? 'bg-[#1c1f2a] border-[#313540] text-[#4edea3]' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <Zap size={13} className="animate-bounce text-[#4edea3]" />
            <span>Active DSA Daily Solver</span>
          </span>
        </div>
      </div>

      {/* Metrics Strip */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all duration-300 ${
                isDark ? 'bg-[#171b26] border-[#262a35] hover:border-[#4cd7f6]/40' : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs ${isDark ? 'text-[#bcc9cd]' : 'text-slate-500'}`}>{s.label}</span>
                <Icon size={18} className={s.color} />
              </div>
              <div className={`text-2xl sm:text-3xl font-black ${s.color}`}>{s.value}</div>
              <div className="text-[11px] text-[#bcc9cd] mt-1">{s.sub}</div>
            </div>
          );
        })}
      </div>

      {/* Platform Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundFx.playClick(900)}
            className={`group p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:scale-[1.02] ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35] hover:border-[#4cd7f6]/60 hover:shadow-lg hover:shadow-cyan-950/20'
                : 'bg-white border-slate-200 hover:border-cyan-400 hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">{platform.icon}</span>
                  <div>
                    <span className="font-bold text-sm text-[#dfe2f1] group-hover:text-[#4cd7f6] transition-colors block leading-tight">
                      {platform.name}
                    </span>
                    <span className="font-mono text-[11px] text-[#bcc9cd]">
                      @{platform.username}
                    </span>
                  </div>
                </div>
                <ExternalLink size={14} className="text-[#bcc9cd] group-hover:text-[#4cd7f6] transition-colors shrink-0" />
              </div>

              <div className="space-y-1 mb-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-2xl font-black text-[#4edea3]">{platform.totalSolved}</span>
                  <span className="font-mono text-xs text-[#bcc9cd]">{platform.rank}</span>
                </div>
                <div className="text-xs font-mono text-[#bcc9cd]">{platform.badge}</div>
              </div>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="pt-3 border-t border-[#262a35] space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono">
                <span className="text-emerald-400">Easy: {platform.breakdown.easy}</span>
                <span className="text-amber-400">Med: {platform.breakdown.medium}</span>
                <span className="text-rose-400">Hard: {platform.breakdown.hard}</span>
              </div>
              <div className="h-2 rounded-full bg-[#0a0e18] overflow-hidden flex">
                <div style={{ width: `${(platform.breakdown.easy / 150) * 100}%` }} className="bg-[#4edea3] h-full" />
                <div style={{ width: `${(platform.breakdown.medium / 150) * 100}%` }} className="bg-amber-400 h-full" />
                <div style={{ width: `${(platform.breakdown.hard / 150) * 100}%` }} className="bg-rose-400 h-full" />
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Topic Mastery Interactive Strip */}
      <div
        className={`p-6 rounded-2xl border ${
          isDark ? 'bg-[#171b26] border-[#262a35]' : 'bg-white border-slate-200 shadow-sm'
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Layers size={16} className="text-[#4cd7f6]" />
            <h3 className="font-bold text-base text-[#dfe2f1]">Key DSA &amp; Security Topic Proficiency</h3>
          </div>
          <span className="font-mono text-xs text-[#bcc9cd]">Click a topic to highlight depth</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topics.map((t) => {
            const isSelected = selectedTopic === t.name;
            return (
              <button
                key={t.name}
                type="button"
                onClick={() => {
                  soundFx.playClick(750);
                  setSelectedTopic(isSelected ? null : t.name);
                }}
                className={`p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? isDark
                      ? 'bg-[#1f2738] border-[#4cd7f6] ring-1 ring-[#4cd7f6]/40'
                      : 'bg-cyan-50 border-cyan-400 ring-1 ring-cyan-200'
                    : isDark
                    ? 'bg-[#1c1f2a] border-[#262a35] hover:border-[#313540]'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-semibold ${isSelected ? 'text-[#4cd7f6]' : 'text-[#dfe2f1]'}`}>
                    {t.name}
                  </span>
                  <span className="font-mono text-[11px] text-[#4edea3] font-bold">{t.mastery}</span>
                </div>

                <div className="space-y-1">
                  <div className="h-1.5 rounded-full bg-[#0a0e18] overflow-hidden">
                    <div
                      style={{ width: `${(t.solved / t.total) * 100}%` }}
                      className="h-full bg-gradient-to-r from-[#4edea3] to-[#4cd7f6] rounded-full"
                    />
                  </div>
                  <div className="flex justify-between font-mono text-[10px] text-[#bcc9cd]">
                    <span>{t.solved} solved</span>
                    <span>Goal: {t.total}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
