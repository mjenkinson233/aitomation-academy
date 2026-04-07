import { siteConfig } from "./site";
import type { BlogPost } from "./blog";

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

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.url,
    },
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    url: `${siteConfig.url}/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags,
  };
}

export function blogIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog — AItomation Academy",
    description:
      "Practical guides and workflows for using Claude AI in real work. Written for non-technical professionals.",
    url: `${siteConfig.url}/blog`,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
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
              text: "Yes. The Claude Content System is a free PDF download that includes the exact prompts, skills, and automation setup to turn Claude into your content machine — plus an invitation to the free community.",
            },
          },
        ],
      },
    ],
  };
}
