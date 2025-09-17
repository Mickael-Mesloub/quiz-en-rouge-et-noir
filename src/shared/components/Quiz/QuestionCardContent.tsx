import { Heading2 } from "@/shared/components/ui";
import { Question } from "@/shared/types";

interface QuestionCardContentProps {
  question: Question;
}

export default function QuestionCardContent({
  question,
}: QuestionCardContentProps) {
  return (
    <div className="flex flex-2 items-center justify-center p-8">
      <Heading2 className="text-center text-5xl">{question.question}</Heading2>
    </div>
  );
}
