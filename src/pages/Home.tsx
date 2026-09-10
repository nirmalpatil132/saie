import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { Education } from "@/components/education/Education";
import { Achievements } from "@/components/achievements/Achievements";
import { Contact } from "@/components/contact/Contact";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        // Wait a tick for layout to settle after route transition.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    }
  }, [location.hash]);

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}
