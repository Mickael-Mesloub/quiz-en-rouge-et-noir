import { useQuizState } from "@/store";
import { Button } from "@/ui/components/Button";
import { isFirstQuestion } from "@/utils";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface QuestionCardActionsProps {
  openModal: () => void;
  isQuizFinished: boolean;
}

export default function QuestionCardActions({
  openModal,
  isQuizFinished,
}: QuestionCardActionsProps) {
  const { currentQuestionIndex, prevQuestion, nextQuestion } = useQuizState();

  return (
    <div className="relative flex w-full flex-1">
      {!isFirstQuestion({ currentQuestionIndex }) && (
        <SwitchQuestionBtn
          className="bottom-8 left-8 hover:-translate-x-1"
          disabled={isFirstQuestion({ currentQuestionIndex })}
          onClick={prevQuestion}
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

      {!isQuizFinished && (
        <SwitchQuestionBtn
          className="right-8 bottom-8 hover:translate-x-1"
          disabled={isQuizFinished}
          onClick={nextQuestion}
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
