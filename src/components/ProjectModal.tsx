import React from 'react';
import { ProjectItem, Language } from '../types';
import { X, ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  lang: Language;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, lang }) => {
  if (!project) return null;

  const title = lang === 'mr' ? project.titleMr : project.title;
  const category = lang === 'mr' ? project.categoryMr : project.category;
  const description = lang === 'mr' ? project.descriptionMr : project.description;
  const impact = lang === 'mr' ? project.impactMetricMr : project.impactMetric;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>{category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.client}</span>
            <span aria-hidden="true">·</span>
            <span className="font-mono">{project.year}</span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-neutral-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-6 space-y-6">
          <div className="relative aspect-16/9 w-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
            <img
              src={project.image}
              alt={title}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-bold text-white">{title}</h3>
              <div className="rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1 font-mono text-xs font-semibold text-emerald-400">
                {impact}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-neutral-300">
              {description}
            </p>
          </div>

          <div className="border-t border-neutral-800/80 pt-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2">
              {lang === 'mr' ? 'वापरलेले तंत्रज्ञान:' : 'Technologies & Stack:'}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-md border border-neutral-800 bg-neutral-900 px-2.5 py-1 text-xs font-mono text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 px-6 py-4 flex items-center justify-between bg-neutral-900/40">
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-white hover:text-neutral-300"
          >
            <span>{lang === 'mr' ? 'असा प्रकल्प करायचा आहे का?' : 'Want a similar project? Inquire now'}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <button
            onClick={onClose}
            className="rounded-lg bg-neutral-800 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-700"
          >
            {lang === 'mr' ? 'बंद करा' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
