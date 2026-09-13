import React, { useState } from 'react';
import { 
  Code2, 
  Monitor, 
  Wrench, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { SkillCategory } from '../types';

interface SkillsProps {
  isDark: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const [activeFilter, setActiveFilter] = useState<SkillCategory>('all');

  const filterOptions: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Dev' },
    { id: 'tools', label: 'Tools' },
    { id: 'security', label: 'CyberSec' },
  ];

  const filteredGroups = activeFilter === 'all'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((group) => group.category === activeFilter);

  const getIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return <Code2 size={26} />;
      case 'web-development':
        return <Monitor size={26} />;
      case 'tools-workflow':
        return <Wrench size={26} />;
      case 'cybersecurity':
        return <Lock size={26} />;
      default:
        return <Code2 size={26} />;
    }
  };

  return (
    <section
      id="skills"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Header and Filter Row */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4edea3] uppercase tracking-wider">
              // 02. CAPABILITIES MATRIX
            </span>
            <div className="h-0.5 w-12 bg-[#4edea3]/40 rounded-full"></div>
          </div>
          <h2
            id="skills-title"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
            }`}
          >
            Technical Arsenal
          </h2>
          <p
            className={`text-base sm:text-lg ${
              isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
            }`}
          >
            Battle-tested toolkits across programming, development, tooling, and cybersecurity.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          id="skills-filter-bar"
          className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-lg border self-start md:self-auto ${
            isDark
              ? 'bg-[#262a35] border-[#313540]'
              : 'bg-slate-100 border-slate-200'
          }`}
        >
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                id={`filter-btn-${filter.id}`}
                onClick={() => setActiveFilter(filter.id)}
                type="button"
                className={`px-3.5 py-1.5 rounded-md font-mono text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-[#4cd7f6] text-[#003640] shadow-sm'
                    : isDark
                    ? 'text-[#bcc9cd] hover:text-[#dfe2f1] hover:bg-[#313540]/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div
        id="skills-grid"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filteredGroups.map((group) => (
          <div
            key={group.id}
            id={`skill-card-${group.id}`}
            className={`flex flex-col justify-between p-6 rounded-xl shadow-md border transition-all duration-300 hover:scale-[1.01] ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35] hover:bg-[#262a35] hover:border-[#4cd7f6]/30 shadow-black/20'
                : 'bg-white border-slate-200 shadow-slate-100 hover:border-cyan-300 hover:shadow-cyan-50'
            }`}
          >
            <div className="flex flex-col gap-4">
              {/* Category Icon */}
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isDark ? 'bg-[#262a35]' : 'bg-slate-100'
                } ${group.iconColor}`}
              >
                {getIcon(group.id)}
              </div>

              {/* Title & Subtitle */}
              <div className="flex flex-col">
                <h3
                  className={`text-xl font-bold ${
                    isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
                  }`}
                >
                  {group.title}
                </h3>
                <span
                  className={`font-mono text-xs ${
                    isDark ? 'text-[#bcc9cd]' : 'text-slate-500'
                  }`}
                >
                  {group.subtitle}
                </span>
              </div>

              {/* Progress Bars List */}
              <div className="flex flex-col gap-3.5 pt-2">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5">
                    <div className="flex justify-between font-mono text-xs">
                      <span className={isDark ? 'text-[#dfe2f1]' : 'text-slate-800'}>
                        {skill.name}
                      </span>
                      <span className="font-semibold text-[#4cd7f6]">
                        {skill.percentage}%
                      </span>
                    </div>
                    {/* Track */}
                    <div
                      className={`w-full h-1.5 rounded-full overflow-hidden ${
                        isDark ? 'bg-[#0a0e18]' : 'bg-slate-100'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full transition-all duration-700 ease-out ${skill.colorClass}`}
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges footer */}
            <div className="mt-6 pt-4 flex flex-wrap gap-1.5 border-t border-dashed border-[#262a35]/60">
              {group.badges.map((badge) => {
                const isHighlight = badge.includes('•');
                return (
                  <span
                    key={badge}
                    className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-medium flex items-center gap-1 ${
                      isHighlight
                        ? isDark
                          ? 'bg-[#262a35] text-[#4edea3] border border-[#4edea3]/30'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : isDark
                        ? 'bg-[#262a35] text-[#bcc9cd]'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isHighlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse"></span>
                    )}
                    {badge.replace('• ', '')}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
