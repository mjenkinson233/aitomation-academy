import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { blogIndexSchema } from "@/lib/schema";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/sections/footer";
import { BlogPostsGrid } from "@/app/components/blog-posts-grid";

export const metadata: Metadata = {
  title: "Blog — AItomation Academy",
  description:
    "Practical guides and workflows for using Claude AI in real work. Written for non-technical professionals.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog — AItomation Academy",
    description:
      "Practical guides and workflows for using Claude AI in real work.",
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AItomation Academy",
    description:
      "Practical guides and workflows for using Claude AI in real work.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main className="bg-grid min-h-screen">
        <section className="py-20 sm:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-orange-600 transition-colors mb-10"
            >
              ← Back to site
            </Link>
            {/* Header */}
            <div className="max-w-2xl mb-16">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-orange-400" />
                <span className="text-sm font-medium tracking-wide text-orange-600 uppercase">
                  Blog
                </span>
              </div>
              <h1 className="text-3xl font-display tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.1]">
                Practical Claude guides for real work
              </h1>
              <p className="mt-5 text-lg text-slate-500">
                No hype. No coding. Just workflows and strategies you can use
                today.
              </p>
            </div>

            <BlogPostsGrid posts={posts.map(p => ({ slug: p.slug, title: p.title, description: p.description, category: p.category, publishedAt: p.publishedAt }))} />
          </div>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexSchema()) }}
        />
      </main>
      <Footer />
    </>
  );
}
