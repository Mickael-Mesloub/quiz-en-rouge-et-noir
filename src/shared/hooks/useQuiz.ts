import { Question } from "@/shared/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type UseQuizParams = {
  questions: Question[];
};

export default function useQuiz({ questions }: UseQuizParams) {
  const navigate = useNavigate();
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

  const endQuiz = () => {
    navigate("/");
  };

  return {
    currentQuestionIndex,
    isFirstQuestion,
    isLastQuestion,
    handleClickNextQuestion,
    handleClickPrevQuestion,
    endQuiz,
  };
}
