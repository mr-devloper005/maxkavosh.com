import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, MapPin, PackageSearch, Search, Send, ShieldCheck, Store, Tags } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { globalContent } from '@/editable/content/global.content'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const categories = [
  'Industrial Machinery',
  'Construction Materials',
  'Electronics & Electrical',
  'Apparel & Fashion',
  'Hospital & Medical',
  'Packaging & Paper',
  'Chemicals',
  'Agriculture',
  'Pipes & Fittings',
  'Home Supplies',
  'Minerals & Metals',
  'Business Services',
  'Solar Products',
  'Air Cleaning Equipment',
]

const popularProducts = [
  'Human Hair',
  'Forklift Trucks',
  'Servo Voltage Stabilizer',
  'Basmati Rice',
  'Backhoe Loader',
  'Carry Bag Making Machine',
  'Drum Lifter',
  'Electric Stacker',
  'Industrial Vibrating Screen',
  'Packaging Machines',
  'Solar Lights',
  'PVC Pipes',
  'Stainless Steel Coils',
  'Air Compressor',
  'Pipe Elbows',
]

const cityCards = ['Delhi', 'Mumbai', 'Ahmedabad', 'Kolkata', 'Chennai', 'Bengaluru']

function getContent(post?: SitePost | null) {
  return post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function getSummary(post?: SitePost | null, limit = 120) {
  const content = getContent(post)
  const raw = post?.summary || text(content.description) || text(content.summary) || text(content.body) || 'Supplier listing with business details, product categories, and inquiry information.'
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function getLocation(post?: SitePost | null) {
  const content = getContent(post)
  return text(content.city) || text(content.location) || text(content.address) || 'India'
}

function getPrice(post?: SitePost | null) {
  const content = getContent(post)
  return text(content.price) || text(content.amount) || 'Price on request'
}

function productHref(label: string) {
  return `/search?q=${encodeURIComponent(label)}`
}

function BusinessCard({ post, href }: { post: SitePost; href: string }) {
  return (
    <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_10px_24px_rgba(15,39,63,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_38px_rgba(15,39,63,0.14)]">
      <Link href={href} className="block">
        <div className="relative h-36 border-b border-slate-200 bg-slate-50">
          <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-contain p-4 transition group-hover:scale-105" />
        </div>
        <div className="p-4">
          <h3 className="line-clamp-2 min-h-[44px] text-base font-black leading-snug text-[var(--slot4-page-text)]">{post.title}</h3>
          <p className="mt-2 text-sm font-black text-slate-950">{getPrice(post)}</p>
          <p className="mt-2 line-clamp-2 min-h-[40px] text-sm leading-5 text-slate-600">{getSummary(post, 92)}</p>
          <p className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-slate-500"><MapPin className="h-3.5 w-3.5" /> {getLocation(post)}</p>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Link href={href} className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[var(--slot4-blue)] text-sm font-black text-white hover:bg-[var(--slot4-blue-dark)]">
          Send Inquiry <Send className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

function CategoryCard({ title, items, image }: { title: string; items: string[]; image?: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_8px_22px_rgba(15,39,63,0.06)]">
      <div className="grid h-36 place-items-center border-b border-slate-200 bg-slate-50">
        {image ? <img src={image} alt="" className="h-full w-full object-contain p-4" /> : <PackageSearch className="h-14 w-14 text-slate-300" />}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-black">{title}</h3>
        <div className="mt-3 grid gap-2">
          {items.map((item) => (
            <Link key={item} href={productHref(item)} className="border-b border-slate-200 pb-1 text-sm text-slate-700 hover:text-[var(--slot4-blue)]">
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const listingRoute = SITE_CONFIG.tasks.find((task) => task.key === 'listing')?.route || primaryRoute
  const feature = posts[0]

  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} ${dc.shell.sectionY}`}>
        <div className={dc.layout.featureGrid}>
          <aside className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_12px_30px_rgba(15,39,63,0.08)]">
            <h2 className="text-lg font-black">Top Categories</h2>
            <div className="mt-4 grid gap-1">
              {categories.slice(0, 12).map((category) => (
                <Link key={category} href={productHref(category)} className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[var(--slot4-blue)]">
                  <Tags className="h-4 w-4 text-slate-400" /> <span className="truncate">{category}</span>
                </Link>
              ))}
            </div>
            <Link href={listingRoute} className="mt-4 inline-flex text-sm font-black text-[var(--slot4-accent)] underline-offset-4 hover:underline">View all categories</Link>
          </aside>

          <div className="overflow-hidden rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#fff7ed,#ffffff_42%,#eaf4fb)] shadow-[0_16px_42px_rgba(15,39,63,0.1)]">
            <div className="grid min-h-[360px] content-between gap-8 p-6 sm:p-8">
              <div>
                <p className="inline-flex rounded-full bg-[var(--slot4-accent-soft)] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">{pagesContent.home.hero.badge}</p>
                <h1 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-[var(--slot4-page-text)] sm:text-5xl">{heroTitle}</h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{pagesContent.home.hero.description}</p>
              </div>
              <form action="/search" className="flex max-w-2xl rounded-full border border-slate-900 bg-white p-1 shadow-sm">
                <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-5 text-sm font-semibold outline-none placeholder:text-slate-500" />
                <button className="inline-flex items-center gap-2 rounded-full bg-red-500 px-5 py-3 text-sm font-black text-white">
                  <Search className="h-4 w-4" /> Search
                </button>
              </form>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ['1.1M+', 'registered buyers'],
                  ['24/7', 'inquiry support'],
                  ['800+', 'product categories'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-md border border-slate-200 bg-white/80 p-3">
                    <p className="text-xl font-black text-[var(--slot4-blue)]">{value}</p>
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="grid gap-4">
            <div className="rounded-lg border border-orange-100 bg-[#fff1c7] p-5 shadow-sm">
              <h2 className="max-w-[12rem] text-2xl font-black leading-tight">Looking for a Product?</h2>
              <Link href="/contact" className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-md border border-slate-900 text-sm font-black">Post Buy Requirement</Link>
            </div>
            <div className="rounded-lg bg-[linear-gradient(135deg,#d83c3c,#ff765d)] p-5 text-white shadow-sm">
              <h2 className="max-w-[13rem] text-2xl font-black leading-tight">Want to grow your business faster?</h2>
              <Link href="/create" className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md border border-white/70 text-sm font-black">Sell on {globalContent.site.name} <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </aside>
        </div>

        {feature ? (
          <div className="mt-5 grid gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-center">
            <img src={getEditablePostImage(feature)} alt="" className="h-24 w-full rounded-md bg-slate-50 object-contain p-2 sm:w-28" />
            <div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-[var(--slot4-accent)]">{pagesContent.home.hero.featureCardBadge}</p>
              <h2 className="mt-1 line-clamp-2 text-xl font-black">{feature.title}</h2>
              <p className="mt-1 line-clamp-2 text-sm text-slate-600">{getSummary(feature, 130)}</p>
            </div>
            <Link href={postHref(primaryTask, feature, primaryRoute)} className={dc.button.primary}>View Details</Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const sellers = posts.slice(0, 6)
  if (!sellers.length) return null
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} py-8`}>
        <div className="rounded-xl bg-[linear-gradient(135deg,#f26722,#e94e24)] p-5 shadow-[0_18px_44px_rgba(240,75,35,0.2)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl font-black text-white">Best Sellers</h2>
            <Link href={primaryRoute} className="text-sm font-black text-white/90 hover:text-white">View all</Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sellers.map((post) => (
              <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="rounded-lg bg-white p-3 shadow-sm transition hover:-translate-y-0.5">
                <div className="grid h-28 place-items-center rounded-md bg-slate-50">
                  <img src={getEditablePostImage(post)} alt="" className="h-full w-full object-contain p-2" />
                </div>
                <h3 className="mt-3 line-clamp-2 min-h-[40px] text-sm font-black text-slate-950">{post.title}</h3>
                <p className="mt-2 text-xs font-black text-slate-950">{getPrice(post)}</p>
                <p className="mt-2 line-clamp-2 text-xs text-slate-500">By: {getLocation(post)} supplier</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const cards = posts.slice(6, 12)
  if (!cards.length) return null
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} py-8`}>
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,39,63,0.06)]">
          <div className="flex items-center justify-between gap-4">
            <h2 className={dc.type.sectionTitle}>Featured Products</h2>
            <Link href={primaryRoute} className="text-sm font-black text-[var(--slot4-accent)]">View All</Link>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {cards.map((post) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ posts }: HomeSectionProps) {
  const images = posts.map((post) => getEditablePostImage(post))
  return (
    <section className="bg-[var(--slot4-page-bg)]">
      <div className={`${dc.shell.section} py-8`}>
        <div className="grid gap-8">
          <section>
            <h2 className={dc.type.sectionTitle}>Trending Categories</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {[
                ['Electronics & Electrical Supplies', ['Voltage Stabilizers', 'Air Conditioner', 'Fan', 'Water Coolers']],
                ['Apparel & Fashion', ['Human Hair', 'Sarees', 'Kurtis', 'T-Shirts']],
                ['Solar Products & Equipment', ['Solar Panels', 'Solar Inverter', 'Solar Lights', 'Solar Pumps']],
                ['Air Cleaning Equipment', ['Air Purifiers', 'Air Cleaner', 'Air Washer Units', 'Air Filters']],
                ['Construction & Waterproofing', ['Waterproofing Membrane', 'Epoxy Coating', 'Primer', 'Construction Chemical']],
                ['Machinery', ['Packaging Machine', 'Crusher', 'Conveyor', 'Compressor']],
              ].map(([title, items], index) => (
                <CategoryCard key={title as string} title={title as string} items={items as string[]} image={images[index]} />
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,39,63,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className={dc.type.sectionTitle}>Popular Products</h2>
              <Link href="/search" className="text-sm font-black text-[var(--slot4-accent)]">All Categories</Link>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {popularProducts.map((product) => (
                <Link key={product} href={productHref(product)} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 hover:border-[var(--slot4-blue)] hover:text-[var(--slot4-blue)]">
                  {product}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/listing" className="rounded-md bg-[var(--slot4-blue)] px-4 py-2 text-sm font-black text-white">All Categories</Link>
              {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
                <Link key={letter} href={`/search?q=${letter}`} className="grid h-9 w-9 place-items-center rounded-md bg-red-500 text-sm font-black text-white">
                  {letter}
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_10px_28px_rgba(15,39,63,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className={dc.type.sectionTitle}>Sellers by Cities</h2>
              <Link href="/search" className="text-sm font-black text-[var(--slot4-accent)]">View All</Link>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
              {cityCards.map((city, index) => (
                <Link key={city} href={`/search?q=${encodeURIComponent(city)}`} className="relative min-h-36 overflow-hidden rounded-lg bg-slate-900 text-white shadow-sm">
                  <img src={images[index + 6] || '/placeholder.svg?height=400&width=600'} alt="" className="absolute inset-0 h-full w-full object-cover opacity-55" />
                  <span className="absolute bottom-3 left-3 text-xl font-black">{city}</span>
                </Link>
              ))}
            </div>
          </section>

          <section>
            <h2 className={dc.type.sectionTitle}>Why buyers use {globalContent.site.name}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {[
                [ShieldCheck, 'Verified business context', 'Listing pages surface seller details, company information, and product-related fields buyers expect.'],
                [PackageSearch, 'Fast product discovery', 'Search bars, category tags, and product chips make it easy to move from keyword to supplier.'],
                [Store, 'Seller-ready publishing', 'Create forms help businesses submit listing details without needing backend changes.'],
              ].map(([Icon, title, body]) => (
                <div key={title as string} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <Icon className="h-7 w-7 text-[var(--slot4-accent)]" />
                  <h3 className="mt-4 text-lg font-black">{title as string}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{body as string}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-white">
      <div className={`${dc.shell.section} py-10`}>
        <div className="grid gap-6 rounded-lg border border-slate-200 bg-[linear-gradient(135deg,#06243a,#1f6f9d)] p-6 text-white shadow-[0_18px_50px_rgba(15,39,63,0.16)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.14em] text-white/70">{pagesContent.home.cta.badge}</p>
            <h2 className="mt-2 text-3xl font-black">{pagesContent.home.cta.title}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">{pagesContent.home.cta.description}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-[var(--slot4-page-text)]">Create Listing <Building2 className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-3 text-sm font-black text-white">Get Help <CheckCircle2 className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}
