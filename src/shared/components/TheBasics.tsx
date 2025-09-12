import { twMerge } from "tailwind-merge";
import { Button } from "@/shared/components/ui";
import { Section } from "@/shared/layouts";
import { FaArrowRight } from "react-icons/fa";
import Heading2 from "@/shared/components/ui/Heading/Heading2";
import Text from "@/shared/components/ui/Text";
import { useNavigate } from "react-router-dom";

export default function TheBasics() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/quizz");
  };

  return (
    <Section>
      <Heading2>Comment on joue ?</Heading2>
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
          "Après chaque question, on regarde si vous avez la bonne réponse et on attribue les points. Chaque bonne réponse rapporte +1 point."
        }
      </Text>
      <Text>
        {
          "À la fin du quiz, le joueur ayant le plus de points remporte la partie 🏆 Alors, prêts à relever le défi et ATOMISER vos adversaires ? 💥"
        }
      </Text>
      <StartQuizzBtn onClick={handleClick}>
        {"Zé parti let's gooo"}
      </StartQuizzBtn>
    </Section>
  );
}

function StartQuizzBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "group/start-quizz p-4 transition-all duration-500 ease w-full rounded-full hover:bg-accent-50 hover:text-accent-600 border-2 justify-center";
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
      <span className="text-accent-50 group-hover/start-quizz:text-accent-600 mt-1 transition-all duration-500">
        <FaArrowRight
          focusable={false}
          aria-hidden={true}
          className="text-inherit"
        />
      </span>
    </Button>
  );
}
