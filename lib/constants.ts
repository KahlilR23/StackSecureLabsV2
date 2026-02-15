export const SITE = {
  name: "StackSecureLabs",
  tagline: "Cybersecurity, Software & Database Consulting",
  description:
    "Specialized cybersecurity consulting for government agencies, healthcare, and regulated industries. FISMA, HIPAA, SOC 2 compliance experts.",
  url: "https://stacksecurelabs.com",
  phone: "(713) 555-0199",
  email: "contact@stacksecurelabs.com",
  emergencyEmail: "emergency@stacksecurelabs.com",
  location: "Houston, Texas",
} as const

export const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
] as const

export const SERVICES = [
  {
    number: "01",
    title: "Cybersecurity Consulting",
    slug: "cybersecurity",
    shortDescription:
      "Threat assessments, penetration testing, and compliance-driven security implementations designed for organizations handling sensitive data.",
    longDescription:
      "Our cybersecurity practice goes beyond surface-level scans. We conduct deep-dive threat assessments, red team exercises, and compliance gap analyses tailored to your specific regulatory environment. From federal agencies requiring FISMA compliance to healthcare organizations navigating HIPAA, we build security architectures that protect your most critical assets.",
    tags: ["Penetration Testing", "Incident Response", "Risk Assessment", "Security Audits"],
    icon: "shield",
    iconBg: "cyber" as const,
    features: [
      "Vulnerability assessments & penetration testing",
      "Network security audits & architecture review",
      "Compliance gap analysis (FISMA, HIPAA, SOC 2, SOX)",
      "Firewall configuration & endpoint protection",
      "Security monitoring & incident response",
      "Risk assessment & mitigation planning",
      "Security policy development & training",
      "Red team / blue team exercises",
    ],
  },
  {
    number: "02",
    title: "Custom Software & AI",
    slug: "software-ai",
    shortDescription:
      "Security-first application development, API integrations, and AI/ML solutions built to meet compliance requirements from day one.",
    longDescription:
      "Every application we build starts with a security architecture review. Our development team writes code that meets compliance standards from the first commit — not as an afterthought. Whether it's a web portal for a government agency, a HIPAA-compliant healthcare platform, or an AI-powered analytics dashboard, security is embedded in every layer.",
    tags: ["Web Applications", "API Development", "AI/ML Integration", "Cloud Solutions"],
    icon: "zap",
    iconBg: "software" as const,
    features: [
      "Full-stack web application development",
      "Mobile application development",
      "REST & GraphQL API development",
      "AI/ML model integration & deployment",
      "Legacy system modernization",
      "Third-party system integration",
      "Cloud architecture & DevOps",
      "Workflow automation solutions",
    ],
  },
  {
    number: "03",
    title: "Database Management",
    slug: "database",
    shortDescription:
      "Enterprise database architecture, cloud migration strategies, and performance optimization with security governance built into every layer.",
    longDescription:
      "Data is your most valuable asset — and your greatest liability if mismanaged. Our database team designs, optimizes, and secures enterprise data systems with governance frameworks that satisfy the most demanding auditors. From ground-up architecture to cloud migration strategies, we ensure your data is performant, resilient, and compliant.",
    tags: ["Database Design", "Cloud Migration", "Performance Tuning", "Data Governance"],
    icon: "database",
    iconBg: "database" as const,
    features: [
      "Requirements analysis & database design",
      "Performance optimization & tuning",
      "Cloud migration planning & execution",
      "Data governance framework development",
      "Backup & disaster recovery planning",
      "Data analytics & reporting systems",
      "Multi-cloud database management",
      "Cost optimization & scaling strategies",
    ],
  },
] as const

export const COMPLIANCE_FRAMEWORKS = [
  { name: "FISMA", description: "Federal Information Security", icon: "🏛" },
  { name: "HIPAA", description: "Healthcare Data Protection", icon: "⚕" },
  { name: "SOX", description: "Financial Compliance", icon: "📊" },
  { name: "SOC 2", description: "Security Trust Criteria", icon: "🔒" },
  { name: "NIST", description: "800-53 Framework", icon: "📋" },
  { name: "ISO 27001", description: "Information Security Mgmt", icon: "🌐" },
] as const

export const METRICS = [
  { value: "100%", label: "Compliance Rate" },
  { value: "4hr", label: "Incident Response SLA" },
  { value: "0", label: "Data Breaches" },
  { value: "24/7", label: "Security Monitoring" },
] as const

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Assessment",
    description:
      "We map your current security posture, compliance gaps, and technical landscape through comprehensive evaluation.",
  },
  {
    number: 2,
    title: "Strategy & Architecture",
    description:
      "A tailored remediation roadmap aligned with your regulatory requirements, timeline, and budget.",
  },
  {
    number: 3,
    title: "Implementation",
    description:
      "Agile delivery with security baked in at every sprint. Regular updates, no surprises, full transparency.",
  },
  {
    number: 4,
    title: "Ongoing Protection",
    description:
      "Continuous monitoring, quarterly reviews, and rapid incident response when it matters most.",
  },
] as const

