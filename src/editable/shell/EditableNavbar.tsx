'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Search } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = {
    '--editable-nav-bg': '#ffffff',
    '--editable-nav-text': '#06243a',
    '--editable-nav-active': '#1f6f9d',
    '--editable-nav-active-text': '#ffffff',
    '--editable-cta-bg': '#1f6f9d',
    '--editable-cta-text': '#ffffff',
    '--editable-search-bg': '#ffffff',
    '--editable-border': '#d8e2ea',
    '--editable-container': '1180px',
  } as CSSProperties

  const navItems = useMemo(() => {
    const taskLinks = SITE_CONFIG.tasks
      .filter((task) => task.enabled)
      .filter((task) => ['listing', 'classified'].includes(task.key))
      .map((task) => ({ label: task.key === 'listing' ? 'Businesses' : task.label, href: task.route }))
    return [...taskLinks, { label: 'Create', href: '/create' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]
  }, [])

  const visibleName = session?.name?.trim() || session?.email?.split('@')[0] || ''

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)] shadow-[0_2px_16px_rgba(15,39,63,0.06)]">
      <nav className="mx-auto flex min-h-[78px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-md border border-[var(--editable-border)] bg-white shadow-sm">
            <Image src="/favicon.png" alt={globalContent.site.name} width={48} height={48} className="h-12 w-12 object-contain" />
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block max-w-[170px] truncate text-base font-black leading-tight">{globalContent.site.name}</span>
            <span className="block max-w-[170px] truncate text-[11px] font-bold text-slate-500">{globalContent.nav.tagline}</span>
          </span>
        </Link>

        

        <form action="/search" className="mx-auto hidden min-w-0 flex-1 justify-center md:flex">
          <label className="relative flex h-12 w-full max-w-[510px] items-center rounded-full border border-slate-900 bg-[var(--editable-search-bg)] pl-4 pr-1 shadow-sm">
            <input name="q" type="search" placeholder={globalContent.nav.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-2 text-sm font-semibold outline-none placeholder:text-slate-500" />
            
            <button type="submit" className="inline-flex h-10 items-center gap-2 rounded-full bg-red-500 px-5 text-sm font-black text-white transition hover:bg-red-600">
              <Search className="h-4 w-4" /> Search
            </button>
          </label>
        </form>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-slate-100'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-white px-4 py-4 xl:hidden">
          <form action="/search" className="mb-4 flex rounded-full border border-slate-900 bg-white p-1">
            <input name="q" type="search" placeholder={globalContent.nav.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none" />
            <button className="rounded-full bg-red-500 px-4 text-sm font-black text-white">Search</button>
          </form>
          <div className="grid gap-2">
            {[{ label: 'Home', href: '/' }, ...navItems, ...(session ? [{ label: `Signed in: ${visibleName}`, href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign Up', href: '/signup' }])].map((item) => (
              <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black">
                {item.label}
              </Link>
            ))}
            {session ? <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-md border border-[var(--editable-border)] bg-[var(--slot4-blue)] px-4 py-3 text-left text-sm font-black text-white">Logout</button> : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
