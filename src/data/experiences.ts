export interface WorkExperience {
    id: number;
    position: string;
    company: string;
    timeFrame: string;
    technologies: string[];
    description?: string;
}

export const experiences: WorkExperience[] = [
    {
      id: 1,
      position: "Python Developer Internship",
      company: "Cognifyz Technology",
      timeFrame: "June 2025 - July 2025",
      technologies: ["Python"],
      description: "Led Python developer efforts for multiple high-impact projects, focusing on performance optimization and component reusability."
    },
    {
      id: 2,
      position: "Full Stack Developer",
      company: "RSPL Solutions",
      timeFrame: "July 2025 - August 2025",
      technologies: ["HTML","CSS","JS","PYTHON","DJANGO","MYSQL"],
      description: "Developed and maintained full-stack applications, implementing RESTful APIs and improving database performance."
    },
    
  ];