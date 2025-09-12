import { Question } from "@/shared/types";
import { useState } from "react";

type UseQuizzParams = {
  questions: Question[];
};

export default function useQuizz({ questions }: UseQuizzParams) {
  // TODO:
  // - const isQuizzEnded: boolean = showAnswer && isLastQuestion
  // - show end quizz button -> if showAnswer && currentIndex === questions.length - 1

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const isFirstQuestion: boolean = currentQuestionIndex === 0;
  const isLastQuestion: boolean = currentQuestionIndex === questions.length - 1;

  const handleClickNextQuestion = () => {
    if (isLastQuestion) return;

    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const handleClickPrevQuestion = () => {
    if (isFirstQuestion) return;

    setCurrentQuestionIndex((prev) => prev - 1);
  };

  return {
    currentQuestionIndex,
    isFirstQuestion,
    isLastQuestion,
    handleClickNextQuestion,
    handleClickPrevQuestion,
  };
}
