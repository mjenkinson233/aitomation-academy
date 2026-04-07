import { siteConfig } from "@/lib/site";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/sections/footer";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: `About Marko | ${siteConfig.name}`,
  description:
    "Meet Marko Sudar — software engineer, AI researcher, and the instructor behind AItomation Academy. Learn why he built this community.",
};

const credentials = [
  "Founding Engineer behind a GenAI startup acquired for $1.8M",
  "AI Engineer at AUVSI, building production AI systems daily",
  "Former Cloud Engineer and Web Developer at Oracle",
  "Full Stack Engineer at Vectal (Next.js, FastAPI)",
  "BS in Computer Science, 4.0 GPA, Catawba College",
  "AWS Machine Learning for NLP certified",
  "Published researcher on Generative AI for uncrewed systems",
  "Hosted Generative AI panel at AUVSI XPONENTIAL 2025",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white bg-grid">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-10"
          >
            &larr; Back
          </Link>

          {/* Header */}
          <div className="mb-12 flex flex-col sm:flex-row items-start gap-8">
            <Image
              src="/images/marko_sudar_profile_photo.png"
              alt="Marko Sudar"
              width={160}
              height={160}
              className="rounded-2xl shrink-0"
            />
            <div>
              <span className="inline-block text-xs font-semibold text-orange-600 uppercase tracking-widest mb-4">
                About the Instructor
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display tracking-tight text-slate-900 leading-[1.1] mb-6">
                Hey, I&apos;m Marko Sudar
              </h1>
              <p className="text-lg text-slate-500 max-w-2xl">
                Software engineer, AI researcher, and the person behind
                AItomation Academy.
              </p>
            </div>
          </div>

          <div className="space-y-10 text-slate-700 leading-relaxed">
            {/* Story */}
            <section>
              <h2 className="text-2xl font-display text-slate-900 mb-4">
                Why I built this
              </h2>
              <p className="mb-4">
                I&apos;m a software engineer from Serbia living in the US. I
                spend my days building AI-powered production systems at AUVSI,
                the world&apos;s largest organization for uncrewed systems and
                robotics. Before that, I was the founding engineer behind a
                Generative AI startup that was acquired for $1.8M.
              </p>
              <p className="mb-4">
                I&apos;ve worked at Oracle as a Cloud Engineer, built full-stack
                applications at Vectal, published research on Generative AI for
                uncrewed systems, and hosted panels on AI at major industry
                conferences. I write production code with Claude every single
                day.
              </p>
              <p>
                The problem I kept seeing? The people who could benefit most from
                AI tools like Claude &mdash; consultants, marketers, creators,
                founders &mdash; were the ones who had the least guidance on how
                to actually use them. Everything was either too technical or too
                surface-level. So I built AItomation Academy to fix that.
              </p>
            </section>

            {/* What makes me qualified */}
            <section>
              <h2 className="text-2xl font-display text-slate-900 mb-4">
                What I bring to the table
              </h2>
              <ul className="space-y-3">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-orange-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Teaching approach */}
            <section>
              <h2 className="text-2xl font-display text-slate-900 mb-4">
                How I teach
              </h2>
              <p className="mb-4">
                Everything I teach comes from real work, not theory. I
                don&apos;t do hype, and I don&apos;t do fluff. If I show you a
                workflow, it&apos;s because I use it myself to ship real
                projects.
              </p>
              <p>
                AItomation Academy is a practical system. You set up Claude,
                build real outputs, and walk away with something you can actually
                use. Plus you get direct access to me for questions, live weekly
                coaching calls, and a community of professionals who are building
                with Claude alongside you.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-slate-900 p-8 sm:p-10 text-center">
              <h2 className="text-2xl font-display text-white mb-3">
                Ready to start?
              </h2>
              <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                Join 400+ professionals who are already using Claude for real
                work. No coding required.
              </p>
              <Link
                href="/skool-redirect"
                className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-8 py-4 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
              >
                Join the Free Community
              </Link>
            </section>

            {/* Connect */}
            <section>
              <h2 className="text-2xl font-display text-slate-900 mb-4">
                Connect with me
              </h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href={siteConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    YouTube
                  </a>{" "}
                  &mdash; Tutorials and walkthroughs
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/marko-sudar-00918221b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    LinkedIn
                  </a>{" "}
                  &mdash; Professional updates
                </li>
                <li>
                  <a
                    href="https://www.markosudar.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    markosudar.com
                  </a>{" "}
                  &mdash; Personal site
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    {siteConfig.email}
                  </a>{" "}
                  &mdash; Direct contact
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
