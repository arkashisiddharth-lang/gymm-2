import React, { useState } from 'react';
import { WebsiteConfig, Language } from '../types';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  config: WebsiteConfig;
  lang: Language;
  onNewMessage: (msg: { name: string; email: string; service: string; message: string; date: string }) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  config,
  lang,
  onNewMessage
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: config.services[0]?.title || 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(config.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg(lang === 'mr' ? 'कृपया सर्व आवश्यक रकाने भरा.' : 'Please fill out all required fields.');
      return;
    }

    if (!formData.email.includes('@')) {
      setErrorMsg(lang === 'mr' ? 'कृपया योग्य ईमेल आयडी टाका.' : 'Please enter a valid email address.');
      return;
    }

    setErrorMsg('');
    onNewMessage({
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    setSubmitted(true);
  };

  const locationText = lang === 'mr' ? config.locationMr : config.location;

  return (
    <section id="contact" className="border-t border-neutral-900 bg-neutral-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left info column */}
          <div className="lg:col-span-5">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              {lang === 'mr' ? 'संपर्क साधा' : 'Let’s Build Together'}
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl [text-wrap:balance]">
              {lang === 'mr'
                ? 'तुमच्या नव्या वेबसाईट किंवा ॲपबद्दल आजच चर्चा करा'
                : 'Ready to elevate your digital presence?'}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {lang === 'mr'
                ? 'खालील फॉर्म भरा किंवा थेट ईमेल/कॉल करा. आम्ही २४ तासांच्या आत प्रतिसाद देऊ.'
                : 'Send your requirements, project timeline, or existing code. We provide technical consultation and rapid delivery.'}
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-neutral-900 bg-neutral-900/60 p-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-neutral-400" />
                  <span className="text-sm font-medium text-white">{config.contactEmail}</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="rounded p-1.5 text-neutral-400 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-neutral-900 bg-neutral-900/60 p-4">
                <Phone className="h-4 w-4 text-neutral-400" />
                <span className="text-sm font-medium text-white">{config.contactPhone}</span>
              </div>

              <div className="flex items-center gap-3 rounded-lg border border-neutral-900 bg-neutral-900/60 p-4">
                <MapPin className="h-4 w-4 text-neutral-400" />
                <span className="text-sm font-medium text-white">{locationText}</span>
              </div>
            </div>
          </div>

          {/* Right form column */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400" />
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">
                    {lang === 'mr' ? 'संदेश यशस्वीरित्या पाठवला गेला!' : 'Message Sent Successfully!'}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    {lang === 'mr'
                      ? 'धन्यवाद! आम्ही लवकरच तुमच्याशी संपर्क साधू.'
                      : 'Thank you for reaching out. We will get back to you within 24 hours.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', service: config.services[0]?.title || '', message: '' });
                    }}
                    className="mt-6 rounded-lg border border-neutral-700 bg-neutral-800 px-5 py-2.5 text-xs font-semibold text-white hover:bg-neutral-700 transition-colors"
                  >
                    {lang === 'mr' ? 'दुसरा संदेश पाठवा' : 'Send Another Message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="rounded-lg border border-rose-900/60 bg-rose-950/40 p-3 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {lang === 'mr' ? 'तुमचे नाव *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'mr' ? 'उदा. राहुल कदम' : 'e.g. Alex Morgan'}
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {lang === 'mr' ? 'ईमेल पत्ता *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {lang === 'mr' ? 'सेवेचा प्रकार' : 'Interested Service'}
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white focus:border-white focus:outline-none"
                    >
                      {config.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {lang === 'mr' ? s.titleMr : s.title}
                        </option>
                      ))}
                      <option value="Custom Existing Project">
                        {lang === 'mr' ? 'माझा स्वतःचा प्रोजेक्ट डिप्लॉय करा (Existing Project Deploy)' : 'Deploy My Existing Code'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {lang === 'mr' ? 'प्रकल्पाबद्दल थोडक्यात माहिती *' : 'Project Details or Requirements *'}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'mr'
                          ? 'तुमची वेबसाईट कशासाठी आहे किंवा कोणता कोड डिप्लॉय करायचा आहे ते सांगा...'
                          : 'Describe your project scope, requirements, or what you want deployed...'
                      }
                      className="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-white focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-semibold text-neutral-950 shadow-sm transition-transform active:scale-[0.99] hover:bg-neutral-200"
                  >
                    <Send className="h-4 w-4" />
                    <span>{lang === 'mr' ? 'संदेश पाठवा' : 'Submit Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
