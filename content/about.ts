export type Value = { 
  title: string; 
  blurb: string; 
};

export type Person = {
  name: string;
  role: string;
  linkedin?: string;
  avatar?: string;
  bio?: string;
};

export type Partner = { 
  name: string; 
  logo?: string; 
  url?: string; 
};

export const mission = {
  headline: "Agents that think, plan, and act—so humans can focus on what matters.",
  subcopy: "We build collaborating AI agents that manage time, capital, and attention—bringing explainability and institutional-grade guardrails to autonomous finance.",
};

export const vision = "We believe finance should be autonomous, transparent, and human-centric. Our multi-agent architecture mirrors real teams—strategy, research, execution—so decisions are explainable and workflows scale.";

export const values: Value[] = [
  { 
    title: "Autonomy with Guardrails", 
    blurb: "Agents act, but within clear, auditable constraints." 
  },
  { 
    title: "Transparency", 
    blurb: "Every decision is traced, explained, and attributable." 
  },
  { 
    title: "Foresight", 
    blurb: "We plan across time—tactics today, strategy for tomorrow." 
  },
  { 
    title: "Human–AI Synergy", 
    blurb: "Agents amplify people; they don't replace them." 
  },
];

// Human team (fill real data anytime)
export const team: Person[] = [
  { 
    name: "Your Name", 
    role: "Founder & Product Lead", 
    linkedin: "https://www.linkedin.com/in/...", 
    avatar: "/team/you.jpg", 
    bio: "Crypto + AI product. Community-driven, data-first." 
  },
  { 
    name: "Teammate 2", 
    role: "AI Systems Engineer", 
    linkedin: "https://www.linkedin.com/in/...", 
    avatar: "/team/t2.jpg", 
    bio: "Multi-agent orchestration, LLM ops, evals." 
  },
  { 
    name: "Teammate 3", 
    role: "Design & Brand", 
    linkedin: "https://www.linkedin.com/in/...", 
    avatar: "/team/t3.jpg", 
    bio: "Minimal UX with clarity and trust by default." 
  },
];

// AI personas as a "digital team"
export const personas: Person[] = [
  { 
    name: "D.A.V.I.S.", 
    role: "Chief Strategist (Agent)", 
    avatar: "/personas/davis.png", 
    bio: "Macro framing, risk budgets, plan-across-time." 
  },
  { 
    name: "Monk Nomi", 
    role: "Behavioral Coach (Agent)", 
    avatar: "/personas/monk.png", 
    bio: "Calm guidance, discipline under volatility." 
  },
  { 
    name: "Greg Default", 
    role: "Execution Lead (Agent)", 
    avatar: "/personas/greg.png", 
    bio: "Order routing, slippage control, monitoring." 
  },
  { 
    name: "Apeston", 
    role: "Meme Radar (Agent)", 
    avatar: "/personas/apeston.png", 
    bio: "Narratives, social flow—kept on a short leash." 
  },
];

export const story = `TemporAI began as a weekend experiment—could agent teams mirror how real investment desks operate?
We fused behavioral science with multi-agent AI to coordinate research, execution, and risk—under human-set constraints.
Today, we're building toward institutional-grade rails through licensed partners while prototyping retail experiences for feedback.`;

export const partners: Partner[] = [
  { 
    name: "Dynamic", 
    logo: "/logos/dynamic.svg", 
    url: "https://www.dynamic.xyz" 
  },
  { 
    name: "AWS", 
    logo: "/logos/aws.svg", 
    url: "https://aws.amazon.com" 
  },
  // Add licensed rails/fin partners when formal (e.g., Fideum/Valereum) to bolster B2B credibility.
];

export const cta = {
  headline: "Build with TemporAI",
  subcopy: "Exploring agentic finance for institutional workflows or compliant execution? Let's talk.",
  primary: { label: "Join the Waitlist", href: "/waitlist" },
  secondary: { label: "Connect on LinkedIn", href: "https://www.linkedin.com/company/temporai" },
};
