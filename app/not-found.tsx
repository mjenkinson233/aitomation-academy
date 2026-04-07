import Link from "next/link";
import { Navbar } from "@/app/components/navbar";
import { Footer } from "@/app/sections/footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white bg-grid flex items-center justify-center">
        <div className="text-center px-4">
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-widest mb-4">
            404
          </p>
          <h1 className="text-3xl sm:text-4xl font-display tracking-tight text-slate-900 mb-4">
            Page not found
          </h1>
          <p className="text-slate-500 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              Go home
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Read the blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
