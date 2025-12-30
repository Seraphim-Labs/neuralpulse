import Link from "next/link";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const categoryClasses: Record<string, string> = {
    ai: "category-ai",
    ml: "category-ml",
    research: "category-research",
    tools: "category-tools",
    industry: "category-industry",
  };

  if (featured) {
    return (
      <Link href={`/articles/${article.slug}`} className="block group">
        <article className="glass-card article-card p-6 h-full">
          <div className="flex flex-col h-full">
            {/* Category & Read Time */}
            <div className="flex items-center gap-3 mb-4">
              <span className={`category-badge ${categoryClasses[article.category]}`}>
                {article.categoryLabel}
              </span>
              <span className="text-xs text-[#666]">{article.readTime}</span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-[#818cf8] transition-colors line-clamp-2">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[#888] text-sm mb-4 line-clamp-3 flex-grow">
              {article.excerpt}
            </p>

            {/* Author & Date */}
            <div className="flex items-center justify-between pt-4 border-t border-[#222]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366f1] to-[#14b8a6] flex items-center justify-center text-sm font-semibold">
                  {article.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium">{article.author}</div>
                  <div className="text-xs text-[#666]">{article.authorRole}</div>
                </div>
              </div>
              <time className="text-xs text-[#666]">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="block group">
      <article className="glass-card article-card p-5 h-full">
        <div className="flex flex-col h-full">
          {/* Category & Read Time */}
          <div className="flex items-center gap-3 mb-3">
            <span className={`category-badge ${categoryClasses[article.category]}`}>
              {article.categoryLabel}
            </span>
            <span className="text-xs text-[#666]">{article.readTime}</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-2 group-hover:text-[#818cf8] transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-[#888] text-sm mb-4 line-clamp-2 flex-grow">
            {article.excerpt}
          </p>

          {/* Author & Date */}
          <div className="flex items-center justify-between pt-3 border-t border-[#222]">
            <div className="text-sm font-medium">{article.author}</div>
            <time className="text-xs text-[#666]">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
