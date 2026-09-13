import { ProjectItem, SkillGroup } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1XCRBqUgy1VQEjmQHUtVdYiP-VfWGO1yfEVZ_9DKMZLmdpZmoJgiPPRyQDYQF8NBYoxYjPMQ59IKKHhgJ1LaK-35NX-hPhfrLeOQh4QSVDcv5EoXMZa0TzjhzuVZ74CWSpmiYtl_WxMH9LcQn6sjEjNDK7hQFDfF_8wi4mL4ZImC0NdnSRkzM_tN9bErAkhCtxR7jjypSE9JkjkBwVMHzWBXcS5ac5k92yvknjzT08V447T_4_beIY6',
  avatar: '/profile.jpg'
};

export const PERSONAL_INFO = {
  name: 'Aman Sah',
  roleTitle: 'Web Developer & Cybersecurity Enthusiast',
  role: 'Web Developer & Cybersecurity Enthusiast',
  tagline: 'Hello, World! I am',
  intro: 'Motivated B.Tech (Computer Science) student with strong foundation in programming and web development. Skilled in Java, JavaScript, and front-end technologies with hands-on experience in building real-world projects.',
  badge: '🛡️ Cyber-Secured | Web Craftsman | B.Tech CSE',
  status: 'Open to Internships & Roles',
  location: 'Muzaffarpur, Bihar / Greater Noida, UP',
  email: 'ak526387@gmail.com',
  phone: '+91 6206971738',
  github: 'https://github.com/amansah738',
  githubUser: 'github.com/amansah738',
  githubUsername: 'amansah738',
  linkedin: 'https://www.linkedin.com/in/aman-sah01',
  linkedinUser: 'linkedin.com/in/aman-sah01',
  portfolioUrl: 'https://amansah738.github.io/',
  availabilityStatus: 'Currently Available',
  availabilityNotice: 'Open for Full-Time, Remote & Internship opportunities worldwide.',
  resumePdf: '/Aman_Sah_Resume.pdf',
  codingProfiles: {
    leetcode: 'https://leetcode.com/u/ak526387/',
    gfg: 'https://www.geeksforgeeks.org/user/aman22scsu84l/',
    hackerrank: 'https://www.hackerrank.com/profile/ak526387',
    tryhackme: 'https://tryhackme.com/p/ak526387',
  }
};

export const STATS = [
  { label: 'Production Projects', value: '3+', color: 'text-[#4cd7f6]' },
  { label: 'OWASP Focus', value: '100%', color: 'text-[#4edea3]' },
  { label: 'Curiosity & Growth', value: '24/7', color: 'text-[#4fdbc8]' },
];

