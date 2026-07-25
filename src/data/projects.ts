import { Project } from '@/types';

export const projects: Project[] = [
  // 5 Selected Production Deployments (Featured, ordered at top)
  {
    id: '0',
    title: 'Construction Materials Delivery Platform (MVP)',
    description: 'An asset-light, hyper-local marketplace model for on-demand building materials delivery, connecting site contractors directly with neighborhood merchants and mini-truck fleets.',
    longDescription: 'Architected an end-to-end hyper-local supply chain platform designed to eliminate heavy warehousing capital expenditure by syndicating verified neighborhood hardware merchants with active construction sites. Built around four key modular hubs—Admin Operations, Vendor Portal, Supplier Logistics, and Buyer/Contractor App—to achieve transparent pricing, live inventory discovery, dynamic mini-truck dispatching, and secure site delivery verification.',
    category: 'Full Stack',
    techStack: ['Next.js', 'TypeScript', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Leaflet / Mapbox', 'WebSockets', 'Docker'],
    image: '/projects/construction-mvp.png',
    featured: true,
    abstract: 'The construction and building-materials ecosystem remains heavily fragmented, inefficient, and reliant on traditional offline channels. Procuring raw materials such as cement, tiles, PVC pipes, and paints typically involves manual phone calls, untransparent price negotiations, and unstructured delivery schedules. This platform introduces an asset-light, hyper-local marketplace model structured around on-demand convenience platforms like Swiggy and Zomato, facilitating rapid location-based fulfillment for active construction sites.',
    problemStatement: 'Traditional construction supply chains suffer from deep structural bottlenecks: lack of live pricing and stock transparency, logistics delays causing idle labor hours, and high capital entry barriers for centralized warehouses. Our hyper-local micro-warehousing approach leverages existing local stockists to eliminate heavy capex while maximizing distribution reach.',
    architectureModules: [
      {
        title: 'Admin Module',
        subtitle: 'Central Operations Hub',
        description: 'Serves as the core control panel for platform administration.',
        highlights: [
          'Strict verification & onboarding of local stores & logistics partners (business licenses & GSTIN verification)',
          'Configuration of regional operating zones & micro-delivery radiuses',
          'Platform-wide live transaction monitoring & automated audit logs',
          'Dispute resolution engines & customer refund workflows'
        ]
      },
      {
        title: 'Vendor Module',
        subtitle: 'Local Store Portal',
        description: 'Designed for neighborhood hardware merchants and material dealers.',
        highlights: [
          'Mandatory location mapping during signup to anchor delivery circles',
          'Comprehensive catalog management (Ambuja Cement, Kajaria Tiles, Supreme Pipes, Asian Paints)',
          'Dynamic pricing updates based on daily wholesale rates & stock quantities',
          'Active order queue dashboard with instant push notifications'
        ]
      },
      {
        title: 'Supplier Module',
        subtitle: 'On-Demand Logistics & Delivery',
        description: 'Engineered for delivery personnel and independent transport providers.',
        highlights: [
          'Vehicle profile categorization (matching mini-trucks for cement/steel vs light vehicles)',
          'Proximity-based instant dispatch notifications & trip acceptance',
          'In-app turn-by-turn navigation between store and construction site',
          'Secure delivery confirmation (OTP verification & photographic site drop-off proof)'
        ]
      },
      {
        title: 'Buyer Module',
        subtitle: 'Customer & Contractor Interface',
        description: 'Tailored for independent builders, contractors, and homeowners.',
        highlights: [
          'Automated GPS location detection & micro-radius vendor filtering (5–10 km)',
          'Structured category filtering (cement, structural steel, tiles, plumbing, paints)',
          'Transparent cart management with secure digital payments or Cash on Delivery (COD)',
          'Real-time live map tracking of assigned delivery partner'
        ]
      }
    ],
    workflowStages: [
      {
        stage: 1,
        title: 'Geolocation-Driven Discovery',
        description: 'System captures site GPS coordinates and queries active local vendors within a 5–10 km micro-radius.'
      },
      {
        stage: 2,
        title: 'Transparent Cart & Secure Checkout',
        description: 'Contractors browse categories, select precise stock quantities, and pay securely or opt for Cash on Delivery.'
      },
      {
        stage: 3,
        title: 'Quality-Assured Merchant Processing',
        description: 'Nearby hardware store receives instant alert, verifies stock, packages quality-certified goods, and marks order ready.'
      },
      {
        stage: 4,
        title: 'On-Demand Dynamic Logistics',
        description: 'Proximity dispatch assigns a mini-truck partner who collects goods, navigates via GPS, and fulfills delivery via OTP verification.'
      }
    ],
    keyHighlights: [
      'Asset-Light Micro-Warehousing Model',
      'Location-Based Proximity Dispatch (5-10 km radius)',
      'Dual-Verification Delivery (OTP + Drop-off Photo)',
      'Dynamic Inventory & Live Wholesale Pricing'
    ]
  },
  {
    id: '1',
    title: 'MarketBytes ERP',
    description: 'Led the design and deployment of a scalable ERP platform, centralizing finance, HR, inventory, and project management for enterprise operations.',
    category: 'Full Stack',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://worksuite.marketbytes.in',
    image: '/projects/erp.png',
    featured: true,
  },
  {
    id: '2',
    title: 'TaxMind',
    description: 'Architected a comprehensive tax automation framework featuring an AI-driven document summarization pipeline using the Claude API.',
    category: 'Full Stack',
    techStack: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS', 'Claude API'],
    liveUrl: 'https://taxmind.ie',
    image: '/projects/taxmind.png',
    featured: true,
  },
  {
    id: '3',
    title: 'MuvrCloud',
    description: 'Built a platform for the relocation industry to automate end-to-end workflows, including bookings, inventory, and logistics.',
    category: 'Full Stack',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://muvrcloud.almasintl.com',
    image: '/projects/muvrcloud.png',
    featured: true,
  },
  {
    id: '4',
    title: 'Crossroads Career Consultants',
    description: 'Developed a bespoke CMS-driven website for an international education consultancy, enabling code-free management for stakeholders.',
    category: 'CMS',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://www.crossroadsge.com',
    image: '/projects/crossroads.png',
    featured: true,
  },
  {
    id: '5',
    title: 'Sydney Film Works',
    description: 'Created a high-performance digital showcase platform optimized for portfolio management and commercial client engagement.',
    category: 'Frontend',
    techStack: ['Next.js', 'Tailwind CSS'],
    liveUrl: 'https://www.sydneyfilmworks.com',
    image: '/projects/sydney.png',
    featured: true,
  },

  // Additional Projects (Non-featured, ordered below)
  {
    id: '6',
    title: 'Automated Invoice System',
    description: 'A cloud-based automated quotation, invoice generation, and billing management utility.',
    longDescription: 'Engineered a business invoicing utility that processes service sheets, builds real-time quotations, generates structured PDFs, tracks payment statuses, and automates overdue alerts.',
    category: 'Full Stack',
    techStack: ['Next.js', 'Django REST Framework', 'MySQL', 'Docker', 'Tailwind CSS'],
    liveUrl: 'https://invoice.marketbytes.in',
    image: '/projects/invoice.png',
    featured: false,
  },
  {
    id: '7',
    title: 'Prime Innovation CRM',
    description: 'A custom customer relationship management system engineered for client lifecycle tracking.',
    category: 'Full Stack',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://crm.primearabiagroup.com',
    image: '/projects/prime-crm.png',
    featured: false,
  },
  {
    id: '8',
    title: 'Saki Visa Consultancy',
    description: 'Saki Consultancy offers exceptional travel and visa consultancy services tailored to meet the diverse needs of both corporations and individual travellers.',
    category: 'Full Stack',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://www.sakivisa.com',
    image: '/projects/saki.png',
    featured: false,
  },
  {
    id: '9',
    title: 'Almas Movers International',
    description: 'Almas Movers International, an ISO certified moving company in Qatar.',
    category: 'Full Stack',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://www.almasintl.com',
    image: '/projects/almas.png',
    featured: false,
  },
  {
    id: '10',
    title: 'Sreerudra Ayurveda',
    description: 'Corporate service portal for Sreerudra Ayurveda presenting clinical treatments and brand legacy.',
    category: 'Frontend',
    techStack: ['Next.js', 'Tailwind CSS', 'Python FastAPI', 'MySQL', 'VPS'],
    liveUrl: 'http://www.sreerudraayurveda.com',
    image: '/projects/sreerudra.png',
    featured: false,
  },
  {
    id: '11',
    title: 'Prime Innovation Site',
    description: 'Enterprise website outlining Prime Arabia Group validation methodologies and logistics services.',
    longDescription: 'Engineered custom customer validation subsystems, and high-performance corporate platforms featuring custom content management engines.',
    category: 'Frontend',
    techStack: ['React.js', 'Next.js', 'Django', 'FastAPI', 'VPS'],
    liveUrl: 'https://www.primearabiagroup.com',
    image: '/projects/prime.png',
    featured: false,
  },
  {
    id: '12',
    title: 'Yokobaine',
    description: 'Premium corporate platform showcasing Yokobaine service lists and branding profiles.',
    category: 'Frontend',
    techStack: ['Next.js', 'Tailwind CSS', 'Python FastAPI', 'MySQL'],
    liveUrl: 'https://www.yokobaine.com',
    image: '/projects/yokobaine.png',
    featured: false,
  },
  {
    id: '13',
    title: 'ALSI Global LLC',
    description: 'Multinational shipping and business consulting portal with structured information grids.',
    category: 'Frontend',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://www.alsiglobal.com',
    image: '/projects/alsiglobal.png',
    featured: false,
  },
  {
    id: '14',
    title: 'Cleanworks',
    description: 'Corporate portal and logistics tracking for professional cleaning services.',
    category: 'Full Stack',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://www.cleanworksqatar.com',
    image: '/projects/cleanworks.png',
    featured: false,
  },
  {
    id: '15',
    title: 'Crossroads CMS',
    description: 'A robust custom content management system supporting multi-tenant website platforms.',
    category: 'CMS',
    techStack: ['React.js', 'Tailwind CSS', 'Django REST Framework', 'MySQL'],
    liveUrl: 'https://cms.crossroadsge.com',
    image: '/projects/crossroads-cms.png',
    featured: false,
  },
];
