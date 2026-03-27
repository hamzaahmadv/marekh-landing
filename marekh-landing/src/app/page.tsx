"use client";

import dynamic from "next/dynamic";

// All sections use motion hooks — load client-side only to avoid SSR hook conflicts
const Navbar = dynamic(() => import("@/components/layout/Navbar").then((m) => ({ default: m.Navbar })), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero").then((m) => ({ default: m.Hero })), { ssr: false });
const AboutStrip = dynamic(() => import("@/components/sections/AboutStrip").then((m) => ({ default: m.AboutStrip })), { ssr: false });
const PolymerSection = dynamic(() => import("@/components/sections/PolymerSection").then((m) => ({ default: m.PolymerSection })), { ssr: false });
const VepreneSection = dynamic(() => import("@/components/sections/VepreneSection").then((m) => ({ default: m.VepreneSection })), { ssr: false });
const DistributionSection = dynamic(() => import("@/components/sections/DistributionSection").then((m) => ({ default: m.DistributionSection })), { ssr: false });
const CustomersSection = dynamic(() => import("@/components/sections/CustomersSection").then((m) => ({ default: m.CustomersSection })), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection })), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStrip />
      <PolymerSection />
      <VepreneSection />
      <DistributionSection />
      <CustomersSection />
      <ContactSection />
    </main>
  );
}