export const ABOUT_PILLARS = [
  {
    id: 'web-engineering',
    title: 'Web Engineering',
    description: 'Crafting intuitive, pixel-perfect, accessible user interfaces with clean semantic HTML, resilient styling, and dynamic state workflows.',
    icon: 'Layout',
    color: 'text-[#4cd7f6]',
  },
  {
    id: 'security-mindset',
    title: 'Security Mindset',
    description: 'Integrating strict sanitization, defense against XSS/CSRF, hardened authorization paradigms, and zero-trust principles into app workflows.',
    icon: 'ShieldCheck',
    color: 'text-[#4edea3]',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Deepening practical expertise across distributed systems, Linux system internals, network monitoring, and progressive web performance.',
    icon: 'Cpu',
    color: 'text-[#4fdbc8]',
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'programming',
    category: 'programming',
    title: 'Programming',
    subtitle: 'Core Logic & Algorithms',
    icon: 'Code2',
    iconColor: 'text-[#4cd7f6]',
    skills: [
      { name: 'Java', percentage: 85, colorClass: 'bg-[#4cd7f6]' },
      { name: 'JavaScript (ES6+)', percentage: 90, colorClass: 'bg-[#4edea3]' },
      { name: 'SQL', percentage: 80, colorClass: 'bg-[#4fdbc8]' }
    ],
    badges: ['OOP', 'Data Structures']
  },
  {
    id: 'web-development',
    category: 'web',
    title: 'Web Development',
    subtitle: 'Front & Architecture',
    icon: 'Monitor',
    iconColor: 'text-[#4edea3]',
    skills: [
      { name: 'HTML5 & CSS3', percentage: 95, colorClass: 'bg-[#4edea3]' },
      { name: 'Responsive Design', percentage: 92, colorClass: 'bg-[#4cd7f6]' },
      { name: 'Modern Frameworks', percentage: 82, colorClass: 'bg-[#4fdbc8]' }
    ],
    badges: ['Flex/Grid', 'DOM API']
  },
  {
    id: 'tools-workflow',
    category: 'tools',
    title: 'Tools & Workflow',
    subtitle: 'DevOps & Efficiency',
    icon: 'Wrench',
    iconColor: 'text-[#4fdbc8]',
    skills: [
      { name: 'Git & GitHub', percentage: 90, colorClass: 'bg-[#4fdbc8]' },
      { name: 'Linux Terminal', percentage: 85, colorClass: 'bg-[#4cd7f6]' },
      { name: 'Postman & VS Code', percentage: 88, colorClass: 'bg-[#4edea3]' }
    ],
    badges: ['CI/CD', 'Bash Scripting']
  },
  {
    id: 'cybersecurity',
    category: 'security',
    title: 'Cybersecurity',
    subtitle: 'Defense & Threat Audit',
    icon: 'Lock',
    iconColor: 'text-[#4edea3]',
    skills: [
      { name: 'OWASP Top 10', percentage: 88, colorClass: 'bg-[#4edea3]' },
      { name: 'Network Security', percentage: 82, colorClass: 'bg-[#4cd7f6]' },
      { name: 'Data Protection', percentage: 85, colorClass: 'bg-[#4fdbc8]' }
    ],
    badges: ['• Vulnerability Audit']
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'xynox-solutions',
    categoryTag: 'Business Website',
    tagColor: 'text-[#4cd7f6]',
    title: 'Xynox Solutions Website',
    subtitle: 'Corporate Digital Presence',
    description: 'A high-performance, fully responsive corporate web platform built for Xynox Solutions featuring modern typography, dynamic service showcases, interactive client inquiries, and optimized SEO structure.',
    tags: [
      { label: 'HTML5' },
      { label: 'CSS3' },
      { label: 'JavaScript' },
      { label: 'Responsive UI' },
      { label: 'SEO Optimized', highlight: true }
    ],
    demoUrl: 'https://xynox-solutions-demo.vercel.app',
    githubUrl: 'https://github.com/amansah738/xynox-solutions',
    icon: 'Building2',
    image: '/projects/xynox.jpg',
    accentGlow: 'from-[#4cd7f6]/20 to-transparent',
    details: {
      overview: 'Comprehensive digital redesign and web platform for Xynox Solutions engineering agency, delivering 99+ Google Lighthouse performance scores and zero layout shifts.',
      features: [
        'Modular component architecture with lazy-loaded asset pipelines',
        'Dynamic interactive services catalogue with instantaneous filter switching',
        'Secure client query dispatch with client-side regex sanitation and CSRF tokens',
        'Lighthouse 100/100 across Accessibility, Best Practices, and SEO'
      ],
      securityHighlights: [
        'Strict Content-Security-Policy (CSP) headers applied',
        'Sanitized inquiry form inputs preventing XSS injection',
        'Zero external CDN script vulnerabilities'
      ],
      techStack: ['HTML5 Semantic Markup', 'Tailwind CSS / PostCSS', 'Modern JavaScript (ES2022)', 'Vite'],
      role: 'Lead Frontend Architect & Performance Specialist'
    }
  },
  {
    id: 'e-commerce-store',
    categoryTag: 'Online Store',
    tagColor: 'text-[#4edea3]',
    title: 'E-Commerce Website',
    subtitle: 'Secure Transactional Storefront',
    description: 'Dynamic modern e-commerce storefront with real-time shopping cart management, seamless checkout flow, secure input validation, product filtering, and responsive mobile-first UI.',
    tags: [
      { label: 'JavaScript' },
      { label: 'HTML5/CSS Grid' },
      { label: 'Cart State' },
      { label: 'Secure Checkout', highlight: true },
      { label: 'SQL' }
    ],
    demoUrl: 'https://quantum-shop-demo.vercel.app',
    githubUrl: 'https://github.com/amansah738/ecommerce-secure-store',
    icon: 'ShoppingCart',
    image: '/projects/ecommerce.jpg',
    accentGlow: 'from-[#4edea3]/20 to-transparent',
    details: {
      overview: 'Modern high-conversion shopping storefront featuring instant cart state synchronization, optimistic item updates, and cryptographic order hashing.',
      features: [
        'Interactive product catalog with faceted category filtering and price sliders',
        'Client-side cart store with persistent local synchronization and validation',
        'Multi-step checkout interface with client-side card validation and address check',
        'Animated toast feedbacks and order status visualizer'
      ],
      securityHighlights: [
        'Client-side payload integrity checking before checkout dispatch',
        'Sanitized product review injection protection',
        'Defensive input masks for sensitive cardholder entries'
      ],
      techStack: ['JavaScript ES6+', 'CSS Grid / Flexbox', 'RESTful API Integration', 'SQL Database Schema'],
      role: 'Full Stack Developer'
    }
  },
  {
    id: 'optical-erp',
    categoryTag: 'Enterprise ERP',
    tagColor: 'text-[#4fdbc8]',
    title: 'Optical ERP System',
    subtitle: 'Inventory & Healthcare Records',
    description: 'Comprehensive enterprise optical inventory and patient prescription management software. Implements role-based access control, secure record retention, billing processing, and intuitive analytics dashboard.',
    tags: [
      { label: 'Java' },
      { label: 'SQL Database' },
      { label: 'JavaScript' },
      { label: 'Role-Based Access', highlight: true },
      { label: 'Data Protection', highlight: true }
    ],
    demoUrl: 'https://optical-erp-demo.vercel.app',
    githubUrl: 'https://github.com/amansah738/optical-erp',
    icon: 'Eye',
    image: '/projects/eyecares.jpg',
    accentGlow: 'from-[#4fdbc8]/20 to-transparent',
    details: {
      overview: 'Internal healthcare and optical dispensary management system built to track patient clinical prescriptions, lens inventory, and point-of-sale invoicing.',
      features: [
        'Granular Role-Based Access Control (Admin, Optometrist, Receptionist, Accountant)',
        'Patient prescription history log with spherical, cylindrical, and axis metrics',
        'Automated low-stock inventory alerts and SKU barcode generation',
        'Financial billing reporting and invoice PDF generation'
      ],
      securityHighlights: [
        'Strict HIPAA-aligned data segregation and audit trail logging',
        'Prepared statements preventing SQL injection vectors across all query paths',
        'Argon2 password hashing and automatic session timeout guards'
      ],
      techStack: ['Java (Core & Enterprise patterns)', 'PostgreSQL / SQL', 'JavaScript / DOM API', 'CSS Grid'],
      role: 'System Architect & Backend Developer'
    }
  }
];

