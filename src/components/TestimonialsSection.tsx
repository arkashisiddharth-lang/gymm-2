import React from 'react';
import { WebsiteConfig, Language } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  config: WebsiteConfig;
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ config, lang }) => {
  return (
    <section id="reviews" className="border-t border-neutral-900 bg-neutral-950/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
            {lang === 'mr' ? 'ग्राहकांचे अभिप्राय' : 'Verified Client Testimonials'}
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
            {lang === 'mr' ? 'आमच्या कामावर विश्वास ठेवणाऱ्यांचे अनुभव' : 'Trusted by Ambitious Founders and Teams'}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {config.testimonials.map((test) => {
            const quote = lang === 'mr' ? test.quoteMr : test.quote;
            const role = lang === 'mr' ? test.roleMr : test.role;

            return (
              <div
                key={test.id}
                className="flex flex-col justify-between rounded-xl border border-neutral-900 bg-neutral-900/40 p-8"
              >
                <div>
                  <Quote className="h-6 w-6 text-neutral-600 mb-4" />
                  <p className="text-base leading-relaxed text-neutral-200">
                    "{quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-neutral-800/80 pt-4">
                  <div className="font-semibold text-white text-sm">{test.author}</div>
                  <div className="text-xs text-neutral-400">
                    {role} <span aria-hidden="true">·</span> {test.company}
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
