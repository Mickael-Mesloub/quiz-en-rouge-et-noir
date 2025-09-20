import QuestionCardActions from "@/shared/components/Quiz/QuestionCardActions";
import QuestionCardHeader from "@/shared/components/Quiz/QuestionCardHeader";
import QuestionCardContent from "@/shared/components/Quiz/QuestionCardContent";
import { HEADER_HEIGHT } from "@/shared/constants/layout";
import { Question } from "@/shared/types";
import ShowAnswerModal from "@/shared/components/Modal/ShowAnswerModal";
import useManageShowAnswerModal from "@/shared/hooks/useManageShowAnswerModal";
import { useQuizState } from "@/shared/store";
import useQuiz from "@/shared/hooks/useQuiz";

interface QuestionCardProps {
  questions: Question[];
}

const containerHeight: number = window.innerHeight - HEADER_HEIGHT;

export default function QuestionCard({ questions }: QuestionCardProps) {
  const { currentQuestionIndex } = useQuizState();

  const {
    isShowAnswerModalOpen,
    openConfirmationModal,
    closeConfirmationModal,
  } = useManageShowAnswerModal();

  const { isQuizFinished, handleClickNextQuestion, endQuiz } = useQuiz({
    questions,
  });

  return (
    <div
      className="flex flex-col items-center justify-between"
      style={{ minHeight: containerHeight }}
    >
      <QuestionCardHeader
        currentQuestionIndex={currentQuestionIndex}
        numberOfQuestions={questions.length}
      />
      <QuestionCardContent question={questions[currentQuestionIndex]} />
      <QuestionCardActions
        openModal={openConfirmationModal}
        isQuizFinished={isQuizFinished}
      />
      <ShowAnswerModal
        isOpen={isShowAnswerModalOpen}
        onClose={closeConfirmationModal}
        onConfirm={handleClickNextQuestion}
        answer={questions[currentQuestionIndex].answer}
        isQuizFinished={isQuizFinished}
        endQuiz={endQuiz}
      />
    </div>
  );
}
