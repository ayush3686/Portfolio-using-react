import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO = ({ 
  title = "Ayush - Frontend developer",
  description = "Ayush is a Passionate frontend developer skilled in React, JavaScript and modern web technologies.Looking for oppurtunites to build a scalable and user-friendly web applications.",
  image = "/og-image.png", 
  url = "https://iam.ioritio.com", 
  type = "website"
}: SEOProps) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ayush",
    jobTitle: "Full Stack Developer",
    url: url,
    sameAs: [
      "https://linkedin.com/in/Ayushmax",
      "https://github.com/Ayushmax"
    ],
    knowsAbout: [
      "Full Stack Development",
      "Microservices Architecture",
      "PHP",
      "Python",
      "Go",
      "JavaScript",
      "Docker",
      "Cloud Computing"
    ],
    worksFor: {
      "@type": "Organization",
      name: "Montex Marketing LLC"
    }
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Ayush" />
      <meta name="keywords" content="full stack developer, software engineer, PHP, Python, Go, JavaScript, microservices, web development, backend development" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Ayush's Portfolio" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      {/* Additional Meta Tags for Better SEO */}
      <meta name="theme-color" content="#2563eb" /> 
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Ayush" />
      <meta name="application-name" content="Ayush's Portfolio" />
      
      {/* Language and Locale */}
      <html lang="en" />
      <meta property="og:locale" content="en_US" />
    </Helmet>
  );
};

export default SEO;