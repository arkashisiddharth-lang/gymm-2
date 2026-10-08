import React, { useState } from 'react';
import { WebsiteConfig, Language } from '../types';
import { HERO_IMAGE } from '../data/defaultContent';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  config: WebsiteConfig;
  lang: Language;
  onOpenDeploy: () => void;
  onOpenStudio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  config,
  lang,
  onOpenDeploy,
  onOpenStudio,
}) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  const headline = lang === 'mr' ? config.heroHeadlineMr : config.heroHeadline;
  const subheadline = lang === 'mr' ? config.heroSubheadlineMr : config.heroSubheadline;
  const primaryCta = lang === 'mr' ? config.primaryCtaTextMr : config.primaryCtaText;
  const secondaryCta = lang === 'mr' ? config.secondaryCtaTextMr : config.secondaryCtaText;
  const locationText = lang === 'mr' ? config.locationMr : config.location;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
      {/* Background ambient lighting - subtle, non-slop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-indigo-950/30 blur-[140px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Subtle unboxed metadata kicker without pill badge clutter */}
          <div className="mb-6 flex items-center justify-center gap-2 text-xs font-medium tracking-wider text-neutral-400 uppercase">
            <span>{locationText}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>{lang === 'mr' ? 'लाईव्ह क्लाउड डिप्लॉयमेंट' : 'Live Cloud Deployment'}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-emerald-400 font-mono">v1.0 Ready</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:leading-[1.1] [text-wrap:balance]">
            {headline}
          </h1>

          {/* Subheadline with strict measure limit */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg sm:leading-relaxed">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 shadow-sm transition-all hover:bg-neutral-200 active:scale-95"
            >
              <span>{primaryCta}</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/80 px-6 py-3.5 text-sm font-medium text-neutral-200 transition-colors hover:border-neutral-700 hover:bg-neutral-800"
            >
              <span>{secondaryCta}</span>
            </a>
          </div>

          {/* Trust markers adjacent to CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{lang === 'mr' ? '१००% रिस्पॉन्सिव्ह मोबाईल डिझाइन' : 'Fully Responsive Mobile Design'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{lang === 'mr' ? 'झिरो-कॉन्फिग मोफत होस्टिंग' : 'Instant Cloud Deployment'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>{lang === 'mr' ? 'Google SEO व जलद गती' : 'SEO & Core Web Vitals Ready'}</span>
            </div>
          </div>
        </div>

        {/* Visual Focal Carrier (16:9 Hero Image with high-end framing) */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl transition-all">
          <div className="relative aspect-16/9 w-full bg-neutral-900">
            {/* Fallback container if image fails to load or while loading */}
            {!imgLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-8 text-center">
                <Sparkles className="h-10 w-10 text-neutral-600 animate-pulse mb-3" />
                <span className="font-display text-lg text-neutral-400">
                  {lang === 'mr' ? 'क्रेएटिव्ह स्टुडिओ वर्कस्पेस' : 'Creative Studio Environment'}
                </span>
                <span className="text-xs text-neutral-600 mt-1">High-Performance Web Architecture</span>
              </div>
            )}

            <img
              src={HERO_IMAGE}
              alt="Creative tech and design studio workspace"
              referrerPolicy="no-referrer"
              onLoad={() => setImgLoaded(true)}
              className={`h-full w-full object-cover transition-opacity duration-500 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Measured scrim overlay for text contrast and depth */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"
            />

            {/* Quiet overlay badge in corner */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-3 rounded-lg border border-white/10 bg-neutral-950/80 px-4 py-2.5 backdrop-blur-md">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <div className="text-left">
                <p className="text-xs font-semibold text-white">
                  {lang === 'mr' ? 'तुमची वेबसाईट आता थेट सुरू आहे' : 'Your Live Web Engine'}
                </p>
                <p className="text-[11px] text-neutral-400 font-mono">
                  {lang === 'mr' ? 'कस्टमाइझ करा किंवा थेट शेअर करा' : 'Ready to customize & launch'}
                </p>
              </div>
              <button
                type="button"
                onClick={onOpenDeploy}
                className="ml-2 rounded-md bg-white/10 px-2.5 py-1 text-[11px] font-medium text-white hover:bg-white/20 transition-colors"
              >
                {lang === 'mr' ? 'तपासा' : 'View Link'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
