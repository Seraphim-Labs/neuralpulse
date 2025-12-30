import { articles, getArticlesByCategory } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories | NeuralPulse",
  description: "Browse AI news by category: AI & ChatGPT, Machine Learning, Research Papers, AI Tools, and Industry News.",
};

const categories = [
  {
    id: "ai",
    name: "AI & ChatGPT",
    description: "Latest developments in conversational AI, large language models, and AI assistants.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "from-[#6366f1] to-[#818cf8]",
  },
  {
    id: "ml",
    name: "Machine Learning",
    description: "Deep dives into ML algorithms, neural networks, training techniques, and best practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-[#14b8a6] to-[#2dd4bf]",
  },
  {
    id: "research",
    name: "Research Papers",
    description: "Breakdowns of groundbreaking papers from top AI labs and academic institutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "from-[#f43f5e] to-[#fb7185]",
  },
  {
    id: "tools",
    name: "AI Tools",
    description: "Reviews and tutorials for the best AI-powered tools, platforms, and developer resources.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "from-[#fbbf24] to-[#fcd34d]",
  },
  {
    id: "industry",
    name: "Industry News",
    description: "Funding rounds, acquisitions, partnerships, and strategic moves in the AI industry.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "from-[#a78bfa] to-[#c4b5fd]",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Browse by <span className="gradient-text">Category</span>
          </h1>
          <p className="text-lg text-[#888] max-w-2xl mx-auto">
            Explore AI news organized by topic. Find exactly what interests you most.
          </p>
        </div>

        {/* Categories with Articles */}
        <div className="space-y-20">
          {categories.map((category) => {
            const categoryArticles = getArticlesByCategory(category.id);

            return (
              <section key={category.id} id={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shrink-0`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                      {category.name}
                    </h2>
                    <p className="text-[#888]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Articles Grid */}
                {categoryArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryArticles.map((article) => (
                      <ArticleCard key={article.id} article={article} />
                    ))}
                  </div>
                ) : (
                  <div className="glass-card p-8 text-center">
                    <p className="text-[#888]">No articles in this category yet. Check back soon!</p>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
