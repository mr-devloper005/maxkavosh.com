import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Business listings, suppliers, and product discovery',
      description: 'Find verified businesses, compare suppliers, browse product categories, and send trade inquiries.',
      openGraphTitle: 'Business listings and supplier discovery',
      openGraphDescription: 'Browse supplier listings, product categories, city directories, and buyer inquiry tools.',
      keywords: ['business listings', 'supplier directory', 'B2B marketplace', 'product discovery', 'local businesses'],
    },
    hero: {
      badge: 'listings marketplace',
      title: ['Find suppliers, products,', 'and service partners faster.'],
      description: `${slot4BrandConfig.siteName} connects buyers with listed businesses, product categories, supplier profiles, and quick inquiry flows.`,
      primaryCta: { label: 'Browse businesses', href: '/listing' },
      secondaryCta: { label: 'Post requirement', href: '/contact' },
      searchPlaceholder: 'Search products, services, suppliers, and cities',
      focusLabel: 'Top categories',
      featureCardBadge: 'seller spotlight',
      featureCardTitle: 'Supplier profiles, product cards, and inquiry actions in one marketplace.',
      featureCardDescription: 'A compact B2B browsing experience built around listings, categories, buyer intent, and seller trust.',
    },
    intro: {
      badge: 'Marketplace overview',
      title: 'A business directory designed for buyers who compare before they contact.',
      paragraphs: [
        'Buyers can browse categories, scan supplier cards, compare locations, and open listing details without fighting wide, stretched layouts.',
        'Sellers get a clearer path to publish business details, product information, and contact channels so inquiries feel direct and credible.',
        'Every section is shaped around business discovery: products, services, categories, locations, supplier details, and conversion-ready actions.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Compact listing grids for supplier discovery.',
        'Product-style detail pages with seller cards and inquiry forms.',
        'Search-first navigation for products, services, and cities.',
        'Account-aware navbar that switches to the user name and logout after login.',
      ],
      primaryLink: { label: 'Browse listings', href: '/listing' },
      secondaryLink: { label: 'Contact sellers', href: '/contact' },
    },
    cta: {
      badge: 'Start listing',
      title: 'Bring your business into the directory buyers already search.',
      description: 'Create a listing with company details, product categories, images, and buyer-ready inquiry information.',
      primaryCta: { label: 'Create Listing', href: '/create' },
      secondaryCta: { label: 'Contact Support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest supplier and business entries in this section.',
    },
  },
  about: {
    badge: 'About the marketplace',
    title: `About ${slot4BrandConfig.siteName}`,
    description: `${slot4BrandConfig.siteName} is a business listing marketplace built to help buyers discover suppliers, evaluate products, and contact sellers without friction.`,
    paragraphs: [
      'The site focuses on the practical moments of B2B discovery: searching by product, browsing categories, comparing sellers, checking business details, and sending a clear inquiry.',
      'For sellers, the experience is built around trust signals: company information, location, product coverage, availability, and direct contact actions.',
      'For buyers, the layout stays compact and scannable so product cards, seller profiles, and related categories are easy to compare across desktop and mobile.',
    ],
    values: [
      {
        title: 'Supplier-first clarity',
        description: 'Listings highlight the company, product category, city, business type, and contact paths buyers need before starting a conversation.',
      },
      {
        title: 'Buyer-ready discovery',
        description: 'Search, category rails, city cards, and related product groups help buyers move from broad intent to useful seller matches.',
      },
      {
        title: 'Trust through detail',
        description: 'Product pages are designed to surface seller details, inquiry forms, related products, and practical business context.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Tell us what your business needs next.',
    description: 'Send a buyer requirement, seller onboarding question, listing update, or partnership request. We will route it to the right marketplace support lane.',
    formTitle: 'Send your requirement',
  },
  search: {
    metadata: {
      title: 'Search business listings',
      description: 'Search suppliers, products, categories, cities, and business listings across the marketplace.',
    },
    hero: {
      badge: 'Search marketplace',
      title: 'Find suppliers, products, and business listings.',
      description: 'Use keyword, category, and listing type filters to discover suppliers and business entries across the directory.',
      placeholder: 'Search products, services, suppliers, or cities',
    },
    resultsTitle: 'Latest marketplace results',
  },
  create: {
    metadata: {
      title: 'Create business listing',
      description: 'Create and submit a business listing for the marketplace.',
    },
    locked: {
      badge: 'Seller access',
      title: 'Login to create a business listing.',
      description: 'Use your seller account to publish company details, product categories, images, contact information, and buyer inquiry notes.',
    },
    hero: {
      badge: 'Seller workspace',
      title: 'Create a listing buyers can trust.',
      description: 'Add your business name, category, location, product details, images, and contact information for marketplace discovery.',
    },
    formTitle: 'Business listing details',
    submitLabel: 'Submit listing',
    successTitle: 'Listing draft saved successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for business listing sellers and buyers.',
      badge: 'Account access',
      title: 'Login to manage listings and inquiries.',
      description: 'Return to your marketplace account to create listings, review saved details, and continue buyer or seller activity.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create seller account',
    },
    signup: {
      metadataDescription: 'Signup page for business listing marketplace accounts.',
      badge: 'Seller account',
      title: 'Create an account for your business.',
      description: 'Join the marketplace to publish supplier details, product categories, service coverage, and buyer-ready contact information.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related resources',
      fallbackTitle: 'Resource details',
    },
    listing: {
      relatedTitle: 'Related businesses',
      fallbackTitle: 'Business listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested profiles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
