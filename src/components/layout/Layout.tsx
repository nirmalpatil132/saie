import type { ReactNode } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AmbientBackground } from "@/components/layout/AmbientBackground";
import { CursorGlow } from "@/components/ui/CursorGlow";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
