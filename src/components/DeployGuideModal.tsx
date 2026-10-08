import React, { useState } from 'react';
import { Language } from '../types';
import {
  X,
  Copy,
  Check,
  ExternalLink,
  Globe,
  Code2,
  Play,
  Github,
  Cloud,
  Layers,
  ArrowRight
} from 'lucide-react';

interface DeployGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onApplyCustomHtml?: (html: string) => void;
  currentCustomHtml?: string;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({
  isOpen,
  onClose,
  lang,
  onApplyCustomHtml,
  currentCustomHtml = ''
}) => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'existingCode' | 'platforms'>('existingCode');
  const [copiedLink, setCopiedLink] = useState(false);
  const [pastedCode, setPastedCode] = useState(currentCustomHtml);
  const [previewActive, setPreviewActive] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  if (!isOpen) return null;

  const liveUrl = 'https://ais-pre-s2akcswp7imlsak7mropmi-74527984428.asia-east1.run.app';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(liveUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(cmd);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const handleRunPastedCode = () => {
    if (onApplyCustomHtml) {
      onApplyCustomHtml(pastedCode);
    }
    setPreviewActive(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
      <div className="relative flex max-h-[90vh] w-full max-w-4xl flex-col rounded-2xl border border-neutral-800 bg-neutral-950 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-emerald-500/10 p-2 text-emerald-400">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                {lang === 'mr' ? 'वेबसाईट डिप्लॉयमेंट आणि लॉन्च हब' : 'Website Deployment & Launch Hub'}
              </h3>
              <p className="text-xs text-neutral-400">
                {lang === 'mr'
                  ? 'तुमचा स्वतःचा कोड इथे चालवा किंवा मोफत सर्व्हरवर डिप्लॉय करा'
                  : 'Run your existing code instantly or deploy to free production platforms'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-400 hover:bg-neutral-900 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab navigation */}
        <div className="flex border-b border-neutral-800 px-6 bg-neutral-900/40">
          <button
            onClick={() => setActiveTab('existingCode')}
            className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-semibold transition-colors ${
              activeTab === 'existingCode'
                ? 'border-white text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>{lang === 'mr' ? '१. तुमचा कोड इथे चालवा (Paste Code)' : '1. Run Existing Code'}</span>
          </button>

          <button
            onClick={() => setActiveTab('cloud')}
            className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-semibold transition-colors ${
              activeTab === 'cloud'
                ? 'border-white text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Cloud className="h-4 w-4" />
            <span>{lang === 'mr' ? '२. तुमची थेट लाईव्ह लिंक (Live URL)' : '2. Instant Live URL'}</span>
          </button>

          <button
            onClick={() => setActiveTab('platforms')}
            className={`flex items-center gap-2 border-b-2 py-3.5 px-4 text-xs font-semibold transition-colors ${
              activeTab === 'platforms'
                ? 'border-white text-white'
                : 'border-transparent text-neutral-400 hover:text-neutral-200'
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>{lang === 'mr' ? '३. Vercel / Netlify वर कसे टाकावे' : '3. Vercel & Netlify Guide'}</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-6 space-y-6 flex-1">
          {/* TAB 1: Paste Existing Code */}
          {activeTab === 'existingCode' && (
            <div className="space-y-5">
              <div className="rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-4">
                <h4 className="text-sm font-semibold text-white">
                  {lang === 'mr'
                    ? '💡 तुमच्याकडील वेबसाईटचा कोड इथे पेस्ट करा!'
                    : '💡 Paste your existing website code here!'}
                </h4>
                <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                  {lang === 'mr'
                    ? 'जर तुमच्याकडे HTML, CSS, JavaScript फाईल्स असतील, तर खाली कोड टाका आणि "लाईव्ह चालवा" वर क्लिक करा. किंवा चॅटमध्ये मला तुमच्या फाईल्स सांगा, मी लगेच त्या या ॲपमध्ये सेटअप करून देतो!'
                    : 'If you have an HTML, CSS, or JS file, paste the markup below and click "Run Code Live". Or paste the files in our chat and I will integrate them directly!'}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-neutral-300">
                    {lang === 'mr' ? 'तुमचा HTML / CSS / JS कोड:' : 'Your HTML / CSS / JS code:'}
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      setPastedCode(
                        lang === 'mr'
                          ? `<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="UTF-8">
  <title>माझा नवा प्रोजेक्ट</title>
  <style>
    body { font-family: sans-serif; background: #0f172a; color: white; text-align: center; padding: 50px 20px; }
    h1 { color: #38bdf8; font-size: 2.5rem; }
    p { font-size: 1.2rem; color: #94a3b8; max-width: 600px; margin: 0 auto; }
    .btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #38bdf8; color: #0f172a; font-weight: bold; border-radius: 8px; text-decoration: none; }
  </style>
</head>
<body>
  <h1>माझी पहिली वेबसाईट यशस्वीरित्या चालली! 🚀</h1>
  <p>हा माझा कस्टम कोड आहे जो इथे लाईव्ह रेंडर होत आहे.</p>
  <a href="#" class="btn">अधिक माहिती</a>
</body>
</html>`
                          : `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Custom Web App</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #09090b; color: #fafafa; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; box-sizing: border-box; text-align: center; }
    h1 { font-size: 3rem; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 0.5rem; background: linear-gradient(to right, #ffffff, #a1a1aa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    p { font-size: 1.15rem; color: #a1a1aa; max-width: 580px; line-height: 1.6; margin-bottom: 2rem; }
    .badge { display: inline-block; padding: 6px 14px; background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.2); border-radius: 9999px; color: #34d399; font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem; }
    .cta-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; background: #ffffff; color: #09090b; font-weight: 700; border-radius: 10px; text-decoration: none; transition: transform 0.2s, opacity 0.2s; box-shadow: 0 10px 25px -5px rgba(255,255,255,0.1); }
    .cta-btn:hover { opacity: 0.9; transform: translateY(-1px); }
  </style>
</head>
<body>
  <div class="badge">● Live & Deployed</div>
  <h1>My Web Project is Live! 🚀</h1>
  <p>This is my custom website running directly in the browser. You can replace this HTML with your own code, components, or styles.</p>
  <a href="#" class="cta-btn">Explore Features &rarr;</a>
</body>
</html>`
                      );
                    }}
                    className="text-xs text-indigo-400 hover:text-indigo-300 font-medium"
                  >
                    {lang === 'mr' ? 'नमुना कोड लोड करा (Load Sample)' : 'Load Sample Template'}
                  </button>
                </div>

                <textarea
                  rows={9}
                  value={pastedCode}
                  onChange={(e) => setPastedCode(e.target.value)}
                  placeholder={
                    lang === 'mr'
                      ? 'उदा. <html><head><style>...</style></head><body><h1>माझी वेबसाईट</h1>...</body></html>'
                      : 'Paste your HTML code here...'
                  }
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-900 p-4 font-mono text-xs text-neutral-200 placeholder-neutral-600 focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleRunPastedCode}
                  className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-neutral-950 transition-all hover:bg-neutral-200 active:scale-95"
                >
                  <Play className="h-4 w-4 fill-neutral-950" />
                  <span>{lang === 'mr' ? 'हा कोड लाईव्ह चालवा' : 'Run & Preview Code'}</span>
                </button>

                {pastedCode && (
                  <button
                    type="button"
                    onClick={() => {
                      setPastedCode('');
                      if (onApplyCustomHtml) onApplyCustomHtml('');
                      setPreviewActive(false);
                    }}
                    className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white"
                  >
                    {lang === 'mr' ? 'रीसेट करा' : 'Clear'}
                  </button>
                )}
              </div>

              {previewActive && pastedCode && (
                <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
                  <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-4 py-2">
                    <span className="font-mono text-xs text-neutral-400">
                      {lang === 'mr' ? 'लाईव्ह सँडबॉक्स प्रिव्ह्यू' : 'Live Sandbox Preview'}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono">Running</span>
                  </div>
                  <iframe
                    title="Code Preview"
                    srcDoc={pastedCode}
                    className="h-64 w-full bg-white"
                    sandbox="allow-scripts"
                  />
                </div>
              )}
            </div>
          )}

          {/* TAB 2: Instant Cloud URL */}
          {activeTab === 'cloud' && (
            <div className="space-y-6">
              <div className="rounded-xl border border-emerald-900/50 bg-emerald-950/20 p-5">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                  <Check className="h-4 w-4" />
                  <span>
                    {lang === 'mr'
                      ? 'अभिनंदन! तुमची वेबसाईट आधीच इंटरनेटवर लाईव्ह आहे!'
                      : 'Great news: Your website is ALREADY deployed live on Cloud Run!'}
                  </span>
                </div>
                <p className="mt-2 text-xs text-neutral-300 leading-relaxed">
                  {lang === 'mr'
                    ? 'या ॲपमधील कोणतीही वेबसाईट किंवा बदल आपोआप खालील लिंकवर २४/७ लाईव्ह असतात. तुम्ही ही लिंक कोणालाही पाठवू शकता.'
                    : 'Every edit in this workspace is permanently hosted on Google Cloud Run. You can share this URL with your clients, friends, or interviewers immediately.'}
                </p>

                <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    readOnly
                    value={liveUrl}
                    className="flex-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-xs font-mono text-white focus:outline-none select-all"
                  />
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3.5 py-2 text-xs font-bold text-neutral-950 hover:bg-emerald-400 transition-colors whitespace-nowrap"
                    >
                      {copiedLink ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      <span>{copiedLink ? (lang === 'mr' ? 'कॉपी झाले!' : 'Copied!') : (lang === 'mr' ? 'लिंक कॉपी करा' : 'Copy Link')}</span>
                    </button>
                    <a
                      href={liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2 text-xs font-medium text-white hover:bg-neutral-800 transition-colors whitespace-nowrap"
                    >
                      <span>{lang === 'mr' ? 'उघडा' : 'Open'}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-neutral-900 bg-neutral-900/50 p-5">
                  <h4 className="text-sm font-bold text-white mb-2">
                    {lang === 'mr' ? 'कस्टम डोमेन (.com, .in) कसे जोडायचे?' : 'How to connect a Custom Domain?'}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lang === 'mr'
                      ? 'जर तुमच्याकडे GoDaddy, Hostinger किंवा Namecheap वरून खरेदी केलेले डोमेन (उदा. mybusiness.com) असेल, तर तुम्ही DNS Settings मध्ये CNAME रेकॉर्ड जोडू शकता.'
                      : 'If you have a domain from GoDaddy, Hostinger, or Namecheap, you can point a CNAME DNS record to route directly to your site.'}
                  </p>
                </div>

                <div className="rounded-xl border border-neutral-900 bg-neutral-900/50 p-5">
                  <h4 className="text-sm font-bold text-white mb-2">
                    {lang === 'mr' ? 'मोफत SSL (HTTPS) सुरक्षा' : 'Free Auto SSL Certificate'}
                  </h4>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {lang === 'mr'
                      ? 'सर्व ट्रॅफिक HTTPS द्वारे आपोआप सुरक्षित केले जाते. कोणत्याही अतिरिक्त कॉन्फिगरेशनची गरज नाही.'
                      : 'End-to-end HTTPS encryption is pre-configured and managed automatically with zero downtime.'}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Platforms Guide */}
          {activeTab === 'platforms' && (
            <div className="space-y-5">
              {/* Option A: Vercel */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-white text-base">Vercel</span>
                    <span className="rounded bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-300">
                      {lang === 'mr' ? 'सर्वात सोपे आणि मोफत' : 'Easiest & Free'}
                    </span>
                  </div>
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300"
                  >
                    vercel.com <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-xs text-neutral-300 mb-3">
                  {lang === 'mr'
                    ? 'फक्त १ मिनिटात डिप्लॉय करण्यासाठी तुमच्या टर्मिनलमध्ये खालील कमांड चालवा:'
                    : 'To deploy in 1 minute using the terminal, run:'}
                </p>
                <div className="flex items-center justify-between rounded-lg bg-neutral-950 p-3 font-mono text-xs text-emerald-400 border border-neutral-800">
                  <code>npx vercel</code>
                  <button
                    type="button"
                    onClick={() => handleCopyCommand('npx vercel')}
                    className="text-neutral-400 hover:text-white"
                  >
                    {copiedCommand === 'npx vercel' ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                  </button>
                </div>
                
                {/* Step by step prompts */}
                <div className="mt-3 rounded-lg border border-neutral-800 bg-neutral-950/90 p-3 text-[11px] font-mono text-neutral-300 space-y-1.5">
                  <div className="text-neutral-500 font-semibold mb-1">
                    {lang === 'mr' ? 'टर्मिनलमध्ये येणारे ५ सोपे प्रश्न (फक्त Enter दाबा):' : 'Terminal Prompts Walkthrough (just press Enter):'}
                  </div>
                  <div><span className="text-emerald-400">?</span> Set up and deploy? <span className="text-neutral-400">[Y/n]</span> <span className="text-yellow-400">&rarr; Press Enter (Y)</span></div>
                  <div><span className="text-emerald-400">?</span> Which scope do you want to deploy to? <span className="text-yellow-400">&rarr; Press Enter</span></div>
                  <div><span className="text-emerald-400">?</span> Link to existing project? <span className="text-neutral-400">[y/N]</span> <span className="text-yellow-400">&rarr; Press Enter (N)</span></div>
                  <div><span className="text-emerald-400">?</span> What's your project's name? <span className="text-yellow-400">&rarr; Press Enter</span></div>
                  <div><span className="text-emerald-400">?</span> In which directory is your code located? <span className="text-yellow-400">&rarr; Press Enter</span></div>
                  <div className="text-emerald-400 pt-1">✅ Deployed to https://your-app.vercel.app in 60s!</div>
                </div>

                <p className="mt-2 text-[11px] text-neutral-400">
                  {lang === 'mr'
                    ? 'किंवा GitHub वर कोड पुश करा आणि Vercel डॅशबोर्डवरून "Import Repository" निवडा.'
                    : 'Or push your code to GitHub and select "Import Repository" on the Vercel dashboard.'}
                </p>
              </div>

              {/* Option B: Netlify */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-white text-base">Netlify Drop</span>
                    <span className="rounded bg-neutral-800 px-2 py-0.5 text-[10px] font-mono text-neutral-300">
                      Drag & Drop
                    </span>
                  </div>
                  <a
                    href="https://app.netlify.com/drop"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300"
                  >
                    app.netlify.com/drop <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {lang === 'mr'
                    ? 'तुमच्या फोल्डरमध्ये `npm run build` चालवा, आणि तयार झालेले `dist` फोल्डर थेट netlify.com/drop वर ड्रॅग करा. तुमची वेबसाईट लगेच लाईव्ह होईल!'
                    : 'Run `npm run build`, then simply drag and drop the `dist` folder onto netlify.com/drop for instant hosting.'}
                </p>
              </div>

              {/* Option C: GitHub Pages */}
              <div className="rounded-xl border border-neutral-800 bg-neutral-900/70 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Github className="h-4 w-4 text-neutral-300" />
                  <span className="font-display font-bold text-white text-sm">GitHub Pages</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {lang === 'mr'
                    ? 'तुमच्या GitHub Repo मध्ये जा > Settings > Pages निवडा > "Branch: main / root" सिलेक्ट करा > Save वर क्लिक करा.'
                    : 'Go to your repository Settings > Pages > Select "Deploy from a branch" > choose main branch / root folder.'}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="border-t border-neutral-800 px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-neutral-950">
          <p className="text-xs text-neutral-400 text-center sm:text-left">
            {lang === 'mr'
              ? '💬 तुमच्या प्रोजेक्टचे नाव किंवा फाईल्स मला चॅटमध्ये सांगा, मी थेट इथे कोड करून देतो!'
              : '💬 Tell me your project details in the chat and I can integrate it right here!'}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-lg bg-neutral-800 px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors"
          >
            {lang === 'mr' ? 'बंद करा' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
