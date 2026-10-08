import { WebsiteConfig } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_modern_workspace_1791486149504.jpg';
export const PROJECT_PLATFORM_IMAGE = '/src/assets/images/project_showcase_platform_1791486165782.jpg';
export const PROJECT_COMMERCE_IMAGE = '/src/assets/images/project_mobile_commerce_1791486176220.jpg';

export const DEFAULT_CONFIG: WebsiteConfig = {
  brandName: 'KreativStudio',
  brandNameMr: 'क्रेएटिव्ह स्टुडिओ',
  tagline: 'High-Performance Web Engineering & Digital Design',
  taglineMr: 'अत्याधुनिक वेब डिझाइन आणि डिजिटल सोल्यूशन्स',
  heroHeadline: 'Crafting Distinctive Digital Experiences That Scale',
  heroHeadlineMr: 'तुमच्या व्यवसायासाठी सर्वोत्तम, जलद आणि आधुनिक वेबसाईट',
  heroSubheadline: 'We design and develop bespoke web applications, e-commerce platforms, and brand experiences with uncompromising speed and visual elegance.',
  heroSubheadlineMr: 'आम्ही व्यावसायिक कंपन्या, दुकाने आणि ब्रँड्ससाठी उच्च दर्जाच्या वेबसाइट्स आणि ॲप्स तयार करतो. तुमची ऑनलाईन ओळख अधिक प्रभावी बनवा.',
  primaryCtaText: 'Start Your Project',
  primaryCtaTextMr: 'प्रकल्प सुरू करा',
  secondaryCtaText: 'View Case Studies',
  secondaryCtaTextMr: 'आमचे काम पहा',
  theme: 'violet',
  contactEmail: 'contact@kreativstudio.dev',
  contactPhone: '+91 98765 43210',
  location: 'Pune & Mumbai, India',
  locationMr: 'पुणे आणि मुंबई, महाराष्ट्र',
  services: [
    {
      id: 'srv-1',
      num: '01',
      title: 'Modern Web & App Development',
      titleMr: 'आधुनिक वेब व ॲप डेव्हलपमेंट',
      description: 'Ultra-fast, responsive web applications engineered with React, TypeScript, and modern edge infrastructure.',
      descriptionMr: 'अल्ट्रा-फास्ट आणि मोबाईल-फ्रेंडली वेब ॲप्लिकेशन्स जे सर्व स्क्रीन्सवर जलद आणि सुरळीत चालतात.',
      deliverables: ['Custom Single Page Apps', 'Design Systems & UI Kits', 'API Integrations'],
      deliverablesMr: ['कस्टम वेब ॲप्स', 'डिझाइन सिस्टीम्स', 'सुरक्षित डेटा API जोडणी']
    },
    {
      id: 'srv-2',
      num: '02',
      title: 'UI/UX & Brand Architecture',
      titleMr: 'UI/UX आणि ब्रँड डिझाइन',
      description: 'Intentional visual systems, typographic craft, and conversion-focused customer journeys that command authority.',
      descriptionMr: 'आकर्षक व्हिज्युअल मांडणी, सुटसुटीत युझर इंटरफेस आणि ग्राहकांना आकर्षित करणारी सुलभ रचना.',
      deliverables: ['Interactive Prototypes', 'Design Tokens & Palettes', 'Accessibility Audits'],
      deliverablesMr: ['इंटरॲक्टिव्ह प्रोटोटाइप्स', 'रंग व फॉन्ट सिस्टीम', 'मोबाईल सुलभता']
    },
    {
      id: 'srv-3',
      num: '03',
      title: 'Performance & Deployment Strategy',
      titleMr: 'पर्फॉर्मन्स आणि क्लाउड होस्टिंग',
      description: 'Sub-second load speeds, edge caching, zero-downtime deployment pipelines, and search engine dominance.',
      descriptionMr: '१ सेकंदापेक्षा जलद लोडिंग, गुगल SEO ऑप्टिमायझेशन आणि सुरक्षित क्लाउड सर्व्हरवर २४/७ होस्टिंग.',
      deliverables: ['Core Web Vitals 99+', 'Automated CI/CD Pipelines', 'Global CDN Setup'],
      deliverablesMr: ['उच्च Google रँकिंग', 'स्वयंचलित डिप्लॉयमेंट', 'ग्लोबल CDN सुरक्षा']
    }
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Aria Productivity OS',
      titleMr: 'आरिया वर्कस्पेस प्लॅटफॉर्म',
      category: 'SaaS Platform',
      categoryMr: 'क्लाउड सॉफ्टवेअर',
      impactMetric: '+184% User Engagement',
      impactMetricMr: '+१८४% युझर ॲक्टिव्हिटी',
      description: 'A focused, distraction-free web workspace engineered for distributed product engineering teams with real-time state synchronization.',
      descriptionMr: 'आधुनिक रिमोट टीम्ससाठी बनवलेले हाय-स्पीड टास्क मॅनेजमेंट आणि प्रोजेक्ट ट्रॅकिंग प्लॅटफॉर्म.',
      image: PROJECT_PLATFORM_IMAGE,
      tags: ['React', 'TypeScript', 'Tailwind', 'Real-time'],
      client: 'Aria Technologies',
      year: '2026'
    },
    {
      id: 'proj-2',
      title: 'Aurora Curated Goods',
      titleMr: 'ऑरोरा हेरिटेज ई-कॉमर्स',
      category: 'Artisanal Commerce',
      categoryMr: 'लक्झरी ई-कॉमर्स',
      impactMetric: '3.4x Sales Revenue',
      impactMetricMr: '३.४ पट अधिक विक्री',
      description: 'An editorial commerce store celebrating handcrafted stationery and home decor with smooth animations and sub-second checkout.',
      descriptionMr: 'हस्तनिर्मित उत्पादनांसाठी बनवलेले अतिशय सुंदर आणि सोपे ऑनलाईन शॉपिंग पोर्टल.',
      image: PROJECT_COMMERCE_IMAGE,
      tags: ['E-Commerce', 'Mobile First', 'Payments Integration'],
      client: 'Aurora Living Collective',
      year: '2026'
    }
  ],
  testimonials: [
    {
      id: 'test-1',
      quote: 'KreativStudio completely transformed our online presence. Our conversion rate doubled in the first 45 days after launch.',
      quoteMr: 'या नवीन वेबसाईटमुळे आमच्या व्यवसायाची ओळख पूर्णपणे बदलली. पहिल्याच महिन्यात ग्राहकांच्या ऑर्डर्स दुप्पट झाल्या!',
      author: 'Sameer Joshi',
      role: 'Founder & CEO',
      roleMr: 'संस्थापक आणि संचालक',
      company: 'Zenith Logistics'
    },
    {
      id: 'test-2',
      quote: 'The craftsmanship, speed, and mobile responsiveness exceeded every benchmark we set. Truly exceptional work.',
      quoteMr: 'वेबसाईटचे डिझाइन, गती आणि मोबाईलवरील सोपेपणा अप्रतिम आहे. आमच्या संपूर्ण टीमला हे काम खूप आवडले.',
      author: 'Priya Kulkarni',
      role: 'Head of Product',
      roleMr: 'प्रॉडक्ट हेड',
      company: 'Nova Digital Health'
    }
  ],
  stats: [
    {
      value: '99.9%',
      label: 'Uptime Reliability',
      labelMr: 'सर्व्हर अपटाईम',
      subtext: 'Built on high availability edge infrastructure',
      subtextMr: 'सुरक्षित क्लाउड इन्फ्रास्ट्रक्चर'
    },
    {
      value: '< 0.4s',
      label: 'Global First Paint',
      labelMr: 'फास्ट लोडिंग स्पीड',
      subtext: 'Optimized asset delivery & lightweight code',
      subtextMr: 'अल्ट्रा-फास्ट अनुभव'
    },
    {
      value: '50+',
      label: 'Launched Deployments',
      labelMr: 'यशस्वी प्रोजेक्ट्स',
      subtext: 'Across SaaS, commerce, and media',
      subtextMr: 'विविध उद्योग आणि ब्रँड्ससाठी'
    },
    {
      value: '100%',
      label: 'Client Satisfaction',
      labelMr: 'समाधानी ग्राहक',
      subtext: 'Dedicated technical collaboration',
      subtextMr: 'उत्कृष्ट तांत्रिक सहाय्य'
    }
  ]
};

