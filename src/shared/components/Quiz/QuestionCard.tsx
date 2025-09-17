import QuestionCardActions from "@/shared/components/Quiz/QuestionCardActions";
import QuestionCardHeader from "@/shared/components/Quiz/QuestionCardHeader";
import QuestionCardContent from "@/shared/components/Quiz/QuestionCardContent";
import { HEADER_HEIGHT } from "@/shared/constants/layout";

import { Question } from "@/shared/types";
import ShowAnswerModal from "@/shared/components/Modal/ShowAnswerModal";
import useManageShowAnswerModal from "@/shared/hooks/useManageShowAnswerModal";
import useQuiz from "@/shared/hooks/useQuiz";

interface QuestionCardProps {
  questions: Question[];
}

const containerHeight: number = window.innerHeight - HEADER_HEIGHT;

export default function QuestionCard({ questions }: QuestionCardProps) {
  const {
    currentQuestionIndex,
    isFirstQuestion,
    isLastQuestion,
    handleClickPrevQuestion,
    handleClickNextQuestion,
    endQuiz,
  } = useQuiz({ questions });

  const {
    isShowAnswerModalOpen,
    openConfirmationModal,
    closeConfirmationModal,
  } = useManageShowAnswerModal();

  const handleConfirmBtnAction = () => {
    handleClickNextQuestion();
  };

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
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
        handleClickPrevQuestion={handleClickPrevQuestion}
        handleClickNextQuestion={handleClickNextQuestion}
        openModal={openConfirmationModal}
      />
      <ShowAnswerModal
        isOpen={isShowAnswerModalOpen}
        onClose={closeConfirmationModal}
        onConfirm={handleConfirmBtnAction}
        answer={questions[currentQuestionIndex].answer}
        isLastQuestion={isLastQuestion}
        endQuiz={endQuiz}
      />
    </div>
  );
}
