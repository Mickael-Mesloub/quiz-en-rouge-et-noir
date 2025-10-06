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
          <div className="bg-primary-100 relative flex w-fit flex-col gap-8 rounded-xl p-8">
            <CloseButton onClick={onClose} />

            <H2 className="text-secondary-900 mb-4 text-3xl font-bold">
              {title}
            </H2>
            <Text className="text-success-500 text-2xl font-bold">
              {content}
            </Text>

            <div className="mt-4 flex justify-between gap-8">
              <Button
                className="bg-accent-500 text-primary-100 hover:bg-accent-600 text-2xl font-bold"
                onClick={onClose}
              >
                {cancelBtnTitle}
              </Button>
              <Button
                className="bg-secondary-900 text-primary-100 hover:bg-secondary-900/90 text-2xl font-bold"
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
