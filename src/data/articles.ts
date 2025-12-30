export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "ai" | "ml" | "research" | "tools" | "industry";
  categoryLabel: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "gpt-5-openai-next-frontier",
    title: "GPT-5: OpenAI's Next Frontier in Artificial General Intelligence",
    excerpt: "OpenAI is reportedly training GPT-5 with unprecedented compute resources, aiming for major breakthroughs in reasoning, multimodal understanding, and tool use capabilities.",
    content: `
      <p>OpenAI is making significant strides towards what many believe could be a major leap in artificial intelligence capabilities. According to sources close to the development, GPT-5 is being trained with computational resources that dwarf anything previously attempted.</p>

      <h2>What We Know So Far</h2>
      <p>The new model is expected to feature dramatically improved reasoning capabilities, allowing it to tackle complex multi-step problems that current models struggle with. This includes advanced mathematical proofs, sophisticated code generation, and nuanced scientific analysis.</p>

      <h2>Multimodal Mastery</h2>
      <p>Perhaps most exciting is the rumored native multimodal architecture. Unlike GPT-4, which processes images through a separate vision encoder, GPT-5 is said to have unified understanding across text, images, audio, and video from the ground up.</p>

      <h2>Safety First</h2>
      <p>OpenAI has emphasized their commitment to safety, with extensive red-teaming and alignment work reportedly running in parallel with capability development. The company is taking a measured approach to deployment.</p>

      <h2>Industry Impact</h2>
      <p>If GPT-5 delivers on its promise, we could see transformative applications across healthcare, scientific research, education, and creative industries. The race for AGI continues to accelerate.</p>
    `,
    category: "ai",
    categoryLabel: "AI & ChatGPT",
    author: "Sarah Chen",
    authorRole: "AI Research Editor",
    publishedAt: "2024-12-28",
    readTime: "5 min read",
    featured: true,
    image: "/images/gpt5.jpg",
    tags: ["OpenAI", "GPT-5", "AGI", "Language Models"],
  },
  {
    id: "2",
    slug: "anthropic-claude-4-release",
    title: "Anthropic Announces Claude 4: Constitutional AI Gets Smarter",
    excerpt: "Anthropic's latest model brings significant improvements to safety, reasoning, and coding capabilities while maintaining their focus on helpful, harmless, and honest AI.",
    content: `
      <p>Anthropic has unveiled Claude 4, the latest iteration of their Constitutional AI assistant. The new model represents a major step forward in creating AI systems that are both highly capable and aligned with human values.</p>

      <h2>Key Improvements</h2>
      <p>Claude 4 demonstrates substantial gains in complex reasoning tasks, showing particular strength in mathematical problem-solving and logical deduction. The model also exhibits improved coding abilities across multiple programming languages.</p>

      <h2>Safety Advances</h2>
      <p>True to Anthropic's mission, Claude 4 comes with enhanced safety features. The model shows better judgment in edge cases and demonstrates more nuanced understanding of potentially harmful requests.</p>

      <h2>Developer Experience</h2>
      <p>The API has been streamlined with new features including improved function calling, better context management, and more predictable outputs. Developers report faster integration times and more reliable production deployments.</p>
    `,
    category: "ai",
    categoryLabel: "AI & ChatGPT",
    author: "Marcus Johnson",
    authorRole: "Technology Correspondent",
    publishedAt: "2024-12-27",
    readTime: "4 min read",
    featured: true,
    image: "/images/claude4.jpg",
    tags: ["Anthropic", "Claude", "Constitutional AI", "Safety"],
  },
  {
    id: "3",
    slug: "transformer-architecture-revolution",
    title: "Beyond Transformers: New Architectures Challenging the Status Quo",
    excerpt: "Researchers are exploring alternatives to the dominant transformer architecture, with state-space models and hybrid approaches showing promising results.",
    content: `
      <p>While transformers have dominated the AI landscape since the release of "Attention Is All You Need," researchers are now exploring alternative architectures that could offer significant advantages in efficiency and capability.</p>

      <h2>State-Space Models</h2>
      <p>Models like Mamba have demonstrated impressive performance with linear scaling in sequence length, compared to transformers' quadratic complexity. This opens up possibilities for processing much longer contexts efficiently.</p>

      <h2>Hybrid Approaches</h2>
      <p>Some of the most promising results come from hybrid architectures that combine the strengths of different approaches. These models can leverage transformers' powerful attention mechanisms while benefiting from the efficiency of alternative components.</p>

      <h2>Hardware Considerations</h2>
      <p>New architectures are often designed with specific hardware in mind, potentially offering better performance on modern GPUs and specialized AI accelerators. This co-design approach may become increasingly important.</p>
    `,
    category: "research",
    categoryLabel: "Research",
    author: "Dr. Emily Watson",
    authorRole: "ML Research Scientist",
    publishedAt: "2024-12-26",
    readTime: "7 min read",
    featured: true,
    image: "/images/transformers.jpg",
    tags: ["Transformers", "Mamba", "Architecture", "Research"],
  },
  {
    id: "4",
    slug: "cursor-ai-coding-revolution",
    title: "Cursor AI: How AI-Powered IDEs Are Revolutionizing Software Development",
    excerpt: "The new generation of AI coding assistants is transforming how developers write code, with Cursor leading the charge in intelligent code completion and generation.",
    content: `
      <p>Cursor has emerged as one of the most talked-about tools in software development, offering an AI-first approach to code editing that goes far beyond simple autocomplete.</p>

      <h2>Context-Aware Assistance</h2>
      <p>Unlike traditional coding assistants, Cursor understands your entire codebase. It can reference other files, understand project structure, and provide suggestions that are truly relevant to your specific context.</p>

      <h2>Natural Language to Code</h2>
      <p>Developers can describe what they want in plain English and watch as Cursor generates the appropriate code. This capability extends to complex refactoring tasks and even architectural changes.</p>

      <h2>Learning Your Style</h2>
      <p>The tool adapts to individual coding styles and project conventions, making its suggestions increasingly relevant over time.</p>
    `,
    category: "tools",
    categoryLabel: "AI Tools",
    author: "Alex Rivera",
    authorRole: "Developer Relations",
    publishedAt: "2024-12-25",
    readTime: "5 min read",
    featured: false,
    image: "/images/cursor.jpg",
    tags: ["Cursor", "IDE", "Coding", "Developer Tools"],
  },
  {
    id: "5",
    slug: "google-gemini-2-multimodal",
    title: "Google's Gemini 2.0: Pushing Multimodal AI to New Heights",
    excerpt: "Google DeepMind's Gemini 2.0 demonstrates unprecedented multimodal capabilities, seamlessly integrating text, image, audio, and video understanding.",
    content: `
      <p>Google has released Gemini 2.0, showcasing significant advances in multimodal AI that promise to reshape how we interact with artificial intelligence.</p>

      <h2>True Native Multimodality</h2>
      <p>Gemini 2.0 was designed from the ground up to understand multiple modalities simultaneously, rather than treating them as separate inputs. This enables more natural and intuitive interactions.</p>

      <h2>Real-World Applications</h2>
      <p>From analyzing complex documents with mixed media to understanding video content with nuanced audio cues, Gemini 2.0 opens new possibilities for practical AI applications.</p>

      <h2>Developer Access</h2>
      <p>Google is making Gemini 2.0 available through their AI Studio and Vertex AI platforms, with various model sizes to suit different use cases and budgets.</p>
    `,
    category: "ai",
    categoryLabel: "AI & ChatGPT",
    author: "Priya Sharma",
    authorRole: "AI Industry Analyst",
    publishedAt: "2024-12-24",
    readTime: "6 min read",
    featured: false,
    image: "/images/gemini.jpg",
    tags: ["Google", "Gemini", "Multimodal", "DeepMind"],
  },
  {
    id: "6",
    slug: "ai-regulation-global-landscape",
    title: "The Global AI Regulation Landscape: What 2025 Holds",
    excerpt: "As AI capabilities advance, governments worldwide are racing to establish regulatory frameworks. Here's what to expect in the coming year.",
    content: `
      <p>The regulatory environment for artificial intelligence is evolving rapidly as governments grapple with the implications of increasingly powerful AI systems.</p>

      <h2>EU AI Act Implementation</h2>
      <p>The European Union's AI Act is moving into implementation phase, with specific requirements for high-risk AI systems coming into effect throughout 2025.</p>

      <h2>US Executive Actions</h2>
      <p>The Biden administration's executive order on AI safety continues to shape development practices, with new reporting requirements and safety standards being rolled out.</p>

      <h2>Global Coordination</h2>
      <p>International bodies are working to harmonize AI governance approaches, though significant differences remain between major economies.</p>
    `,
    category: "industry",
    categoryLabel: "Industry",
    author: "Michael Foster",
    authorRole: "Policy Correspondent",
    publishedAt: "2024-12-23",
    readTime: "8 min read",
    featured: false,
    image: "/images/regulation.jpg",
    tags: ["Regulation", "Policy", "EU AI Act", "Governance"],
  },
  {
    id: "7",
    slug: "reinforcement-learning-robotics",
    title: "RL Breakthroughs: How Reinforcement Learning is Transforming Robotics",
    excerpt: "Recent advances in reinforcement learning are enabling robots to learn complex tasks with unprecedented efficiency, from manipulation to locomotion.",
    content: `
      <p>Reinforcement learning has long promised to revolutionize robotics, and recent breakthroughs are finally delivering on that promise in dramatic fashion.</p>

      <h2>Sim-to-Real Transfer</h2>
      <p>New techniques for training robots in simulation and transferring learned behaviors to the real world are showing remarkable success rates, dramatically reducing the time and cost of robot training.</p>

      <h2>Manipulation Mastery</h2>
      <p>Robots are now learning to manipulate objects with human-like dexterity, handling everything from delicate surgical instruments to heavy industrial components.</p>

      <h2>Locomotion Learning</h2>
      <p>Quadruped and humanoid robots trained with RL can now navigate challenging terrain and recover from disturbances that would have defeated earlier systems.</p>
    `,
    category: "ml",
    categoryLabel: "Machine Learning",
    author: "Dr. James Liu",
    authorRole: "Robotics Research Lead",
    publishedAt: "2024-12-22",
    readTime: "6 min read",
    featured: false,
    image: "/images/robotics.jpg",
    tags: ["Reinforcement Learning", "Robotics", "Sim-to-Real", "AI"],
  },
  {
    id: "8",
    slug: "open-source-llm-ecosystem",
    title: "The Open Source LLM Renaissance: Meta, Mistral, and Beyond",
    excerpt: "Open source large language models are catching up to proprietary alternatives, democratizing access to advanced AI capabilities.",
    content: `
      <p>The open source AI community is experiencing a renaissance, with powerful language models becoming freely available to researchers and developers worldwide.</p>

      <h2>Meta's Llama Series</h2>
      <p>Meta's continued commitment to open source AI has produced the Llama 3 series, offering competitive performance across a range of tasks while remaining freely accessible.</p>

      <h2>Mistral's Innovation</h2>
      <p>French startup Mistral has made waves with efficient models that punch above their weight, demonstrating that smart architecture design can compete with brute-force scaling.</p>

      <h2>Community Contributions</h2>
      <p>Fine-tuned variants, quantized versions, and specialized models are proliferating, creating a rich ecosystem around the base models.</p>
    `,
    category: "ml",
    categoryLabel: "Machine Learning",
    author: "Chris Anderson",
    authorRole: "Open Source Editor",
    publishedAt: "2024-12-21",
    readTime: "5 min read",
    featured: false,
    image: "/images/opensource.jpg",
    tags: ["Open Source", "Llama", "Mistral", "LLM"],
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter((article) => article.featured);
};

export const getArticlesByCategory = (category: string): Article[] => {
  return articles.filter((article) => article.category === category);
};

export const getRecentArticles = (count: number = 6): Article[] => {
  return articles.slice(0, count);
};
