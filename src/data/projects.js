export const projectsData = [
  {
    id: "verixa",
    number: "01",
    title: "VERIXA",
    tagline: "Property decisions, backed by data.",
    category: "Real Estate / Data Intelligence",
    year: "2026",
    status: "Active Development",
    accentColor: "#D4FF32",
    shortDescription: "A property decision intelligence platform designed to help buyers evaluate real-estate opportunities using project information, builder credibility, RERA verification, locality intelligence, and price analysis.",
    technologies: ["React", "Django", "PostgreSQL", "ML", "Web Scraping", "Maps API", "Tailwind CSS"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null, // As specified in rules: do not invent fake URLs; demo triggers interactive case study
    hasLiveDemo: false,
    featured: true,
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
      outcome: "An end-to-end data platform architecture capable of evaluating real estate viability objectively rather than relying on marketing brochures.",
      metrics: [
        { label: "Data Pipeline", value: "Multi-Source" },
        { label: "Core Focus", value: "Trust & Verification" },
        { label: "Primary Metro", value: "Ahmedabad / Gujarat" }
      ]
    }
  },
  {
    id: "exertia",
    number: "02",
    title: "EXERTIA",
    tagline: "A workforce operating system.",
    category: "Workforce / Productivity",
    year: "2025 — 2026",
    status: "Prototype / Architecture",
    accentColor: "#6EE7B7",
    shortDescription: "A unified workforce platform combining employee management, project tracking, productivity telemetry, and a portable professional identity.",
    technologies: ["React", "Vite", "Tailwind CSS", "Python", "Desktop Agent", "REST APIs"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
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
      outcome: "A functional workspace architecture showing how modern engineering teams can streamline operations without surveillance-heavy tooling.",
      metrics: [
        { label: "Telemetry Mode", value: "Sanitized Rollups" },
        { label: "Target Platform", value: "Web + Desktop" },
        { label: "Architecture", value: "Distributed Agent" }
      ]
    }
  },
  {
    id: "smart-inventory",
    number: "03",
    title: "SMART INVENTORY",
    tagline: "Predict demand before inventory becomes a problem.",
    category: "Data / Automation",
    year: "2025",
    status: "Completed",
    accentColor: "#38BDF8",
    shortDescription: "A Java-based inventory management project integrating PostgreSQL, JDBC, Weka-based predictive analytics, and automated multi-channel notifications.",
    technologies: ["Java", "PostgreSQL", "JDBC", "Weka ML", "Twilio API", "Swing/Desktop"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
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
      outcome: "A resilient inventory application demonstrating end-to-end database connectivity, automated alerting, and applied predictive modeling in Java.",
      metrics: [
        { label: "Data Engine", value: "PostgreSQL + JDBC" },
        { label: "ML Engine", value: "Weka Toolkit" },
        { label: "Alert Latency", value: "< 2s via Twilio" }
      ]
    }
  },
  {
    id: "smart-gst-invoice",
    number: "04",
    title: "SMART GST INVOICE",
    tagline: "Automating the boring parts of invoicing.",
    category: "Automation / Desktop",
    year: "2025",
    status: "Completed",
    accentColor: "#F472B6",
    shortDescription: "A Java desktop application for streamlined GST-compliant invoice generation with dynamic B2B QR-code generation and automated PDF rendering.",
    technologies: ["Java", "ZXing", "iText PDF", "JDBC", "PostgreSQL"],
    githubUrl: "https://github.com/Zaidmemon5412",
    demoUrl: null,
    hasLiveDemo: false,
    featured: true,
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
      outcome: "A lightweight, dependable desktop utility that reduces invoice creation time from minutes to under 20 seconds.",
      metrics: [
        { label: "Generation Speed", value: "< 300ms / PDF" },
        { label: "Standard", value: "Indian GST Rules" },
        { label: "Storage", value: "Local SQL Cache" }
      ]
    }
  }
];
