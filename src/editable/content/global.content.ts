import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Business listings, suppliers, and local leads',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: '',
    searchPlaceholder: 'Search products, services, suppliers, and cities',
    primaryLinks: [
      { label: 'Businesses', href: '/listing' },
      { label: 'Post Listing', href: '/create' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'List your business', href: '/create' },
      secondary: { label: 'Get quote', href: '/contact' },
    },
  },
  footer: {
    tagline: 'Verified business discovery for buyers and sellers',
    description: `${slot4BrandConfig.siteName} helps buyers compare suppliers, discover business listings, and send inquiries with confidence.`,
    columns: [
      {
        title: 'For Buyers',
        links: [
          { label: 'Browse Suppliers', href: '/listing' },
          { label: 'Search Products', href: '/search' },
          { label: 'Post Requirement', href: '/contact' },
          { label: 'Popular Categories', href: '/listing' },
        ],
      },
      {
        title: 'For Sellers',
        links: [
          { label: 'Create Listing', href: '/create' },
          { label: 'Seller Login', href: '/login' },
          { label: 'Join Directory', href: '/signup' },
          { label: 'Contact Sales', href: '/contact' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Search', href: '/search' },
        ],
      },
    ],
    bottomNote: 'Business listing discovery built for product searches, seller profiles, and buyer inquiries.',
  },
  commonLabels: {
    readMore: 'View details',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
