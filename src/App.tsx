/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { DEFAULT_CONFIG } from './data/defaultContent';
import { WebsiteConfig, Language, ProjectItem, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { StatsSection } from './components/StatsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DeployGuideModal } from './components/DeployGuideModal';
import { StudioCustomizerModal } from './components/StudioCustomizerModal';
import { ProjectModal } from './components/ProjectModal';
import { Inbox, Code, Sparkles, X } from 'lucide-react';

export default function App() {
  const [config, setConfig] = useState<WebsiteConfig>(DEFAULT_CONFIG);
  // Default to English as requested
  const [lang, setLang] = useState<Language>('en');
  const [isDeployOpen, setIsDeployOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [customHtml, setCustomHtml] = useState<string>('');
  const [messages, setMessages] = useState<
    Array<{ name: string; email: string; service: string; message: string; date: string }>
  >([]);
  const [showInbox, setShowInbox] = useState(false);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'mr' ? 'en' : 'mr'));
  };

  const handleSelectService = (service: ServiceItem) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNewMessage = (msg: {
    name: string;
    email: string;
    service: string;
    message: string;
    date: string;
  }) => {
    setMessages((prev) => [msg, ...prev]);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-white selection:text-neutral-950">
      {/* Top Notification if Custom HTML is active */}
      {customHtml && (
        <div className="sticky top-0 z-50 flex items-center justify-between bg-indigo-950/90 px-4 py-2.5 text-xs text-indigo-200 backdrop-blur-md border-b border-indigo-800">
          <div className="flex items-center gap-2">
            <Code className="h-4 w-4 text-indigo-400" />
            <span>
              {lang === 'mr'
                ? 'तुमचा कस्टम कोड सध्या स्क्रीनवर रेंडर होत आहे!'
                : 'Custom user code is currently rendered below!'}
            </span>
          </div>
          <button
            onClick={() => setCustomHtml('')}
            className="flex items-center gap-1 rounded bg-indigo-900 px-2 py-0.5 text-[11px] text-white hover:bg-indigo-800"
          >
            <X className="h-3 w-3" />
            <span>{lang === 'mr' ? 'मूळ वेबसाईटवर परत या' : 'Reset to Full Website'}</span>
          </button>
        </div>
      )}

      {/* If custom HTML is provided, display user's custom website */}
      {customHtml ? (
        <div className="flex-1 w-full bg-white">
          <iframe
            title="Custom User Website"
            srcDoc={customHtml}
            className="h-[calc(100vh-45px)] w-full border-none"
            sandbox="allow-scripts allow-forms allow-same-origin"
          />
        </div>
      ) : (
        <>
          {/* Main Website Structure */}
          <Navbar
            config={config}
            lang={lang}
            onToggleLang={handleToggleLang}
            onOpenStudio={() => setIsStudioOpen(true)}
            onOpenDeploy={() => setIsDeployOpen(true)}
          />

          <main className="flex-1">
            <HeroSection
              config={config}
              lang={lang}
              onOpenDeploy={() => setIsDeployOpen(true)}
              onOpenStudio={() => setIsStudioOpen(true)}
            />

            <ServicesSection
              config={config}
              lang={lang}
              onSelectService={handleSelectService}
            />

            <CaseStudiesSection
              config={config}
              lang={lang}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />

            <StatsSection config={config} lang={lang} />

            <TestimonialsSection config={config} lang={lang} />

            <ContactSection
              config={config}
              lang={lang}
              onNewMessage={handleNewMessage}
            />
          </main>

          <Footer
            config={config}
            lang={lang}
            onOpenDeploy={() => setIsDeployOpen(true)}
          />
        </>
      )}

      {/* Floating Action Bar for Quick Actions (Sticky Assistant) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {messages.length > 0 && (
          <button
            type="button"
            onClick={() => setShowInbox(true)}
            className="flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/95 px-3.5 py-2 text-xs font-semibold text-white shadow-xl hover:bg-neutral-800 backdrop-blur-md"
            title="View Form Inquiries"
          >
            <Inbox className="h-4 w-4 text-emerald-400" />
            <span>{messages.length}</span>
            <span className="hidden sm:inline">
              {lang === 'mr' ? 'मेसेजेस' : 'Inquiries'}
            </span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsDeployOpen(true)}
          className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-950/90 px-4 py-2.5 text-xs font-bold text-emerald-300 shadow-2xl hover:bg-emerald-900 transition-all backdrop-blur-md active:scale-95"
        >
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span>{lang === 'mr' ? '🚀 डिप्लॉय करा / कोड चालवा' : '🚀 Deploy & Code'}</span>
        </button>
      </div>

      {/* Modals */}
      <DeployGuideModal
        isOpen={isDeployOpen}
        onClose={() => setIsDeployOpen(false)}
        lang={lang}
        onApplyCustomHtml={(code) => setCustomHtml(code)}
        currentCustomHtml={customHtml}
      />

      <StudioCustomizerModal
        isOpen={isStudioOpen}
        onClose={() => setIsStudioOpen(false)}
        config={config}
        onChangeConfig={(newCfg) => setConfig(newCfg)}
        lang={lang}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      {/* Inquiries Inbox Modal */}
      {showInbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="flex max-h-[80vh] w-full max-w-lg flex-col rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <div className="flex items-center gap-2">
                <Inbox className="h-5 w-5 text-emerald-400" />
                <h3 className="font-display text-base font-bold text-white">
                  {lang === 'mr' ? 'प्राप्त झालेले संदेश (Inquiries)' : 'Received Inquiries'}
                </h3>
              </div>
              <button
                onClick={() => setShowInbox(false)}
                className="rounded p-1 text-neutral-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {messages.length === 0 ? (
                <p className="text-center text-xs text-neutral-400 py-6">
                  {lang === 'mr' ? 'अद्याप कोणतेही संदेश नाहीत.' : 'No messages yet.'}
                </p>
              ) : (
                messages.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 text-xs space-y-1.5"
                  >
                    <div className="flex items-center justify-between font-semibold text-white">
                      <span>{m.name}</span>
                      <span className="font-mono text-[10px] text-neutral-500">{m.date}</span>
                    </div>
                    <div className="text-neutral-400">{m.email} · <span className="text-indigo-400">{m.service}</span></div>
                    <p className="text-neutral-200 mt-2 bg-neutral-950/60 p-2.5 rounded-lg border border-neutral-900">
                      {m.message}
                    </p>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-neutral-800 pt-3 text-right">
              <button
                onClick={() => setShowInbox(false)}
                className="rounded-lg bg-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700"
              >
                {lang === 'mr' ? 'बंद करा' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
