import type { ReactNode } from "react";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  tags: string[];
  ogImage?: string;
  body: ReactNode;
};

// Import all posts here — add a line per new post
import { post as post1 } from "@/content/blog/how-to-use-claude-for-writing";
import { post as post2 } from "@/content/blog/claude-vs-chatgpt-for-real-work";
import { post as post3 } from "@/content/blog/5-claude-workflows-for-non-technical-professionals";
import { post as post4 } from "@/content/blog/claude-prompts-for-business";
import { post as post5 } from "@/content/blog/is-claude-ai-free-pricing-guide";
import { post as post6 } from "@/content/blog/claude-pro-vs-chatgpt-plus";
import { post as post7 } from "@/content/blog/claude-vs-chatgpt-vs-gemini";
import { post as post8 } from "@/content/blog/chatgpt-vs-claude-summarizing-transcripts";
import { post as post9 } from "@/content/blog/claude-for-content-creation";
import { post as post10 } from "@/content/blog/claude-prompting-guide";
import { post as post11 } from "@/content/blog/ai-for-consultants";
import { post as post12 } from "@/content/blog/claude-for-business";
import { post as post13 } from "@/content/blog/claude-vs-chatgpt-for-writing";

const allPosts: BlogPost[] = [post1, post2, post3, post4, post5, post6, post7, post8, post9, post10, post11, post12, post13].sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
);

export function getAllPosts(): BlogPost[] {
  return allPosts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((p) => p.slug === slug);
}
