export interface Industry {
    name: string;
    description: string;
    technologies: string[];
    icon?: string;
  }
  
  export const industries: Industry[] = [
    {
      name: "Finance",
      description: "Developed financial analysis software using Go Lang and Symfony, creating efficient solutions for financial data analysis and management.",
      technologies: ["Go Lang", "Symfony", "PostgreSQL"]
    },
    {
      name: "Healthcare",
      description: "Built healthcare management software using Laravel, NodeJS and Vuejs, streamlining patient data management and healthcare services.",
      technologies: ["Laravel", "NodeJS", "Vue.js"]
    },
    {
      name: "Education",
      description: "Created online learning platforms using Laravel and Symfony, designing engaging and interactive educational experiences.",
      technologies: ["Laravel", "Symfony", "MySQL"]
    },
    {
      name: "Home Automation",
      description: "Developed home automation systems using Home Assistant and various IoT devices, integrating smart home technology for seamless control.",
      technologies: ["Home Assistant", "IoT", "Python"]
    },
    {
      name: "E-commerce",
      description: "Designed and developed e-commerce solutions using Shopify and WooCommerce, enhancing online shopping experiences for customers.",
      technologies: ["Shopify", "WooCommerce", "PHP"]
    },
    {
      name: "Real Estate",
      description: "Built real estate management software using Symfony and Laravel, providing efficient property management and sales solutions.",
      technologies: ["Symfony", "Laravel", "MySQL"]
    },
    {
      name: "Transportation",
      description: "Developed fleet management and tracking systems using Symfony, Nodejs, InfluxDB, and Grafana, improving logistics and transportation operations.",
      technologies: ["Symfony", "NodeJS", "InfluxDB", "Grafana", "Python"]
    }
  ];