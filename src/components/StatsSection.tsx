import React from 'react';
import { WebsiteConfig, Language } from '../types';

interface StatsSectionProps {
  config: WebsiteConfig;
  lang: Language;
}

export const StatsSection: React.FC<StatsSectionProps> = ({ config, lang }) => {
  return (
    <section id="impact" className="border-t border-neutral-900 bg-neutral-950 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {config.stats.map((stat, idx) => {
            const label = lang === 'mr' ? stat.labelMr : stat.label;
            const subtext = lang === 'mr' ? stat.subtextMr : stat.subtext;

            return (
              <div key={idx} className="border-l border-neutral-800/80 pl-6">
                <div className="font-mono text-3xl sm:text-4xl font-extrabold tracking-tight text-white tabular-nums">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-neutral-200">
                  {label}
                </div>
                <div className="mt-1 text-xs text-neutral-400">
                  {subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
