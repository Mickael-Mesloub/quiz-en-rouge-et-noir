import { Button } from "@/shared/components/ui";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface QuestionCardActionsProps {
  handleClickNextQuestion: () => void;
  handleClickPrevQuestion: () => void;
  openModal: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export default function QuestionCardActions({
  handleClickNextQuestion,
  handleClickPrevQuestion,
  isFirstQuestion,
  isLastQuestion,
  openModal,
}: QuestionCardActionsProps) {
  return (
    <div className="relative flex w-full flex-1">
      {!isFirstQuestion && (
        <SwitchQuestionBtn
          className="bottom-8 left-8 hover:-translate-x-1"
          disabled={isFirstQuestion}
          onClick={handleClickPrevQuestion}
        >
          <CircleArrowLeft size={36} />
        </SwitchQuestionBtn>
      )}

      <ShowAnswerBtn
        className="right-[50%] bottom-8 translate-x-[50%] text-3xl"
        onClick={openModal}
      >
        Afficher la réponse
      </ShowAnswerBtn>

      {!isLastQuestion && (
        <SwitchQuestionBtn
          className="right-8 bottom-8 hover:translate-x-1"
          disabled={isLastQuestion}
          onClick={handleClickNextQuestion}
        >
          <CircleArrowRight size={36} />
        </SwitchQuestionBtn>
      )}
    </div>
  );
}

function SwitchQuestionBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "absolute bg-accent-50 text-secondary-900 hover:opacity-85 transition-all active:translate-y-1";

  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  );
}

function ShowAnswerBtn({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "absolute bg-accent-50 text-secondary-900 hover:opacity-85 transition-all active:translate-y-1";

  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  );
}
