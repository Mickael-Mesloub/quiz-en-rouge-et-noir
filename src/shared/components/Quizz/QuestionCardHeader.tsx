import { Heading2 } from "@/shared/components/ui";

interface QuestionCardHeaderProps {
  currentQuestionIndex: number;
  numberOfQuestions: number;
}

export default function QuestionCardHeader({
  currentQuestionIndex,
  numberOfQuestions,
}: QuestionCardHeaderProps) {
  return (
    <Heading2 className="mt-8 text-center text-5xl">
      Question {currentQuestionIndex + 1} / {numberOfQuestions}
    </Heading2>
  );
}
