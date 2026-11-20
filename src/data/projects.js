export const projectsData = [
  {
    id: "verixa",
    number: "01",
    title: "VERIXA",
    tagline: "Property decision intelligence, backed by regulatory data.",
    category: "Real Estate / Data Intelligence",
    year: "2026",
    status: "Live Production",
    accentColor: "#8B5CF6",
    shortDescription: "A property decision intelligence platform designed to help buyers evaluate real-estate opportunities using RERA regulatory filings, builder credibility track records, locality data, and price analysis.",
    technologies: ["React", "Django", "PostgreSQL", "PostGIS", "Python", "Web Scraping", "Tailwind CSS"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: "https://verixa-phi.vercel.app",
    liveDomain: "verixa-phi.vercel.app",
    hasLiveDemo: true,
    isFlagship: true,
    featured: true,
    liveHighlights: [
      "RERA Verified Properties Explorer",
      "Builder Track Record & Delay Benchmark",
      "Side-by-Side Property Comparison Matrix",
      "Locality Intelligence & Market Trends"
    ],
    keyWork: [
      "Built automated ingestion pipelines to parse state RERA regulatory filings and builder disclosures.",
      "Designed PostgreSQL relational schemas with PostGIS geospatial indexing for location & infrastructure analysis.",
      "Engineered Django REST APIs to calculate developer credibility ratings, delivery delay history, and price trends.",
      "Developed an interactive React frontend dashboard with project comparison matrices and risk indicator flags."
    ],
    developmentStatus: {
      built: [
        "RERA data ingestion & validation parser",
        "Relational PostgreSQL schema & spatial indexing",
        "Django REST API endpoints for developer metrics",
        "Interactive React comparison & evaluation UI"
      ],
      inProgress: [
        "Spatial price anomaly baseline model",
        "Locality infrastructure heatmap overlay"
      ],
      planned: [
        "Automated price change email alert triggers",
        "Verified buyer community discussion boards"
      ]
    },
    caseStudy: {
      problem: "Real estate investments in emerging metros suffer from severe data asymmetry. Buyers must navigate fragmented state RERA registries, unverified builder marketing claims, opaque price trends, and subjective locality reviews without unified analytical tooling.",
      approach: "Built a centralized intelligence engine that aggregates regulatory RERA disclosures, computes credibility indices for property developers, standardizes historical price trends, and presents spatial locality data in a clear interactive interface.",
      architecture: [
        { layer: "Frontend Client", tech: "React + Vite + Tailwind CSS", role: "High-density spatial dashboard, interactive map overlays, dynamic project comparison matrix" },
        { layer: "Backend API", tech: "Django REST Framework", role: "RERA data ingestion pipelines, valuation endpoints, spatial queries, and authentication" },
        { layer: "Data & Storage", tech: "PostgreSQL + PostGIS", role: "Structured registry storage, geospatial locality boundaries, and price-per-sqft historical indexing" },
        { layer: "Intelligence Layer", tech: "Scikit-learn + BeautifulSoup4", role: "Automated scraper for public notices & baseline price anomaly detection" }
      ],
      keyFeatures: [
        "RERA Registration Verification & Risk Scoring Engine",
        "Builder Track Record & Past Delivery Delay Analytics",
        "Interactive Locality Intelligence & Infrastructure Heatmap",
        "Historical Price Trend Analysis & Fair Value Band Estimator",
        "Multi-parameter Project Comparison Matrix"
      ],
      challenges: "Handling irregular schema variations and non-standardized PDF filings across government RERA portals required robust parsing rules and validation pipelines to prevent poisoned data in property metrics.",
      outcome: "An end-to-end data platform architecture capable of evaluating real estate viability objectively rather than relying on marketing brochures."
    }
  },
  {
    id: "exertia",
    number: "02",
    title: "EXERTIA",
    tagline: "A unified workforce management & telemetry operating system.",
    category: "Workforce / Systems Architecture",
    year: "2025 — 2026",
    status: "In Progress",
    accentColor: "#22D3EE",
    shortDescription: "A workforce operating system pairing a React web workspace with a lightweight background Python desktop agent for privacy-first productivity telemetry and sprint tracking.",
    technologies: ["React", "Vite", "Tailwind CSS", "Python", "Desktop Daemon", "REST APIs"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
    keyWork: [
      "Engineered a React web management hub with interactive sprint kanbans, project lifecycles, and capacity tracking.",
      "Designed a background Python desktop agent architecture that tracks active working sessions locally.",
      "Implemented privacy-first local aggregation so the daemon sanitizes raw activity before sending summary packets.",
      "Built RESTful API contract specifications for sprint velocity tracking, task status updates, and blocker identification."
    ],
    developmentStatus: {
      built: [
        "React web management workspace & interactive kanban",
        "Python background session telemetry prototype",
        "REST API contract schemas for task updates"
      ],
      inProgress: [
        "Privacy-preserving local metrics rollup engine",
        "Team permissions and role-based access controls"
      ],
      planned: [
        "Cross-platform Electron desktop client wrapper",
        "Automated weekly sprint velocity summaries"
      ]
    },
    caseStudy: {
      problem: "Modern knowledge teams suffer from context-switching across disconnected tools for sprint tracking, time allocation, proof-of-work, and internal performance records.",
      approach: "Engineered a holistic workforce operating system concept that pairs a clean web management hub with a lightweight background desktop agent for seamless telemetry and milestone verification.",
      architecture: [
        { layer: "Web Application", tech: "React + Vite + Tailwind CSS", role: "Modular kanban, team capacity planner, and centralized workspace management" },
        { layer: "Desktop Telemetry", tech: "Python Client Daemon", role: "Passive active-window tracking, distraction filtering, and local session aggregation" },
        { layer: "Core API", tech: "Python REST API", role: "Event streaming, team permissions, and privacy-preserving productivity rollups" }
      ],
      keyFeatures: [
        "Unified Team & Project Lifecycle Dashboard",
        "Privacy-First Work Telemetry & Focus Analytics",
        "Portable Professional Skill & Contribution Identity",
        "Automated Sprint Velocity & Blocker Detection"
      ],
      challenges: "Balancing granular operational productivity insights with strict developer privacy—solved by aggregating metrics locally on the agent before transmitting sanitized summary packets.",
      outcome: "A functional workspace architecture showing how modern engineering teams can streamline operations without surveillance-heavy tooling."
    }
  },
  {
    id: "veritas",
    number: "03",
    title: "VERITAS",
    tagline: "Local civic news analysis and perspective clustering engine.",
    category: "NLP / Data Engineering",
    year: "2025 — 2026",
    status: "In Progress",
    accentColor: "#8B5CF6",
    shortDescription: "A Python and Flask news analyzer that collects local civic reports, calculates semantic similarity, and clusters diverse perspectives covering the same community issues.",
    technologies: ["Python", "Flask", "PostgreSQL", "NLP (TF-IDF / N-gram)", "BeautifulSoup4", "REST API"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
    keyWork: [
      "Built automated web scraping pipelines to collect and clean local news reports across regional outlets.",
      "Implemented text tokenization and TF-IDF / N-gram cosine similarity algorithms to cluster articles on the same event.",
      "Structured a PostgreSQL database schema to store full text, extracted entities (dates, locations, figures), and source metadata.",
      "Engineered Flask REST endpoints to serve event clusters, perspective coverage metrics, and source cross-references."
    ],
    developmentStatus: {
      built: [
        "Multi-outlet automated scraping & text cleaning pipeline",
        "PostgreSQL article corpus schema",
        "TF-IDF & cosine similarity event clustering core"
      ],
      inProgress: [
        "Named-entity extraction for civic locations & budgets",
        "Flask API endpoints for cluster queries"
      ],
      planned: [
        "Interactive web visualizer for event timelines",
        "Automated multi-source stance variance metrics"
      ]
    },
    caseStudy: {
      problem: "Local civic news is often fragmented across multiple regional outlets, making it difficult for citizens to see the full context, fact cross-references, and diverse perspectives on community decisions.",
      approach: "Constructed an automated Python data pipeline that ingests local articles, normalizes text, computes semantic similarity matrices to cluster shared stories, and extracts key entities for balanced reading.",
      architecture: [
        { layer: "Ingestion Pipeline", tech: "BeautifulSoup4 + Python Scrapers", role: "Scheduled extraction of regional news feeds, cleaning, and HTML boilerplate removal" },
        { layer: "Corpus Storage", tech: "PostgreSQL Database", role: "Indexed relational storage of raw articles, extracted entities, and publication timestamps" },
        { layer: "NLP & Clustering", tech: "Scikit-learn / N-Gram Vectorizer", role: "TF-IDF transformation, cosine distance calculation, and event cluster grouping" },
        { layer: "API Service", tech: "Flask Microframework", role: "JSON endpoints for querying story clusters, perspective variance, and source references" }
      ],
      keyFeatures: [
        "Automated Multi-Source Local News Aggregation",
        "Cosine Similarity Story Clustering Engine",
        "Key Civic Entity Extraction (Locations, Budgets, Policies)",
        "Cross-Source Perspective Variance Analysis",
        "Fast REST API for Event Cluster Retrieval"
      ],
      challenges: "Distinguishing between genuine follow-up articles and entirely unrelated news pieces sharing general civic vocabulary—solved using weighted N-gram frequency and temporal proximity thresholds.",
      outcome: "A functioning news analysis pipeline that groups fragmented local journalism into coherent, multi-perspective event clusters."
    }
  },
  {
    id: "smart-inventory",
    number: "04",
    title: "SMART INVENTORY",
    tagline: "Demand forecasting & automated stock replenishment system.",
    category: "Data Systems / Applied ML",
    year: "2025",
    status: "Completed",
    accentColor: "#22D3EE",
    shortDescription: "A transactional Java desktop system with PostgreSQL JDBC persistence, Weka-based predictive regression for demand forecasting, and real-time Twilio SMS alerts.",
    technologies: ["Java SE", "PostgreSQL", "JDBC", "Weka ML", "Twilio API", "Swing UI"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
    keyWork: [
      "Engineered an ACID-compliant Java SE system with custom JDBC connection pooling for reliable transaction logging.",
      "Integrated Weka Machine Learning library to run time-series linear regression models predicting stock depletion dates.",
      "Built an automated dispatch pipeline using Twilio API to trigger instant SMS alerts when stock hits safety thresholds.",
      "Implemented purchase order synthesis, inventory categorization, and historical consumption reporting."
    ],
    developmentStatus: {
      built: [
        "Complete Java SE desktop application with custom UI",
        "PostgreSQL JDBC transaction engine with ACID compliance",
        "Weka time-series regression stock forecasting model",
        "Automated Twilio SMS threshold notification dispatch"
      ],
      inProgress: [],
      planned: []
    },
    caseStudy: {
      problem: "Small to mid-size warehouse operations frequently face stockouts of high-velocity goods or capital lockup due to overstocking caused by reactive ordering.",
      approach: "Constructed a transactional Java desktop system interfaced with PostgreSQL via JDBC, integrated with the Weka Machine Learning library to run time-series linear regression for stock depletion forecasts.",
      architecture: [
        { layer: "Application Core", tech: "Java SE + Swing UI", role: "Inventory catalog management, stock replenishment triggers, batch updates" },
        { layer: "Persistence Layer", tech: "PostgreSQL + JDBC", role: "ACID-compliant transaction logging and historical demand datasets" },
        { layer: "Forecasting Engine", tech: "Weka ML Toolkit", role: "Trend projection, seasonal demand variance, and reorder point calculation" },
        { layer: "Alerting Pipeline", tech: "Twilio SMS API", role: "Automated real-time dispatch alerts when safety stock crosses threshold" }
      ],
      keyFeatures: [
        "ACID-compliant Stock Transaction Accounting",
        "Weka-powered Reorder Level Forecasting",
        "Automated SMS Stockout Notifications via Twilio",
        "Supplier Purchase Order Generation & PDF Export",
        "Interactive Historical Consumption Reports"
      ],
      challenges: "Implementing stable JDBC connection pooling and ensuring accurate data formatting for Weka ARFF instances during runtime without blocking the main UI thread.",
      outcome: "A resilient inventory application demonstrating end-to-end database connectivity, automated alerting, and applied predictive modeling in Java."
    }
  },
  {
    id: "smart-gst-invoice",
    number: "05",
    title: "SMART GST INVOICE",
    tagline: "Automated B2B tax computation, ZXing QR encoding & PDF synthesis.",
    category: "Automation / Desktop Software",
    year: "2025",
    status: "Completed",
    accentColor: "#8B5CF6",
    shortDescription: "A Java desktop application for automated GST tax calculation, dynamic ZXing 2D barcode generation, and sub-300ms print-ready iText PDF rendering.",
    technologies: ["Java SE", "ZXing Barcode", "iText PDF", "JDBC", "PostgreSQL"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
    keyWork: [
      "Designed a keyboard-first Java invoice builder with automatic multi-tier GST tax splitting (CGST/SGST/IGST).",
      "Integrated ZXing to generate 2D B2B standard QR codes containing encrypted invoice hashes and tax data.",
      "Used the iText PDF library to synthesize pixel-perfect, printable PDF documents in under 300 milliseconds.",
      "Implemented client and product catalog databases with fast local SQL search."
    ],
    developmentStatus: {
      built: [
        "Full desktop invoicing application with keyboard-optimized data entry",
        "Dynamic multi-tier GST calculation engine (0%, 5%, 12%, 18%, 28%)",
        "ZXing B2B compliant QR code generator",
        "iText PDF synthesis engine (<300ms export)"
      ],
      inProgress: [],
      planned: []
    },
    caseStudy: {
      problem: "Small business merchants spend countless hours manually calculating CGST/SGST/IGST breakdowns, verifying GSTIN formats, and generating compliant print-ready PDF invoices.",
      approach: "Designed a clean, keyboard-friendly Java invoicing tool that automates tiered tax rate calculations, generates QR codes containing encrypted invoice digests via ZXing, and produces pixel-perfect PDF documents using iText.",
      architecture: [
        { layer: "UI & Input Engine", tech: "Java Desktop UI", role: "Keyboard-optimized line-item entry, auto-complete for registered clients" },
        { layer: "Tax Calculation Engine", tech: "Java Business Logic", role: "Intra-state vs Inter-state GST splitting, discount application, round-offs" },
        { layer: "Document Synthesis", tech: "iText PDF Library", role: "Vector PDF layout rendering, typography formatting, digital stamp embed" },
        { layer: "QR Code Engine", tech: "ZXing Library", role: "B2B compliant 2D barcode encoding with invoice hash and GST details" }
      ],
      keyFeatures: [
        "Dynamic Multi-Rate GST Computation (0%, 5%, 12%, 18%, 28%)",
        "B2B Standard QR Code Generation via ZXing",
        "Single-click PDF Generation with Custom Branding & Watermark",
        "Customer & Product Catalog Fast-Search Database",
        "Exportable Sales Tax Summary Reports"
      ],
      challenges: "Strict adherence to Indian GST invoicing specifications including HSN/SAC code formatting and ensuring exact alignment on varied thermal and laser printer dimensions.",
      outcome: "A lightweight, dependable desktop utility that reduces invoice creation time from minutes to under 20 seconds."
    }
  }
];
