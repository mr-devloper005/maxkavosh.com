import type { Metadata } from 'next'
import Link from 'next/link'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalSignupForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/signup', title: 'Sign up', description: pagesContent.auth.signup.metadataDescription })
}

export default function SignupPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--editable-page-bg,#f5f7fa)] text-[var(--editable-page-text,#06243a)]">
        <section className="mx-auto grid min-h-[calc(100vh-12rem)] max-w-[1180px] items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[420px_1fr] lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,39,63,0.1)] sm:p-8">
            <h1 className="text-3xl font-black tracking-[-0.05em]">{pagesContent.auth.signup.formTitle}</h1>
            <EditableLocalSignupForm />
            <p className="mt-5 text-sm text-slate-600">Already have an account? <Link href="/login" className="font-black text-[var(--slot4-blue)] underline-offset-4 hover:underline">{pagesContent.auth.signup.loginCta}</Link></p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-slate-500">{pagesContent.auth.signup.badge}</p>
            <h2 className="mt-5 max-w-xl text-4xl font-black leading-tight sm:text-5xl">{pagesContent.auth.signup.title}</h2>
            <p className="mt-6 max-w-lg text-sm leading-8 text-slate-600">{pagesContent.auth.signup.description}</p>
            <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-black">What sellers can add</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Company profile', 'Product categories', 'Service area', 'Contact details', 'Inquiry notes'].map((item) => (
                  <span key={item} className="rounded-md bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
