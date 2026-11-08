import React, { useState } from 'react';
import { Plus, Code2, Database, Terminal, Cpu, Layout } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  const servicesList = [
    {
      id: 'fullstack-dev',
      number: '01',
      title: 'FULL-STACK WEB DEVELOPMENT',
      icon: Code2,
      shortDescription: 'High-performance React & Python full-stack applications with clean component architecture, responsive Tailwind styling, and optimized render cycles.',
      capabilities: [
        'React & Custom Hooks Architecture',
        'JavaScript (ES6+) & Modern Client State',
        'Tailwind CSS & Responsive Layouts',
        'Semantic HTML5 & Accessible Structure'
      ],
      details: 'Building production-grade web applications with pixel perfection, lightning speed, and clean frontend component hierarchies.'
    },
    {
      id: 'backend-api',
      number: '02',
      title: 'BACKEND & API ENGINEERING',
      icon: Terminal,
      shortDescription: 'Robust RESTful API services built with Python, Django, Django REST Framework, and Flask with token authentication and model serialization.',
      capabilities: [
        'Django & Django REST Framework APIs',
        'Python Backend Microservices & Flask',
        'API Route Serialization & Authentication',
        'ORM Query Optimization & Middleware'
      ],
      details: 'Designing clean backend architectures, secure REST contracts, and resilient server endpoints tailored for production workloads.'
    },
    {
      id: 'database-storage',
      number: '03',
      title: 'DATABASE & SCHEMA DESIGN',
      icon: Database,
      shortDescription: 'PostgreSQL database modeling, relational schema architecture, complex SQL queries, PostGIS spatial data, and ACID transactions.',
      capabilities: [
        'PostgreSQL Relational Schemas',
        'Complex SQL Joins & Aggregations',
        'PostGIS Spatial Database Queries',
        'Data Indexing & Foreign Key Constraints'
      ],
      details: 'Structuring reliable database models and optimizing complex SQL queries to ensure data integrity and fast lookup speed.'
    },
    {
      id: 'data-ml',
      number: '04',
      title: 'DATA PIPELINES & MACHINE LEARNING',
      icon: Cpu,
      shortDescription: 'Python ETL pipelines, automated web scrapers, data cleaning with Pandas, Scikit-learn baselines, and Weka ML demand analytics.',
      capabilities: [
        'Automated Python Web Scraping & Parsing',
        'Tabular Data Cleaning & Pandas Analysis',
        'Scikit-learn Regression & Anomaly Scoring',
        'Weka Supervised ML Demand Modeling'
      ],
      details: 'Extracting data from unstructured web sources, performing clean data transformations, and applying practical machine learning models.'
    },
    {
      id: 'software-cs',
      number: '05',
      title: 'SOFTWARE ENGINEERING & CORE CS',
      icon: Layout,
      shortDescription: 'Object-oriented software development in Java & Python, clean data structures, Git version control, and containerized Docker environments.',
      capabilities: [
        'Java OOP & Object-Oriented Design',
        'Data Structures & Algorithm Fundamentals',
        'Git & GitHub Team Workflows',
        'Docker Local Containerization'
      ],
      details: 'Applying fundamental Computer Science principles, atomic Git workflows, and clean code paradigms across all projects.'
    }
  ];

  const toggleService = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-8 md:px-14 max-w-[1400px] mx-auto border-t border-[#E2E2DE]">
      {/* Section Heading */}
      <div className="mb-12 md:mb-20">
        <span className="text-xs font-mono tracking-widest text-[#888888] uppercase block mb-3">
          02 / CAPABILITIES & TECH STACK
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tighter uppercase">
          /SERVICES & SKILLS
        </h2>
      </div>

      {/* Hardware-Accelerated Zero-Lag Accordion List */}
      <div className="space-y-3" style={{ contain: 'layout style' }}>
        {servicesList.map((service, index) => {
          const isExpanded = expandedIndex === index;
          const IconComponent = service.icon;

          return (
            <div
              key={service.id}
              className={`rounded-2xl border transition-colors duration-200 overflow-hidden transform-gpu ${
                isExpanded
                  ? 'bg-[#1E1E1E] border-[#1E1E1E] text-[#F5F5F3] shadow-md'
                  : 'bg-[#FFFFFF] border-[#E2E2DE] text-[#111111] hover:border-[#CCCCCC] hover:bg-[#FAF9F6]'
              }`}
            >
              {/* Header Row Trigger */}
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => toggleService(index)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="w-full text-left py-5 sm:py-6 px-5 sm:px-8 flex items-center justify-between gap-4 cursor-pointer select-none group"
              >
                <div className="flex items-center gap-4 sm:gap-7 min-w-0">
                  <span
                    className={`font-mono text-xs sm:text-sm shrink-0 transition-colors duration-200 ${
                      isExpanded ? 'text-[#55D98B]' : 'text-[#888888]'
                    }`}
                  >
                    /{service.number}
                  </span>

                  <div
                    className={`hidden sm:flex w-10 h-10 rounded-xl items-center justify-center shrink-0 border transition-colors duration-200 ${
                      isExpanded
                        ? 'bg-[#2C2C2C] border-[#3D3D3D] text-[#F5F5F3]'
                        : 'bg-[#F5F5F3] border-[#E2E2DE] text-[#111111] group-hover:bg-[#ECECE9]'
                    }`}
                  >
                    <IconComponent size={18} />
                  </div>

                  <h3
                    className={`font-heading font-bold text-lg sm:text-2xl md:text-3xl tracking-tight uppercase truncate transition-transform duration-200 transform-gpu group-hover:translate-x-1 ${
                      isExpanded ? 'text-[#F5F5F3]' : 'text-[#111111]'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <span
                    className={`hidden lg:inline-block text-xs font-mono transition-colors duration-200 ${
                      isExpanded ? 'text-[#A0A0A0]' : 'text-[#777777]'
                    }`}
                  >
                    {service.capabilities[0]}
                  </span>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-transform duration-250 transform-gpu ${
                      isExpanded
                        ? 'border-[#444444] bg-[#2C2C2C] text-[#F5F5F3] rotate-45'
                        : 'border-[#DEDEDA] bg-[#F5F5F3] text-[#111111] group-hover:border-[#111111]'
                    }`}
                  >
                    <Plus size={16} />
                  </div>
                </div>
              </button>

              {/* Smooth Zero-Snap CSS Grid Collapse (min-h-0 + no outer padding jump) */}
              <div
                className={`grid transition-[grid-template-rows] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div
                    className={`px-5 sm:px-8 pb-6 sm:pb-8 pt-2 bg-[#1E1E1E] text-[#F5F5F3] transition-[opacity,transform] duration-200 ease-out transform-gpu ${
                      isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1.5'
                    }`}
                  >
                    <div className="pt-5 border-t border-[#333333] grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                      {/* Left: Detailed Overview */}
                      <div className="lg:col-span-7 space-y-2.5">
                        <p className="text-sm sm:text-base text-[#EAEAEA] font-sans font-light leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <p className="text-xs sm:text-sm text-[#999999] font-sans leading-relaxed">
                          {service.details}
                        </p>
                      </div>

                      {/* Right: Capabilities Tag List */}
                      <div className="lg:col-span-5 space-y-2.5">
                        <span className="text-[11px] font-mono uppercase tracking-widest text-[#888888] block">
                          Core Technologies & Frameworks
                        </span>

                        <div className="flex flex-wrap gap-2">
                          {service.capabilities.map((cap) => (
                            <span
                              key={cap}
                              className="px-3 py-1.5 rounded-lg bg-[#2A2A2A] border border-[#3A3A3A] text-xs font-mono text-[#F5F5F3]"
                            >
                              {cap}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
