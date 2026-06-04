import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f5f7fa',
  '--slot4-page-text': '#06243a',
  '--slot4-panel-bg': '#ffffff',
  '--slot4-surface-bg': '#ffffff',
  '--slot4-muted-text': '#516578',
  '--slot4-soft-muted-text': '#6d7f90',
  '--slot4-accent': '#f04b23',
  '--slot4-accent-fill': '#f04b23',
  '--slot4-accent-soft': '#fff1e8',
  '--slot4-blue': '#1f6f9d',
  '--slot4-blue-dark': '#0f4f76',
  '--slot4-dark-bg': '#06243a',
  '--slot4-dark-text': '#ffffff',
  '--slot4-media-bg': '#eef3f7',
  '--slot4-cream': '#fff7ee',
  '--slot4-warm': '#ffffff',
  '--slot4-lavender': '#eef5fb',
  '--slot4-gray': '#f5f7fa',
  '--slot4-body-gradient': 'linear-gradient(180deg, #ffffff 0%, #f5f7fa 42%, #eef3f7 100%)',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]',
  pageText: 'text-[var(--slot4-page-text)]',
  panelBg: 'bg-[var(--slot4-panel-bg)]',
  panelText: 'text-[var(--slot4-page-text)]',
  surfaceBg: 'bg-[var(--slot4-surface-bg)]',
  surfaceText: 'text-[var(--slot4-page-text)]',
  mutedText: 'text-[var(--slot4-muted-text)]',
  softMutedText: 'text-[var(--slot4-soft-muted-text)]',
  accentText: 'text-[var(--slot4-accent)]',
  accentBg: 'bg-[var(--slot4-accent-fill)]',
  accentSoftBg: 'bg-[var(--slot4-accent-soft)]',
  accentSoftText: 'text-[var(--slot4-accent-soft)]',
  blueBg: 'bg-[var(--slot4-blue)]',
  blueText: 'text-[var(--slot4-blue)]',
  darkBg: 'bg-[var(--slot4-dark-bg)]',
  darkText: 'text-[var(--slot4-dark-text)]',
  mediaBg: 'bg-[var(--slot4-media-bg)]',
  creamBg: 'bg-[var(--slot4-cream)]',
  warmBg: 'bg-[var(--slot4-warm)]',
  lavenderBg: 'bg-[var(--slot4-lavender)]',
  grayBg: 'bg-[var(--slot4-gray)]',
  border: 'border-slate-200',
  darkBorder: 'border-white/10',
  shadow: 'shadow-[0_12px_34px_rgba(15,39,63,0.08)]',
  shadowStrong: 'shadow-[0_20px_60px_rgba(15,39,63,0.14)]',
  overlay: 'bg-[linear-gradient(180deg,rgba(6,36,58,0.02),rgba(6,36,58,0.68))]',
} as const

export const editableDesignContract = {
  shell: {
    page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`,
    section: 'mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8',
    sectionY: 'py-10 sm:py-12 lg:py-14',
  },
  layout: {
    safeGrid: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
    featureGrid: 'grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)_290px] lg:items-stretch',
    rail: 'flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
    minRailCard: 'w-[220px] shrink-0 snap-start',
  },
  type: {
    eyebrow: 'text-xs font-black uppercase tracking-[0.14em]',
    heroTitle: 'text-3xl font-black leading-tight sm:text-4xl lg:text-5xl',
    sectionTitle: 'text-xl font-black tracking-tight sm:text-2xl',
    body: 'text-base leading-relaxed',
  },
  surface: {
    card: `rounded-lg border ${editablePalette.border} ${editablePalette.surfaceBg} ${editablePalette.shadow}`,
    soft: `rounded-lg border ${editablePalette.border} ${editablePalette.surfaceBg}`,
    dark: `rounded-lg ${editablePalette.darkBg} ${editablePalette.darkText} ${editablePalette.shadowStrong}`,
  },
  button: {
    primary: `inline-flex items-center justify-center gap-2 rounded-md ${editablePalette.blueBg} px-5 py-3 text-sm font-black text-white transition hover:bg-[var(--slot4-blue-dark)]`,
    secondary: `inline-flex items-center justify-center gap-2 rounded-md border ${editablePalette.border} ${editablePalette.surfaceBg} px-5 py-3 text-sm font-black ${editablePalette.surfaceText} transition hover:bg-slate-50`,
    accent: `inline-flex items-center justify-center gap-2 rounded-md ${editablePalette.accentBg} px-5 py-3 text-sm font-black text-white transition hover:opacity-90`,
  },
  media: {
    frame: `relative overflow-hidden rounded-md ${editablePalette.mediaBg}`,
    ratio: 'aspect-[4/3]',
  },
  motion: {
    lift: 'transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_38px_rgba(15,39,63,0.14)]',
    fade: 'transition duration-200 hover:opacity-85',
  },
} as const

export const aiLayoutRules = [
  'Keep all editable UI work inside src/editable.',
  'Use compact B2B directory layouts with readable max-width containers.',
  'Use product, supplier, category, and inquiry language across copy.',
  'Keep existing data fetching and route helpers intact.',
] as const
