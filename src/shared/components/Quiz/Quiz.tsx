import questionsData from "@/data/questions.json";
import { Question } from "@/shared/types";
import { shuffle } from "@/shared/utils/array.utils";
import QuestionCard from "@/shared/components/Quiz/QuestionCard";

const questions: Question[] = questionsData;
const shuffledQuestions = shuffle(questions).slice(0, 10);

export default function Quiz() {
  return <QuestionCard questions={shuffledQuestions} />;
}
