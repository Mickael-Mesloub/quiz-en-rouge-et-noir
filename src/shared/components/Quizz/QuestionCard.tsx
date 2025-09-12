import QuestionCardActions from "@/shared/components/Quizz/QuestionCardActions";
import QuestionCardHeader from "@/shared/components/Quizz/QuestionCardHeader";
import QuestionCardContent from "@/shared/components/Quizz/QuestionCardContent";
import { HEADER_HEIGHT } from "@/shared/constants/layout";
import useQuizz from "@/shared/hooks/useQuizz";
import { Question } from "@/shared/types";

interface QuestionCardProps {
  questions: Question[];
}

const containerHeight: number = window.innerHeight - HEADER_HEIGHT;

export default function QuestionCard({ questions }: QuestionCardProps) {
  const {
    currentQuestionIndex,
    handleClickNextQuestion,
    handleClickPrevQuestion,
    isFirstQuestion,
    isLastQuestion,
  } = useQuizz({ questions });

  return (
    <div
      className="flex flex-col items-center justify-between"
      style={{ minHeight: containerHeight }}
    >
      <QuestionCardHeader
        currentQuestionIndex={currentQuestionIndex}
        numberOfQuestions={questions.length}
      />
      <QuestionCardContent question={questions[currentQuestionIndex]} />
      <QuestionCardActions
        handleClickNextQuestion={handleClickNextQuestion}
        handleClickPrevQuestion={handleClickPrevQuestion}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
}
