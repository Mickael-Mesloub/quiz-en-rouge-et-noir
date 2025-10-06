import { Question } from "@/types";
import { H2 } from "@/ui/components/Typography";

interface QuestionCardContentProps {
  question: Question;
}

export default function QuestionCardContent({
  question,
}: QuestionCardContentProps) {
  return (
    <div className="flex flex-2 items-center justify-center p-8">
      <H2 className="text-center text-5xl">{question.question}</H2>
    </div>
  );
}
