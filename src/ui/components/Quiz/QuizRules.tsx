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
    <Article className="bg-primary-400 text-secondary-900 max-w-[33%] gap-8 rounded-2xl p-8 shadow-xl transition-all duration-300 hover:shadow-2xl">
      <H2>Comment on joue ?</H2>
      <Text>
        {
          "Vous allez devoir répondre à une série de questions sur des thèmes variés (Pop culture/culture générale, musique, cinéma...)"
        }
      </Text>
      <Text>
        {
          "Pour chaque question, vous disposerez de 15s pour écrire votre réponse. Soyez rapides 😉 !"
        }
      </Text>
      <Text>
        {
          "Après chaque question, on regarde si vous avez la bonne réponse et on attribue les points. Chaque bonne réponse rapporte +1 point 💪"
        }
      </Text>
      <Text>
        {
          "À la fin du quiz, le joueur ayant le plus de points remporte la partie 🏆 Alors, prêts à relever le défi et ATOMISER vos adversaires ? 💥"
        }
      </Text>
      <StartQuizBtn onClick={handleClick}>{"Zé parti let's gooo"}</StartQuizBtn>
    </Article>
  );
}

function StartQuizBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "group/start-quiz transition-all duration-300 ease w-full rounded-full hover:bg-primary-100 hover:text-accent-500 border-2 justify-center";
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
      <span className="text-secondary-900 group-hover/start-quiz:text-accent-500 mt-1 transition-all duration-300">
        <FaArrowRight
          focusable={false}
          aria-hidden={true}
          className="text-inherit"
        />
      </span>
    </Button>
  );
}
