export const CV_DATA = {
  name: "Mthobisi Nxumalo",
  role: "Full Stack Developer",
  location: "Durban, KwaZulu-Natal",
  phone: "071 927 9462",
  email: "mthobisinx30@gmail.com",
  linkedin: "linkedin.com/in/mthobisi30",
  [span_5](start_span)summary: "Full Stack Developer with hands-on experience building production-grade web and mobile applications. Proficient in modern frontend frameworks, back-end technologies, and database management[span_5](end_span). [span_6](start_span)Experienced in designing, developing, and maintaining software systems from front-end UI to back-end APIs[span_6](end_span).",
  experience: [
    {
      title: "Full Stack Developer (Sole Developer)",
      company: "Wesant Manufacturing / Vision Elevators",
      period: "Sep 2025 - Present",
      responsibilities: [
        [span_7](start_span)"Design, develop, and maintain internal and external web and mobile applications as the sole developer for the organisation[span_7](end_span).",
        [span_8](start_span)"Manage full software development lifecycle including requirements analysis and system architecture[span_8](end_span).",
        [span_9](start_span)"Build responsive web applications using Next.js, React, and TypeScript[span_9](end_span).",
        [span_10](start_span)"Develop cross-platform mobile applications using Flutter, Dart, and Kotlin[span_10](end_span).",
        [span_11](start_span)"Serve as database administrator for PostgreSQL and SQL Server systems[span_11](end_span)."
      ]
    },
    {
      title: "Learner (IT & Systems Support)",
      company: "Hamtern Financial Services",
      period: "Jan 2024 - Dec 2024",
      responsibilities: [
        [span_12](start_span)"Implemented automation solutions using Microsoft Power Platform tools and Python scripts[span_12](end_span).",
        [span_13](start_span)"Collaborated with the IT support team to troubleshoot technical issues[span_13](end_span).",
        [span_14](start_span)"Deployed new software solutions that enhanced record management[span_14](end_span)."
      ]
    }
  ],
  education: [
    { 
      degree: "BSc in Information Technology", 
      school: "North-West University", 
      period: "2020 - 2023",
      doc: "/docs/bsc_degree.pdf" 
    },
    { 
      degree: "Short-Term Insurance (NQF 4)", 
      school: "Apex Academy", 
      period: "2024",
      doc: "/docs/insurance_cert.pdf" 
    }
  ]
};

export const PROJECTS = [
  {
    id: "erp-system",
    title: "Enterprise Resource Planning (ERP)",
    description: "A comprehensive management system designed for manufacturing and operational efficiency.",
    github: "https://github.com/mthobisi30/ERP-system",
    tech: ["Next.js", "C#", "SQL Server", "Tailwind CSS"],
    readme: "This ERP system centralizes inventory, human resources, and manufacturing workflows. It features real-time data visualization and automated reporting modules."
  },
  {
    id: "booking-system",
    title: "Internal Booking System",
    description: "Full-stack resource booking application with real-time updates.",
    github: "https://github.com/mthobisi30/InternalBookingSystem",
    tech: ["React", "TypeScript", "Express.js", "PostgreSQL"],
    readme: "Features real-time booking conflict detection, optimistic UI updates with TanStack Query, and a full TypeScript monorepo architecture using Drizzle ORM."
  },
  {
    id: "insurance-system",
    title: "Unified Insurance System",
    description: "Operations control center for insurance teams.",
    github: "https://github.com/mthobisi30/Unified-Insurance-System",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "shadcn/ui"],
    readme: "Streamlines operations by centralizing document management, task tracking with priority, and email archiving with full-text search."
  }
];
