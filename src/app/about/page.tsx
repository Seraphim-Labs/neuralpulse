import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | NeuralPulse",
  description: "Learn about NeuralPulse - your trusted source for AI news, research breakdowns, and industry insights.",
};

const team = [
  {
    name: "Sarah Chen",
    role: "AI Research Editor",
    bio: "Former ML researcher at DeepMind. Passionate about making AI research accessible to everyone.",
  },
  {
    name: "Marcus Johnson",
    role: "Technology Correspondent",
    bio: "15 years covering tech for major publications. Focused on the intersection of AI and society.",
  },
  {
    name: "Dr. Emily Watson",
    role: "ML Research Scientist",
    bio: "PhD in Computer Science from Stanford. Specializes in explaining complex ML concepts.",
  },
  {
    name: "Alex Rivera",
    role: "Developer Relations",
    bio: "Full-stack developer turned technical writer. Helping developers navigate the AI tools landscape.",
  },
];

const stats = [
  { value: "50K+", label: "Newsletter Subscribers" },
  { value: "500+", label: "Articles Published" },
  { value: "100+", label: "Research Papers Covered" },
  { value: "5M+", label: "Monthly Readers" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          About <span className="gradient-text">NeuralPulse</span>
        </h1>
        <p className="text-xl text-[#888] max-w-2xl mx-auto">
          We&apos;re on a mission to democratize AI knowledge. Our team of researchers,
          journalists, and developers brings you the most important AI developments,
          explained clearly.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Our <span className="gradient-text">Mission</span>
            </h2>
            <div className="space-y-4 text-[#b0b0b0]">
              <p>
                Artificial intelligence is transforming every industry, yet staying
                informed can be overwhelming. Research papers are dense, news cycles
                are chaotic, and hype often drowns out substance.
              </p>
              <p>
                NeuralPulse was founded to solve this problem. We curate the most
                important AI developments, break down complex research into
                understandable insights, and deliver them directly to you.
              </p>
              <p>
                Whether you&apos;re a developer, researcher, executive, or simply
                curious about AI, we help you stay ahead of the curve without
                the noise.
              </p>
            </div>
          </div>
          <div className="glass-card p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#888]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 neural-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What We <span className="gradient-text">Stand For</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#6366f1] to-[#818cf8] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Accuracy First</h3>
              <p className="text-[#888] text-sm">
                We verify every claim and cite primary sources. No hype, no
                sensationalism—just accurate, reliable information.
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#14b8a6] to-[#2dd4bf] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Clarity Always</h3>
              <p className="text-[#888] text-sm">
                Complex doesn&apos;t mean confusing. We explain technical concepts
                in clear, accessible language without dumbing things down.
              </p>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#f43f5e] to-[#fb7185] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Speed Matters</h3>
              <p className="text-[#888] text-sm">
                AI moves fast. We deliver breaking news and analysis quickly
                so you never miss an important development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Meet the <span className="gradient-text">Team</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="glass-card p-6 text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#6366f1] to-[#14b8a6] flex items-center justify-center text-2xl font-bold">
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-sm text-[#6366f1] mb-3">{member.role}</p>
              <p className="text-sm text-[#888]">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card p-12 glow">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="gradient-text">Community</span>
          </h2>
          <p className="text-[#888] mb-8 max-w-xl mx-auto">
            Get the most important AI news delivered to your inbox every week.
            Join 50,000+ subscribers who trust NeuralPulse.
          </p>
          <Link href="/#subscribe" className="btn-primary inline-block">
            Subscribe Free
          </Link>
        </div>
      </section>
    </div>
  );
}
