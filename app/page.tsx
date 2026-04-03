import { Hero } from "./sections/hero";
import { SocialProof } from "./sections/social-proof";
import { WhatYouGet } from "./sections/what-you-get";
import { HowItWorks } from "./sections/how-it-works";
import { LeadMagnetSection } from "./sections/lead-magnet-section";
import { FAQ } from "./sections/faq";
import { FinalCTA } from "./sections/final-cta";
import { Footer } from "./sections/footer";
import { Navbar } from "./components/navbar";
import { StructuredData } from "@/components/structured-data";
import { homePageSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <StructuredData data={homePageSchema()} />
      <main className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <SocialProof />
        <WhatYouGet />
        <HowItWorks />
        <LeadMagnetSection />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
