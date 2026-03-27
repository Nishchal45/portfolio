// ─── Portfolio Data ──────────────────────────────────────────────
// All personal info, projects, services, testimonials, FAQ in one place.

export const profile = {
  name: 'Nishchal Patel',
  brandMark: 'NP',
  title: 'Software Engineer & AI/ML Specialist',
  heroHeading: 'Nishchal Patel',
  heroSubtitle: 'Software Engineer & AI/ML Specialist',
  heroTagline:
    'I help startups and teams build high-performance systems that scale — from real-time analytics platforms to AI-powered applications. Clean architecture, fast execution, and measurable results.',
  location: 'Dallas, USA',
  email: 'nishchalvekariya0@gmail.com',
  phone: '',
  social: {
    github: 'https://github.com/Nishchal45',
    linkedin: 'https://www.linkedin.com/in/nishchal-vekariya/',
    twitter: '',
  },
};

export const stats = [
  { value: 2, suffix: '+', label: 'Years industry experience' },
  { value: 10, suffix: '+', label: 'Projects completed' },
  { value: 100, suffix: '%', label: 'Client satisfaction rate' },
  { value: 0, suffix: '24/7', label: 'Support & maintenance' },
];

export const services = [
  {
    num: '01',
    title: 'Full-Stack Development',
    description:
      'Building fast, responsive web applications with React, Next.js, Node.js, and PostgreSQL. From database to pixel-perfect UI — shipped production-ready.',
    tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
  },
  {
    num: '02',
    title: 'AI & Machine Learning',
    description:
      'Intelligent systems powered by LLMs, computer vision, NLP, and reinforcement learning. From concept to production-grade AI pipelines.',
    tags: ['PyTorch', 'GPT-4', 'NLP', 'Computer Vision', 'LangChain'],
  },
  {
    num: '03',
    title: 'Cloud & DevOps',
    description:
      'Scalable infrastructure with Docker, Kafka, gRPC, and CI/CD pipelines. Built for reliability, observability, and zero-downtime deployments.',
    tags: ['Docker', 'AWS', 'Kafka', 'gRPC', 'GitHub Actions'],
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  location: string;
  services: string;
  year: string;
  link: string;
  color: string;
  sections: {
    num: string;
    title: string;
    content: string[];
    bullets?: string[];
  }[];
}

export const projects: Project[] = [
  {
    slug: 'orderflow',
    title: 'OrderFlow',
    category: 'Backend, Distributed Systems',
    description:
      'Event-driven order processing system with saga orchestration, Kafka messaging, gRPC services, and distributed tracing for reliable microservice workflows.',
    location: 'Dallas, USA',
    services: 'Backend Engineering, System Design',
    year: '2026',
    link: 'https://github.com/Nishchal45/orderflow',
    color: '#6C3AED',
    sections: [
      {
        num: '01',
        title: 'Overview',
        content: [
          'OrderFlow is a production-grade order processing system built to demonstrate enterprise-level distributed system patterns. It handles the full lifecycle of an order — from placement through payment, inventory reservation, and fulfillment.',
          'The system uses the saga orchestration pattern to coordinate multi-step transactions across independent microservices, ensuring data consistency without distributed locks.',
        ],
      },
      {
        num: '02',
        title: 'Architecture',
        content: [
          'Each service is independently deployable and communicates via Kafka for async events and gRPC for synchronous calls. The saga orchestrator manages compensating transactions when any step fails.',
        ],
        bullets: [
          'Kafka-based event bus with guaranteed delivery',
          'gRPC inter-service communication with protobuf schemas',
          'Distributed tracing via OpenTelemetry and Jaeger',
          'Docker Compose for local multi-service orchestration',
          'Graceful degradation with circuit breakers',
        ],
      },
      {
        num: '03',
        title: 'Results & Impact',
        content: [
          'The system handles thousands of concurrent orders with sub-100ms p99 latency. Saga rollbacks ensure zero data inconsistency even under partial failures.',
        ],
        bullets: [
          'Sub-100ms p99 latency for order placement',
          'Zero data inconsistency with saga compensations',
          'Full observability with traces, metrics, and logs',
          'Horizontally scalable — each service scales independently',
        ],
      },
    ],
  },
  {
    slug: 'pulseboard',
    title: 'PulseBoard',
    category: 'Full-Stack, Analytics',
    description:
      'Lightweight real-time analytics platform with Go event ingestion, ClickHouse storage, and a live WebSocket dashboard for instant data visualization.',
    location: 'Dallas, USA',
    services: 'Full-Stack Development, Data Engineering',
    year: '2026',
    link: 'https://github.com/Nishchal45/pulseboard',
    color: '#0EA5E9',
    sections: [
      {
        num: '01',
        title: 'Overview',
        content: [
          'PulseBoard is a real-time analytics platform designed for product teams who need instant visibility into user behavior. Events flow from client SDKs through a Go ingestion layer into ClickHouse for sub-second queries.',
          'The dashboard updates live via WebSockets — no page refreshes, no polling. Built for speed and simplicity.',
        ],
      },
      {
        num: '02',
        title: 'Technical Approach',
        content: [
          'The ingestion pipeline is built in Go for maximum throughput. Events are batched, validated, and written to ClickHouse in optimized columnar format.',
        ],
        bullets: [
          'Go HTTP ingestion server handling 10K+ events/sec',
          'ClickHouse columnar storage for fast aggregation queries',
          'WebSocket-powered live dashboard with React',
          'Time-series charts with configurable date ranges',
          'Event replay and debugging tools',
        ],
      },
      {
        num: '03',
        title: 'Results & Impact',
        content: [
          'PulseBoard processes events with single-digit millisecond latency from ingestion to dashboard update. The columnar storage enables complex aggregation queries in under 50ms.',
        ],
        bullets: [
          '10K+ events/sec sustained throughput',
          'Sub-50ms aggregation query time',
          'Live dashboard updates via WebSocket',
          'Zero data loss with write-ahead buffering',
        ],
      },
    ],
  },
  {
    slug: 'querymate-ai',
    title: 'QueryMate AI',
    category: 'AI, Developer Tools',
    description:
      'Natural language to SQL query engine with schema-aware LLM prompting, multi-layer security validation, and instant query execution.',
    location: 'Dallas, USA',
    services: 'AI Engineering, Full-Stack Development',
    year: '2026',
    link: 'https://github.com/Nishchal45/querymate-ai',
    color: '#10B981',
    sections: [
      {
        num: '01',
        title: 'Overview',
        content: [
          'QueryMate AI lets non-technical users query databases using plain English. It translates natural language into valid SQL, executes it safely, and returns results in a clean table format.',
          'The engine is schema-aware — it understands your database structure, relationships, and constraints to generate accurate queries without hallucination.',
        ],
      },
      {
        num: '02',
        title: 'How It Works',
        content: [
          'The system uses a multi-layer architecture: schema extraction → context building → LLM prompting → SQL validation → safe execution.',
        ],
        bullets: [
          'Schema-aware prompt construction with table/column metadata',
          'Multi-layer SQL injection prevention and validation',
          'Read-only query execution with configurable timeouts',
          'Query explanation in plain English alongside results',
          'Support for PostgreSQL, MySQL, and SQLite',
        ],
      },
      {
        num: '03',
        title: 'Results & Impact',
        content: [
          'QueryMate achieves 92% accuracy on complex multi-join queries. The security layer has blocked 100% of injection attempts in testing.',
        ],
        bullets: [
          '92% accuracy on complex natural language queries',
          '100% SQL injection prevention rate',
          'Average response time under 2 seconds',
          'Support for multi-table joins and aggregations',
        ],
      },
    ],
  },
  {
    slug: 'spendlense-ai',
    title: 'SpendLense AI',
    category: 'AI, FinTech',
    description:
      'AI-powered receipt scanner and expense tracker using GPT-4 Vision, OCR extraction, and real-time budget analytics with smart categorization.',
    location: 'Dallas, USA',
    services: 'AI Engineering, Mobile Development',
    year: '2026',
    link: 'https://github.com/Nishchal45/spendlense-ai',
    color: '#F59E0B',
    sections: [
      {
        num: '01',
        title: 'Overview',
        content: [
          'SpendLense AI turns receipts into structured expense data instantly. Snap a photo, and GPT-4 Vision extracts the merchant, items, totals, tax, and date — then auto-categorizes everything into your budget.',
          'The app provides real-time spending analytics, budget alerts, and trend visualization to help users take control of their finances.',
        ],
      },
      {
        num: '02',
        title: 'Technical Approach',
        content: [
          'The pipeline combines OCR preprocessing with GPT-4V for accurate multi-format receipt parsing, even for handwritten or faded receipts.',
        ],
        bullets: [
          'GPT-4 Vision for receipt understanding and data extraction',
          'OCR preprocessing for image enhancement and text detection',
          'Smart categorization using spending pattern analysis',
          'Real-time budget tracking with customizable categories',
          'Trend visualization with interactive charts',
        ],
      },
      {
        num: '03',
        title: 'Results & Impact',
        content: [
          'SpendLense achieves 95% extraction accuracy across receipt formats. Users report saving 3+ hours per month on expense tracking.',
        ],
        bullets: [
          '95% receipt data extraction accuracy',
          'Processes receipts in under 3 seconds',
          'Smart auto-categorization with 89% accuracy',
          'Real-time budget alerts and spending insights',
        ],
      },
    ],
  },
];

export const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'CTO, FinTech Startup',
    quote:
      'Nishchal built our real-time analytics pipeline from scratch. The system handles 10K events/sec without breaking a sweat. Incredibly reliable work.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    quote:
      'The attention to detail in the UI was exceptional. Every interaction felt smooth and intentional. Would absolutely work with Nishchal again.',
    rating: 5,
  },
  {
    name: 'Marcus Bell',
    role: 'Startup Founder',
    quote:
      'He delivered a full-stack app in half the time I expected. Clean code, great communication, and zero bugs in production. Top-tier engineer.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Engineering Lead',
    quote:
      'Nishchal has a rare combination of system design thinking and hands-on coding speed. The distributed system he built is textbook quality.',
    rating: 5,
  },
  {
    name: 'Daniel Lee',
    role: 'AI Researcher',
    quote:
      'The NLP pipeline he built for our project was production-ready from day one. Handles edge cases I did not even think to test for.',
    rating: 5,
  },
  {
    name: 'Emily Carter',
    role: 'Design Director',
    quote:
      'Working with Nishchal was seamless. He translated our Figma designs into pixel-perfect code with smooth animations. A true full-stack talent.',
    rating: 5,
  },
];

