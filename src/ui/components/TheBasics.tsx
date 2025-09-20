import { twMerge } from "tailwind-merge";
import { Section } from "@/ui/components/Layout";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/components/Button";
import { H2, Text } from "@/ui/components/Typography";

export default function TheBasics() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <Section>
      <H2>Comment on joue ?</H2>
      <TheBasicsText>
        {
          "Vous allez devoir répondre à une série de questions sur des thèmes variés (Pop culture/culture générale, musique, cinéma...)"
        }
      </TheBasicsText>
      <TheBasicsText>
        {
          "Pour chaque question, vous disposerez de 15s pour écrire votre réponse. Soyez rapides 😉 !"
        }
      </TheBasicsText>
      <TheBasicsText>
        {
          "Après chaque question, on regarde si vous avez la bonne réponse et on attribue les points. Chaque bonne réponse rapporte +1 point."
        }
      </TheBasicsText>
      <TheBasicsText>
        {
          "À la fin du quiz, le joueur ayant le plus de points remporte la partie 🏆 Alors, prêts à relever le défi et ATOMISER vos adversaires ? 💥"
        }
      </TheBasicsText>
      <StartQuizBtn onClick={handleClick}>{"Zé parti let's gooo"}</StartQuizBtn>
    </Section>
  );
}

function StartQuizBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "text-2xl group/start-quiz p-4 transition-all duration-500 ease w-full rounded-full hover:bg-accent-50 hover:text-accent-600 border-2 justify-center";
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
      <span className="text-accent-50 group-hover/start-quiz:text-accent-600 mt-1 transition-all duration-500">
        <FaArrowRight
          focusable={false}
          aria-hidden={true}
          className="text-inherit"
        />
      </span>
    </Button>
  );
}

function TheBasicsText({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Text>) {
  const baseStyle = "text-2xl";

  return (
    <Text className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Text>
  );
}
