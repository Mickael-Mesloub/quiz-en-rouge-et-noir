import { useState } from "react";

export default function useManageShowAnswerModal() {
  const [isShowAnswerModalOpen, setIsShowAnswerModalOpen] =
    useState<boolean>(false);

  const openConfirmationModal = () => {
    setIsShowAnswerModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsShowAnswerModalOpen(false);
  };

  return {
    isShowAnswerModalOpen,
    openConfirmationModal,
    closeConfirmationModal,
  };
}
