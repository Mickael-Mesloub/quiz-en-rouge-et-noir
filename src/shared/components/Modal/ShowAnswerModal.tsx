import ConfirmationModal from "@/shared/components/Modal/ConfirmationModal";

interface ShowAnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  endQuiz: () => void;
  answer: string;
  isLastQuestion: boolean;
}

export default function ShowAnswerModal({
  isOpen,
  onClose,
  onConfirm,
  answer,
  isLastQuestion,
  endQuiz,
}: ShowAnswerModalProps) {
  const confirmBtnTitle: string = isLastQuestion
    ? "Terminer le quiz"
    : "Question suivante";

  const onConfirmAction = isLastQuestion ? endQuiz : onConfirm;

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirmAction}
      title="Réponse"
      content={answer}
      cancelBtnTitle="Fermer"
      confirmBtnTitle={confirmBtnTitle}
    />
  );
}
