import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "NeuralPulse | The World's Best AI News Aggregator & Newsletter",
  description: "Stay ahead of the AI revolution. Get curated AI news, research breakthroughs, and industry insights delivered to your inbox.",
  keywords: ["AI news", "artificial intelligence", "machine learning", "deep learning", "AI newsletter", "tech news"],
  authors: [{ name: "NeuralPulse Team" }],
  openGraph: {
    title: "NeuralPulse | AI News Aggregator & Newsletter",
    description: "The pulse of artificial intelligence. Curated news, research, and insights.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
