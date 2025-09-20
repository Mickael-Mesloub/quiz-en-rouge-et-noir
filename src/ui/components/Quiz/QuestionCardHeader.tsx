import { H2 } from "@/ui/components/Typography";

interface QuestionCardHeaderProps {
  currentQuestionIndex: number;
  numberOfQuestions: number;
}

export default function QuestionCardHeader({
  currentQuestionIndex,
  numberOfQuestions,
}: QuestionCardHeaderProps) {
  return (
    <H2 className="mt-8 text-center text-5xl">
      Question {currentQuestionIndex + 1} / {numberOfQuestions}
    </H2>
  );
}
