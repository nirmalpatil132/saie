import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social";
import { EASE_PREMIUM } from "@/lib/motion";
import { RoleRotator } from "./RoleRotator";
import { HeroVisual } from "./HeroVisual";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_PREMIUM } },
};

export function Hero() {
  const github = socialLinks.find((l) => l.icon === "github");
  const linkedin = socialLinks.find((l) => l.icon === "linkedin");

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center pt-28 pb-16">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial="hidden" animate="visible" variants={container}>
          <motion.p
            variants={item}
            className="font-display text-xs font-medium uppercase tracking-[0.25em] text-text-secondary"
          >
            {profile.eyebrow}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-balance text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[1.02] tracking-tight text-text-primary"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 font-display text-2xl font-medium text-text-secondary sm:text-3xl"
          >
            <RoleRotator roles={profile.roles} />
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-balance text-base leading-relaxed text-text-secondary sm:text-lg">
            {profile.summary}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              as="a"
              href={profile.resumeHref}
              download
              variant="primary"
            >
              Download Résumé <ArrowUpRight size={16} />
            </Button>
            <Button
              variant="secondary"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-4">
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <GithubIcon size={18} />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                <LinkedinIcon size={18} />
              </a>
            )}
            <span className="text-sm text-text-muted">{profile.location}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE_PREMIUM }}
          className="order-first lg:order-last"
        >
          <HeroVisual />
        </motion.div>
      </Container>

      <motion.button
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-text-muted transition-colors hover:text-accent sm:flex sm:flex-col"
      >
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </motion.button>
    </section>
  );
}
