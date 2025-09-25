import { Button } from "@/ui/components/Button";
import { twMerge } from "tailwind-merge";

interface QuestionCardActionsProps {
  openModal: () => void;
}

export default function QuestionCardActions({
  openModal,
}: QuestionCardActionsProps) {
  return (
    <div className="relative flex w-full flex-1">
      <ShowAnswerBtn onClick={openModal}>Afficher la réponse</ShowAnswerBtn>
    </div>
  );
}

function ShowAnswerBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "right-[50%] bottom-8 translate-x-[50%] text-3xl absolute bg-primary-100 text-secondary-900 hover:opacity-85 active:translate-y-1 px-8";

  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  );
}
