import { Button, CloseButton } from "@/ui/components/Button";
import { H2, Text } from "@/ui/components/Typography";

interface ConfirmationModalProps {
  title: string;
  content: string;
  confirmBtnTitle: string;
  cancelBtnTitle: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function ConfirmationModal({
  title,
  content,
  confirmBtnTitle,
  cancelBtnTitle,
  isOpen,
  onClose,
  onConfirm,
}: ConfirmationModalProps) {
  return (
    <>
      {isOpen && (
        <div className="bg-backdrop fixed inset-0 flex items-center justify-center">
          <div className="bg-surface-bg relative flex w-fit flex-col gap-8 rounded-xl p-8">
            <CloseButton onClick={onClose} />

            <H2 className="mb-4 text-3xl font-bold">{title}</H2>
            <Text className="text-success text-2xl font-bold">{content}</Text>

            <div className="mt-4 flex justify-between gap-8">
              <Button
                className="hover:text-error bg-error hover:border-error border-transparent text-2xl font-bold text-white hover:bg-transparent"
                onClick={onClose}
              >
                {cancelBtnTitle}
              </Button>
              <Button
                className="text-2xl font-bold hover:bg-transparent"
                onClick={() => {
                  onConfirm();
                  onClose();
                }}
              >
                {confirmBtnTitle}
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
