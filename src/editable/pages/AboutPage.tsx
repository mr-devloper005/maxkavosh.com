import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { globalContent } from '@/editable/content/global.content'
import { Building2, MapPin, Search, ShieldCheck } from 'lucide-react'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f5f7fa)] px-4 py-10 text-[var(--editable-page-text,#06243a)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1180px] gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_14px_38px_rgba(15,39,63,0.08)] lg:p-8">
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-55">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-4">
              {[
                ['800+', 'categories'],
                ['1.1M+', 'registered users'],
                ['24/7', 'inquiry flow'],
                ['All India', 'seller coverage'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <p className="text-2xl font-black text-[var(--slot4-blue)]">{value}</p>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
                </div>
              ))}
            </div>
          </article>
          <aside className="grid gap-4">
            {pagesContent.about.values.map((value, index) => {
              const Icon = [Building2, Search, ShieldCheck][index] || MapPin
              return (
              <div key={value.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <Icon className="h-6 w-6 text-[var(--slot4-accent)]" />
                <h2 className="mt-4 text-xl font-black tracking-[-0.02em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            )})}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
