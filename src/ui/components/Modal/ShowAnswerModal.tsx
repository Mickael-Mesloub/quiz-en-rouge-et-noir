import ConfirmationModal from "@/ui/components/Modal/ConfirmationModal";

interface ShowAnswerModalProps {
  isOpen: boolean;
  answer: string;
  isQuizFinished: boolean;
  onClose: () => void;
  onConfirm: () => void;
  endQuiz: () => void;
}

export default function ShowAnswerModal({
  isOpen,
  onClose,
  onConfirm,
  answer,
  isQuizFinished,
  endQuiz,
}: ShowAnswerModalProps) {
  const confirmBtnTitle: string = isQuizFinished
    ? "Terminer le quiz"
    : "Question suivante";

  const onConfirmAction = isQuizFinished ? endQuiz : onConfirm;

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
