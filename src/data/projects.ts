export interface ProjectImage {
    url: string;
    alt: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    images: ProjectImage[];
    featured: boolean;
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export const projects: Project[] = [
    {
      id: "E-Commerce",
      title: "E-Commerce Website",
      shortDescription: "An e-commerce website built with Django,HTML,CSS and SQL featuring product catlog ,shopping cart and secure checkout",
      fullDescription: "A Full stack e-commerce website with client-side and server side features including product catalog,authentication and order prcessing",
      techStack: ["HTML", "CSS", "JS", "PYTHON", "DJANGO","MYSQL"],
      images: Array.from({ length: 6 }, (_, ) => ({
        url: `https://picsum.photos/800/600`,
        alt: `E-Commerce Website}`
      })),
      featured: true,
      githubUrl: "https://github.com/ayush3686/E-commerce-Website",
      
    },
    {
      id: "J-STACK",
      title: "J-STACK JOB PORTAL",
      shortDescription: "Patient management and telemedicine platform",
      fullDescription: "An integrated healthcare management platform that streamlines patient care, appointment scheduling, and telemedicine services. Includes features for electronic health records, secure video consultations, prescription management, and automated appointment reminders.",
      techStack: ["HTML","CSS","JAVASCRIPT"],
      images: Array.from({ length: 8 }, (_, ) => ({
        url: `https://picsum.photos/800/600`,
        alt: `J-Stack Job Portal`
      })),
      featured: true,
      githubUrl: "https://github.com/ayush3686/J-stack-Job-portal",
      
    },
    {
      id: "Pizza Sales",
      title: "Pizza Sales",
      shortDescription: "Centralized home automation control system",
      fullDescription: "A comprehensive home automation system that integrates various IoT devices and provides a unified control interface. Features include automated scheduling, energy monitoring, security system integration, and voice control capabilities.",
      techStack: ["sql"],
      images: Array.from({ length: 5 }, (_, i) => ({
        url: `https://picsum.photos/800/600`,
        alt: `Smart Home Hub Screenshot ${i + 1}`
      })),
      featured: true
    }
  ];