import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import LatestArticles from "@/components/LatestArticles";
import Categories from "@/components/Categories";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedArticles />
      <Categories />
      <LatestArticles />
      <NewsletterCTA />
    </>
  );
}
