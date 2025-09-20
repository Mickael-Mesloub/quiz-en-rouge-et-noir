import questionsData from "@/data/questions.json";
import { Question } from "@/types";
import { QuestionCard } from "@/ui/components/Quiz";
import { shuffle } from "@/utils";

const questions: Question[] = questionsData;
const shuffledQuestions = shuffle(questions).slice(0, 10);

export default function Quiz() {
  return <QuestionCard questions={shuffledQuestions} />;
}
