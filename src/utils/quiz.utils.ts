import { Question } from "@/types";

type IsLastQuestionFnArgs = {
  currentQuestionIndex: number;
  questions: Question[];
};

export function isLastQuestion({
  currentQuestionIndex,
  questions,
}: IsLastQuestionFnArgs): boolean {
  return currentQuestionIndex === questions.length - 1;
}
