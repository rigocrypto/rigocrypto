export type Language = 'en' | 'es' | 'fr' | 'pt'

export const defaultLanguage: Language = 'en'
export const supportedLanguages: Language[] = ['en', 'es', 'fr', 'pt']

export const languageLabels: Record<Language, string> = {
  en: 'EN',
  es: 'ES',
  fr: 'FR',
  pt: 'PT',
}

export const languageNames: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
}

type ServiceItem = {
  accent: string
  icon: string
  title: string
  description: string
  points: string[]
  ctaLabel: string
}

type ProcessItem = {
  number: string
  icon: string
  title: string
  text: string
}

type WhyItem = {
  icon: string
  title: string
  text: string
}

type PortfolioItem = {
  title: string
  text: string
  stack: string
  impact: string
}

type FaqItem = {
  question: string
  answer: string
}

type StatItem = {
  value: string
  label: string
}

type TechCategory = {
  label: string
  items: string[]
}

type Translation = {
  brand: {
    label: string
    tagline: string
    disclaimer: string
    homeAriaLabel: string
  }
  nav: {
    primaryAriaLabel: string
    services: string
    solutions: string
    process: string
    portfolio: string
    about: string
    faq: string
    contact: string
    cta: string
    languageSwitcherLabel: string
  }
  hero: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    description: string
    trustAriaLabel: string
    trustPoints: string[]
    primaryCta: string
    secondaryCta: string
    viewServicesCta: string
    secureCheckoutCta: string
    videoAriaLabel: string
    videoFallback: string
    blockchainLabel: string
    stackCards: string[]
    badges: string[]
    badgesAriaLabel: string
  }
  web2web3: {
    eyebrow: string
    title: string
    description: string
    items: string[]
  }
  services: {
    eyebrow: string
    title: string
    subtitle: string
    learnMoreAriaPrefix: string
    items: ServiceItem[]
    additionalItems: ServiceItem[]
  }
  readiness: {
    eyebrow: string
    title: string
    subtitle: string
    items: WhyItem[]
  }
  process: {
    eyebrow: string
    title: string
    subtitle: string
    steps: ProcessItem[]
  }
  why: {
    eyebrow: string
    titleLead: string
    titleAccent: string
    items: WhyItem[]
  }
  tech: {
    eyebrow: string
    title: string
    categories: TechCategory[]
  }
  industries: {
    eyebrow: string
    title: string
    items: string[]
    note: string
  }
  portfolio: {
    eyebrow: string
    title: string
    stackLabel: string
    impactLabel: string
    items: PortfolioItem[]
  }
  faq: {
    eyebrow: string
    title: string
    subtitle: string
    items: FaqItem[]
    additionalItems: FaqItem[]
  }
  pricing: {
    titleLead: string
    titleAccent: string
    titleTail: string
    description: string
    trust: string
    primaryCta: string
    secondaryCta: string
  }
  cta: {
    titleLead: string
    titleAccent: string
    titleTail: string
    description: string
    trust: string
    primaryCta: string
    secondaryCta: string
    payCta: string
    statsAriaLabel: string
    stats: StatItem[]
  }
  footer: {
    description: string
    services: string
    process: string
    pricing: string
    faq: string
    contact: string
    bookCalendly: string
    secureStripeCheckout: string
    copyright: string
  }
}

