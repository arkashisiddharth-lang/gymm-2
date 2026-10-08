import React, { useState } from 'react';
import { WebsiteConfig, Language } from '../types';
import { SlidersHorizontal, Rocket, Globe2, Menu, X } from 'lucide-react';

interface NavbarProps {
  config: WebsiteConfig;
  lang: Language;
  onToggleLang: () => void;
  onOpenStudio: () => void;
  onOpenDeploy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  lang,
  onToggleLang,
  onOpenStudio,
  onOpenDeploy
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const brand = lang === 'mr' ? config.brandNameMr : config.brandName;

  const navLinks = [
    { label: lang === 'mr' ? 'सेवा' : 'Services', href: '#services' },
    { label: lang === 'mr' ? 'प्रकल्प' : 'Projects', href: '#projects' },
    { label: lang === 'mr' ? 'वैशिष्ट्ये' : 'Impact', href: '#impact' },
    { label: lang === 'mr' ? 'प्रशंसा' : 'Reviews', href: '#reviews' },
    { label: lang === 'mr' ? 'संपर्क' : 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand title, single line text wordmark */}
        <a
          href="#"
          className="font-display text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90 whitespace-nowrap"
        >
          {brand}
        </a>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={onToggleLang}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/80 px-2.5 py-1.5 text-xs font-medium text-neutral-300 transition-colors hover:border-neutral-700 hover:text-white"
            title={lang === 'mr' ? 'Switch to English' : 'मराठीमध्ये पहा'}
          >
            <Globe2 className="h-3.5 w-3.5 text-neutral-400" />
            <span className="whitespace-nowrap font-mono">{lang === 'mr' ? 'EN' : 'मराठी'}</span>
          </button>

          {/* Live Studio Customizer */}
          <button
            type="button"
            onClick={onOpenStudio}
            className="flex items-center gap-1.5 rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-1.5 text-xs font-medium text-neutral-200 transition-colors hover:border-neutral-700 hover:bg-neutral-800 whitespace-nowrap"
          >
            <SlidersHorizontal className="h-3.5 w-3.5 text-neutral-400" />
            <span className="hidden sm:inline">{lang === 'mr' ? 'कस्टमाइझ करा' : 'Customize'}</span>
            <span className="sm:hidden">{lang === 'mr' ? 'बदला' : 'Edit'}</span>
          </button>

          {/* Deploy & Share Button */}
          <button
            type="button"
            onClick={onOpenDeploy}
            className="flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-semibold text-neutral-950 transition-transform active:scale-95 hover:bg-neutral-200 whitespace-nowrap shadow-sm"
          >
            <Rocket className="h-3.5 w-3.5 text-neutral-950" />
            <span>{lang === 'mr' ? 'डिप्लॉय आणि शेअर' : 'Deploy & Share'}</span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-1.5 text-neutral-400 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-neutral-800 bg-neutral-950 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 text-sm font-medium text-neutral-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
