'use client'

import { Building2, MapPin, Search, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'List a business', body: 'Send company details, product categories, service locations, and seller contact information.' },
    { icon: Search, title: 'Post a buyer requirement', body: 'Tell sellers what product, quantity, delivery city, and timeline you need.' },
    { icon: ShieldCheck, title: 'Update listing details', body: 'Request changes to business profile data, category placement, images, or inquiry copy.' },
    { icon: MapPin, title: 'City and category support', body: 'Ask about local supplier coverage, new category groups, and regional discovery pages.' },
  ]

  return (
    <EditableSiteShell>
      <main className="mx-auto max-w-[1180px] px-4 py-10 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-600">{pagesContent.contact.description}</p>
            <div className="mt-6 grid gap-3">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5 text-[var(--slot4-accent)]" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{lane.body}</p>
                </div>
              ))}
            </div>
            
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_18px_44px_rgba(15,39,63,0.08)]">
            <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
