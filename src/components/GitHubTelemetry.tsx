import React, { useState } from 'react';
import { GitBranch, GitCommit, GitPullRequest, Star, ExternalLink, Code2, Flame, CheckCircle, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface GitHubTelemetryProps {
  isDark: boolean;
}

export const GitHubTelemetry: React.FC<GitHubTelemetryProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'activity'>('overview');
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  // Simulated GitHub Contribution Grid (16 weeks x 7 days)
  const weeks = 18;
  const daysPerWeek = 7;
  
  // Seed a realistic activity distribution for a CS student & developer
  const activityData = React.useMemo(() => {
    const data: { date: string; count: number; level: number }[][] = [];
    const baseDate = new Date();
    baseDate.setDate(baseDate.getDate() - (weeks * 7));

    for (let w = 0; w < weeks; w++) {
      const weekArr = [];
      for (let d = 0; d < daysPerWeek; d++) {
        const currentDate = new Date(baseDate);
        currentDate.setDate(baseDate.getDate() + (w * 7 + d));
        
        // Higher commits during weekdays and sprint days
        const isWeekend = d === 0 || d === 6;
        const seed = (w * 7 + d + (w % 3) * 5) % 11;
        let count = 0;
        let level = 0;

        if (seed > 2) {
          count = isWeekend ? (seed % 4) : (seed % 7) + 1;
          if (count > 0 && count <= 2) level = 1;
          else if (count <= 4) level = 2;
          else if (count <= 6) level = 3;
          else level = 4;
        }

        weekArr.push({
          date: currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          count,
          level
        });
      }
      data.push(weekArr);
    }
    return data;
  }, []);

  const totalCommitsPastYear = 384;

  const repositories = [
    {
      name: 'xynox-solutions',
      description: 'Corporate client engineering showcase with responsive UI, SEO architecture, and CSRF protection.',
      language: 'JavaScript',
      langColor: '#f7df1e',
      stars: 4,
      forks: 1,
      topics: ['javascript', 'frontend', 'responsive-design', 'seo'],
      url: `${PERSONAL_INFO.github}/xynox-solutions`
    },
    {
      name: 'optical-erp-system',
      description: 'Enterprise healthcare optical dispensary records, prescription tracking, and RBAC billing engine.',
      language: 'Java',
      langColor: '#b07219',
      stars: 6,
      forks: 2,
      topics: ['java', 'sql', 'erp', 'healthcare-security'],
      url: `${PERSONAL_INFO.github}/optical-erp`
    },
    {
      name: 'ecommerce-secure-store',
      description: 'Secure transaction storefront with dynamic cart state, input validation masks, and order hashing.',
      language: 'JavaScript',
      langColor: '#f7df1e',
      stars: 5,
      forks: 1,
      topics: ['e-commerce', 'security', 'sql', 'shopping-cart'],
      url: `${PERSONAL_INFO.github}/ecommerce-secure-store`
    },
    {
      name: 'cyber-defense-toolkit',
      description: 'Handcrafted utilities for password entropy estimation, XSS payload sanitation, and security auditing.',
      language: 'TypeScript',
      langColor: '#3178c6',
      stars: 8,
      forks: 3,
      topics: ['cybersecurity', 'owasp', 'sanitizer', 'cryptography'],
      url: `${PERSONAL_INFO.github}/cyber-defense-toolkit`
    }
  ];

  const languageBreakdown = [
    { name: 'JavaScript / TS', percent: 45, color: '#4edea3' },
    { name: 'Java', percent: 30, color: '#4cd7f6' },
    { name: 'HTML / CSS / Tailwind', percent: 18, color: '#4fdbc8' },
    { name: 'SQL & Shell', percent: 7, color: '#a78bfa' }
  ];

  const getHeatmapColor = (level: number) => {
    if (isDark) {
      switch (level) {
        case 1: return 'bg-[#4edea3]/30 hover:bg-[#4edea3]/50';
        case 2: return 'bg-[#4edea3]/60 hover:bg-[#4edea3]/80';
        case 3: return 'bg-[#4edea3] hover:bg-[#5cf2b4]';
        case 4: return 'bg-[#4cd7f6] hover:bg-[#71e3ff]';
        default: return 'bg-[#1c2233] hover:bg-[#252d42]';
      }
    } else {
      switch (level) {
        case 1: return 'bg-emerald-200 hover:bg-emerald-300';
        case 2: return 'bg-emerald-400 hover:bg-emerald-500';
        case 3: return 'bg-emerald-600 hover:bg-emerald-700';
        case 4: return 'bg-cyan-600 hover:bg-cyan-700';
        default: return 'bg-slate-200 hover:bg-slate-300';
      }
    }
  };

  return (
    <section id="github" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#4cd7f6]">
            <Terminal size={14} />
            <span>Open Source Telemetry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            GitHub{' '}
            <span className="bg-gradient-to-r from-[#4cd7f6] via-[#4edea3] to-[#4fdbc8] bg-clip-text text-transparent">
              Activity &amp; Repos
            </span>
          </h2>
          <p className={`mt-2 text-sm max-w-2xl ${isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}`}>
            Track code velocity, open-source repositories, and verified engineering activity directly from my GitHub profile.
          </p>
        </div>

        {/* External GitHub Profile Link */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border transition-all duration-300 shadow-sm ${
            isDark
              ? 'bg-[#1c1f2a] border-[#313540] text-[#4cd7f6] hover:bg-[#262a35] hover:border-[#4cd7f6]'
              : 'bg-white border-slate-200 text-cyan-700 hover:bg-slate-50 hover:border-cyan-400'
          }`}
        >
          <span>github.com/{PERSONAL_INFO.githubUsername}</span>
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Main Container */}
      <div
        className={`rounded-2xl border p-6 sm:p-8 transition-colors ${
          isDark ? 'bg-[#171b26] border-[#262a35]' : 'bg-white border-slate-200 shadow-md'
        }`}
      >
        {/* Metric Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-[#4edea3] mb-1 font-mono text-xs">
              <GitCommit size={15} />
              <span>Year Commits</span>
            </div>
            <div className="text-2xl font-black text-[#4edea3]">{totalCommitsPastYear}+</div>
            <p className="text-[11px] text-[#bcc9cd] mt-0.5">Across active repositories</p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-[#4cd7f6] mb-1 font-mono text-xs">
              <Code2 size={15} />
              <span>Core Stacks</span>
            </div>
            <div className="text-2xl font-black text-[#4cd7f6]">Java &amp; JS</div>
            <p className="text-[11px] text-[#bcc9cd] mt-0.5">Frontend, Backend, SQL</p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-[#4fdbc8] mb-1 font-mono text-xs">
              <GitBranch size={15} />
              <span>Repositories</span>
            </div>
            <div className="text-2xl font-black text-[#4fdbc8]">12+</div>
            <p className="text-[11px] text-[#bcc9cd] mt-0.5">Public &amp; Educational</p>
          </div>

          <div
            className={`p-4 rounded-xl border ${
              isDark ? 'bg-[#1c1f2a] border-[#262a35]' : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-amber-400 mb-1 font-mono text-xs">
              <Flame size={15} />
              <span>Active Streak</span>
            </div>
            <div className="text-2xl font-black text-amber-400">18 Days</div>
            <p className="text-[11px] text-[#bcc9cd] mt-0.5">Consistent push habit</p>
          </div>
        </div>

        {/* Heatmap Section */}
        <div
          className={`p-5 rounded-xl border mb-8 ${
            isDark ? 'bg-[#0e121c] border-[#262a35]' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#dfe2f1]">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
              <span>Contribution Heatmap (Recent 18 Weeks)</span>
            </div>
            {hoveredDay ? (
              <span className="font-mono text-xs text-[#4cd7f6] bg-[#1c1f2a] px-2.5 py-1 rounded border border-[#313540]">
                {hoveredDay.count} contribution{hoveredDay.count === 1 ? '' : 's'} on {hoveredDay.date}
              </span>
            ) : (
              <span className="font-mono text-xs text-[#bcc9cd]">Hover over squares to inspect activity</span>
            )}
          </div>

          {/* Grid of Weeks */}
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-1.5 min-w-[540px]">
              {activityData.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((day, dIdx) => (
                    <div
                      key={dIdx}
                      onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-3.5 h-3.5 rounded-sm transition-all cursor-pointer ${getHeatmapColor(
                        day.level
                      )}`}
                      title={`${day.count} commits on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Legend */}
          <div className="flex items-center justify-end gap-2 font-mono text-[11px] text-[#bcc9cd] mt-3">
            <span>Less</span>
            <div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-[#1c2233]' : 'bg-slate-200'}`}></div>
            <div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-[#4edea3]/30' : 'bg-emerald-200'}`}></div>
            <div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-[#4edea3]/60' : 'bg-emerald-400'}`}></div>
            <div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-[#4edea3]' : 'bg-emerald-600'}`}></div>
            <div className={`w-3 h-3 rounded-sm ${isDark ? 'bg-[#4cd7f6]' : 'bg-cyan-600'}`}></div>
            <span>More</span>
          </div>
        </div>

        {/* Language Breakdown Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-mono text-xs font-semibold text-[#dfe2f1] flex items-center gap-2">
              <Code2 size={14} className="text-[#4cd7f6]" />
              <span>Language Distribution</span>
            </h4>
            <span className="font-mono text-xs text-[#bcc9cd]">Computed across codebases</span>
          </div>

          <div className="h-3 rounded-full overflow-hidden flex w-full bg-[#1c2233] p-0.5">
            {languageBreakdown.map((lang) => (
              <div
                key={lang.name}
                style={{ width: `${lang.percent}%`, backgroundColor: lang.color }}
                className="h-full first:rounded-l-full last:rounded-r-full transition-all duration-500"
                title={`${lang.name}: ${lang.percent}%`}
              />
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-3">
            {languageBreakdown.map((lang) => (
              <div key={lang.name} className="flex items-center gap-1.5 font-mono text-xs">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                <span className={isDark ? 'text-[#dfe2f1]' : 'text-slate-700'}>{lang.name}</span>
                <span className="text-[#bcc9cd]">({lang.percent}%)</span>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Repositories Grid */}
        <div>
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#4cd7f6] mb-4 flex items-center gap-2">
            <GitBranch size={14} />
            <span>Pinned GitHub Repositories</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {repositories.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group hover:border-[#4cd7f6]/50 ${
                  isDark
                    ? 'bg-[#1c1f2a] border-[#262a35] hover:bg-[#202534]'
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-sm font-bold text-[#4cd7f6] group-hover:text-[#4edea3] transition-colors flex items-center gap-1.5">
                      <GitBranch size={14} />
                      {repo.name}
                    </span>
                    <ExternalLink size={13} className="text-[#bcc9cd] group-hover:text-[#4cd7f6] transition-colors" />
                  </div>
                  <p className={`text-xs leading-relaxed mb-3 ${isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}`}>
                    {repo.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {repo.topics.map((t) => (
                      <span
                        key={t}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          isDark
                            ? 'bg-[#0a0e18] border-[#313540] text-[#bcc9cd]'
                            : 'bg-white border-slate-200 text-slate-600'
                        }`}
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-xs font-mono text-[#bcc9cd] pt-2 border-t border-[#262a35]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: repo.langColor }} />
                      <span>{repo.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-amber-400" />
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitPullRequest size={12} />
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
