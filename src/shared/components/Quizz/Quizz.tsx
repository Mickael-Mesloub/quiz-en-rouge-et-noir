import QuestionCard from "@/shared/components/Quizz/QuestionCard";
import questionsData from "@/data/questions.json";
import { Question } from "@/shared/types";
import { shuffle } from "@/shared/utils/array.utils";

const questions: Question[] = questionsData;
const shuffledQuestions = shuffle(questions);

export default function Quizz() {
  return <QuestionCard questions={shuffledQuestions} />;
}
