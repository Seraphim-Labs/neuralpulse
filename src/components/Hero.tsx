"use client";

import { useState } from "react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg neural-pattern overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#14b8a6]/10 rounded-full blur-3xl float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#f43f5e]/10 rounded-full blur-3xl float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111]/80 border border-[#222] mb-8 fade-in">
          <span className="w-2 h-2 rounded-full bg-[#14b8a6] pulse-dot" />
          <span className="text-sm text-[#888]">Delivering AI insights to 50,000+ readers</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 fade-in fade-in-delay-1">
          The Pulse of{" "}
          <span className="gradient-text">Artificial Intelligence</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-[#888] max-w-2xl mx-auto mb-10 fade-in fade-in-delay-2">
          Stay ahead of the AI revolution. Get curated news, research breakthroughs,
          and industry insights delivered to your inbox every week.
        </p>

        {/* Newsletter signup */}
        <div id="subscribe" className="max-w-md mx-auto mb-12 fade-in fade-in-delay-3">
          {subscribed ? (
            <div className="glass-card p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#14b8a6] to-[#6366f1] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">You&apos;re on the list!</h3>
              <p className="text-[#888]">Check your inbox for a confirmation email.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-[#111] border border-[#222] rounded-xl text-base placeholder:text-[#666] transition-all"
                required
              />
              <button type="submit" className="btn-primary px-8 py-4 text-base whitespace-nowrap glow-hover">
                Subscribe Free
              </button>
            </form>
          )}
          <p className="text-xs text-[#666] mt-3">
            Join 50,000+ AI enthusiasts. No spam, unsubscribe anytime.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto fade-in fade-in-delay-4">
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">50K+</div>
            <div className="text-xs sm:text-sm text-[#888]">Subscribers</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">500+</div>
            <div className="text-xs sm:text-sm text-[#888]">Articles</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">Daily</div>
            <div className="text-xs sm:text-sm text-[#888]">Updates</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#888]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
