export type TechBrandColor = {
    bg: string;  // Tailwind background color class
    text: string; // Tailwind text color class
    border?: string; // Optional Tailwind border color class
  };
  
  export interface Technology {
    name: string;
    category: 'languages' | 'library' | 'databases' | 'tools' | 'cloud';
    proficiency: number;
    brandColor: TechBrandColor;
  }
  

  export const technologies: Technology[] = [
    // Languages
   
    {
      name: 'Python',
      category: 'languages',
      proficiency: 90,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
    {
      name: 'HTML',
      category: 'languages',
      proficiency: 85,
      brandColor: {
        bg: 'bg-sky-100 dark:bg-sky-900/20',
        text: 'text-sky-600 dark:text-sky-400',
      }
    },
    {
      name: 'CSS',
      category: 'languages',
      proficiency: 90,
      brandColor: {
        bg: 'bg-yellow-100 dark:bg-yellow-900/20',
        text: 'text-yellow-600 dark:text-yellow-400',
      }
    },
    
    
    {
      name: 'JavaScript',
      category: 'languages',
      proficiency: 75,
      brandColor: {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
      }
    },
  
    // library
   
    {
      name: 'react.js',
      category: 'library',
      proficiency: 85,
      brandColor: {
        bg: 'bg-gray-100 dark:bg-orange-900/20',
        text: 'text-gray-600 dark:text-orange-400',
      }
    },
   
  
    // Databases
    {
      name: 'MySQL',
      category: 'databases',
      proficiency: 90,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
   
  
    // Tools
    {
      name: 'Bootstrap',
      category: 'tools',
      proficiency: 90,
      brandColor: {
        bg: 'bg-sky-100 dark:bg-sky-900/20',
        text: 'text-sky-600 dark:text-sky-400',
      }
    },
    {
      name: 'Tailwind CSS',
      category: 'tools',
      proficiency: 85,
      brandColor: {
        bg: 'bg-red-100 dark:bg-red-900/20',
        text: 'text-red-600 dark:text-red-400',
      }
    },
    {
      name: 'Git',
      category: 'tools',
      proficiency: 95,
      brandColor: {
        bg: 'bg-orange-100 dark:bg-orange-900/20',
        text: 'text-orange-600 dark:text-orange-400',
      }
    },
    {
      name: 'VSCode',
      category: 'tools',
      proficiency: 90,
      brandColor: {
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        text: 'text-blue-600 dark:text-blue-400',
      }
    },
  ];