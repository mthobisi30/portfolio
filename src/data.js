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
        "Design, develop, and maintain internal and external web and mobile applications as the sole developer.",
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
    category: "Enterprise",
    description: "A comprehensive management system designed for manufacturing and operational efficiency.",
    github: "https://github.com/mthobisi30/ERP-system",
    live: "", // No public live link found for this internal tool
    tech: ["Python", "Flask", "SQL Server", "Entity Framework", "React"],
    readme: "This ERP system serves as a central backbone for manufacturing operations. It integrates Inventory Management, Human Resources, and Production Planning into a single interface. Built with a robust .NET Core backend and SQL Server, it ensures data integrity and scalable business logic. Key features include real-time stock tracking, automated procurement orders, and role-based access control for different organizational departments."
  },
  {
    id: "unified-insurance",
    title: "Unified Insurance System",
    category: "Web App",
    description: "Operations control center for insurance teams, centralizing document and task management.",
    github: "https://github.com/mthobisi30/Unified-Insurance-System",
    live: "https://unified-insurance-system.vercel.app",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "shadcn/ui", "Prisma"],
    readme: "A unified dashboard designed to streamline the daily workflows of insurance brokers. It features a multi-tenant architecture allowing different teams to manage policies, claims, and client documents securely. The system includes a full-text search engine for email archiving, a drag-and-drop task management board, and automated compliance reporting tools."
  },
  {
    id: "internal-booking",
    title: "Internal Booking System",
    category: "Full Stack",
    description: "Resource booking application with real-time conflict detection and calendar integration.",
    github: "https://github.com/mthobisi30/InternalBookingSystem",
    live: "https://internal-booking-system-henna.vercel.app",
    tech: ["React", "TypeScript", "Express.js", "PostgreSQL", "Drizzle ORM"],
    readme: "Designed to solve the challenge of shared resource management in busy offices. This application allows users to book meeting rooms and hot desks with real-time availability checking. It utilizes Optimistic UI updates via TanStack Query for an instant-response feel and handles complex recurring booking logic on the backend."
  }
];
