import { Question } from "@/shared/types";

type IsFirstQuestionFnArgs = {
  currentQuestionIndex: number;
};

type IsLastQuestionFnArgs = IsFirstQuestionFnArgs & {
  questions: Question[];
};

export function isFirstQuestion({
  currentQuestionIndex,
}: IsFirstQuestionFnArgs): boolean {
  return currentQuestionIndex === 0;
}

export function isLastQuestion({
  currentQuestionIndex,
  questions,
}: IsLastQuestionFnArgs): boolean {
  return currentQuestionIndex === questions.length - 1;
}
