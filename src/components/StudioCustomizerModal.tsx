import React from 'react';
import { WebsiteConfig, Language, ColorTheme } from '../types';
import { PRESET_TEMPLATES } from '../data/defaultContent';
import { X, Palette, Sparkles, Check } from 'lucide-react';

interface StudioCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: WebsiteConfig;
  onChangeConfig: (newConfig: WebsiteConfig) => void;
  lang: Language;
}

export const StudioCustomizerModal: React.FC<StudioCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onChangeConfig,
  lang
}) => {
  if (!isOpen) return null;

  const handleApplyPreset = (key: string) => {
    const preset = PRESET_TEMPLATES[key];
    if (preset) {
      onChangeConfig({
        ...config,
        ...preset
      });
    }
  };

  const handleThemeChange = (theme: ColorTheme) => {
    onChangeConfig({
      ...config,
      theme
    });
  };

  const themes: { id: ColorTheme; label: string; colorClass: string }[] = [
    { id: 'violet', label: 'Violet Indigo', colorClass: 'bg-indigo-500' },
    { id: 'emerald', label: 'Emerald Forest', colorClass: 'bg-emerald-500' },
    { id: 'amber', label: 'Warm Amber', colorClass: 'bg-amber-500' },
    { id: 'slate', label: 'Minimal Slate', colorClass: 'bg-slate-400' },
    { id: 'rose', label: 'Sunset Rose', colorClass: 'bg-rose-500' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-2xl flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <div className="flex items-center gap-2.5">
            <Sparkles className="h-5 w-5 text-indigo-400" />
            <h3 className="font-display text-lg font-bold text-white">
              {lang === 'mr' ? 'वेबसाईट कस्टमाइझर (Live Studio)' : 'Live Website Customizer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-neutral-400 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Preset Archetypes */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              {lang === 'mr' ? 'रेडीमेड टेम्पलेट्स निवडा:' : 'Choose a Preset Archetype:'}
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleApplyPreset('agency')}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-left hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
              >
                <div className="text-xs font-bold text-white">
                  {lang === 'mr' ? 'क्रिएटिव्ह एजन्सी' : 'Agency Studio'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {lang === 'mr' ? 'डिझाइन आणि टेक' : 'Design & Tech'}
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleApplyPreset('portfolio')}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-left hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
              >
                <div className="text-xs font-bold text-white">
                  {lang === 'mr' ? 'पर्सनल पोर्टफोलिओ' : 'Portfolio'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {lang === 'mr' ? 'फ्रीलान्सर / कोडर' : 'Developer & UI'}
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleApplyPreset('business')}
                className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-3 text-left hover:border-neutral-600 hover:bg-neutral-900 transition-colors"
              >
                <div className="text-xs font-bold text-white">
                  {lang === 'mr' ? 'बिझनेस / कंपनी' : 'Enterprise'}
                </div>
                <div className="text-[11px] text-neutral-400 mt-0.5">
                  {lang === 'mr' ? 'व्यवसाय व सेवा' : 'B2B Solutions'}
                </div>
              </button>
            </div>
          </div>

          {/* Color Themes */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              <div className="flex items-center gap-1.5">
                <Palette className="h-3.5 w-3.5" />
                <span>{lang === 'mr' ? 'रंग थीम (Color Palette):' : 'Color Accent Palette:'}</span>
              </div>
            </label>
            <div className="flex flex-wrap gap-2.5">
              {themes.map((t) => {
                const isActive = config.theme === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleThemeChange(t.id)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                      isActive
                        ? 'border-white bg-neutral-900 text-white'
                        : 'border-neutral-800 bg-neutral-950 text-neutral-400 hover:text-white'
                    }`}
                  >
                    <span className={`h-3 w-3 rounded-full ${t.colorClass}`} />
                    <span>{t.label}</span>
                    {isActive && <Check className="h-3 w-3 text-white" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Brand Name Input */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                {lang === 'mr' ? 'ब्रँडचे नाव (English):' : 'Brand Name (English):'}
              </label>
              <input
                type="text"
                value={config.brandName}
                onChange={(e) => onChangeConfig({ ...config, brandName: e.target.value })}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                {lang === 'mr' ? 'ब्रँडचे नाव (मराठी):' : 'Brand Name (Marathi):'}
              </label>
              <input
                type="text"
                value={config.brandNameMr}
                onChange={(e) => onChangeConfig({ ...config, brandNameMr: e.target.value })}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white focus:border-white focus:outline-none"
              />
            </div>
          </div>

          {/* Headline Inputs */}
          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">
              {lang === 'mr' ? 'मुख्य हेडलाईन (Headline):' : 'Hero Headline:'}
            </label>
            <input
              type="text"
              value={lang === 'mr' ? config.heroHeadlineMr : config.heroHeadline}
              onChange={(e) => {
                if (lang === 'mr') {
                  onChangeConfig({ ...config, heroHeadlineMr: e.target.value });
                } else {
                  onChangeConfig({ ...config, heroHeadline: e.target.value });
                }
              }}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white focus:border-white focus:outline-none"
            />
          </div>

          {/* Subheadline */}
          <div>
            <label className="text-xs font-semibold text-neutral-300 block mb-1">
              {lang === 'mr' ? 'उपशीर्षक (Subheadline):' : 'Hero Subheadline:'}
            </label>
            <textarea
              rows={3}
              value={lang === 'mr' ? config.heroSubheadlineMr : config.heroSubheadline}
              onChange={(e) => {
                if (lang === 'mr') {
                  onChangeConfig({ ...config, heroSubheadlineMr: e.target.value });
                } else {
                  onChangeConfig({ ...config, heroSubheadline: e.target.value });
                }
              }}
              className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-neutral-200 focus:border-white focus:outline-none resize-none"
            />
          </div>

          {/* Contact Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                {lang === 'mr' ? 'संपर्क ईमेल:' : 'Contact Email:'}
              </label>
              <input
                type="text"
                value={config.contactEmail}
                onChange={(e) => onChangeConfig({ ...config, contactEmail: e.target.value })}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-neutral-300 block mb-1">
                {lang === 'mr' ? 'फोन नंबर:' : 'Contact Phone:'}
              </label>
              <input
                type="text"
                value={config.contactPhone}
                onChange={(e) => onChangeConfig({ ...config, contactPhone: e.target.value })}
                className="w-full rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs text-white focus:border-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-emerald-400 font-mono">
            {lang === 'mr' ? '✓ बदल आपोआप लाईव्ह सेव्ह होतात' : '✓ Real-time Live Preview'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-white px-5 py-2 text-xs font-bold text-neutral-950 hover:bg-neutral-200"
          >
            {lang === 'mr' ? 'पूर्ण झाले (Done)' : 'Apply & Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
