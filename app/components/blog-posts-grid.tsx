"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";

interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
}

const INITIAL_COUNT = 6;

export function BlogPostsGrid({ posts }: { posts: Post[] }) {
  const [showAll, setShowAll] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const visiblePosts = showAll ? posts : posts.slice(0, INITIAL_COUNT);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    if (!email) return;
    setSubStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "newsletter" }),
      });
      if (!res.ok) throw new Error();
      posthog.capture("newsletter_subscribe_clicked", { email, source: "blog_index" });
      setSubStatus("success");
    } catch {
      setSubStatus("error");
    }
  };

  return (
    <>
      {/* Posts grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:border-orange-200 hover:shadow-sm"
          >
            <span className="inline-block text-xs font-medium tracking-wide text-orange-600 uppercase mb-3">
              {post.category}
            </span>
            <h2 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors mb-2 normal-case">
              {post.title}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              {post.description}
            </p>
            <time
              dateTime={post.publishedAt}
              className="text-xs text-slate-400"
            >
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </Link>
        ))}
      </div>

      {/* Show more button */}
      {!showAll && posts.length > INITIAL_COUNT && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(true)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-8 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Show all {posts.length} articles
          </button>
        </div>
      )}

      {/* Newsletter CTA */}
      <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 text-center max-w-2xl mx-auto">
        <h2 className="text-xl font-display text-slate-900 mb-2 normal-case">
          Get new articles in your inbox
        </h2>
        <p className="text-slate-500 mb-6 text-sm">
          Practical Claude workflows, prompts, and strategies. One email per
          week. No spam.
        </p>
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            ref={emailRef}
            type="email"
            placeholder="Your email address"
            required
            className="flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          />
          <button
            type="submit"
            disabled={subStatus === "loading" || subStatus === "success"}
            className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {subStatus === "loading"
              ? "Subscribing..."
              : subStatus === "success"
                ? "Subscribed!"
                : "Subscribe"}
          </button>
        </form>
        {subStatus === "error" && (
          <p className="text-xs text-red-500 mt-3">
            Something went wrong. Please try again.
          </p>
        )}
        {subStatus === "success" && (
          <p className="text-xs text-green-600 mt-3">
            You&apos;re in! Check your inbox.
          </p>
        )}
      </div>
    </>
  );
}
