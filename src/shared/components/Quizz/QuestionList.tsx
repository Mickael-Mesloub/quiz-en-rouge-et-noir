import { Question } from "@/@types";
import QuestionListItem from "@/shared/components/Quizz/QuestionListItem";

interface QuestionsListProps {
  questions: Question[];
}

export default function QuestionsList({ questions }: QuestionsListProps) {
  return (
    <>
      {questions.map((question) => (
        <QuestionListItem key={question.id} question={question} />
      ))}
    </>
  );
}
