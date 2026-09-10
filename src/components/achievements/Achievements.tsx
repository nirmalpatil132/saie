import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { achievements } from "@/data/achievements";
import { AchievementCard } from "./AchievementCard";

export function Achievements() {
  const primary = achievements.filter((a) => a.priority === "primary");
  const secondary = achievements.filter((a) => a.priority === "secondary");

  return (
    <section id="achievements" className="py-28 sm:py-36">
      <Container>
        <SectionLabel index="06" title="Achievements" />
        <Reveal>
          <h2 className="mt-10 max-w-2xl text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl">
            Recognition along the way.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {primary.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} delay={i * 0.08} />
          ))}
          {secondary.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} delay={(i + primary.length) * 0.06} />
          ))}
        </div>
      </Container>
    </section>
  );
}
