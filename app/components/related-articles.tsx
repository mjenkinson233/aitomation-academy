import Link from "next/link";
import { getAllPosts, type BlogPost } from "@/lib/blog";

export function RelatedArticles({ current }: { current: BlogPost }) {
  const all = getAllPosts();

  // Score each post by: same category (2pts) + shared tags (1pt each)
  const scored = all
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      let score = 0;
      if (p.category === current.category) score += 2;
      score += p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
        Related articles
      </h3>
      <div className="grid gap-4 sm:grid-cols-3">
        {scored.map(({ post }) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:border-orange-200 hover:shadow-sm no-underline"
          >
            <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
              {post.category}
            </span>
            <h4 className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug normal-case">
              {post.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
