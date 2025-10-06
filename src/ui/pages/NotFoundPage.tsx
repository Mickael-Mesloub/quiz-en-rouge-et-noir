import { useNavigate } from "react-router-dom";
import { Button } from "@/ui/components/Button";
import { H1, H2, Text } from "@/ui/components/Typography";
import { Main, Section } from "@/ui/components/Layout";

export default function NotFoundPage() {
  const navigate = useNavigate();
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/");
  };

  return (
    <Main className="flex flex-col items-center justify-center gap-8">
      <H1>Oups !</H1>
      <Section>
        <H2>Vous cherchez quelque chose ?</H2>
        <Text>
          Vous avez dû vous tromper de chemin, il n&apos;y a rien à voir ici 👀
        </Text>
      </Section>
      <Button
        className="hover:bg-primary-100 hover:text-accent-600 w-fit border-2"
        onClick={handleClick}
      >
        Rentrer à la maison 🏠
      </Button>
    </Main>
  );
}
