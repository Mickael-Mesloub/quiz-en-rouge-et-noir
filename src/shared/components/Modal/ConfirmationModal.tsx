import CloseButton from "@/shared/components/Button/CloseButton";
import { Button } from "@/shared/components/ui";

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
          <div className="bg-accent-50 relative flex w-[33%] flex-col gap-8 rounded-xl p-8">
            <CloseButton onClick={onClose} />

            <h2 className="text-secondary-900 mb-4 text-3xl font-bold">
              {title}
            </h2>
            <p className="text-success-500 text-2xl font-bold">{content}</p>

            <div className="mt-4 flex justify-between">
              <Button
                className="bg-accent-500 text-accent-50 hover:bg-accent-600 text-2xl font-bold"
                onClick={onClose}
              >
                {cancelBtnTitle}
              </Button>
              <Button
                className="bg-secondary-900 text-accent-50 hover:bg-secondary-900/90 text-2xl font-bold"
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
