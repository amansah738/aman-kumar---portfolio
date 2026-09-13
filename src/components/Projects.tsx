import React, { useState } from 'react';
import { 
  Building2, 
  ShoppingCart, 
  Eye, 
  ExternalLink, 
  Code2, 
  Info,
  Filter,
  Search,
  Check
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { soundFx } from '../utils/audio';

interface ProjectsProps {
  isDark: boolean;
  onSelectProject: (project: ProjectItem) => void;
  onShowToast: (msg: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  isDark,
  onSelectProject,
  onShowToast,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web & Frontend' },
    { id: 'backend', label: 'Backend & Java' },
    { id: 'security', label: 'Security & ERP' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    // Category match
    const matchesCategory = 
      activeCategory === 'all' ||
      (activeCategory === 'web' && (p.id === 'xynox-solutions' || p.id === 'e-commerce-store')) ||
      (activeCategory === 'backend' && p.id === 'optical-erp') ||
      (activeCategory === 'security' && (p.id === 'optical-erp' || p.id === 'e-commerce-store'));

    // Search query match
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = 
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.categoryTag.toLowerCase().includes(q) ||
      p.tags.some(t => t.label.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 size={18} />;
      case 'ShoppingCart':
        return <ShoppingCart size={18} />;
      case 'Eye':
        return <Eye size={18} />;
      default:
        return <Building2 size={18} />;
    }
  };

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-[#4cd7f6] uppercase tracking-wider">
              // 03. PRODUCTION CODE
            </span>
            <div className="h-0.5 w-12 bg-[#4cd7f6]/40 rounded-full"></div>
          </div>
          <h2
            id="projects-title"
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              isDark ? 'text-[#dfe2f1]' : 'text-slate-900'
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-base max-w-2xl ${
              isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
            }`}
          >
            Demonstrating end-to-end development, responsive design, and secure architecture across varied domains.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#bcc9cd]" />
          <input
            type="text"
            placeholder="Search by tech or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono border transition-colors outline-none ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35] text-[#dfe2f1] focus:border-[#4cd7f6]'
                : 'bg-white border-slate-200 text-slate-800 focus:border-cyan-500'
            }`}
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        <span className="text-xs font-mono text-[#bcc9cd] flex items-center gap-1 mr-1">
          <Filter size={13} />
          <span>Filter:</span>
        </span>
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                soundFx.playClick(850);
                setActiveCategory(cat.id);
              }}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-semibold border transition-all duration-200 shrink-0 ${
                isActive
                  ? isDark
                    ? 'bg-[#4cd7f6] text-[#0a0e18] border-[#4cd7f6] shadow-md shadow-cyan-950/40'
                    : 'bg-cyan-600 text-white border-cyan-600 shadow-md'
                  : isDark
                  ? 'bg-[#171b26] border-[#262a35] text-[#bcc9cd] hover:border-[#313540] hover:text-[#dfe2f1]'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            id={`project-card-${project.id}`}
            className={`group flex flex-col justify-between rounded-xl shadow-md border transition-all duration-300 overflow-hidden ${
              isDark
                ? 'bg-[#1c1f2a] border-[#262a35] hover:border-[#4cd7f6]/40 hover:bg-[#262a35]/60 hover:shadow-cyan-950/30'
                : 'bg-white border-slate-200 shadow-slate-100 hover:border-cyan-400 hover:shadow-lg'
            }`}
          >
            {/* Visual Top Header Box */}
            <div
              className={`relative h-48 p-5 flex flex-col justify-between overflow-hidden border-b ${
                isDark
                  ? 'bg-[#262a35] border-[#313540]'
                  : 'bg-slate-100 border-slate-200'
              }`}
            >
              {/* Image Preview Background (if available) */}
              {project.image && (
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top filter brightness-75 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                    loading="lazy"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isDark
                        ? 'bg-gradient-to-t from-[#1c1f2a] via-[#1c1f2a]/70 to-black/40'
                        : 'bg-gradient-to-t from-white via-white/80 to-slate-900/30'
                    }`}
                  />
                </div>
              )}

              <div className="flex items-center justify-between z-10">
                <span
                  className={`font-mono text-xs px-2.5 py-1 rounded font-semibold border backdrop-blur-md shadow-sm ${
                    isDark
                      ? 'bg-[#0a0e18]/90 border-[#313540] ' + project.tagColor
                      : 'bg-white/95 border-slate-200 text-slate-900'
                  }`}
                >
                  {project.categoryTag}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md shadow-sm ${
                    isDark
                      ? 'bg-[#1c1f2a]/90 text-[#4edea3]'
                      : 'bg-white/95 text-emerald-600'
                  }`}
                >
                  {getProjectIcon(project.icon)}
                </div>
              </div>

              <div className="z-10">
                <h3
                  className={`text-xl font-bold transition-colors ${
                    isDark ? 'text-[#dfe2f1] group-hover:text-[#4cd7f6]' : 'text-slate-900 group-hover:text-cyan-600'
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`font-mono text-xs ${
                    isDark ? 'text-[#bcc9cd]' : 'text-slate-700 font-medium'
                  }`}
                >
                  {project.subtitle}
                </p>
              </div>

              {/* Decorative radial blur in background */}
              {!project.image && (
                <div
                  className={`absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-gradient-to-br ${project.accentGlow} blur-2xl group-hover:scale-125 transition-transform duration-500`}
                ></div>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col justify-between flex-grow gap-4">
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-[#bcc9cd]' : 'text-slate-600'
                }`}
              >
                {project.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`px-2.5 py-0.5 rounded font-mono text-xs ${
                      tag.highlight
                        ? isDark
                          ? 'bg-[#262a35] text-[#4edea3] border border-[#4edea3]/20 font-semibold'
                          : 'bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold'
                        : isDark
                        ? 'bg-[#262a35] text-[#dfe2f1]'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>

              {/* Case Study Quick Link Button */}
              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className={`w-full py-1.5 px-3 rounded-lg font-mono text-xs flex items-center justify-center gap-1.5 transition-colors ${
                  isDark
                    ? 'bg-[#0a0e18] text-[#bcc9cd] hover:text-[#4cd7f6] hover:bg-[#262a35]'
                    : 'bg-slate-50 text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                }`}
              >
                <Info size={14} />
                <span>View Architecture &amp; Security Specs</span>
              </button>

              {/* Card Action Buttons */}
              <div className="flex items-center gap-2.5 pt-2 mt-auto">
                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#4cd7f6] text-[#003640] font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors shadow-sm"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={14} />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    onShowToast(`Opening ${project.title} repository`);
                  }}
                  className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg font-mono text-xs font-semibold transition-colors border ${
                    isDark
                      ? 'bg-[#262a35] text-[#dfe2f1] hover:text-[#4cd7f6] hover:bg-[#313540] border-[#313540]'
                      : 'bg-white text-slate-800 hover:text-cyan-600 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <span>GitHub</span>
                  <Code2 size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className={`text-center py-16 rounded-2xl border ${
          isDark ? 'bg-[#171b26] border-[#262a35]' : 'bg-slate-50 border-slate-200'
        }`}>
          <p className="font-mono text-sm text-[#bcc9cd] mb-3">No matching projects found for &quot;{searchQuery}&quot;</p>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick(600);
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded-xl bg-[#4cd7f6] text-[#0a0e18] font-mono text-xs font-bold hover:bg-[#38bdf8] transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </section>
  );
};
