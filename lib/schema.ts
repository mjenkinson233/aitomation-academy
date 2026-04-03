import { siteConfig } from "./site";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: siteConfig.companyName,
        url: siteConfig.url,
        email: siteConfig.email,
        sameAs: [siteConfig.social.youtube, siteConfig.social.skool],
      },
      {
        "@type": "WebSite",
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: "en-US",
      },
    ],
  };
}

export function homePageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: siteConfig.title,
        url: siteConfig.url,
        description: siteConfig.description,
        about: {
          "@type": "Thing",
          name: "Claude for real work for non-technical professionals",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "I'm not technical. Will this work for me?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. AItomation Academy is built for non-technical professionals. No coding is required.",
            },
          },
          {
            "@type": "Question",
            name: "I already use ChatGPT sometimes. Why Claude?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Claude is especially strong for nuanced writing, sustained complex tasks, and long-form work. The workflows are designed specifically around those strengths.",
            },
          },
          {
            "@type": "Question",
            name: "Is this really free?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. The Claude Workflow Starter is free and includes practical workflows plus an invitation to the free community.",
            },
          },
        ],
      },
    ],
  };
}
