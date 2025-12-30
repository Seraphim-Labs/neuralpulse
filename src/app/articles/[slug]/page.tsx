import { articles, getArticleBySlug, getRecentArticles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found | NeuralPulse",
    };
  }

  return {
    title: `${article.title} | NeuralPulse`,
    description: article.excerpt,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
  };
}

const categoryClasses: Record<string, string> = {
  ai: "category-ai",
  ml: "category-ml",
  research: "category-research",
  tools: "category-tools",
  industry: "category-industry",
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRecentArticles(3).filter((a) => a.id !== article.id);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#888]">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/articles" className="hover:text-white transition-colors">
                Articles
              </Link>
            </li>
            <li>/</li>
            <li className="text-white truncate max-w-[200px]">{article.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className={`category-badge ${categoryClasses[article.category]}`}>
              {article.categoryLabel}
            </span>
            <span className="text-sm text-[#666]">{article.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-xl text-[#888] mb-8">
            {article.excerpt}
          </p>

          {/* Author & Date */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-[#222]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366f1] to-[#14b8a6] flex items-center justify-center text-lg font-semibold">
                {article.author.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div className="font-medium">{article.author}</div>
                <div className="text-sm text-[#888]">{article.authorRole}</div>
              </div>
            </div>
            <time className="text-sm text-[#888]">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </header>

        {/* Content */}
        <div
          className="prose prose-invert prose-lg max-w-none mb-12
            prose-headings:font-bold prose-headings:text-white
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
            prose-p:text-[#b0b0b0] prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-[#818cf8] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-[#b0b0b0] prose-ol:text-[#b0b0b0]
            prose-li:mb-2"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pb-8 border-b border-[#222]">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-[#111] border border-[#222] text-sm text-[#888]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Share */}
        <div className="flex items-center justify-between py-8 border-b border-[#222]">
          <span className="font-medium">Share this article</span>
          <div className="flex gap-4">
            <button
              className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#888] hover:text-white hover:border-[#6366f1] transition-colors"
              aria-label="Share on Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#888] hover:text-white hover:border-[#6366f1] transition-colors"
              aria-label="Share on LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#888] hover:text-white hover:border-[#6366f1] transition-colors"
              aria-label="Copy link"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl font-bold mb-8">
          Related <span className="gradient-text">Articles</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedArticles.map((relatedArticle) => (
            <ArticleCard key={relatedArticle.id} article={relatedArticle} />
          ))}
        </div>
      </section>
    </div>
  );
}
