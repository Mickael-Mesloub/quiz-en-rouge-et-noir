import QuestionCard from "@/shared/components/Quizz/QuestionCard";
import questionsData from "@/data/questions.json";
import { Question } from "@/shared/types";

export default function Quizz() {
  const questions: Question[] = questionsData;

  return <QuestionCard questions={questions} />;
}
