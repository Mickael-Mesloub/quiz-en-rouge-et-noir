import QuestionsList from "@/shared/components/Quizz/QuestionList";
import { Heading2 } from "@/shared/components/ui";
import questionsData from "@/data/questions.json";
import { Question } from "@/@types";

export default function Quizz() {
  const questions: Question[] = questionsData;

  return (
    <div className="p-8">
      <Heading2 className="text-4xl">{"Bienvenue sur le quiz"}</Heading2>
      <QuestionsList questions={questions} />
    </div>
  );
}
