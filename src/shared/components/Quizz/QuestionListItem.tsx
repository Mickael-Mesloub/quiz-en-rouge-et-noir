import { Heading2 } from "@/shared/components/ui";
import { Question } from "@/shared/types";

interface QuestionListItemProps {
  question: Question;
}

export default function QuestionListItem({ question }: QuestionListItemProps) {
  return (
    <div className="h-full w-full shrink-0 grow p-4">
      <Heading2>{question.question}</Heading2>
    </div>
  );
}
