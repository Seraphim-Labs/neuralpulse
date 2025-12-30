import { getRecentArticles } from "@/data/articles";
import ArticleCard from "./ArticleCard";

export default function LatestArticles() {
  const articles = getRecentArticles(6);

  return (
    <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Latest <span className="gradient-text">Updates</span>
            </h2>
            <p className="text-[#888]">Fresh AI news from around the world</p>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
