import { articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles | NeuralPulse",
  description: "Browse all AI news articles, research breakdowns, and industry insights from NeuralPulse.",
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            All <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-lg text-[#888] max-w-2xl">
            Explore our complete collection of AI news, research papers, tool reviews, and industry insights.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-4 py-2 rounded-full bg-[#6366f1] text-white text-sm font-medium transition-colors">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-[#111] border border-[#222] text-[#888] text-sm font-medium hover:border-[#6366f1] hover:text-white transition-colors">
            AI & ChatGPT
          </button>
          <button className="px-4 py-2 rounded-full bg-[#111] border border-[#222] text-[#888] text-sm font-medium hover:border-[#6366f1] hover:text-white transition-colors">
            Machine Learning
          </button>
          <button className="px-4 py-2 rounded-full bg-[#111] border border-[#222] text-[#888] text-sm font-medium hover:border-[#6366f1] hover:text-white transition-colors">
            Research
          </button>
          <button className="px-4 py-2 rounded-full bg-[#111] border border-[#222] text-[#888] text-sm font-medium hover:border-[#6366f1] hover:text-white transition-colors">
            AI Tools
          </button>
          <button className="px-4 py-2 rounded-full bg-[#111] border border-[#222] text-[#888] text-sm font-medium hover:border-[#6366f1] hover:text-white transition-colors">
            Industry
          </button>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="btn-secondary">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
