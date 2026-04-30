export const siteContent = {
  navbar: {
    logo: "Partnering for Equity",
    links: [
      { label: "How It Works", href: "/how-it-works" },
      { label: "For Founders", href: "/founders" },
      { label: "For Providers", href: "/providers" },
      { label: "About", href: "/about" },
    ],
    cta: { label: "Get Started", href: "/founders" },
  },

  hero: {
    badge: "AI-Powered Equity Matching",
    headline: "Partnering for\nEquity",
    subtitle:
      "The platform where startup founders and world-class service providers come together — trading skills for equity and building the future, together.",
    ctas: [
      { label: "I'm a Founder", href: "#founders", variant: "primary" as const },
      { label: "I'm a Service Provider", href: "#providers", variant: "secondary" as const },
    ],
    trustText: "Join 2,000+ founders and providers already partnering for equity",
  },

  howItWorks: {
    badge: "How It Works",
    headline: "Three steps to your next big partnership",
    steps: [
      {
        number: "01",
        title: "Create Your Profile",
        description:
          "Tell us about your startup vision or the skills you bring to the table. Our platform guides you through a quick, intuitive setup.",
        icon: "user",
      },
      {
        number: "02",
        title: "Get AI-Matched",
        description:
          "Our intelligent matching engine analyzes skills, equity preferences, industry focus, and culture fit to find your ideal partner.",
        icon: "sparkles",
      },
      {
        number: "03",
        title: "Start Building",
        description:
          "Connect, collaborate, and create something extraordinary. With aligned incentives, everyone is invested in the outcome.",
        icon: "rocket",
      },
    ],
  },

  aiMatching: {
    badge: "Powered by Intelligence",
    headline: "AI that finds your perfect match",
    description:
      "Our matching engine goes beyond simple keyword searches. It analyzes complementary skill sets, equity expectations, industry experience, working styles, and shared values to create partnerships that thrive.",
    features: [
      "Smart skill-gap analysis",
      "Equity preference alignment",
      "Culture & values matching",
      "Industry domain scoring",
    ],
  },

  founders: {
    badge: "For Founders",
    headline: "Build your dream team without burning your runway",
    subtitle:
      "Access elite talent that believes in your vision. Pay in equity, preserve your cash, and build with partners who are truly invested in your success.",
    benefits: [
      {
        title: "Preserve Your Capital",
        description:
          "Keep cash in the bank for operations, marketing, and growth. Trade equity for top-tier talent instead.",
        icon: "bank",
      },
      {
        title: "Aligned Incentives",
        description:
          "Service providers with equity are partners, not vendors. They care about your long-term success as much as you do.",
        icon: "target",
      },
      {
        title: "Vetted Talent Pool",
        description:
          "Every provider on our platform is reviewed for skills, reliability, and professionalism. Only the best make the cut.",
        icon: "shield",
      },
      {
        title: "AI-Powered Matching",
        description:
          "Stop sorting through endless proposals. Our AI surfaces the providers who are the best fit for your specific needs.",
        icon: "zap",
      },
    ],
    cta: { label: "Find Your Partners", href: "#cta" },
  },

  providers: {
    badge: "For Service Providers",
    headline: "Trade your skills for a piece of the next big thing",
    subtitle:
      "Stop trading time for money. Start building equity in promising startups while doing work you love. Your expertise is worth more than an hourly rate.",
    benefits: [
      {
        title: "Build Your Equity Portfolio",
        description:
          "Diversify your wealth by earning equity across multiple startups. One big exit could change everything.",
        icon: "chart",
      },
      {
        title: "Choose Projects You Believe In",
        description:
          "Work on startups that excite you. Pick industries, missions, and founders that align with your values.",
        icon: "heart",
      },
      {
        title: "Flexible Collaboration",
        description:
          "Set your own terms. Define your contribution, equity expectations, and schedule upfront with every partnership.",
        icon: "settings",
      },
      {
        title: "Professional Community",
        description:
          "Join a network of elite developers, designers, and marketers who are building the future — together.",
        icon: "users",
      },
    ],
    cta: { label: "Start Earning Equity", href: "#cta" },
  },

  features: {
    badge: "Why Choose Us",
    headline: "Everything you need to partner with confidence",
    cards: [
      {
        title: "AI-Powered Matching",
        description:
          "Our proprietary algorithm analyzes dozens of data points to pair founders and providers for long-term success.",
      },
      {
        title: "Smart Legal Framework",
        description:
          "Built-in agreement templates, milestone tracking, and equity vesting schedules keep every partnership clear and fair.",
      },
      {
        title: "Equity Calculator",
        description:
          "Data-driven tools help both sides determine fair equity splits based on contribution scope, market rates, and startup stage.",
      },
      {
        title: "Secure Workspace",
        description:
          "Integrated collaboration tools including shared workspaces, messaging, file sharing, and milestone tracking.",
      },
      {
        title: "Vetting & Verification",
        description:
          "Every provider passes a rigorous review process. Every founder's startup is validated for legitimacy and potential.",
      },
      {
        title: "Community & Network",
        description:
          "Connect with like-minded builders, share insights, and grow together in our thriving community of innovators.",
      },
    ],
  },

  partnersInGrowth: {
    badge: "Our Philosophy",
    headline: "Partners in Growth",
    quote:
      "We believe the best businesses are built by teams with shared conviction, not just shared payroll. When everyone owns a piece of the outcome, extraordinary things happen.",
    values: [
      { label: "Shared Ownership", description: "Every partner has skin in the game" },
      { label: "Radical Alignment", description: "Incentives that point in the same direction" },
      { label: "Long-Term Vision", description: "Building for lasting value, not quick exits" },
    ],
  },

  faq: {
    badge: "FAQ",
    headline: "Frequently asked questions",
    questions: [
      {
        question: "What is Partnering for Equity?",
        answer:
          "Partnering for Equity is an AI-powered platform that connects startup founders with service providers — developers, designers, marketers, and more — who contribute their expertise in exchange for equity in the startup rather than traditional cash payment.",
      },
      {
        question: "How does the AI matching work?",
        answer:
          "Our matching engine analyzes your profile across multiple dimensions including skills, equity preferences, industry focus, working style, and values. It then surfaces the best matches using a proprietary scoring algorithm designed to predict successful, long-term partnerships.",
      },
      {
        question: "What types of service providers are on the platform?",
        answer:
          "We have a diverse community of professionals including full-stack developers, UI/UX designers, growth marketers, content strategists, product managers, fractional CFOs, and more. Every provider is vetted before joining the platform.",
      },
      {
        question: "How is equity determined?",
        answer:
          "Equity splits are negotiated between the founder and provider using our built-in Equity Calculator. This tool factors in the scope of work, market rates for similar services, the startup's current stage and valuation, and the provider's expected time commitment to suggest fair equity ranges.",
      },
      {
        question: "Is there a cost to join the platform?",
        answer:
          "Joining Partnering for Equity is free. We take a small percentage of the equity allocated in each successful partnership — typically 2-5%. This means our success is tied directly to yours: if you don't form a partnership, you don't pay anything.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply click the 'Get Started' button, choose whether you're a Founder or Service Provider, and complete your profile. The entire setup takes less than 10 minutes, and you'll start seeing potential matches immediately.",
      },
    ],
  },

  ctaBanner: {
    headline: "Ready to start building?",
    subtitle:
      "Join the platform where talent meets opportunity — and everyone owns the outcome.",
    cta: { label: "Get Early Access", href: "#" },
  },

  footer: {
    logo: "Partnering for Equity",
    description:
      "The AI-powered platform connecting founders and service providers through equity-based partnerships.",
    columns: [
      {
        title: "Platform",
        links: [
          { label: "How It Works", href: "#how-it-works" },
          { label: "For Founders", href: "#founders" },
          { label: "For Providers", href: "#providers" },
          { label: "Features", href: "#features" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Contact", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Policy", href: "#" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Partnering for Equity. All rights reserved.`,
    social: [
      { label: "Twitter", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
    ],
  },
} as const;
