import React, { useState } from 'react';
import { Plus, Bot, Code2, Cpu, Layout, Terminal } from 'lucide-react';
import { useCursor } from '../../hooks/useCursor';

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const { setCursor, resetCursor } = useCursor();

  const servicesList = [
    {
      id: 'ai-automation',
      number: '01',
      title: 'AI AUTOMATION',
      icon: Bot,
      shortDescription: 'Custom autonomous AI agents, workflow automation pipelines, and intelligent data extraction systems for complex business operations.',
      capabilities: [
        'LLM Orchestration & RAG Workflows',
        'Automated Scraping & Parsing',
        'Custom AI Agent Pipelines',
        'API Integration & Telemetry'
      ],
      details: 'Designing end-to-end automation systems that remove manual friction. From structured document parsing pipelines to multi-step AI decision nodes.'
    },
    {
      id: 'web-development',
      number: '02',
      title: 'WEB DEVELOPMENT',
      icon: Code2,
      shortDescription: 'High-performance React & Python full-stack applications with robust spatial databases, high-density UIs, and optimized render cycles.',
      capabilities: [
        'React & Modern Frontend Architecture',
        'Django REST Framework & Python APIs',
        'PostgreSQL & PostGIS Spatial Queries',
        'Clean UI Components & Performance'
      ],
      details: 'Building production-grade web applications with pixel perfection, lightning speed, and resilient server backend architectures.'
    },
    {
      id: 'ai-product-dev',
      number: '03',
      title: 'AI PRODUCT DEVELOPMENT',
      icon: Cpu,
      shortDescription: 'From initial technical concept to MVP and production launch for AI-driven software, data intelligence engines, and developer tools.',
      capabilities: [
        'MVP Architecture & Prototyping',
        'Data Pipeline Engineering',
        'System Reliability & Load Testing',
        'Product Strategy & Telemetry'
      ],
      details: 'Transforming complex data models and machine learning endpoints into intuitive digital products that users love.'
    },
    {
      id: 'ui-ux-design',
      number: '04',
      title: 'UI/UX DESIGN',
      icon: Layout,
      shortDescription: 'Swiss-inspired minimal editorial interfaces, precise design systems, fluid micro-interactions, and visual storytelling.',
      capabilities: [
        'Minimal Editorial Aesthetics',
        'Design Systems & Typography',
        'Interactive Motion Prototyping',
        'Responsive Mobile Adaptation'
      ],
      details: 'Creating memorable visual identities and ergonomic product interfaces with strong typography, deliberate whitespace, and fine-tuned motion.'
    },
    {
      id: 'tech-consulting',
      number: '05',
      title: 'TECH CONSULTING',
      icon: Terminal,
      shortDescription: 'Technical architecture reviews, database optimizations, modern tech stack transitions, and engineering execution guidance.',
      capabilities: [
        'Architecture & Schema Review',
        'Performance & Query Optimization',
        'Full-Stack Tech Selection',
        'Engineering Execution'
      ],
      details: 'Strategic technical guidance to help founders and engineering teams scale clean codebases and prevent technical debt.'
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
          02 / CAPABILITIES
        </span>

        <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl text-[#111111] tracking-tighter uppercase">
          /SERVICES
        </h2>
      </div>

      {/* Instant Ultra-Fast Accordion List */}
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
              {/* Header Row Trigger (Instant Click Reaction) */}
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

              {/* Instant Hardware-Accelerated CSS Grid Reveal (Zero Lag, Zero Glitch) */}
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
                        Capabilities & Deliverables
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