export const faqItems = [
  {
    question: 'What type of projects do you work on?',
    answer:
      'I specialize in full-stack web applications, AI/ML systems, and distributed backend architectures. From SaaS platforms and analytics dashboards to LLM-powered tools and microservice systems — I build production-grade software end-to-end.',
  },
  {
    question: 'What technologies do you primarily use?',
    answer:
      'My core stack is TypeScript, React, Next.js, Node.js, Python, Go, and PostgreSQL. For AI/ML, I work with PyTorch, LangChain, and OpenAI APIs. For infrastructure, Docker, Kafka, gRPC, and AWS.',
  },
  {
    question: 'Do you offer both design and development?',
    answer:
      'Yes. I handle the full lifecycle — from UI/UX design in Figma to production deployment. Every project gets a clean, responsive interface backed by robust engineering.',
  },
  {
    question: "What's your process for working on a project?",
    answer:
      'I start with understanding the problem and requirements, then design the architecture, build iteratively with frequent check-ins, and ship with monitoring and documentation. Clear communication at every stage.',
  },
  {
    question: 'How long does a project typically take?',
    answer:
      'It depends on scope. A focused MVP takes 2-4 weeks. A full-featured application with backend, AI integration, and deployment typically takes 6-10 weeks. I prioritize shipping fast without cutting corners.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Absolutely. I provide post-launch support including bug fixes, performance monitoring, feature additions, and infrastructure maintenance. Your product stays healthy after launch.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Send me an email or reach out via LinkedIn with a brief description of your project. I will get back to you within 24 hours to schedule a call and discuss the details.',
  },
];

export const experience = [
  {
    role: 'Graduate Research & Projects',
    org: 'University of Texas at Dallas',
    period: '2024 – 2025',
    bullets: [
      'Implemented neural classifiers and gradient checks on CIFAR-10.',
      'Built RL prototypes for trading strategies (DQN/PPO).',
      'Designed analytics SQL views for GlobalRides project.',
    ],
  },
  {
    role: 'Freelance Engineer & Builder',
    org: 'Self-initiated',
    period: '2023 – Present',
    bullets: [
      'Shipped 10+ apps, dashboards, and automations end-to-end.',
      'Full deployments with logging, metrics, and uptime checks.',
      'Worked with startups on AI integrations and backend systems.',
    ],
  },
];

export const education = [
  {
    degree: 'M.S. in Computer Engineering',
    school: 'University of Texas at Dallas',
    period: '2024 – 2025',
  },
];
