'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { LogOut } from 'lucide-react'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#ffffff', '--editable-footer-text': '#06243a' } as CSSProperties
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto max-w-[1180px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,39,63,0.06)] md:grid-cols-[1.25fr_2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--editable-border)] bg-white">
                <Image src="/favicon.png" alt={globalContent.site.name} width={48} height={48} className="h-12 w-12 object-contain" />
              </span>
              <span>
                <span className="block text-lg font-black">{globalContent.site.name}</span>
                <span className="block text-xs font-bold text-slate-500">{globalContent.footer.tagline}</span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">{globalContent.footer.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Delhi', 'Mumbai', 'Ahmedabad', 'Kolkata', 'Chennai', 'Bengaluru', 'Hyderabad', 'Pune'].map((city) => (
                <Link key={city} href={`/search?q=${encodeURIComponent(city)}`} className="rounded-md border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600 hover:bg-slate-50">
                  {city}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {globalContent.footer.columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-black">{column.title}</h3>
                <div className="mt-3 grid gap-2">
                  {column.links.map((link) => (
                    <Link key={link.href + link.label} href={link.href} className="text-sm font-semibold text-slate-600 hover:text-[var(--slot4-blue)]">
                      {link.label}
                    </Link>
                  ))}
                  {column.title === 'For Sellers' && session ? (
                    <button type="button" onClick={logout} className="inline-flex items-center gap-2 text-left text-sm font-semibold text-slate-600 hover:text-[var(--slot4-blue)]">
                      <LogOut className="h-4 w-4" /> Logout
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4">
            
            <Link href="/contact" className="hover:text-[var(--slot4-blue)]">Help Center</Link>
            <Link href="/about" className="hover:text-[var(--slot4-blue)]">About</Link>
            
          </div>
          
        </div>
        <div className="mt-5 bg-slate-100 px-4 py-3 text-center text-xs font-semibold text-slate-600">
          © {year} {globalContent.site.name}. {globalContent.footer.bottomNote}
        </div>
      </div>
    </footer>
  )
}