export const translations: Record<Language, Translation> = {
  en: {
    brand: {
      label: 'GMX LABS',
      tagline: 'Web2 • Web3 • AI • Blockchain • DApps • Mobile Apps • Websites',
      disclaimer: 'Independent development studio. Not affiliated with GMX Protocol.',
      homeAriaLabel: 'GMX Labs home',
    },
    nav: {
      primaryAriaLabel: 'Primary',
      services: 'Services',
      solutions: 'Solutions',
      process: 'Process',
      portfolio: 'Portfolio',
      about: 'About Us',
      faq: 'FAQ',
      contact: 'Contact',
      cta: "Let's Talk",
      languageSwitcherLabel: 'Select language',
    },
    hero: {
      eyebrow: 'Web2 • Web3 • AI • Blockchain • DApps • Mobile Apps • Websites',
      titleLead: 'Build faster. Launch smarter.',
      titleAccent: 'Scale globally.',
      description: 'GMX-LABS helps startups, creators, and businesses turn ideas into websites, mobile-ready experiences, Web3 apps, AI automations, blockchain integrations, and launch-ready digital products.',
      trustAriaLabel: 'Service highlights',
      trustPoints: ['Web2 and Web3 delivery', 'AI and blockchain integration', 'Launch-ready execution'],
      primaryCta: 'Book a Consultation',
      secondaryCta: 'Get Technical Assessment',
      viewServicesCta: 'Explore Services',
      secureCheckoutCta: 'Start with Secure Checkout',
      videoAriaLabel: 'Web3 showcase video',
      videoFallback: 'Your browser does not support the video tag.',
      blockchainLabel: 'Blockchain',
      stackCards: ['Web2', 'Web3', 'AI', 'Blockchain'],
      badges: ['Web2', 'Web3', 'AI', 'Blockchain', 'DApps', 'Mobile Apps', 'Websites', 'Stripe', 'Calendly'],
      badgesAriaLabel: 'Service areas',
    },
    web2web3: {
      eyebrow: 'From Web2 to Web3 + AI',
      title: 'From Web2 to Web3 + AI',
      description: 'GMX-LABS connects traditional digital experiences with the next generation of AI, blockchain, payments, mobile interfaces, and decentralized applications.',
      items: [
        'Websites and landing pages',
        'Mobile-first app experiences',
        'AI automation layers',
        'Blockchain integrations',
        'DApps and wallet flows',
        'Stripe payment paths',
        'Booking and lead capture systems',
      ],
    },
    services: {
      eyebrow: 'Core Capabilities',
      title: 'What We Build',
      subtitle: 'Specialized engineering for teams building in Web3 and AI, with full-stack product execution.',
      learnMoreAriaPrefix: 'Learn more about',
      items: [
        {
          accent: 'service-card-blue',
          icon: 'W',
          title: 'Web Development',
          description: 'Modern responsive websites and landing pages optimized for desktop, mobile, SEO, performance, and conversion.',
          points: [
            'Landing pages and business websites',
            'SEO setup and metadata optimization',
            'Responsive and mobile-first UI',
            'Conversion-focused sections and CTAs',
            'Performance and load optimization',
          ],
          ctaLabel: 'Start Your Site',
        },
        {
          accent: 'service-card-purple',
          icon: 'B',
          title: 'Web3 and Blockchain Development',
          description: 'Blockchain-focused support for decentralized products, wallet-based flows, token utilities, and Web3 interfaces.',
          points: [
            'DApps and wallet connectivity',
            'Smart contract integration',
            'DeFi flows and token systems',
            'NFT infrastructure',
            'Web3 UI and on-chain UX',
          ],
          ctaLabel: 'Build in Web3',
        },
        {
          accent: 'service-card-cyan',
          icon: 'A',
          title: 'AI Automation',
          description: 'AI-powered systems that help businesses automate workflows, improve productivity, and create intelligent user experiences.',
          points: [
            'AI workflows and agents',
            'Intelligent chat systems',
            'Business automation',
            'AI integrations and pipelines',
            'Productivity tooling',
          ],
          ctaLabel: 'Automate with AI',
        },
      ],
      additionalItems: [
        {
          accent: 'service-card-purple',
          icon: 'M',
          title: 'Mobile Web and App Experiences',
          description: 'Mobile-first digital experiences that feel fast, responsive, and app-like across devices.',
          points: [
            'Mobile web apps and PWA-ready experiences',
            'Cross-platform responsive UI',
            'App-style landing pages',
            'Touch-optimized interfaces',
          ],
          ctaLabel: 'Go Mobile',
        },
        {
          accent: 'service-card-cyan',
          icon: 'P',
          title: 'Payment and Booking Integrations',
          description: 'Integrated business flows for checkout, scheduling, lead capture, and conversion.',
          points: [
            'Stripe checkout integration',
            'Calendly scheduling setup',
            'Contact and lead capture flows',
            'Payment-ready landing pages',
          ],
          ctaLabel: 'Set Up Payments',
        },
        {
          accent: 'service-card-blue',
          icon: 'L',
          title: 'Technical Launch Support',
          description: 'End-to-end launch support from metadata, QA, deployment, production checks, and go-live readiness.',
          points: [
            'SEO and metadata validation',
            'Launch checklist and smoke testing',
            'Deployment documentation',
            'Pre-launch QA review',
          ],
          ctaLabel: 'Plan Your Launch',
        },
      ],
    },
    readiness: {
      eyebrow: 'Trust and Launch Readiness',
      title: 'Built for Clarity Before Go-Live',
      subtitle: 'GMX Labs keeps launch-critical assets organized and reviewable across metadata, technical checks, and conversion flows.',
      items: [
        { icon: 'SEO', title: 'SEO and Discoverability', text: 'Canonical URL, Open Graph tags, Twitter cards, robots.txt, and sitemap.xml are present for launch.' },
        { icon: 'SEC', title: 'Security Hardening', text: 'Security-conscious external links, lint and build checks, and launch-risk documentation reduce avoidable production mistakes.' },
        { icon: 'QA', title: 'Governance Visibility', text: 'QA and launch checklist files are tracked in-repo so release readiness is explicit, auditable, and easy to review.' },
        { icon: 'UX', title: 'Conversion-Focused UX', text: 'Users can choose a path that matches intent: view services, book on Calendly, or start securely through Stripe checkout.' },
      ],
    },
    process: {
      eyebrow: 'Our Process',
      title: 'How We Work',
      subtitle: 'A structured path from idea to deployment with security and execution discipline.',
      steps: [
        { number: '1.', icon: '💡', title: 'Discover', text: 'We analyze goals, technical requirements, and market context.' },
        { number: '2.', icon: '✍️', title: 'Plan', text: 'We define architecture, security model, and delivery roadmap.' },
        { number: '3.', icon: '</>', title: 'Build', text: 'We develop, test, and integrate with engineering precision.' },
        { number: '4.', icon: '🚀', title: 'Launch', text: 'We deploy your solution and ensure a clean go-live.' },
        { number: '5.', icon: '📈', title: 'Grow', text: 'We optimize, scale, and support continuous product growth.' },
      ],
    },
    why: {
      eyebrow: 'Why GMX Labs',
      titleLead: 'Built for serious',
      titleAccent: 'Web3 delivery',
      items: [
        { icon: '🧠', title: 'DeFi-native engineering', text: 'Built by engineers with hands-on smart contract and DeFi delivery experience.' },
        { icon: '🛡️', title: 'Security-first mindset', text: 'We design like defenders and think like attackers from day one.' },
        { icon: '🏗️', title: 'Production-ready systems', text: 'We ship maintainable systems, not fragile prototypes.' },
        { icon: '⚡', title: 'Fast without compromise', text: 'Rapid execution with auditability and code quality preserved.' },
      ],
    },
    tech: {
      eyebrow: 'Technical Credibility',
      title: 'Our Stack',
      categories: [
        { label: 'Smart Contracts', items: ['Solidity', 'Foundry', 'Hardhat'] },
        { label: 'Blockchain', items: ['EVM', 'Arbitrum', 'Polygon', 'Solana'] },
        { label: 'Backend', items: ['Node.js', 'TypeScript', 'Python'] },
        { label: 'Frontend', items: ['React', 'Next.js', 'Vite'] },
        { label: 'AI and ML', items: ['Python', 'TensorFlow', 'LangChain'] },
        { label: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker'] },
      ],
    },
    industries: {
      eyebrow: 'Industries We Serve',
      title: 'Who We Help',
      items: ['Startups and Founders', 'DeFi and Web3 Protocols', 'AI and SaaS Companies', 'Creators and Online Businesses', 'Fintech and Payments', 'Agencies and Freelancers'],
      note: 'Focused support for teams where technical execution directly drives business outcomes.',
    },
    portfolio: {
      eyebrow: 'Featured Work',
      title: 'Portfolio Highlights',
      stackLabel: 'Stack:',
      impactLabel: 'Impact:',
      items: [
        {
          title: 'DeFi Trading Intelligence Platform',
          text: 'Real-time on-chain analytics pipelines supporting faster strategy decisions for protocol teams.',
          stack: 'Solidity, Node.js, React, The Graph',
          impact: 'Reduced decision latency by streaming DEX metrics in real time.',
        },
        {
          title: 'Tokenized Asset Infrastructure',
          text: 'Smart contract architecture and backend services for compliant tokenized ecosystems.',
          stack: 'Solidity, TypeScript, React, AWS',
          impact: 'Accelerated launch readiness with secure contract lifecycle and monitoring.',
        },
        {
          title: 'AI Operations Engine',
          text: 'Agent-powered automation workflows for delivery, reporting, and operational support.',
          stack: 'Python, LangChain, Node.js, Vercel',
          impact: 'Lowered manual operational load and improved execution consistency.',
        },
      ],
    },
    faq: {
      eyebrow: 'DeFi and Web3 Development FAQs',
      title: 'Questions Founders Ask Before Building',
      subtitle: 'Clear answers for teams planning Web3 apps, smart contract audits, and AI-enabled blockchain products.',
      items: [
        {
          question: 'What does a DeFi development agency do?',
          answer: 'A DeFi development agency designs, builds, and deploys decentralized finance products such as trading systems, staking modules, lending flows, and protocol dashboards.',
        },
        {
          question: 'How much does smart contract development cost?',
          answer: 'Cost depends on scope, chain complexity, and testing depth. Projects range from focused MVP contracts to full production-grade contract suites.',
        },
        {
          question: 'What is included in a smart contract audit?',
          answer: 'Typical scope includes code review, threat modeling, vulnerability testing, exploit simulation, and prioritized remediation guidance.',
        },
        {
          question: 'How long does it take to build a Web3 app?',
          answer: 'A focused MVP can launch in weeks. Larger products require phased delivery across architecture, development, testing, and deployment.',
        },
        {
          question: 'Can you integrate AI into blockchain products?',
          answer: 'Yes. We build AI layers for on-chain analytics, risk monitoring, workflow automation, and product operations.',
        },
      ],
      additionalItems: [
        {
          question: 'Can I book a consultation before paying?',
          answer: 'Yes. Start with a strategy call on Calendly, then proceed to Stripe checkout when scope is clear.',
        },
        {
          question: 'Are payments secure?',
          answer: 'Yes. Payments are processed through Stripe using a secure hosted checkout page.',
        },
        {
          question: 'How long does a typical project take?',
          answer: 'Timeline depends on scope. Focused landing page projects can move quickly, while broader systems take phased delivery.',
        },
        {
          question: 'What services does GMX-LABS provide?',
          answer: 'GMX-LABS provides Web2 and Web3 development, AI automation, blockchain integrations, DApps, mobile web experiences, Stripe payment setup, Calendly booking, and technical launch support.',
        },
        {
          question: 'Can GMX-LABS help with both Web2 and Web3?',
          answer: 'Yes. We work across Web2 websites and Web3 blockchain products, helping teams bridge traditional digital experiences with decentralized technologies.',
        },
        {
          question: 'Do you build DApps?',
          answer: 'Yes. We design and develop decentralized applications with wallet connectivity, smart contract integration, and Web3 user interfaces.',
        },
        {
          question: 'Do you support mobile-first experiences?',
          answer: 'Yes. All projects are built mobile-first. We also deliver PWA-ready and app-style experiences for mobile web.',
        },
        {
          question: 'Is the project launch-ready?',
          answer: 'The project is in Release Candidate stage. Final public launch depends on production smoke testing, Lighthouse checks, and launch checklist sign-off.',
        },
      ],
    },
    pricing: {
      titleLead: 'Ready to start with',
      titleAccent: 'secure checkout',
      titleTail: '?',
      description: 'Use Stripe to reserve your project slot and kick off delivery.',
      trust: 'Fast onboarding. Clear scope. Online digital delivery.',
      primaryCta: 'Start Project',
      secondaryCta: 'Schedule a Free Consultation',
    },
    cta: {
      titleLead: 'Building in Web3 or',
      titleAccent: 'AI',
      titleTail: '?',
      description: 'Let us review your architecture and define a practical implementation plan.',
      trust: 'Technical support for founders, CTOs, and product teams shipping high-stakes systems.',
      primaryCta: 'Book Strategy Call',
      secondaryCta: 'Get Project Estimate',
      payCta: 'Start Your Project',
      statsAriaLabel: 'Company stats',
      stats: [
        { value: '50+', label: 'Projects Delivered' },
        { value: '30+', label: 'Happy Clients' },
        { value: '4+', label: 'Years Experience' },
      ],
    },
    footer: {
      description: 'Specialized digital engineering for Web3 and AI products.',
      services: 'Services',
      process: 'Process',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      bookCalendly: 'Book on Calendly',
      secureStripeCheckout: 'Secure Stripe Checkout',
      copyright: 'Copyright 2026 GMX Labs',
    },
  },
  es: {
    brand: {
      label: 'GMX LABS',
      tagline: 'Web2 • Web3 • IA • Blockchain • DApps • Apps Móviles • Sitios Web',
      disclaimer: 'Estudio de desarrollo independiente. Sin afiliacion con GMX Protocol.',
      homeAriaLabel: 'Inicio de GMX Labs',
    },
    nav: {
      primaryAriaLabel: 'Principal',
      services: 'Servicios',
      solutions: 'Soluciones',
      process: 'Proceso',
      portfolio: 'Portafolio',
      about: 'Nosotros',
      faq: 'FAQ',
      contact: 'Contacto',
      cta: 'Hablemos',
      languageSwitcherLabel: 'Seleccionar idioma',
    },
    hero: {
      eyebrow: 'Web2 • Web3 • IA • Blockchain • DApps • Apps Móviles • Sitios Web',
      titleLead: 'Construye más rápido. Lanza con inteligencia.',
      titleAccent: 'Escala globalmente.',
      description: 'GMX-LABS ayuda a startups, creadores y empresas a convertir ideas en sitios web, experiencias móviles, apps Web3, automatización con IA, integraciones blockchain y productos digitales listos para lanzar.',
      trustAriaLabel: 'Destacados del servicio',
      trustPoints: ['Entrega Web2 y Web3', 'Integración de IA y blockchain', 'Ejecución lista para lanzamiento'],
      primaryCta: 'Reservar consulta',
      secondaryCta: 'Solicitar evaluación técnica',
      viewServicesCta: 'Explorar servicios',
      secureCheckoutCta: 'Iniciar con pago seguro',
      videoAriaLabel: 'Video de muestra Web3',
      videoFallback: 'Tu navegador no soporta el video.',
      blockchainLabel: 'Blockchain',
      stackCards: ['Web2', 'Web3', 'IA', 'Blockchain'],
      badges: ['Web2', 'Web3', 'IA', 'Blockchain', 'DApps', 'Apps Móviles', 'Sitios Web', 'Stripe', 'Calendly'],
      badgesAriaLabel: 'Áreas de servicio',
    },
    web2web3: {
      eyebrow: 'De Web2 a Web3 + IA',
      title: 'De Web2 a Web3 + IA',
      description: 'GMX-LABS conecta experiencias digitales tradicionales con la nueva generación de IA, blockchain, pagos, interfaces móviles y aplicaciones descentralizadas.',
      items: [
        'Sitios web y landing pages',
        'Experiencias móviles y app-first',
        'Capas de automatización con IA',
        'Integraciones blockchain',
        'DApps y flujos de wallet',
        'Pasarelas de pago con Stripe',
        'Sistemas de reserva y captura de leads',
      ],
    },
    services: {
      eyebrow: 'Capacidades Core',
      title: 'Lo Que Construimos',
      subtitle: 'Ingenieria especializada para equipos que construyen en Web3 e IA.',
      learnMoreAriaPrefix: 'Conocer mas sobre',
      items: [
        {
          accent: 'service-card-blue',
          icon: 'W',
          title: 'Desarrollo Web',
          description: 'Sitios web y landing pages modernas, optimizadas para escritorio, móvil, SEO, rendimiento y conversión.',
          points: [
            'Landing pages y sitios corporativos',
            'Optimización SEO y metadatos',
            'UI responsiva y mobile-first',
            'Secciones enfocadas en conversión',
            'Optimización de rendimiento y carga',
          ],
          ctaLabel: 'Iniciar sitio',
        },
        {
          accent: 'service-card-purple',
          icon: 'B',
          title: 'Desarrollo Web3 y Blockchain',
          description: 'Soporte blockchain para productos descentralizados, flujos basados en wallet, utilidades de token e interfaces Web3.',
          points: [
            'DApps y conectividad de wallet',
            'Integración de smart contracts',
            'Flujos DeFi y sistemas de tokens',
            'Infraestructura NFT',
            'UI Web3 y UX on-chain',
          ],
          ctaLabel: 'Construir en Web3',
        },
        {
          accent: 'service-card-cyan',
          icon: 'A',
          title: 'Automatización con IA',
          description: 'Sistemas con IA que ayudan a empresas a automatizar flujos, mejorar la productividad y crear experiencias inteligentes.',
          points: [
            'Workflows y agentes de IA',
            'Sistemas de chat inteligente',
            'Automatización de negocio',
            'Integraciones y pipelines de IA',
            'Herramientas de productividad',
          ],
          ctaLabel: 'Automatizar con IA',
        },
      ],
      additionalItems: [
        {
          accent: 'service-card-purple',
          icon: 'M',
          title: 'Experiencias Móviles y App Web',
          description: 'Experiencias digitales mobile-first que se sienten rápidas, responsivas y similares a apps nativas.',
          points: [
            'Apps web móviles y experiencias PWA',
            'UI responsiva multiplataforma',
            'Landing pages estilo app',
            'Interfaces optimizadas para toque',
          ],
          ctaLabel: 'Ir a móvil',
        },
        {
          accent: 'service-card-cyan',
          icon: 'P',
          title: 'Integraciones de Pago y Reservas',
          description: 'Flujos de negocio integrados para checkout, agendamiento, captura de leads y conversión.',
          points: [
            'Integración de checkout Stripe',
            'Configuración de agenda con Calendly',
            'Flujos de contacto y captura de leads',
            'Landing pages listas para pago',
          ],
          ctaLabel: 'Configurar pagos',
        },
        {
          accent: 'service-card-blue',
          icon: 'L',
          title: 'Soporte Técnico de Lanzamiento',
          description: 'Soporte de punta a punta: metadatos, QA, despliegue, verificaciones de producción y preparación para go-live.',
          points: [
            'Validación SEO y metadatos',
            'Checklist de lanzamiento y smoke testing',
            'Documentación de despliegue',
            'Revisión QA pre-lanzamiento',
          ],
          ctaLabel: 'Planificar lanzamiento',
        },
      ],
    },
    readiness: {
      eyebrow: 'Confianza y Preparacion de Lanzamiento',
      title: 'Claridad total antes del go-live',
      subtitle: 'GMX Labs mantiene activos criticos de lanzamiento organizados y auditables en metadatos, controles tecnicos y flujo de conversion.',
      items: [
        { icon: 'SEO', title: 'SEO y Descubribilidad', text: 'URL canonica, Open Graph, tarjetas de Twitter, robots.txt y sitemap.xml estan presentes para lanzamiento.' },
        { icon: 'SEC', title: 'Endurecimiento de Seguridad', text: 'Enlaces externos seguros, checks de lint/build y documentacion de riesgos reducen errores evitables en produccion.' },
        { icon: 'QA', title: 'Visibilidad de Gobernanza', text: 'Los archivos de QA y checklist de lanzamiento se gestionan en el repo para una revision clara y trazable.' },
        { icon: 'UX', title: 'UX enfocada en conversion', text: 'El usuario puede elegir su ruta: ver servicios, reservar en Calendly o iniciar con checkout seguro en Stripe.' },
      ],
    },
    process: {
      eyebrow: 'Nuestro Proceso',
      title: 'Como Trabajamos',
      subtitle: 'Ruta clara desde idea hasta despliegue con disciplina tecnica.',
      steps: [
        { number: '1.', icon: '💡', title: 'Descubrir', text: 'Analizamos objetivos, requerimientos tecnicos y contexto de negocio.' },
        { number: '2.', icon: '✍️', title: 'Planificar', text: 'Definimos arquitectura, modelo de seguridad y roadmap de entrega.' },
        { number: '3.', icon: '</>', title: 'Construir', text: 'Desarrollamos, probamos e integramos con precision.' },
        { number: '4.', icon: '🚀', title: 'Lanzar', text: 'Desplegamos y aseguramos una salida limpia a produccion.' },
        { number: '5.', icon: '📈', title: 'Escalar', text: 'Optimizamos, escalamos y acompanamos evolucion continua.' },
      ],
    },
    why: {
      eyebrow: 'Por Que GMX Labs',
      titleLead: 'Especialistas en',
      titleAccent: 'entrega Web3',
      items: [
        { icon: '🧠', title: 'Ingenieria DeFi real', text: 'Equipo con experiencia real en smart contracts y sistemas DeFi.' },
        { icon: '🛡️', title: 'Seguridad como prioridad', text: 'Diseniamos como defensores y pensamos como atacantes.' },
        { icon: '🏗️', title: 'Sistemas de produccion', text: 'Entregamos sistemas mantenibles, no prototipos fragiles.' },
        { icon: '⚡', title: 'Rapidez con calidad', text: 'Ejecucion veloz sin sacrificar auditabilidad ni calidad de codigo.' },
      ],
    },
    tech: {
      eyebrow: 'Credibilidad Tecnica',
      title: 'Nuestro Stack',
      categories: [
        { label: 'Smart Contracts', items: ['Solidity', 'Foundry', 'Hardhat'] },
        { label: 'Blockchain', items: ['EVM', 'Arbitrum', 'Polygon', 'Solana'] },
        { label: 'Backend', items: ['Node.js', 'TypeScript', 'Python'] },
        { label: 'Frontend', items: ['React', 'Next.js', 'Vite'] },
        { label: 'IA y ML', items: ['Python', 'TensorFlow', 'LangChain'] },
        { label: 'Infraestructura', items: ['AWS', 'Vercel', 'Docker'] },
      ],
    },
    industries: {
      eyebrow: 'Industrias Que Atendemos',
      title: 'A Quien Ayudamos',
      items: ['Startups y Fundadores', 'Protocolos DeFi y Web3', 'Empresas de IA y SaaS', 'Creadores y Negocios Online', 'Fintech y Pagos', 'Agencias y Freelancers'],
      note: 'Nos enfocamos en verticales donde la ejecucion tecnica define el resultado de negocio.',
    },
    portfolio: {
      eyebrow: 'Trabajo Destacado',
      title: 'Portafolio Tecnico',
      stackLabel: 'Stack:',
      impactLabel: 'Impacto:',
      items: [
        {
          title: 'Plataforma de inteligencia DeFi',
          text: 'Pipelines on-chain en tiempo real para decisiones de estrategia de trading.',
          stack: 'Solidity, Node.js, React, The Graph',
          impact: 'Redujo latencia de decision con datos DEX en tiempo real.',
        },
        {
          title: 'Infraestructura de activos tokenizados',
          text: 'Arquitectura de contratos y backend para ecosistemas tokenizados.',
          stack: 'Solidity, TypeScript, React, AWS',
          impact: 'Acelero la preparación para el lanzamiento con trazabilidad y seguridad.',
        },
        {
          title: 'Motor de operaciones con IA',
          text: 'Automatizacion con agentes para operaciones y reporting tecnico.',
          stack: 'Python, LangChain, Node.js, Vercel',
          impact: 'Redujo carga manual y mejoro consistencia operativa.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQs DeFi y Web3',
      title: 'Preguntas Antes de Construir',
      subtitle: 'Respuestas claras para equipos que planean productos Web3 y auditorias de smart contracts.',
      items: [
        { question: 'Que hace una agencia DeFi?', answer: 'Disenia, construye y despliega productos financieros descentralizados como trading, staking, lending y dashboards de protocolo.' },
        { question: 'Cuanto cuesta desarrollar smart contracts?', answer: 'Depende del alcance, complejidad de la red y profundidad de testing. Va desde MVPs hasta suites completas para produccion.' },
        { question: 'Que incluye una auditoria de smart contracts?', answer: 'Revision de codigo, modelado de amenazas, pruebas de vulnerabilidades y plan priorizado de remediacion.' },
        { question: 'Cuanto tarda una app Web3?', answer: 'Un MVP puede lanzarse en semanas. Productos mayores requieren fases de arquitectura, desarrollo, pruebas y despliegue.' },
        { question: 'Pueden integrar IA en blockchain?', answer: 'Si. Implementamos IA para analitica on-chain, monitoreo de riesgo y automatizacion operativa.' },
      ],
      additionalItems: [
        {
          question: 'Puedo reservar una consulta antes de pagar?',
          answer: 'Si. Puedes comenzar con una llamada estrategica en Calendly y luego avanzar a Stripe cuando el alcance este claro.',
        },
        {
          question: 'Los pagos son seguros?',
          answer: 'Si. Los pagos se procesan con Stripe mediante un checkout seguro alojado.',
        },
        {
          question: 'Cuanto tarda un proyecto tipico?',
          answer: 'Depende del alcance. Una landing enfocada puede avanzar rapido, mientras proyectos amplios se entregan por fases.',
        },
        {
          question: 'Que servicios ofrece GMX-LABS?',
          answer: 'GMX-LABS ofrece desarrollo Web2 y Web3, automatizacion con IA, integraciones blockchain, DApps, experiencias moviles, Stripe, Calendly y soporte de lanzamiento.',
        },
        {
          question: 'Pueden ayudar con Web2 y Web3 al mismo tiempo?',
          answer: 'Si. Trabajamos tanto en sitios Web2 como en productos blockchain Web3, conectando experiencias digitales tradicionales con tecnologias descentralizadas.',
        },
        {
          question: 'Construyen DApps?',
          answer: 'Si. Disenamos y desarrollamos aplicaciones descentralizadas con conectividad de wallet, integracion de smart contracts e interfaces Web3.',
        },
        {
          question: 'Apoyan experiencias mobile-first?',
          answer: 'Si. Todos los proyectos se construyen con enfoque movil. Tambien entregamos experiencias PWA y estilo app para web movil.',
        },
        {
          question: 'El proyecto esta listo para lanzamiento?',
          answer: 'El proyecto esta en etapa Release Candidate. El lanzamiento publico depende de smoke testing en produccion, Lighthouse y firma del checklist.',
        },
      ],
    },
    pricing: {
      titleLead: 'Listo para empezar con',
      titleAccent: 'checkout seguro',
      titleTail: '?',
      description: 'Usa Stripe para reservar tu espacio de proyecto y comenzar la entrega.',
      trust: 'Onboarding rapido. Alcance claro. Entrega digital online.',
      primaryCta: 'Iniciar proyecto',
      secondaryCta: 'Agendar consulta gratuita',
    },
    cta: {
      titleLead: 'Construyendo en Web3 o',
      titleAccent: 'IA',
      titleTail: '?',
      description: 'Revisemos tu arquitectura y definamos un plan de implementacion claro.',
      trust: 'Soporte tecnico para fundadores, CTOs y equipos de producto.',
      primaryCta: 'Reservar llamada estrategica',
      secondaryCta: 'Solicitar estimacion',
      payCta: 'Iniciar proyecto',
      statsAriaLabel: 'Metricas de la compania',
      stats: [
        { value: '50+', label: 'Proyectos entregados' },
        { value: '30+', label: 'Clientes satisfechos' },
        { value: '4+', label: 'Anos de experiencia' },
      ],
    },
    footer: {
      description: 'Ingenieria digital especializada para productos Web3 e IA.',
      services: 'Servicios',
      process: 'Proceso',
      pricing: 'Precios',
      faq: 'FAQ',
      contact: 'Contacto',
      bookCalendly: 'Reservar en Calendly',
      secureStripeCheckout: 'Checkout seguro con Stripe',
      copyright: 'Copyright 2026 GMX Labs',
    },
  },
  fr: {
    brand: {
      label: 'GMX LABS',
      tagline: 'Web2 • Web3 • IA • Blockchain • DApps • Apps Mobiles • Sites Web',
      disclaimer: 'Studio independant. Sans affiliation avec GMX Protocol.',
      homeAriaLabel: 'Accueil GMX Labs',
    },
    nav: {
      primaryAriaLabel: 'Navigation principale',
      services: 'Services',
      solutions: 'Solutions',
      process: 'Processus',
      portfolio: 'Portfolio',
      about: 'A propos',
      faq: 'FAQ',
      contact: 'Contact',
      cta: 'Parlons-en',
      languageSwitcherLabel: 'Choisir la langue',
    },
    hero: {
      eyebrow: 'Web2 • Web3 • IA • Blockchain • DApps • Apps Mobiles • Sites Web',
      titleLead: 'Construisez plus vite. Lancez avec intelligence.',
      titleAccent: 'Passez à l’échelle mondiale.',
      description: 'GMX-LABS aide les startups, créateurs et entreprises à transformer leurs idées en sites web, expériences mobiles, apps Web3, automatisations IA, intégrations blockchain et produits numériques prêts à lancer.',
      trustAriaLabel: 'Points forts du service',
      trustPoints: ['Livraison Web2 et Web3', 'Intégration IA et blockchain', 'Exécution prête au lancement'],
      primaryCta: 'Réserver une consultation',
      secondaryCta: 'Demander une évaluation technique',
      viewServicesCta: 'Explorer les services',
      secureCheckoutCta: 'Démarrer avec paiement sécurisé',
      videoAriaLabel: 'Video de presentation Web3',
      videoFallback: 'Votre navigateur ne prend pas en charge la video.',
      blockchainLabel: 'Blockchain',
      stackCards: ['Web2', 'Web3', 'IA', 'Blockchain'],
      badges: ['Web2', 'Web3', 'IA', 'Blockchain', 'DApps', 'Apps Mobiles', 'Sites Web', 'Stripe', 'Calendly'],
      badgesAriaLabel: 'Domaines de service',
    },
    web2web3: {
      eyebrow: 'De Web2 vers Web3 + IA',
      title: 'De Web2 vers Web3 + IA',
      description: 'GMX-LABS connecte les expériences numériques traditionnelles avec la prochaine génération d IA, blockchain, paiements, interfaces mobiles et applications décentralisées.',
      items: [
        'Sites web et landing pages',
        'Expériences mobiles et app-first',
        'Couches d automatisation IA',
        'Intégrations blockchain',
        'DApps et flux wallet',
        'Parcours de paiement Stripe',
        'Systèmes de réservation et capture de leads',
      ],
    },
    services: {
      eyebrow: 'Capacites Principales',
      title: 'Ce Que Nous Construisons',
      subtitle: 'Ingenierie specialisee pour les equipes qui construisent en Web3 et IA.',
      learnMoreAriaPrefix: 'En savoir plus sur',
      items: [
        {
          accent: 'service-card-blue',
          icon: 'W',
          title: 'Développement Web',
          description: 'Sites web et landing pages modernes, optimisés pour bureau, mobile, SEO, performance et conversion.',
          points: [
            'Landing pages et sites d entreprise',
            'Optimisation SEO et métadonnées',
            'UI responsive et mobile-first',
            'Sections axées sur la conversion',
            'Optimisation des performances',
          ],
          ctaLabel: 'Démarrer le site',
        },
        {
          accent: 'service-card-purple',
          icon: 'B',
          title: 'Développement Web3 et Blockchain',
          description: 'Support blockchain pour produits décentralisés, flux wallet, utilitaires de tokens et interfaces Web3.',
          points: [
            'DApps et connectivité wallet',
            'Intégration de smart contracts',
            'Flux DeFi et systèmes de tokens',
            'Infrastructure NFT',
            'UI Web3 et UX on-chain',
          ],
          ctaLabel: 'Construire en Web3',
        },
        {
          accent: 'service-card-cyan',
          icon: 'A',
          title: 'Automatisation IA',
          description: 'Systèmes IA qui aident les entreprises à automatiser les workflows, améliorer la productivité et créer des expériences intelligentes.',
          points: [
            'Workflows et agents IA',
            'Systèmes de chat intelligents',
            'Automatisation métier',
            'Intégrations et pipelines IA',
            'Outils de productivité',
          ],
          ctaLabel: 'Automatiser avec l IA',
        },
      ],
      additionalItems: [
        {
          accent: 'service-card-purple',
          icon: 'M',
          title: 'Expériences Mobiles et App Web',
          description: 'Expériences numériques mobile-first rapides, responsives et semblables à des apps natives.',
          points: [
            'Apps web mobiles et expériences PWA',
            'UI responsive multiplateformes',
            'Landing pages style app',
            'Interfaces optimisées tactile',
          ],
          ctaLabel: 'Aller mobile',
        },
        {
          accent: 'service-card-cyan',
          icon: 'P',
          title: 'Intégrations Paiement et Réservation',
          description: 'Flux métier intégrés pour checkout, planification, capture de leads et conversion.',
          points: [
            'Intégration checkout Stripe',
            'Configuration agenda Calendly',
            'Flux de contact et capture de leads',
            'Landing pages prêtes au paiement',
          ],
          ctaLabel: 'Configurer les paiements',
        },
        {
          accent: 'service-card-blue',
          icon: 'L',
          title: 'Support Technique de Lancement',
          description: 'Support complet : métadonnées, QA, déploiement, vérifications de production et préparation au go-live.',
          points: [
            'Validation SEO et métadonnées',
            'Checklist de lancement et smoke testing',
            'Documentation de déploiement',
            'Revue QA pré-lancement',
          ],
          ctaLabel: 'Planifier le lancement',
        },
      ],
    },
    readiness: {
      eyebrow: 'Confiance et Preparation au Lancement',
      title: 'Clarte complete avant la mise en ligne',
      subtitle: 'GMX Labs garde les actifs critiques de lancement organises et auditables sur les metadonnees, controles techniques et parcours de conversion.',
      items: [
        { icon: 'SEO', title: 'SEO et Decouvrabilite', text: 'URL canonique, Open Graph, cartes Twitter, robots.txt et sitemap.xml sont en place pour le lancement.' },
        { icon: 'SEC', title: 'Renforcement de la Securite', text: 'Des liens externes securises, les verifications lint/build et la documentation des risques limitent les erreurs evitables en production.' },
        { icon: 'QA', title: 'Visibilite de Gouvernance', text: 'Les fichiers QA et checklist de lancement sont suivis dans le repo pour une revue claire et traçable.' },
        { icon: 'UX', title: 'UX orientee conversion', text: 'Les visiteurs choisissent leur parcours: voir les services, reserver sur Calendly ou commencer via checkout Stripe securise.' },
      ],
    },
    process: {
      eyebrow: 'Notre Processus',
      title: 'Comment Nous Travaillons',
      subtitle: 'Un parcours clair de l idee au deploiement avec discipline technique.',
      steps: [
        { number: '1.', icon: '💡', title: 'Decouvrir', text: 'Nous analysons objectifs, exigences techniques et contexte marche.' },
        { number: '2.', icon: '✍️', title: 'Planifier', text: 'Nous definissons architecture, modele de securite et roadmap.' },
        { number: '3.', icon: '</>', title: 'Construire', text: 'Nous developpons, testons et integrons avec precision.' },
        { number: '4.', icon: '🚀', title: 'Lancer', text: 'Nous deployons et assurons une mise en production propre.' },
        { number: '5.', icon: '📈', title: 'Evoluer', text: 'Nous optimisons, faisons evoluer et accompagnons votre croissance.' },
      ],
    },
    why: {
      eyebrow: 'Pourquoi GMX Labs',
      titleLead: 'Specialistes de',
      titleAccent: 'la livraison Web3',
      items: [
        { icon: '🧠', title: 'Ingenierie DeFi concrete', text: 'Equipe avec experience terrain en smart contracts et protocoles DeFi.' },
        { icon: '🛡️', title: 'Securite d abord', text: 'Nous concevons comme des defenseurs et pensons comme des attaquants.' },
        { icon: '🏗️', title: 'Systemes production', text: 'Nous livrons des systemes maintenables, pas des prototypes fragiles.' },
        { icon: '⚡', title: 'Rapide sans compromis', text: 'Execution rapide avec auditabilite et qualite de code.' },
      ],
    },
    tech: {
      eyebrow: 'Credibilite Technique',
      title: 'Notre Stack',
      categories: [
        { label: 'Smart Contracts', items: ['Solidity', 'Foundry', 'Hardhat'] },
        { label: 'Blockchain', items: ['EVM', 'Arbitrum', 'Polygon', 'Solana'] },
        { label: 'Backend', items: ['Node.js', 'TypeScript', 'Python'] },
        { label: 'Frontend', items: ['React', 'Next.js', 'Vite'] },
        { label: 'IA et ML', items: ['Python', 'TensorFlow', 'LangChain'] },
        { label: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker'] },
      ],
    },
    industries: {
      eyebrow: 'Secteurs Cibles',
      title: 'Qui Nous Aidons',
      items: ['Startups et Fondateurs', 'Protocoles DeFi et Web3', 'Entreprises IA et SaaS', 'Créateurs et Entrepreneurs', 'Fintech et Paiements', 'Agences et Indépendants'],
      note: 'Nous nous concentrons sur les verticales ou l execution technique determine le resultat business.',
    },
    portfolio: {
      eyebrow: 'Realisations',
      title: 'Portfolio Technique',
      stackLabel: 'Stack :',
      impactLabel: 'Impact :',
      items: [
        {
          title: 'Plateforme intelligence DeFi',
          text: 'Pipelines on-chain en temps reel pour accelerer les decisions de strategie.',
          stack: 'Solidity, Node.js, React, The Graph',
          impact: 'Reduction de latence de decision grace aux donnees DEX en direct.',
        },
        {
          title: 'Infrastructure actifs tokenises',
          text: 'Architecture smart contracts et backend pour ecosystemes tokenises.',
          stack: 'Solidity, TypeScript, React, AWS',
          impact: 'Acceleration de la préparation au lancement avec securite accrue.',
        },
        {
          title: 'Moteur operations IA',
          text: 'Automatisation par agents pour operations et reporting technique.',
          stack: 'Python, LangChain, Node.js, Vercel',
          impact: 'Reduction des taches manuelles et meilleure fiabilite operationnelle.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ DeFi et Web3',
      title: 'Questions Avant De Construire',
      subtitle: 'Reponses claires pour les equipes qui lancent des produits Web3 et IA.',
      items: [
        { question: 'Que fait une agence DeFi ?', answer: 'Elle concoit, developpe et deploie des produits de finance decentralisee : trading, staking, lending et dashboards protocolaires.' },
        { question: 'Quel est le cout d un smart contract ?', answer: 'Le cout depend du perimetre, de la complexite de la chaine et du niveau de tests.' },
        { question: 'Que comprend un audit de smart contracts ?', answer: 'Revue de code, modelisation des menaces, tests de vulnerabilite et plan de remediation priorise.' },
        { question: 'Combien de temps pour une app Web3 ?', answer: 'Un MVP peut sortir en quelques semaines. Les produits plus larges exigent des phases structurees.' },
        { question: 'Pouvez-vous integrer l IA a la blockchain ?', answer: 'Oui, pour analytics on-chain, monitoring du risque et automatisation des operations.' },
      ],
      additionalItems: [
        {
          question: 'Puis-je reserver une consultation avant de payer ?',
          answer: 'Oui. Commencez par un appel strategique sur Calendly, puis passez a Stripe une fois le perimetre defini.',
        },
        {
          question: 'Les paiements sont-ils securises ?',
          answer: 'Oui. Les paiements sont traites via Stripe sur une page de checkout securisee.',
        },
        {
          question: 'Combien de temps dure un projet type ?',
          answer: 'Cela depend du perimetre. Une landing page ciblee avance vite, tandis que les projets plus larges sont livres par phases.',
        },
        {
          question: 'Quels services propose GMX-LABS ?',
          answer: 'GMX-LABS propose du développement Web2 et Web3, l automatisation IA, des intégrations blockchain, DApps, expériences mobiles, Stripe, Calendly et support de lancement.',
        },
        {
          question: 'Pouvez-vous aider à la fois sur Web2 et Web3 ?',
          answer: 'Oui. Nous intervenons sur les sites Web2 et les produits blockchain Web3, aidant les équipes à relier expériences digitales traditionnelles et technologies décentralisées.',
        },
        {
          question: 'Construisez-vous des DApps ?',
          answer: 'Oui. Nous concevons et développons des applications décentralisées avec connectivité wallet, intégration smart contracts et interfaces Web3.',
        },
        {
          question: 'Prenez-vous en charge les expériences mobile-first ?',
          answer: 'Oui. Tous les projets sont conçus mobile-first. Nous livrons aussi des expériences PWA et style app pour le web mobile.',
        },
        {
          question: 'Le projet est-il prêt au lancement ?',
          answer: 'Le projet est en phase Release Candidate. Le lancement public dépend des smoke tests de production, Lighthouse et la validation du checklist.',
        },
      ],
    },
    pricing: {
      titleLead: 'Pret a commencer avec',
      titleAccent: 'checkout securise',
      titleTail: ' ?',
      description: 'Utilisez Stripe pour reserver votre slot projet et lancer la livraison.',
      trust: 'Onboarding rapide. Perimetre clair. Livraison digitale en ligne.',
      primaryCta: 'Demarrer le projet',
      secondaryCta: 'Reserver une consultation gratuite',
    },
    cta: {
      titleLead: 'Vous construisez en Web3 ou',
      titleAccent: 'IA',
      titleTail: ' ?',
      description: 'Discutons de votre architecture et definissons une implementation pragmatique.',
      trust: 'Support technique pour fondateurs, CTOs et equipes produit.',
      primaryCta: 'Reserver un appel strategique',
      secondaryCta: 'Demander une estimation',
      payCta: 'Démarrer le projet',
      statsAriaLabel: 'Indicateurs entreprise',
      stats: [
        { value: '50+', label: 'Projets livres' },
        { value: '30+', label: 'Clients satisfaits' },
        { value: '4+', label: 'Ans experience' },
      ],
    },
    footer: {
      description: 'Ingenierie digitale specialisee pour produits Web3 et IA.',
      services: 'Services',
      process: 'Processus',
      pricing: 'Tarifs',
      faq: 'FAQ',
      contact: 'Contact',
      bookCalendly: 'Reserver sur Calendly',
      secureStripeCheckout: 'Checkout Stripe securise',
      copyright: 'Copyright 2026 GMX Labs',
    },
  },
  pt: {
    brand: {
      label: 'GMX LABS',
      tagline: 'Web2 • Web3 • IA • Blockchain • DApps • Apps Móveis • Sites',
      disclaimer: 'Estudio independente. Sem afiliacao com GMX Protocol.',
      homeAriaLabel: 'Inicio da GMX Labs',
    },
    nav: {
      primaryAriaLabel: 'Principal',
      services: 'Servicos',
      solutions: 'Solucoes',
      process: 'Processo',
      portfolio: 'Portfolio',
      about: 'Sobre nos',
      faq: 'FAQ',
      contact: 'Contato',
      cta: 'Vamos conversar',
      languageSwitcherLabel: 'Selecionar idioma',
    },
    hero: {
      eyebrow: 'Web2 • Web3 • IA • Blockchain • DApps • Apps Móveis • Sites',
      titleLead: 'Construa mais rápido. Lance com inteligência.',
      titleAccent: 'Escale globalmente.',
      description: 'GMX-LABS ajuda startups, criadores e empresas a transformar ideias em sites, experiências móveis, apps Web3, automações com IA, integrações blockchain e produtos digitais prontos para lançar.',
      trustAriaLabel: 'Destaques do serviço',
      trustPoints: ['Entrega Web2 e Web3', 'Integração de IA e blockchain', 'Execução pronta para lançamento'],
      primaryCta: 'Agendar consulta',
      secondaryCta: 'Solicitar avaliação técnica',
      viewServicesCta: 'Explorar serviços',
      secureCheckoutCta: 'Começar com checkout seguro',
      videoAriaLabel: 'Video de demonstracao Web3',
      videoFallback: 'Seu navegador nao suporta video.',
      blockchainLabel: 'Blockchain',
      stackCards: ['Web2', 'Web3', 'IA', 'Blockchain'],
      badges: ['Web2', 'Web3', 'IA', 'Blockchain', 'DApps', 'Apps Móveis', 'Sites', 'Stripe', 'Calendly'],
      badgesAriaLabel: 'Áreas de serviço',
    },
    web2web3: {
      eyebrow: 'De Web2 para Web3 + IA',
      title: 'De Web2 para Web3 + IA',
      description: 'GMX-LABS conecta experiências digitais tradicionais com a próxima geração de IA, blockchain, pagamentos, interfaces móveis e aplicações descentralizadas.',
      items: [
        'Sites e landing pages',
        'Experiências móveis e app-first',
        'Camadas de automação com IA',
        'Integrações blockchain',
        'DApps e fluxos de wallet',
        'Caminhos de pagamento Stripe',
        'Sistemas de agendamento e captura de leads',
      ],
    },
    services: {
      eyebrow: 'Capacidades Principais',
      title: 'O Que Construimos',
      subtitle: 'Engenharia especializada para equipes construindo em Web3 e IA.',
      learnMoreAriaPrefix: 'Saiba mais sobre',
      items: [
        {
          accent: 'service-card-blue',
          icon: 'W',
          title: 'Desenvolvimento Web',
          description: 'Sites e landing pages modernas, otimizadas para desktop, móvel, SEO, desempenho e conversão.',
          points: [
            'Landing pages e sites corporativos',
            'Otimização SEO e metadados',
            'UI responsiva e mobile-first',
            'Seções focadas em conversão',
            'Otimização de desempenho e carregamento',
          ],
          ctaLabel: 'Iniciar site',
        },
        {
          accent: 'service-card-purple',
          icon: 'B',
          title: 'Desenvolvimento Web3 e Blockchain',
          description: 'Suporte blockchain para produtos descentralizados, fluxos de wallet, utilitários de token e interfaces Web3.',
          points: [
            'DApps e conectividade de wallet',
            'Integração de smart contracts',
            'Fluxos DeFi e sistemas de token',
            'Infraestrutura NFT',
            'UI Web3 e UX on-chain',
          ],
          ctaLabel: 'Construir em Web3',
        },
        {
          accent: 'service-card-cyan',
          icon: 'A',
          title: 'Automação com IA',
          description: 'Sistemas com IA que ajudam empresas a automatizar fluxos, melhorar a produtividade e criar experiências inteligentes.',
          points: [
            'Workflows e agentes de IA',
            'Sistemas de chat inteligente',
            'Automação de negócios',
            'Integrações e pipelines de IA',
            'Ferramentas de produtividade',
          ],
          ctaLabel: 'Automatizar com IA',
        },
      ],
      additionalItems: [
        {
          accent: 'service-card-purple',
          icon: 'M',
          title: 'Experiências Móveis e App Web',
          description: 'Experiências digitais mobile-first rápidas, responsivas e semelhantes a apps nativas.',
          points: [
            'Apps web móveis e experiências PWA',
            'UI responsiva multiplataforma',
            'Landing pages estilo app',
            'Interfaces otimizadas para toque',
          ],
          ctaLabel: 'Ir mobile',
        },
        {
          accent: 'service-card-cyan',
          icon: 'P',
          title: 'Integrações de Pagamento e Agendamento',
          description: 'Fluxos de negócio integrados para checkout, agendamento, captura de leads e conversão.',
          points: [
            'Integração de checkout Stripe',
            'Configuração de agenda com Calendly',
            'Fluxos de contato e captura de leads',
            'Landing pages prontas para pagamento',
          ],
          ctaLabel: 'Configurar pagamentos',
        },
        {
          accent: 'service-card-blue',
          icon: 'L',
          title: 'Suporte Técnico de Lançamento',
          description: 'Suporte ponta a ponta: metadados, QA, deploy, verificações de produção e prontidão para go-live.',
          points: [
            'Validação SEO e metadados',
            'Checklist de lançamento e smoke testing',
            'Documentação de deploy',
            'Revisão QA pré-lançamento',
          ],
          ctaLabel: 'Planejar lançamento',
        },
      ],
    },
    readiness: {
      eyebrow: 'Confianca e Prontidao de Lancamento',
      title: 'Clareza total antes do go-live',
      subtitle: 'A GMX Labs mantem ativos criticos de lancamento organizados e auditaveis em metadados, checks tecnicos e fluxo de conversao.',
      items: [
        { icon: 'SEO', title: 'SEO e Descoberta', text: 'URL canonica, Open Graph, cards do Twitter, robots.txt e sitemap.xml estao presentes para o lancamento.' },
        { icon: 'SEC', title: 'Endurecimento de Seguranca', text: 'Links externos seguros, checks de lint/build e documentacao de riscos reduzem erros evitaveis em producao.' },
        { icon: 'QA', title: 'Visibilidade de Governanca', text: 'Arquivos de QA e checklist de lancamento ficam no repositorio para revisao clara e rastreavel.' },
        { icon: 'UX', title: 'UX focada em conversao', text: 'Visitantes escolhem o caminho ideal: ver servicos, agendar no Calendly ou iniciar no checkout seguro da Stripe.' },
      ],
    },
    process: {
      eyebrow: 'Nosso Processo',
      title: 'Como Trabalhamos',
      subtitle: 'Caminho estruturado da ideia ao deploy com disciplina tecnica.',
      steps: [
        { number: '1.', icon: '💡', title: 'Descobrir', text: 'Analisamos objetivos, requisitos tecnicos e contexto de mercado.' },
        { number: '2.', icon: '✍️', title: 'Planejar', text: 'Definimos arquitetura, modelo de seguranca e roadmap.' },
        { number: '3.', icon: '</>', title: 'Construir', text: 'Desenvolvemos, testamos e integramos com precisao.' },
        { number: '4.', icon: '🚀', title: 'Lancar', text: 'Fazemos deploy e garantimos um go-live limpo.' },
        { number: '5.', icon: '📈', title: 'Escalar', text: 'Otimizamos, escalamos e apoiamos crescimento continuo.' },
      ],
    },
    why: {
      eyebrow: 'Por Que GMX Labs',
      titleLead: 'Especialistas em',
      titleAccent: 'entrega Web3',
      items: [
        { icon: '🧠', title: 'Engenharia DeFi real', text: 'Equipe com experiencia pratica em smart contracts e protocolos DeFi.' },
        { icon: '🛡️', title: 'Seguranca primeiro', text: 'Projetamos como defensores e pensamos como atacantes.' },
        { icon: '🏗️', title: 'Sistemas de producao', text: 'Entregamos sistemas mantiveis, nao prototipos frageis.' },
        { icon: '⚡', title: 'Rapido com qualidade', text: 'Execucao veloz sem comprometer auditabilidade ou qualidade.' },
      ],
    },
    tech: {
      eyebrow: 'Credibilidade Tecnica',
      title: 'Nosso Stack',
      categories: [
        { label: 'Smart Contracts', items: ['Solidity', 'Foundry', 'Hardhat'] },
        { label: 'Blockchain', items: ['EVM', 'Arbitrum', 'Polygon', 'Solana'] },
        { label: 'Backend', items: ['Node.js', 'TypeScript', 'Python'] },
        { label: 'Frontend', items: ['React', 'Next.js', 'Vite'] },
        { label: 'IA e ML', items: ['Python', 'TensorFlow', 'LangChain'] },
        { label: 'Infraestrutura', items: ['AWS', 'Vercel', 'Docker'] },
      ],
    },
    industries: {
      eyebrow: 'Setores Atendidos',
      title: 'Quem Ajudamos',
      items: ['Startups e Fundadores', 'Protocolos DeFi e Web3', 'Empresas de IA e SaaS', 'Criadores e Negócios Online', 'Fintech e Pagamentos', 'Agências e Freelancers'],
      note: 'Foco em verticais onde execucao tecnica impacta diretamente o resultado de negocio.',
    },
    portfolio: {
      eyebrow: 'Trabalhos em Destaque',
      title: 'Portfolio Tecnico',
      stackLabel: 'Stack:',
      impactLabel: 'Impacto:',
      items: [
        {
          title: 'Plataforma de inteligencia DeFi',
          text: 'Pipelines on-chain em tempo real para acelerar decisoes de estrategia.',
          stack: 'Solidity, Node.js, React, The Graph',
          impact: 'Reduziu latencia de decisao com dados DEX ao vivo.',
        },
        {
          title: 'Infraestrutura de ativos tokenizados',
          text: 'Arquitetura de contratos e backend para ecossistemas tokenizados.',
          stack: 'Solidity, TypeScript, React, AWS',
          impact: 'Acelerou a preparação para lancamento com seguranca reforcada.',
        },
        {
          title: 'Motor de operacoes com IA',
          text: 'Automacao por agentes para operacoes e reporting tecnico.',
          stack: 'Python, LangChain, Node.js, Vercel',
          impact: 'Reduziu trabalho manual e aumentou consistencia operacional.',
        },
      ],
    },
    faq: {
      eyebrow: 'FAQ DeFi e Web3',
      title: 'Perguntas Antes de Construir',
      subtitle: 'Respostas claras para equipes que planejam produtos Web3 e IA.',
      items: [
        { question: 'O que faz uma agencia DeFi?', answer: 'Ela projeta, desenvolve e implanta produtos de financas descentralizadas como trading, staking, lending e dashboards.' },
        { question: 'Quanto custa desenvolver smart contracts?', answer: 'Depende do escopo, da complexidade da rede e da profundidade dos testes.' },
        { question: 'O que inclui uma auditoria de smart contracts?', answer: 'Revisao de codigo, modelagem de ameacas, testes de vulnerabilidades e plano de remediacao priorizado.' },
        { question: 'Quanto tempo leva um app Web3?', answer: 'Um MVP pode ser lancado em semanas. Produtos maiores exigem fases estruturadas.' },
        { question: 'Vocês integram IA em blockchain?', answer: 'Sim. Implementamos IA para analytics on-chain, monitoramento de risco e automacao operacional.' },
      ],
      additionalItems: [
        {
          question: 'Posso agendar uma consulta antes de pagar?',
          answer: 'Sim. Comece com uma call estrategica no Calendly e depois avance para Stripe quando o escopo estiver claro.',
        },
        {
          question: 'Os pagamentos sao seguros?',
          answer: 'Sim. Os pagamentos sao processados pela Stripe em uma pagina de checkout segura.',
        },
        {
          question: 'Quanto tempo leva um projeto tipico?',
          answer: 'Depende do escopo. Projetos de landing page podem avancar rapido, enquanto escopos maiores sao entregues em fases.',
        },
        {
          question: 'Quais serviços o GMX-LABS oferece?',
          answer: 'GMX-LABS oferece desenvolvimento Web2 e Web3, automação com IA, integrações blockchain, DApps, experiências móveis, Stripe, Calendly e suporte de lançamento.',
        },
        {
          question: 'Vocês atendem tanto Web2 quanto Web3?',
          answer: 'Sim. Atuamos em sites Web2 e produtos blockchain Web3, ajudando equipes a conectar experiências digitais tradicionais com tecnologias descentralizadas.',
        },
        {
          question: 'Vocês constroem DApps?',
          answer: 'Sim. Projetamos e desenvolvemos aplicações descentralizadas com conectividade de wallet, integração de smart contracts e interfaces Web3.',
        },
        {
          question: 'Apoiam experiências mobile-first?',
          answer: 'Sim. Todos os projetos são desenvolvidos com foco mobile. Também entregamos experiências PWA e estilo app para web móvel.',
        },
        {
          question: 'O projeto está pronto para lançamento?',
          answer: 'O projeto está em fase Release Candidate. O lançamento público depende de smoke testing em produção, Lighthouse e assinatura do checklist.',
        },
      ],
    },
    pricing: {
      titleLead: 'Pronto para comecar com',
      titleAccent: 'checkout seguro',
      titleTail: '?',
      description: 'Use Stripe para reservar seu slot de projeto e iniciar a entrega.',
      trust: 'Onboarding rapido. Escopo claro. Entrega digital online.',
      primaryCta: 'Iniciar projeto',
      secondaryCta: 'Agendar consulta gratuita',
    },
    cta: {
      titleLead: 'Construindo em Web3 ou',
      titleAccent: 'IA',
      titleTail: '?',
      description: 'Vamos discutir sua arquitetura e definir uma implementacao pragmatica.',
      trust: 'Suporte tecnico para fundadores, CTOs e times de produto.',
      primaryCta: 'Agendar call estrategica',
      secondaryCta: 'Solicitar estimativa',
      payCta: 'Iniciar projeto',
      statsAriaLabel: 'Metricas da empresa',
      stats: [
        { value: '50+', label: 'Projetos entregues' },
        { value: '30+', label: 'Clientes satisfeitos' },
        { value: '4+', label: 'Anos de experiencia' },
      ],
    },
    footer: {
      description: 'Engenharia digital especializada para produtos Web3 e IA.',
      services: 'Servicos',
      process: 'Processo',
      pricing: 'Precos',
      faq: 'FAQ',
      contact: 'Contato',
      bookCalendly: 'Agendar no Calendly',
      secureStripeCheckout: 'Checkout seguro Stripe',
      copyright: 'Copyright 2026 GMX Labs',
    },
  },
}
