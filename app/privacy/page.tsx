import { siteConfig } from "@/lib/site";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: "How AItomation Academy collects, uses, and protects your personal information. Read our full privacy policy.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
          ← Back
        </a>
        <h1 className="mb-8 text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none">
          <p>Effective date: April 3, 2026</p>
          <p>
            AITOMATION LLC operates AItomation Academy. This Privacy Policy explains what information we collect,
            how we use it, and what choices you have.
          </p>
          <h2>Information We Collect</h2>
          <p>We may collect your name, email address, analytics data, and any information you submit through forms.</p>
          <h2>How We Use Information</h2>
          <p>We use your information to deliver The Claude Content System, send educational emails, improve the site, and provide support.</p>
          <h2>Analytics</h2>
          <p>We use analytics tools, including PostHog, to understand page views, scroll depth, CTA clicks, and form interactions.</p>
          <h2>Email Communications</h2>
          <p>If you opt in, we may send you emails about workflows, community updates, and related educational content. You can unsubscribe anytime.</p>
          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as Brevo for email delivery and PostHog for analytics.</p>
          <h2>Data Retention</h2>
          <p>We retain information for as long as necessary to provide the service, comply with legal obligations, and resolve disputes.</p>
          <h2>Your Rights</h2>
          <p>You can request access, correction, or deletion of your personal information by emailing {siteConfig.supportEmail}.</p>
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to {siteConfig.supportEmail}.</p>
        </div>
      </div>
    </main>
  );
}
