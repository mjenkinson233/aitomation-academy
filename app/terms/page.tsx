import { siteConfig } from "@/lib/site";

export const metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: "Terms and conditions for using AItomation Academy, including community access, courses, and digital products.",
  alternates: { canonical: `${siteConfig.url}/terms` },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8">
          ← Back
        </a>
        <h1 className="mb-8 text-4xl font-bold text-slate-900">Terms of Service</h1>
        <div className="prose prose-slate max-w-none">
          <p>Effective date: April 3, 2026</p>
          <p>These Terms of Service govern your use of AItomation Academy operated by AITOMATION LLC.</p>
          <h2>Use of the Site</h2>
          <p>You may use the site for lawful purposes only. You agree not to misuse, disrupt, or attempt unauthorized access to the site or related systems.</p>
          <h2>Educational Content</h2>
          <p>All content is provided for educational and informational purposes. We do not guarantee specific business or financial outcomes.</p>
          <h2>Intellectual Property</h2>
          <p>All site content, workflows, branding, and materials are owned by AITOMATION LLC unless otherwise stated.</p>
          <h2>Payments and Subscriptions</h2>
          <p>If paid products or subscriptions are offered, additional billing terms, pricing, refund rules, and renewal details will apply at checkout.</p>
          <h2>Disclaimer</h2>
          <p>The site and content are provided on an as-is basis without warranties of any kind, to the extent permitted by law.</p>
          <h2>Limitation of Liability</h2>
          <p>AITOMATION LLC is not liable for indirect, incidental, special, or consequential damages arising from your use of the site.</p>
          <h2>Changes</h2>
          <p>We may update these terms from time to time. Continued use of the site means you accept the updated terms.</p>
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to {siteConfig.supportEmail}.</p>
        </div>
      </div>
    </main>
  );
}