export const WHY_POINTS = [
  {
    number: "01",
    title: "Security-First Architecture",
    description:
      "Every line of code, database schema, and infrastructure decision is made through a security lens. Compliance isn't an afterthought — it's the foundation.",
  },
  {
    number: "02",
    title: "Regulated Industry Specialists",
    description:
      "Government agencies, healthcare systems, and financial institutions have unique requirements. We speak FISMA, HIPAA, and SOX fluently.",
  },
  {
    number: "03",
    title: "Boutique Firm, Enterprise Rigor",
    description:
      "You get senior consultants on every engagement — not a revolving door of junior staff. Direct access to decision-makers who understand your stack.",
  },
  {
    number: "04",
    title: "Full-Stack Security Coverage",
    description:
      "From penetration testing to custom development to database hardening, one team covers the entire surface area. No handoffs between vendors.",
  },
] as const

export const TESTIMONIALS = [
  {
    quote:
      "StackSecureLabs didn't just fix our security gaps — they built a compliance framework that made our next federal audit seamless. Their team understood our constraints from day one.",
    name: "James Mitchell",
    role: "CTO, Federal Healthcare Contractor",
    initials: "JM",
  },
  {
    quote:
      "Their ability to handle cybersecurity, database architecture, and custom software under one roof saved us months of vendor coordination. The security-first approach gave our board the confidence they needed.",
    name: "Sarah Chen",
    role: "VP of IT, Regional Health System",
    initials: "SC",
  },
  {
    quote:
      "We needed SOC 2 compliance fast without compromising our development velocity. StackSecureLabs delivered both — on time and under budget.",
    name: "David Okafor",
    role: "CEO, FinTech Startup",
    initials: "DO",
  },
] as const

export const PRICING_TIERS = {
  assessments: [
    {
      name: "Basic Assessment",
      price: "$2,500",
      description: "Network vulnerability scan with actionable recommendations",
      timeline: "1 week",
      features: [
        "Network vulnerability scan",
        "Basic compliance checklist",
        "Written recommendations report",
        "1 follow-up consultation call",
      ],
      highlighted: false,
    },
    {
      name: "Comprehensive Assessment",
      price: "$7,500",
      description:
        "Deep security evaluation with penetration testing and compliance mapping",
      timeline: "2–3 weeks",
      features: [
        "Everything in Basic Assessment",
        "Penetration testing",
        "Compliance gap analysis (FISMA/HIPAA/SOC 2)",
        "Detailed remediation roadmap",
        "3 months of follow-up support",
        "Executive summary presentation",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise Assessment",
      price: "Custom",
      description: "Full-spectrum security evaluation with ongoing advisory",
      timeline: "4–6 weeks",
      features: [
        "Everything in Comprehensive",
        "Red team / blue team exercises",
        "Board-level presentation",
        "12 months of security monitoring",
        "Dedicated security advisor",
        "Quarterly posture reviews",
      ],
      highlighted: false,
    },
  ],
  retainers: [
    {
      name: "Managed Security",
      price: "$5,000",
      period: "/month",
      features: [
        "24/7 security monitoring",
        "Monthly vulnerability scans",
        "Incident response (4-hour SLA)",
        "Quarterly security reviews",
        "Compliance maintenance",
      ],
    },
    {
      name: "Database Management",
      price: "$3,500",
      period: "/month",
      features: [
        "Performance monitoring",
        "Optimization recommendations",
        "Backup verification",
        "Monthly health reports",
        "Emergency support (2-hour SLA)",
      ],
    },
    {
      name: "Development Retainer",
      price: "$8,000",
      period: "/month",
      features: [
        "40 hours of development time",
        "Priority support queue",
        "Agile sprint planning",
        "Code reviews & security testing",
        "Architecture guidance",
      ],
    },
  ],
} as const

export const TEAM_MEMBERS = [
  {
    name: "Cybersecurity Lead",
    role: "Threat Assessment & Compliance",
    bio: "Specialized in threat assessment, security implementation, and compliance frameworks across FISMA, HIPAA, and SOC 2 environments.",
    initials: "CL",
  },
  {
    name: "Database Architect",
    role: "Database Design & Data Governance",
    bio: "Expert in enterprise database design, optimization, performance tuning, and data governance with deep cloud migration experience.",
    initials: "DA",
  },
  {
    name: "Full-Stack Developer",
    role: "Application Development & Cloud Solutions",
    bio: "End-to-end application development specialist with expertise in system integration and security-first software architecture.",
    initials: "FD",
  },
] as const
