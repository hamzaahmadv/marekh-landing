"use client";

import dynamic from "next/dynamic";

// All sections use motion hooks — load client-side only to avoid SSR hook conflicts
const Navbar = dynamic(() => import("@/components/layout/Navbar").then((m) => ({ default: m.Navbar })), { ssr: false });
const Hero = dynamic(() => import("@/components/sections/Hero").then((m) => ({ default: m.Hero })), { ssr: false });
const AboutStrip = dynamic(() => import("@/components/sections/AboutStrip").then((m) => ({ default: m.AboutStrip })), { ssr: false });
const Divisions = dynamic(() => import("@/components/sections/Divisions").then((m) => ({ default: m.Divisions })), { ssr: false });
const VepreneSection = dynamic(() => import("@/components/sections/VepreneSection").then((m) => ({ default: m.VepreneSection })), { ssr: false });
const CustomersSection = dynamic(() => import("@/components/sections/CustomersSection").then((m) => ({ default: m.CustomersSection })), { ssr: false });
const ContactSection = dynamic(() => import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection })), { ssr: false });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutStrip />
      <Divisions />
      <VepreneSection />
      <CustomersSection />
      <ContactSection />
    </main>
  );
}
