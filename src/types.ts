export type Language = 'mr' | 'en';

export type ColorTheme = 'violet' | 'emerald' | 'amber' | 'slate' | 'rose';

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  titleMr: string;
  description: string;
  descriptionMr: string;
  deliverables: string[];
  deliverablesMr: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  titleMr: string;
  category: string;
  categoryMr: string;
  impactMetric: string;
  impactMetricMr: string;
  description: string;
  descriptionMr: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  quoteMr: string;
  author: string;
  role: string;
  roleMr: string;
  company: string;
}

export interface StatItem {
  value: string;
  label: string;
  labelMr: string;
  subtext: string;
  subtextMr: string;
}

export interface WebsiteConfig {
  brandName: string;
  brandNameMr: string;
  tagline: string;
  taglineMr: string;
  heroHeadline: string;
  heroHeadlineMr: string;
  heroSubheadline: string;
  heroSubheadlineMr: string;
  primaryCtaText: string;
  primaryCtaTextMr: string;
  secondaryCtaText: string;
  secondaryCtaTextMr: string;
  theme: ColorTheme;
  contactEmail: string;
  contactPhone: string;
  location: string;
  locationMr: string;
  services: ServiceItem[];
  projects: ProjectItem[];
  testimonials: TestimonialItem[];
  stats: StatItem[];
}
