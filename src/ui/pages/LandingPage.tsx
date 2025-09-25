import { Section } from "@/ui/components/Layout";
import { QuizRules } from "@/ui/components/Quiz";
import { H1 } from "@/ui/components/Typography";

export default function LandingPage() {
  return (
    <Section className="h-full gap-16 p-8">
      <H1>Quiz - En rouge et noir ❤️🖤</H1>
      <QuizRules />
    </Section>
  );
}
