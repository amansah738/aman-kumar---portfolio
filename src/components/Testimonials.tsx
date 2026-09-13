import React from 'react';
import { Quote, Star, CheckCircle, Award } from 'lucide-react';

interface TestimonialsProps {
  isDark: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  const endorsements = [
    {
      name: 'Priya Sharma',
      role: 'Project Partner & Fellow Researcher',
      org: 'Galgotias University Hackathon Team',
      text: 'Aman was the backbone of our web security architecture. His ability to deliver clean responsive interfaces with zero CSRF or injection flaws within tight hackathon deadlines was phenomenal.',
      avatar: 'PS',
      accentColor: 'text-[#4cd7f6]',
      badge: 'Hackathon Collaborator'
    },
    {
      name: 'Dr. R. K. Verma',
      role: 'Assistant Professor & Lab Mentor',
      org: 'School of Computing Science & Engineering',
      text: 'Aman stands out for his deep curiosity in network defense and disciplined coding habits. His consistent problem-solving across LeetCode and Cisco certifications reflects true engineering rigor.',
      avatar: 'RV',
      accentColor: 'text-[#4edea3]',
      badge: 'Academic Mentor'
    },
    {
      name: 'Rohit Patel',
      role: 'Full-Stack Collaborator',
      org: 'Optical ERP Software Team',
      text: 'Working with Aman on the Optical ERP system was effortless. He structured our Java backend models and SQL queries with solid prepared statements and role-based access control.',
      avatar: 'RP',
      accentColor: 'text-[#a78bfa]',
      badge: 'Production Peer'
    }
  ];

  return (
    <section id="endorsements" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2 font-mono text-xs uppercase tracking-widest text-[#a78bfa]">
            <Award size={14} />
            <span>Peer Endorsements &amp; Recommendations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Academic &amp;{' '}
            <span className="bg-gradient-to-r from-[#a78bfa] via-[#4cd7f6] to-[#4edea3] bg-clip-text text-transparent">
              Collaborator Reviews
            </span>
          </h2>
          <p className={`mt-2 text-sm max-w-2xl ${isDark ? 'text-[#bcc9cd]' : 'text-slate-600'}`}>
            What mentors, project partners, and engineering peers say about my technical dedication, security rigor, and delivery speed.
          </p>
        </div>

        <div className="flex items-center gap-1 text-amber-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
          <span className="font-mono text-xs text-[#bcc9cd] ml-1.5">5.0 Star Team Work</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {endorsements.map((item, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:scale-[1.01] ${
              isDark
                ? 'bg-[#171b26] border-[#262a35] hover:border-[#4cd7f6]/40 hover:shadow-lg hover:shadow-cyan-950/20'
                : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Quote size={24} className={item.accentColor} />
                <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full border border-white/10 bg-black/20 text-[#4edea3]">
                  {item.badge}
                </span>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 italic ${
                isDark ? 'text-[#dfe2f1]' : 'text-slate-700'
              }`}>
                &ldquo;{item.text}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className={`w-10 h-10 rounded-full font-mono text-xs font-bold flex items-center justify-center shrink-0 border ${
                isDark ? 'bg-[#1c2233] border-[#313540] text-[#4cd7f6]' : 'bg-cyan-50 border-cyan-200 text-cyan-700'
              }`}>
                {item.avatar}
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-sm text-[#dfe2f1] truncate">{item.name}</h4>
                <p className="text-[11px] text-[#bcc9cd] truncate">{item.role}</p>
                <p className="text-[10px] text-[#869397] font-mono truncate">{item.org}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
