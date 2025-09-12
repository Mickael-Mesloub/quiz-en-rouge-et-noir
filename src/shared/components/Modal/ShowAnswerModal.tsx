import ConfirmationModal from "@/shared/components/Modal/ConfirmationModal";

interface ShowAnswerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  answer: string;
}

export default function ShowAnswerModal({
  isOpen,
  onClose,
  onConfirm,
  answer,
}: ShowAnswerModalProps) {
  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Réponse"
      content={answer}
      cancelBtnTitle="Fermer"
      confirmBtnTitle="Question suivante"
    />
  );
}
