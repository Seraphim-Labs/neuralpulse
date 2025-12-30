import { getFeaturedArticles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function FeaturedArticles() {
  const featuredArticles = getFeaturedArticles();

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Featured <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-[#888]">The most important AI news you need to know</p>
          </div>
          <a
            href="/articles"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-[#888] hover:text-white transition-colors group"
          >
            View all
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} featured />
          ))}
        </div>

        {/* Mobile view all link */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#888] hover:text-white transition-colors"
          >
            View all articles
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
