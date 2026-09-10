import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollLock } from "@/hooks/useScrollLock";
import { cn } from "@/lib/utils";
import { EASE_PREMIUM } from "@/lib/motion";
import { navItems, sectionIds } from "./navItems";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const activeId = useActiveSection(isHome ? sectionIds : []);

  useScrollLock(drawerOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const goToSection = (id: string) => {
    setDrawerOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : "border-b border-transparent",
      )}
    >
      <Container as="nav" className="flex h-18 items-center justify-between py-4" aria-label="Primary">
        <Link
          to="/"
          onClick={(e: MouseEvent<HTMLAnchorElement>) => {
            if (isHome) {
              e.preventDefault();
              goToSection("home");
            }
          }}
          className="font-display text-lg font-semibold tracking-tight text-text-primary"
        >
          Saie<span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => goToSection(item.id)}
                className={cn(
                  "font-body text-sm font-medium transition-colors duration-300",
                  activeId === item.id ? "text-accent" : "text-text-secondary hover:text-text-primary",
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button variant="primary" onClick={() => goToSection("contact")}>
            Let's Connect
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-primary lg:hidden"
          onClick={() => setDrawerOpen((v) => !v)}
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          aria-expanded={drawerOpen}
        >
          {drawerOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: EASE_PREMIUM }}
            className="fixed inset-x-0 top-18 bottom-0 overflow-y-auto border-b border-border bg-background lg:hidden"
          >
            <Container className="flex min-h-full flex-col justify-between py-10">
              <ul className="flex flex-col gap-2">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.4 }}
                  >
                    <button
                      onClick={() => goToSection(item.id)}
                      className={cn(
                        "font-display py-3 text-3xl font-medium transition-colors",
                        activeId === item.id ? "text-accent" : "text-text-primary",
                      )}
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
              <Button variant="primary" className="w-full" onClick={() => goToSection("contact")}>
                Let's Connect
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