export const PRESET_TEMPLATES: Record<string, Partial<WebsiteConfig>> = {
  agency: {
    brandName: 'KreativStudio',
    brandNameMr: 'क्रेएटिव्ह स्टुडिओ',
    tagline: 'High-Performance Web Engineering & Digital Design',
    taglineMr: 'अत्याधुनिक वेब डिझाइन आणि डिजिटल सोल्यूशन्स',
    heroHeadline: 'Crafting Distinctive Digital Experiences That Scale',
    heroHeadlineMr: 'तुमच्या व्यवसायासाठी सर्वोत्तम, जलद आणि आधुनिक वेबसाईट',
    heroSubheadline: 'We design and develop bespoke web applications, e-commerce platforms, and brand experiences with uncompromising speed and visual elegance.',
    heroSubheadlineMr: 'आम्ही व्यावसायिक कंपन्या, दुकाने आणि ब्रँड्ससाठी उच्च दर्जाच्या वेबसाइट्स आणि ॲप्स तयार करतो. तुमची ऑनलाईन ओळख अधिक प्रभावी बनवा.',
    theme: 'violet'
  },
  portfolio: {
    brandName: 'Siddharth Arkashi',
    brandNameMr: 'सिद्धार्थ आर्काशी',
    tagline: 'Senior Full-Stack Engineer & UI Specialist',
    taglineMr: 'वेब डेव्हलपर आणि युझर इंटरफेस डिझायनर',
    heroHeadline: 'Building Scalable Web Products with Modern Craft',
    heroHeadlineMr: 'उत्कृष्ट तंत्रज्ञान आणि आधुनिक डिझाइनने बनवलेले वेब ॲप्लिकेशन्स',
    heroSubheadline: 'Specialized in React, TypeScript, high-performance web systems, and intuitive user experiences for ambitious global brands.',
    heroSubheadlineMr: 'वेब डेव्हलपमेंट, रिॲक्ट, क्लाउड ॲप्लिकेशन्स आणि सुंदर डिजिटल उत्पादने तयार करण्यात विशेष प्राविण्य.',
    theme: 'emerald'
  },
  business: {
    brandName: 'Apex Enterprises',
    brandNameMr: 'एपेक्स एंटरप्रायझेस',
    tagline: 'Enterprise Solutions & Digital Transformation',
    taglineMr: 'उद्योग सोल्यूशन्स आणि डिजिटल व्यवस्थापन',
    heroHeadline: 'Accelerate Your Business With Next-Gen Technology',
    heroHeadlineMr: 'तुमच्या व्यवसायाला द्या आधुनिक डिजिटल तंत्रज्ञानाची गती',
    heroSubheadline: 'Trusted technical partner for fast-growing businesses, offering reliable automation, web portals, and client management systems.',
    heroSubheadlineMr: 'व्यवसायाच्या वाढीसाठी खात्रीशीर ऑटोमेशन, कस्टम सॉफ्टवेअर आणि मजबूत ग्राहक व्यवस्थापन सिस्टीम.',
    theme: 'amber'
  }
};
