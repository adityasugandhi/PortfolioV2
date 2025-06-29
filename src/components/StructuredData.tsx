import Script from 'next/script';

export function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Aditya Sugandhi",
    "url": "https://adityasugandhi.dev",
    "image": "https://adityasugandhi.dev/images/aditya-sugandhi.jpg",
    "jobTitle": "AI Engineer & Software Developer",
    "description": "AI Engineer and Software Developer specializing in machine learning, data science, and intelligent systems.",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Florida State University",
      "sameAs": "https://www.fsu.edu"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Software Engineering",
      "Python",
      "React",
      "Next.js",
      "Full Stack Development",
      "Intelligent Systems"
    ],
    "sameAs": [
      "https://linkedin.com/in/adityasugandhi",
      "https://github.com/adityasugandhi",
      "https://twitter.com/adityasugandhi"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Florida",
      "addressCountry": "US"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aditya Sugandhi Portfolio",
    "url": "https://adityasugandhi.dev",
    "description": "Portfolio website of Aditya Sugandhi, AI Engineer and Software Developer",
    "author": {
      "@type": "Person",
      "name": "Aditya Sugandhi"
    },
    "inLanguage": "en-US"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Aditya Sugandhi - AI & Software Development Services",
    "description": "Professional AI engineering and software development services specializing in machine learning, data science, and intelligent systems.",
    "provider": {
      "@type": "Person",
      "name": "Aditya Sugandhi"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Engineering",
      "Software Development",
      "Machine Learning",
      "Data Science",
      "Full Stack Development"
    ]
  };

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
    </>
  );
}