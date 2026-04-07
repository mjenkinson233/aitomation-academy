import { siteConfig } from "@/lib/site";

export const metadata = {
  title: `Support | ${siteConfig.name}`,
  description: `Support information for ${siteConfig.name}`,
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
          ← Back
        </a>
        <h1 className="mb-8 text-4xl font-bold text-slate-900">Support</h1>
        <div className="space-y-8 text-slate-700">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">Need help?</h2>
            <p>
              For questions about The Claude Content System, community access, billing, or technical issues,
              email us at <a className="text-orange-600 hover:text-orange-700" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.
            </p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">What to include</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your name and email address</li>
              <li>A short description of the problem</li>
              <li>Screenshots if something is broken</li>
              <li>Any relevant order or subscription details</li>
            </ul>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">Response time</h2>
            <p>We aim to respond to support requests within 2 business days.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
