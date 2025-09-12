import { Question } from "@/shared/types";
import { useState } from "react";

type UseQuizzParams = {
  questions: Question[];
};

export default function useQuizz({ questions }: UseQuizzParams) {
  // TODO:

  // - const [showAnswer, setShowAnswer] = useState<boolean>(false) -> updated when click on "Show answer" button
  // - const [showEndQuizzBtn, setShowEndQuizzBtn] = useState<boolean>(false)
  // - const isLastQuestion: boolean = currentIndex === questions.length - 1
  // - const isFirstQuestion: boolean = currentIndex === 0
  // - const isNextQuestionBtnDisabled: boolean = showAnswer && currentIndex <= questions.length - 1
  // - const isQuizzEnded: boolean = showAnswer && isLastQuestion
  // - handle click prev question -> if currentIndex > 0 -> button disabled if isFirstQuestion
  // - handle click next question -> if showAnswer && currentIndex <= questions.length - 1 -> button disabled while answer has not been shown
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
