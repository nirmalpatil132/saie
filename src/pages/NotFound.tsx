import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Container } from "@/components/ui/Container";

export function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center py-28">
      <Container className="text-center">
        <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-accent">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-6xl">
          This page wandered off.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-balance text-base leading-relaxed text-text-secondary">
          The page you're looking for doesn't exist, or the link is out of date.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-medium text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-soft"
          >
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </Container>
    </section>
  );
}
