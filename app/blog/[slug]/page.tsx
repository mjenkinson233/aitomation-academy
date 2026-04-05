import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { articleSchema } from "@/lib/schema";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/sections/footer";
import { BlogPostLayout } from "@/app/components/blog-post-layout";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} — AItomation Academy`,
    description: post.description,
    alternates: { canonical: url },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="bg-grid min-h-screen">
        <article className="py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-orange-600 transition-colors mb-10"
            >
              ← All posts
            </Link>

            {/* Post header — full width above the grid */}
            <header className="max-w-2xl mb-12">
              <span className="inline-block text-xs font-medium tracking-wide text-orange-600 uppercase mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight text-slate-900 leading-[1.1] mb-6 normal-case">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
                <span>{post.author}</span>
                <span className="text-slate-300">·</span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </header>

            {/* TOC sidebar + content */}
            <BlogPostLayout>
              {/* Post body */}
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:tracking-tight prose-a:text-orange-600 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-orange-400 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-lg prose-blockquote:py-1 prose-blockquote:px-6">
                {post.body}
              </div>

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-slate-900 p-8 sm:p-10 text-center sm:text-left">
                <h2 className="text-xl font-display text-white mb-3 normal-case">
                  Get the Claude Workflow Starter
                </h2>
                <p className="text-slate-400 mb-6">
                  7 copy-paste workflows for writing, research, content, and
                  more. Free.
                </p>
                <Link
                  href="/skool-redirect"
                  className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  Get Free Access
                </Link>
              </div>
            </BlogPostLayout>
          </div>
        </article>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema(post)),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
