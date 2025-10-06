import { Button } from "@/ui/components/Button";
import { twMerge } from "tailwind-merge";

interface QuestionCardActionsProps {
  openModal: () => void;
}

export default function QuestionCardActions({
  openModal,
}: QuestionCardActionsProps) {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-end py-8">
      <ShowAnswerBtn onClick={openModal}>Afficher la réponse</ShowAnswerBtn>
    </div>
  );
}

function ShowAnswerBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle = "text-3xl px-8";

  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  );
}
