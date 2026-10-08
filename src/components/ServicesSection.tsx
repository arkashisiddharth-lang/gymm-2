import React, { useState } from 'react';
import { WebsiteConfig, Language, ServiceItem } from '../types';
import { Check, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  config: WebsiteConfig;
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  config,
  lang,
  onSelectService
}) => {
  const [activeId, setActiveId] = useState<string>(config.services[0]?.id || '');

  return (
    <section id="services" className="border-t border-neutral-900 bg-neutral-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {lang === 'mr' ? 'आमच्या सेवा' : 'Core Capabilities'}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
            {lang === 'mr'
              ? 'आधुनिक तंत्रज्ञान आणि डिझाइनच्या मदतीने तयार केलेल्या सेवा'
              : 'End-to-End Digital Engineering for Modern Businesses'}
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            {lang === 'mr'
              ? 'प्रत्येक प्रोजेक्टसाठी अचूक नियोजन, जलद विकास आणि अखंड तांत्रिक सपोर्ट.'
              : 'Every capability is delivered with strict attention to performance benchmarks, code maintainability, and user delight.'}
          </p>
        </div>

        {/* Numbered Editorial Services Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {config.services.map((service) => {
            const isSelected = activeId === service.id;
            const title = lang === 'mr' ? service.titleMr : service.title;
            const description = lang === 'mr' ? service.descriptionMr : service.description;
            const deliverables = lang === 'mr' ? service.deliverablesMr : service.deliverables;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => {
                  setActiveId(service.id);
                  onSelectService(service);
                }}
                className={`group relative flex cursor-pointer flex-col justify-between rounded-xl border p-7 transition-all duration-200 ${
                  isSelected
                    ? 'border-neutral-700 bg-neutral-900/90 shadow-lg'
                    : 'border-neutral-900 bg-neutral-950/60 hover:border-neutral-800 hover:bg-neutral-900/40'
                }`}
              >
                <div>
                  {/* Clean Editorial Numbering (no comment // syntax) */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-2xl font-light text-neutral-500">
                      {service.num}.
                    </span>
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                      {lang === 'mr' ? 'तपशील' : 'Details'}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-neutral-100">
                    {title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {description}
                  </p>
                </div>

                <div className="mt-8 border-t border-neutral-800/80 pt-6">
                  <div className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
                    {lang === 'mr' ? 'मुख्य घटक' : 'Key Deliverables'}
                  </div>
                  <ul className="space-y-2">
                    {deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between text-xs font-medium text-white group-hover:translate-x-1 transition-transform">
                    <span>{lang === 'mr' ? 'या सेवेबद्दल चौकशी करा' : 'Inquire for this'}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