export const CERTIFICATIONS = [
  {
    id: 'cisco-cybersecurity',
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'May 2024',
    badgeText: 'Verified Credential',
    description: 'Covers core cybersecurity defense, vulnerability assessment, threat modeling, cryptography, and defense-in-depth principles.',
    skills: ['Network Security', 'Threat Assessment', 'Cryptography', 'Defense Tactics'],
    icon: 'ShieldCheck',
    color: 'text-[#4edea3]',
    borderColor: 'border-[#4edea3]/30',
  },
  {
    id: 'nsdc-hardware',
    title: 'Field Technician Computing & Peripherals',
    issuer: 'National Skill Development Corporation (NSDC)',
    date: 'Apr 2020',
    badgeText: 'Govt. Accredited',
    description: 'Hardware architecture, computer peripherals, diagnostic troubleshooting, system OS deployment, and network maintenance.',
    skills: ['Hardware Architecture', 'Peripheral Maintenance', 'System Diagnostics', 'OS Setup'],
    icon: 'Cpu',
    color: 'text-[#4cd7f6]',
    borderColor: 'border-[#4cd7f6]/30',
  },
];

export const ACHIEVEMENTS = [
  {
    title: 'Uttar Pradesh Police Training',
    tag: 'Govt. Tactical & Law Enforcement Discipline',
    icon: 'Award',
  },
  {
    title: 'State Disaster Response Force (SDRF)',
    tag: 'Emergency Rescue & Crisis Protocols',
    icon: 'Shield',
  },
  {
    title: 'National Service Scheme (NSS)',
    tag: 'Community Leadership & Social Engineering',
    icon: 'Users',
  },
  {
    title: 'National Cadet Corps (NCC)',
    tag: 'Military Discipline & Rigorous Leadership',
    icon: 'Flag',
  },
];

export const EDUCATION_TIMELINE = [
  {
    period: '2022 — 2026',
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Galgotias University, Greater Noida, Uttar Pradesh',
    details: 'Focus: Full-Stack Web Architecture, Operating Systems, Data Structures & Algorithms, Computer Networks, and Cybersecurity Principles.',
    status: 'In Progress (Final Years)',
    active: true,
  },
  {
    period: '2019 — 2022',
    degree: 'Intermediate (PCM) Electrician',
    institution: 'Shaheed Pramod ITC College, Muzaffarpur, Bihar',
    details: 'Physics, Chemistry, Mathematics alongside electrical system diagnostics and foundational computer training.',
    status: 'Completed',
    active: false,
  },
  {
    period: '2017 — 2019',
    degree: 'Matriculation (10th Standard)',
    institution: 'RK Tirhut Academy, Muzaffarpur, Bihar',
    details: 'Graduated with strong foundation in mathematics, logical reasoning, and basic computing.',
    status: 'Completed',
    active: false,
  },
];
