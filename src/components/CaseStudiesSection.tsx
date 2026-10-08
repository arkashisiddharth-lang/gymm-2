import React, { useState } from 'react';
import { WebsiteConfig, Language, ProjectItem } from '../types';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface CaseStudiesSectionProps {
  config: WebsiteConfig;
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  config,
  lang,
  onSelectProject
}) => {
  const [loadedMap, setLoadedMap] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="border-t border-neutral-900 bg-neutral-950/80 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end mb-14">
          <div className="max-w-2xl">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {lang === 'mr' ? 'यशस्वी प्रकल्प' : 'Selected Works'}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              {lang === 'mr'
                ? 'मागील काही महत्त्वाच्या वेबसाइट्स आणि डिजिटल उत्पादने'
                : 'Real Case Studies With Quantifiable Impact'}
            </h2>
          </div>
          <div className="text-xs text-neutral-400 font-mono">
            {lang === 'mr' ? '२ फ्लॅगशिप केस स्टडीज' : '2 Marquee Case Studies'}
          </div>
        </div>

        {/* 2-Column Marquee Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {config.projects.map((project) => {
            const title = lang === 'mr' ? project.titleMr : project.title;
            const category = lang === 'mr' ? project.categoryMr : project.category;
            const impact = lang === 'mr' ? project.impactMetricMr : project.impactMetric;
            const description = lang === 'mr' ? project.descriptionMr : project.description;
            const isLoaded = loadedMap[project.id];

            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-900 bg-neutral-900/40 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900/80 hover:shadow-xl"
              >
                {/* 4:3 Image Container with Resilient Fallback */}
                <div className="relative aspect-4/3 w-full overflow-hidden bg-neutral-900">
                  {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 p-6 text-center">
                      <Sparkles className="h-8 w-8 text-neutral-600 animate-pulse mb-2" />
                      <span className="font-display text-sm text-neutral-400">{title}</span>
                      <span className="text-xs text-neutral-600 font-mono mt-1">{category}</span>
                    </div>
                  )}

                  <img
                    src={project.image}
                    alt={title}
                    referrerPolicy="no-referrer"
                    onLoad={() => handleImageLoad(project.id)}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      isLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Scrim */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"
                  />

                  {/* Quantified impact metric callout */}
                  <div className="absolute top-4 right-4 rounded-md border border-neutral-800 bg-neutral-950/90 px-3 py-1.5 backdrop-blur-md">
                    <span className="font-mono text-xs font-semibold text-emerald-400">
                      {impact}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  {/* Clean unboxed metadata with dot separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <span>{category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{project.year}</span>
                  </div>

                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-neutral-200">
                      {title}
                    </h3>
                    <div className="rounded-full border border-neutral-800 p-2 text-neutral-400 transition-colors group-hover:border-neutral-600 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                    {description}
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-neutral-800/80 pt-4 text-xs text-neutral-400">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="font-mono text-[11px] text-neutral-400">
                        #{tag}
                      </span>
                    ))}
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
