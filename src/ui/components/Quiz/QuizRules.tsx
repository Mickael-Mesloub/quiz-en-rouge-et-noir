import { twMerge } from "tailwind-merge";
import { Article } from "@/ui/components/Layout";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/components/Button";
import { H2, Text } from "@/ui/components/Typography";

export default function QuizRules() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quiz");
  };

  return (
    <Article className="bg-surface-bg w-fit max-w-[33%] gap-8 rounded-2xl p-8 shadow-md hover:shadow-lg">
      <H2>Comment on joue ?</H2>
      <RuleText>
        {
          "Vous allez devoir répondre à une série de questions sur des thèmes variés (Pop culture/culture générale, musique, cinéma...)"
        }
      </RuleText>
      <RuleText>
        {
          "Pour chaque question, vous disposerez de 15s pour écrire votre réponse. Soyez rapides 😉 !"
        }
      </RuleText>
      <RuleText>
        {
          "Après chaque question, on regarde si vous avez la bonne réponse et on attribue les points. Chaque bonne réponse rapporte +1 point 💪"
        }
      </RuleText>
      <RuleText>
        {
          "À la fin du quiz, le joueur ayant le plus de points remporte la partie 🏆 Alors, prêts à relever le défi et ATOMISER vos adversaires ? 💥"
        }
      </RuleText>
      <StartQuizBtn onClick={handleClick}>{"Zé parti let's gooo"}</StartQuizBtn>
    </Article>
  );
}

function StartQuizBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle = "w-full rounded-full hover:bg-transparent justify-center";
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
      <span className="mt-1">
        <FaArrowRight
          focusable={false}
          aria-hidden={true}
          className="text-inherit"
        />
      </span>
    </Button>
  );
}

function RuleText({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Text>) {
  const baseStyle = "text-muted";

  return (
    <Text className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Text>
  );
}
