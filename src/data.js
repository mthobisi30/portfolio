export const CV_DATA = {
  name: "Mthobisi Nxumalo",
  role: "Full Stack Developer",
  location: "Durban, KwaZulu-Natal",
  phone: "071 927 9462",
  email: "mthobisinx30@gmail.com",
  linkedin: "linkedin.com/in/mthobisi30",
  summary: "Full Stack Developer with hands-on experience building production-grade web and mobile applications. Proficient in modern frontend frameworks, back-end technologies, and database management.",
  experience: [
    {
      title: "Full Stack Developer (Sole Developer)",
      company: "Wesant Manufacturing / Vision Elevators",
      period: "Sep 2025 - Present",
      responsibilities: [
        "Design, develop, and maintain internal and external web and mobile applications as the sole developer for the organisation.",
        "Manage full software development lifecycle including requirements analysis and system architecture.",
        "Build responsive web applications using Next.js, React, and TypeScript.",
        "Develop cross-platform mobile applications using Flutter, Dart, and Kotlin.",
        "Serve as database administrator for PostgreSQL and SQL Server systems."
      ]
    },
    {
      title: "Learner (IT & Systems Support)",
      company: "Hamtern Financial Services",
      period: "Jan 2024 - Dec 2024",
      responsibilities: [
        "Implemented automation solutions using Microsoft Power Platform tools and Python scripts.",
        "Collaborated with the IT support team to troubleshoot technical issues.",
        "Deployed new software solutions that enhanced record management."
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
    },
    { 
      degree: "National Senior Certificate (Matric)",
      school: "King Edward VII School",
      period: "2015 - 2019",
      doc: "/docs/matric_cert.pdf" 
    }
  ]
};

export const PROJECTS = [
  {
    id: "erp-system",
    title: "Enterprise Resource Planning (ERP)",
    description: "A comprehensive management system designed for manufacturing efficiency.",
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
