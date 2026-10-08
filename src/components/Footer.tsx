import React from 'react';
import { WebsiteConfig, Language } from '../types';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  config: WebsiteConfig;
  lang: Language;
  onOpenDeploy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, lang, onOpenDeploy }) => {
  const brand = lang === 'mr' ? config.brandNameMr : config.brandName;
  const location = lang === 'mr' ? config.locationMr : config.location;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-900 bg-neutral-950 py-12 text-neutral-400 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display text-lg font-bold text-white tracking-tight">
              {brand}
            </span>
            <p className="text-neutral-500">
              {location} <span aria-hidden="true">·</span> {lang === 'mr' ? 'हाय-पर्फॉर्मन्स डिजिटल इंजिनिअरिंग' : 'High-Performance Web Engineering'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-400">
            <a href="#services" className="hover:text-white transition-colors">
              {lang === 'mr' ? 'सेवा' : 'Services'}
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              {lang === 'mr' ? 'प्रकल्प' : 'Projects'}
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              {lang === 'mr' ? 'संपर्क' : 'Contact'}
            </a>
            <button
              type="button"
              onClick={onOpenDeploy}
              className="text-white hover:underline transition-colors font-semibold"
            >
              {lang === 'mr' ? 'डिप्लॉयमेंट हब' : 'Deploy Hub'}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-neutral-500">
              © {new Date().getFullYear()} {brand}.
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="rounded-lg border border-neutral-800 p-2 text-neutral-400 hover:text-white hover:border-neutral-700 transition-colors"
              title="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
