import { useQuizState } from "@/store";
import { Question } from "@/types";
import { isFirstQuestion, isLastQuestion } from "@/utils";
import { useNavigate } from "react-router-dom";

type UseQuizParams = {
  questions: Question[];
};

export default function useQuiz({ questions }: UseQuizParams) {
  const navigate = useNavigate();
  const { currentQuestionIndex, nextQuestion, prevQuestion } = useQuizState();
  const isQuizFinished: boolean = isLastQuestion({
    currentQuestionIndex,
    questions,
  });

  const handleClickNextQuestion = () => {
    if (isQuizFinished) return;

    nextQuestion();
  };

  const handleClickPrevQuestion = () => {
    if (isFirstQuestion({ currentQuestionIndex })) return;

    prevQuestion();
  };

  const endQuiz = () => {
    // TODO: show result screen instead of redirection
    // TODO: add quiz state reset when endQuiz function is triggered
    navigate("/");
  };

  return {
    currentQuestionIndex,
    isQuizFinished,
    handleClickNextQuestion,
    handleClickPrevQuestion,
    endQuiz,
  };
}
