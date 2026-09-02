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

      {/* Instant Hardware-Accelerated Accordion List */}
      <div className="border-t border-[#E2E2DE]">
        {servicesList.map((service, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <div
              key={service.id}
              className={`border-b border-[#E2E2DE] transition-colors duration-200 ${
                isExpanded ? 'bg-[#242424] text-[#F5F5F3]' : 'bg-transparent text-[#111111] hover:bg-[#ECECE9]/60'
              }`}
            >
              {/* Header Row Trigger */}
              <button
                onClick={() => toggleService(index)}
                onMouseEnter={() => setCursor && setCursor('pointer')}
                onMouseLeave={resetCursor}
                className="w-full text-left py-6 sm:py-8 px-4 sm:px-8 flex items-center justify-between gap-6 cursor-pointer select-none group"
              >
                <div className="flex items-center gap-6 sm:gap-10">
                  <span
                    className={`font-mono text-sm sm:text-base transition-colors duration-150 ${
                      isExpanded ? 'text-[#999999]' : 'text-[#888888]'
                    }`}
                  >
                    {service.number}
                  </span>

                  <h3
                    className={`font-heading font-bold text-xl sm:text-3xl md:text-4xl tracking-tight uppercase transition-all duration-150 group-hover:translate-x-1.5 ${
                      isExpanded ? 'text-[#F5F5F3]' : 'text-[#111111]'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div className="flex items-center gap-4">
                  <span className={`hidden md:inline-block text-xs font-mono max-w-xs text-right transition-colors duration-150 ${isExpanded ? 'text-[#999999]' : 'text-[#666666]'}`}>
                    {service.capabilities[0]}
                  </span>
                  
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                      isExpanded
                        ? 'border-[#555555] bg-[#333333] text-[#F5F5F3] rotate-45'
                        : 'border-[#DEDEDA] bg-transparent text-[#111111] group-hover:border-[#111111]'
                    }`}
                  >
                    <Plus size={16} />
                  </div>
                </div>
              </button>

              {/* Instant Hardware-Accelerated CSS Grid Reveal */}
              <div
                className={`grid transition-all duration-300 ease-out ${
                  isExpanded ? 'grid-rows-[1fr] opacity-100 py-2' : 'grid-rows-[0fr] opacity-0 py-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 sm:px-8 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#333333]/80">
                    
                    {/* Left: Detailed Overview */}
                    <div className="lg:col-span-7 space-y-3">
                      <p className="text-base sm:text-lg text-[#DDDDDD] font-sans font-light leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <p className="text-sm text-[#999999] font-sans leading-relaxed">
                        {service.details}
                      </p>
                    </div>

                    {/* Right: Capabilities Tag List */}
                    <div className="lg:col-span-5 space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#999999] block mb-2">
                        Core Technologies & Frameworks
                      </span>
                      
                      <div className="flex flex-wrap gap-2">
                        {service.capabilities.map((cap) => (
                          <span
                            key={cap}
                            className="px-3.5 py-1.5 rounded-full bg-[#333333] border border-[#444444] text-xs font-mono text-[#F5F5F3]"
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
          );
        })}
      </div>
    </section>
  );
}
