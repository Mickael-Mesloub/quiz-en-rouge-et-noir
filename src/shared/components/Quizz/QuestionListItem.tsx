import { Question } from "@/@types";
import { Heading2 } from "@/shared/components/ui";

interface QuestionListItemProps {
  question: Question;
}

export default function QuestionListItem({ question }: QuestionListItemProps) {
  return (
    <div className="p-4">
      <Heading2>{question.question}</Heading2>
    </div>
  );
}
