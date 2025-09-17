import ConfirmationModal from "@/shared/components/Modal/ConfirmationModal";

interface ShowAnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  endQuizz: () => void;
  answer: string;
  isLastQuestion: boolean;
}

export default function ShowAnswerModal({
  isOpen,
  onClose,
  onConfirm,
  answer,
  isLastQuestion,
  endQuizz,
}: ShowAnswerModalProps) {
  const confirmBtnTitle: string = isLastQuestion
    ? "Terminer le quiz"
    : "Question suivante";

  const onConfirmAction = isLastQuestion ? endQuizz : onConfirm;

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
