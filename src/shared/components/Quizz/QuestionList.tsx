import QuestionListItem from "@/shared/components/Quizz/QuestionListItem";
import { Button } from "@/shared/components/ui";
import useQuizz from "@/shared/hooks/useQuizz";
import { Question } from "@/shared/types";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

interface QuestionListProps {
  questions: Question[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  const {
    currentQuestionIndex,
    handleClickNextQuestion,
    handleClickPrevQuestion,
    isFirstQuestion,
    isLastQuestion,
  } = useQuizz({ questions });

  return (
    <div>
      <QuestionListItem question={questions[currentQuestionIndex]} />
      <Button disabled={isFirstQuestion} onClick={handleClickPrevQuestion}>
        <CircleArrowLeft />
      </Button>
      <Button disabled={isLastQuestion} onClick={handleClickNextQuestion}>
        <CircleArrowRight />
      </Button>
    </div>
  );
}
